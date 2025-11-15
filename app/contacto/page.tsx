'use client';

import { useState } from 'react';
import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Simulating form submission
    try {
      // In production, send to your backend API
      console.log('Formulário enviado:', formData);

      // Simulate delay
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1115] via-[#050608] to-[#0b0d10]">
      {/* Hero */}
      <section className="relative overflow-hidden pt-20 pb-20 px-6 md:pt-32 md:pb-32">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1CA7A1]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1CA7A1]/3 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="space-y-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                Vamos Conversar
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                Entre em Contacto
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                Estamos prontos para transformar seu espaço em design de luxo. Contacte-nos para uma consulta gratuita e personalizada.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-serif font-bold text-white mb-6">
                  Informações de Contacto
                </h2>
              </div>

              <div className="space-y-6">
                <a
                  href="tel:+244923000000"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#1CA7A1]/10 transition duration-300"
                >
                  <Phone className="w-6 h-6 text-[#1CA7A1] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Telefone</p>
                    <p className="text-gray-400">+244 923 000 000</p>
                    <p className="text-gray-500 text-sm">Seg-Sex: 09h - 18h</p>
                  </div>
                </a>

                <a
                  href="mailto:contacto@casaturca.ao"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#1CA7A1]/10 transition duration-300"
                >
                  <Mail className="w-6 h-6 text-[#1CA7A1] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Email</p>
                    <p className="text-gray-400">contacto@casaturca.ao</p>
                    <p className="text-gray-500 text-sm">Resposta em 24 horas</p>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#1CA7A1] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Localização</p>
                    <p className="text-gray-400">Luanda, Angola</p>
                    <p className="text-gray-500 text-sm">Showroom disponível para agendamento</p>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div className="pt-8 border-t border-[#1CA7A1]/10">
                <h3 className="text-white font-semibold mb-4">Links Rápidos</h3>
                <div className="space-y-2 text-sm">
                  <a href="/servicos" className="text-[#1CA7A1] hover:text-[#D4AF37] transition">
                    → Explorar Serviços
                  </a>
                  <a href="/ia-studio" className="text-[#1CA7A1] hover:text-[#D4AF37] transition block">
                    → Experimentar IA Studio
                  </a>
                  <a href="/portfolio" className="text-[#1CA7A1] hover:text-[#D4AF37] transition block">
                    → Ver Portfólio
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-6 p-8 rounded-xl border border-[#1CA7A1]/20 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-white mb-3">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white placeholder-gray-500 focus:border-[#1CA7A1] focus:outline-none transition duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-3">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white placeholder-gray-500 focus:border-[#1CA7A1] focus:outline-none transition duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-white mb-3">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white placeholder-gray-500 focus:border-[#1CA7A1] focus:outline-none transition duration-300"
                    placeholder="+244 923 000 000"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-white mb-3">
                    Assunto
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white focus:border-[#1CA7A1] focus:outline-none transition duration-300"
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="moveis">Móveis Sob Medida</option>
                    <option value="design">Design de Interiores</option>
                    <option value="obra">Gestão de Obra</option>
                    <option value="ia">IA Studio</option>
                    <option value="outro">Outro Assunto</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-3">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white placeholder-gray-500 focus:border-[#1CA7A1] focus:outline-none transition duration-300 resize-none"
                    placeholder="Descreva seu projeto..."
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-400 text-sm">
                    ✓ Obrigado! Receberemos em breve. Aguarde nosso contacto.
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-sm">
                    ✗ Ocorreu um erro. Por favor, tente novamente.
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full px-8 py-4 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 disabled:opacity-50 text-white font-semibold rounded-lg transition duration-300 shadow-lg shadow-[#1CA7A1]/20 hover:shadow-xl hover:shadow-[#1CA7A1]/30"
                >
                  {status === 'loading' ? 'Enviando...' : 'Enviar Solicitação'}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Responderemos sua solicitação no prazo de 24 horas.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#0f1115] via-[#1CA7A1]/5 to-[#050608]">
        <div className="mx-auto max-w-4xl">
          <SectionHeader
            subtitle="Dúvidas Comuns"
            title="Perguntas Frequentes"
            centered
          />

          <div className="space-y-6">
            {[
              {
                q: 'Qual é o prazo para iniciar um projeto?',
                a: 'Após a consulta inicial e aprovação do design, geralmente iniciamos em 1-2 semanas. Os prazos dependem da complexidade e materiais necessários.',
              },
              {
                q: 'Vocês trabalham com orçamentos específicos?',
                a: 'Sim! Trabalhamos com qualquer orçamento. Na consulta, definimos as prioridades e criamos uma solução personalizada dentro de suas possibilidades.',
              },
              {
                q: 'Como funciona a garantia?',
                a: 'Todos os trabalhos têm garantia mínima de 2 anos. Materiais premium têm garantias mais extensas conforme fabricante.',
              },
              {
                q: 'Posso usar o IA Studio sem contratar um projeto?',
                a: 'Claro! O IA Studio está disponível para todos. É uma ferramenta gratuita para inspiração e visualização de designs.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 transition duration-300"
              >
                <h4 className="text-white font-semibold mb-2">{item.q}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
