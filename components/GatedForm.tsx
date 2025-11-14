"use client";

import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import type { DesignerLead } from '@/lib/types';
import { supabaseBrowser } from '@/lib/supabase-browser';

const LeadSchema = z.object({
  name: z.string().min(2, 'Informe o seu nome completo.'),
  email: z.string().email('Insira um email válido.'),
  phone: z.string().min(7, 'Telefone é obrigatório.'),
});

type LeadFormData = z.infer<typeof LeadSchema>;

export default function GatedForm() {
  const router = useRouter();
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(LeadSchema),
  });

  const onSubmit = async (data: LeadFormData) => {
    setStatus('submitting');
    setErrorMsg('');
    
    try {
      // Ensure user is authenticated via Supabase
      const { data: sessionData } = await supabaseBrowser.auth.getSession();
      const session = (sessionData as any)?.session;

      if (!session) {
        // Send magic link to email
        const { data: signData, error: signError } = await supabaseBrowser.auth.signInWithOtp({ email: data.email });
        if (signError) throw signError;
        setStatus('success');
        setErrorMsg('Enviámos um link para o seu email. Confirme o acesso e volte aqui.');
        return;
      }

      const token = session.access_token;

      const payload: DesignerLead = {
        name: data.name,
        email: data.email,
        phone: data.phone,
      };

      const response = await fetch('/api/designer-ia/save-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to save lead');
      }

      setStatus('success');
      // Store lead ID in session/localStorage for later use
      const result = await response.json();
      sessionStorage.setItem('leadId', result.data?.[0]?.id || '');
      
      setTimeout(() => router.push('/ferramenta-ia'), 1500);
    } catch (err) {
      console.error('Submission error:', err);
      setErrorMsg(err instanceof Error ? err.message : 'Erro ao processar. Tente novamente.');
      setStatus('error');
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-gold/30 bg-white/80 p-10 shadow-2xl backdrop-blur"
    >
      <div className="space-y-2">
        <label className="text-sm font-semibold uppercase tracking-[0.3em] text-charcoal">Nome Completo</label>
        <input
          type="text"
          {...register('name')}
          className="w-full rounded-full border border-charcoal/10 bg-white/80 px-5 py-3 text-sm text-charcoal shadow-inner focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
          placeholder="Como devemos tratá-lo(a)?"
        />
        {errors.name && <p className="text-xs text-red-600">{errors.name.message}</p>}
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold uppercase tracking-[0.3em] text-charcoal">Email Profissional</label>
        <input
          type="email"
          {...register('email')}
          className="w-full rounded-full border border-charcoal/10 bg-white/80 px-5 py-3 text-sm text-charcoal shadow-inner focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
          placeholder="nome@empresa.com"
        />
        {errors.email && <p className="text-xs text-red-600">{errors.email.message}</p>}
      </div>
      <div className="space-y-2">
        <label className="text-sm font-semibold uppercase tracking-[0.3em] text-charcoal">Telefone</label>
        <input
          type="tel"
          {...register('phone')}
          className="w-full rounded-full border border-charcoal/10 bg-white/80 px-5 py-3 text-sm text-charcoal shadow-inner focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
          placeholder="+244 923 000 000"
        />
        {errors.phone && <p className="text-xs text-red-600">{errors.phone.message}</p>}
      </div>
      <p className="text-xs text-charcoal/60">
        Ao enviar este formulário, consente que a Casa Turca trate os seus dados com a máxima confidencialidade para apresentar uma proposta personalizada.
      </p>
      {status === 'error' && <p className="text-xs text-red-600">{errorMsg}</p>}
      <button
        type="submit"
        disabled={status === 'submitting' || status === 'success'}
        className={`w-full rounded-full border px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] shadow-xl transition ${
          status === 'success'
            ? 'border-green-500 bg-green-500 text-white'
            : 'border-gold bg-gold text-charcoal hover:-translate-y-0.5 hover:shadow-2xl disabled:cursor-not-allowed disabled:opacity-70'
        }`}
      >
        {status === 'submitting' && 'A validar dados…'}
        {status === 'success' && '✓ Acesso liberado!'}
        {status === 'error' && 'Tentar novamente'}
        {status === 'idle' && 'Liberar Acesso à Ferramenta'}
      </button>
    </form>
  );
}
