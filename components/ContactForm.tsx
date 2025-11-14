'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const ContactSchema = z.object({
  name: z.string().min(2, 'Nome é obrigatório.'),
  email: z.string().email('Email inválido.'),
  phone: z.string().min(7, 'Telefone é obrigatório.'),
  message: z.string().min(10, 'Mensagem deve ter pelo menos 10 caracteres.'),
});

type ContactFormData = z.infer<typeof ContactSchema>;

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success'>('idle');
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    console.info('Enviar para API de contacto', data);
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus('success');
    reset();
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-6 rounded-3xl border border-gold/20 bg-white/70 p-8 shadow-lg backdrop-blur"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <label className="text-sm font-semibold uppercase tracking-[0.2em] text-charcoal">Nome</label>
          <input
            type="text"
            {...register('name')}
            className="mt-2 w-full rounded-xl border border-charcoal/10 bg-white/60 px-4 py-3 text-sm text-charcoal shadow-inner focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            placeholder="O seu nome completo"
          />
          {errors.name && <p className="mt-2 text-xs text-red-600">{errors.name.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold uppercase tracking-[0.2em] text-charcoal">Email</label>
          <input
            type="email"
            {...register('email')}
            className="mt-2 w-full rounded-xl border border-charcoal/10 bg-white/60 px-4 py-3 text-sm text-charcoal shadow-inner focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            placeholder="nome@empresa.com"
          />
          {errors.email && <p className="mt-2 text-xs text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="text-sm font-semibold uppercase tracking-[0.2em] text-charcoal">Telefone</label>
          <input
            type="tel"
            {...register('phone')}
            className="mt-2 w-full rounded-xl border border-charcoal/10 bg-white/60 px-4 py-3 text-sm text-charcoal shadow-inner focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            placeholder="+244"
          />
          {errors.phone && <p className="mt-2 text-xs text-red-600">{errors.phone.message}</p>}
        </div>
        <div className="md:col-span-2">
          <label className="text-sm font-semibold uppercase tracking-[0.2em] text-charcoal">Mensagem</label>
          <textarea
            rows={4}
            {...register('message')}
            className="mt-2 w-full rounded-xl border border-charcoal/10 bg-white/60 px-4 py-3 text-sm text-charcoal shadow-inner focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40"
            placeholder="Conte-nos sobre o seu projeto de luxo"
          />
          {errors.message && <p className="mt-2 text-xs text-red-600">{errors.message.message}</p>}
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal shadow-lg transition hover:-translate-y-0.5 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isSubmitting ? 'A Enviar…' : 'Agendar Visita ao Atelier'}
      </button>
      {status === 'success' && (
        <p className="text-center text-sm text-turquoise">
          Obrigado! Entraremos em contacto em breve.
        </p>
      )}
    </form>
  );
}
