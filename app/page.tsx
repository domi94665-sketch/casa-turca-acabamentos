'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Mail, Phone, MapPin, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulário de contacto:', contactForm);
    // Reset do form
    setContactForm({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f1115] via-[#050608] to-[#0b0d10]">
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden pt-32 pb-20 px-6 md:pt-40 md:pb-32">
        {/* Glow background elements */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#1CA7A1]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#1CA7A1]/3 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left content */}
            <div className="space-y-8 z-10">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#1CA7A1] mb-4">
                  Premium Acabamentos & Design
                </p>
                <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight">
                  Transformamos Espaços em Luxo
                </h1>
              </div>

              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
                Design de luxo, sem stress. Combinamos acabamentos premium, design de interiores personalizado e tecnologia IA para criar ambientes que elevam o padrão do seu estilo de vida.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 py-8 border-y border-[#1CA7A1]/20">
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">500+</p>
                  <p className="text-sm text-gray-400 mt-2">Projetos Completos</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">Chave na Mão</p>
                  <p className="text-sm text-gray-400 mt-2">Gestão Total</p>
                </div>
                <div>
                  <p className="text-3xl md:text-4xl font-bold text-[#D4AF37]">IA</p>
                  <p className="text-sm text-gray-400 mt-2">Design Inteligente</p>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-wrap gap-4 pt-4">
                <Link
                  href="/designer-ia"
                  className="px-8 py-4 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white font-semibold rounded-full transition duration-300 shadow-lg shadow-[#1CA7A1]/20 hover:shadow-xl hover:shadow-[#1CA7A1]/30 hover:-translate-y-1"
                >
                  Teste o Designer IA
                </Link>
                <button
                  onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 border border-[#1CA7A1] text-[#1CA7A1] hover:bg-[#1CA7A1]/10 font-semibold rounded-full transition duration-300"
                >
                  Agendar Visita
                </button>
              </div>
            </div>

            {/* Right side - Premium image showcase */}
            <div className="hidden lg:block relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#1CA7A1]/20 to-[#D4AF37]/20 rounded-2xl blur-3xl" />
              <div className="relative aspect-square rounded-2xl border border-[#1CA7A1]/30 overflow-hidden bg-gradient-to-br from-[#1CA7A1]/10 to-[#D4AF37]/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🏛️</div>
                  <p className="text-[#1CA7A1] font-semibold">Portfólio Premium</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVIÇOS SECTION ===== */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
              Serviços Premium
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Soluções Completas de Design & Acabamentos
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group relative p-8 rounded-xl border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:from-[#1CA7A1]/10 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1CA7A1]/0 to-[#D4AF37]/0 group-hover:from-[#1CA7A1]/5 group-hover:to-[#D4AF37]/5 rounded-xl transition duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-[#1CA7A1]/20 flex items-center justify-center mb-4 text-2xl">📐</div>
                <h3 className="text-xl font-semibold text-white mb-3">Móveis Sob Medida</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Produção de móveis personalizados em madeira nobre, PVC e pladur. Desenho personalizado conforme a identidade do seu espaço.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1CA7A1]" />
                    Madeira Premium
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1CA7A1]" />
                    Acabamentos Luxuosos
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="group relative p-8 rounded-xl border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:from-[#1CA7A1]/10 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1CA7A1]/0 to-[#D4AF37]/0 group-hover:from-[#1CA7A1]/5 group-hover:to-[#D4AF37]/5 rounded-xl transition duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-[#1CA7A1]/20 flex items-center justify-center mb-4 text-2xl">🎨</div>
                <h3 className="text-xl font-semibold text-white mb-3">Design de Interiores</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Consultoria completa de design, paleta de cores, materiais e conceito estético alinhado à sua visão.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1CA7A1]" />
                    Consultoria Personalizada
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1CA7A1]" />
                    Visualização 3D
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 3 */}
            <div className="group relative p-8 rounded-xl border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:from-[#1CA7A1]/10 transition duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-[#1CA7A1]/0 to-[#D4AF37]/0 group-hover:from-[#1CA7A1]/5 group-hover:to-[#D4AF37]/5 rounded-xl transition duration-300" />
              <div className="relative">
                <div className="w-12 h-12 rounded-lg bg-[#1CA7A1]/20 flex items-center justify-center mb-4 text-2xl">🏗️</div>
                <h3 className="text-xl font-semibold text-white mb-3">Instalação & Montagem</h3>
                <p className="text-gray-400 mb-4 leading-relaxed">
                  Tetos falsos, pavimentação, ladrilho, pintura interior/exterior e instalações elétricas básicas. Qualidade garantida.
                </p>
                <ul className="space-y-2 text-sm text-gray-500">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1CA7A1]" />
                    Equipa Especializada
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#1CA7A1]" />
                    Acabamento Premium
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PROCESSO SECTION ===== */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#0f1115] via-[#1CA7A1]/5 to-[#050608]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
              Metodologia
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              Processo em 4 Passos
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Consulta Inicial',
                desc: 'Entendemos seus objetivos, estilo e necessidades. Avaliação do espaço e conceito preliminar.',
              },
              {
                step: '2',
                title: 'Design & Visualização',
                desc: 'Criamos visualizações 3D com IA. Apresentamos opções de materiais e acabamentos premium.',
              },
              {
                step: '3',
                title: 'Aprovação & Produção',
                desc: 'Finalização do design. Início da produção de móveis e seleção de materiais certificados.',
              },
              {
                step: '4',
                title: 'Montagem & Entrega',
                desc: 'Instalação profissional de tudo. Garantia total e suporte pós-projeto para sua satisfação.',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col h-full">
                  <div className="w-16 h-16 rounded-full bg-[#1CA7A1] flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-[#1CA7A1]/30">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed flex-grow">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:flex absolute top-8 -right-3 items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-[#D4AF37]" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== IA DESIGNER SECTION ===== */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left side */}
            <div className="order-2 lg:order-1">
              <div className="relative aspect-square rounded-xl border border-[#1CA7A1]/30 overflow-hidden bg-gradient-to-br from-[#1CA7A1]/10 to-[#D4AF37]/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-4">🤖</div>
                  <p className="text-[#1CA7A1] font-semibold">Designer IA</p>
                </div>
              </div>
            </div>

            {/* Right side */}
            <div className="order-1 lg:order-2 space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                  Tecnologia Proprietária
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                  Designer IA Exclusivo
                </h2>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Carregue uma foto do seu espaço e deixe a IA gerar sugestões de design com acabamentos premium. Visualize diferentes estilos, materiais e cores em segundos.
              </p>

              <ul className="space-y-4">
                {[
                  'Upload rápido de imagens',
                  'Sugestões de design em tempo real',
                  'Múltiplas opções de estilo',
                  'Integração com portfólio físico',
                  'Salve suas inspirações',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#D4AF37]" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/designer-ia"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white font-semibold rounded-full transition duration-300 shadow-lg shadow-[#1CA7A1]/20 hover:shadow-xl hover:shadow-[#1CA7A1]/30 hover:-translate-y-1 w-fit"
              >
                Comece Agora <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARCERIAS SECTION ===== */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#0f1115] via-[#1CA7A1]/3 to-[#050608]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
              Rede de Confiança
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
              Parcerias com Arquitetos Premium
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Trabalhamos com os melhores arquitetos e designers de Luanda para garantir qualidade e inovação em cada projeto.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { name: 'Studio Arquitecto Silva', specialty: 'Design Residencial' },
              { name: 'Arquitetos Premium Group', specialty: 'Projetos Corporativos' },
              { name: 'Interior Design Elite', specialty: 'Consultoria Estética' },
            ].map((partner, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-[#1CA7A1]/20 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:border-[#D4AF37]/50 transition duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#1CA7A1] to-[#D4AF37] mx-auto mb-4" />
                <h3 className="text-white font-semibold text-lg mb-2">{partner.name}</h3>
                <p className="text-gray-400 text-sm">{partner.specialty}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact-section" className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
                  Entre em Contacto
                </p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">
                  Agende sua Visita Premium
                </h2>
              </div>

              <p className="text-lg text-gray-300 leading-relaxed">
                Visite nosso showroom e conheça pessoalmente nossas soluções premium. Nossa equipa está pronta para transformar seu espaço.
              </p>

              <div className="space-y-6">
                <a
                  href="tel:+244923000000"
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#1CA7A1]/10 transition duration-300"
                >
                  <Phone className="w-6 h-6 text-[#1CA7A1] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Telefone</p>
                    <p className="text-gray-400">+244 923 000 000</p>
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
                  </div>
                </a>

                <div className="flex items-start gap-4 p-4 rounded-lg">
                  <MapPin className="w-6 h-6 text-[#1CA7A1] flex-shrink-0 mt-1" />
                  <div>
                    <p className="text-white font-semibold">Localização</p>
                    <p className="text-gray-400">Luanda, Angola</p>
                    <p className="text-gray-400 text-sm">Showroom disponível para agendamento</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleContactSubmit}
                className="space-y-6 p-8 rounded-xl border border-[#1CA7A1]/20 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent"
              >
                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Nome</label>
                  <input
                    type="text"
                    required
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white placeholder-gray-500 focus:border-[#1CA7A1] focus:outline-none transition duration-300"
                    placeholder="Seu nome completo"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Email</label>
                  <input
                    type="email"
                    required
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white placeholder-gray-500 focus:border-[#1CA7A1] focus:outline-none transition duration-300"
                    placeholder="seu@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Telefone</label>
                  <input
                    type="tel"
                    required
                    value={contactForm.phone}
                    onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white placeholder-gray-500 focus:border-[#1CA7A1] focus:outline-none transition duration-300"
                    placeholder="+244 923 000 000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-white mb-3">Mensagem</label>
                  <textarea
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg bg-[#0f1115] border border-[#1CA7A1]/20 text-white placeholder-gray-500 focus:border-[#1CA7A1] focus:outline-none transition duration-300 resize-none"
                    placeholder="Descreva seu projeto..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white font-semibold rounded-lg transition duration-300 shadow-lg shadow-[#1CA7A1]/20 hover:shadow-xl hover:shadow-[#1CA7A1]/30"
                >
                  Enviar Solicitação
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS SECTION ===== */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#0f1115] via-[#1CA7A1]/5 to-[#050608]">
        <div className="mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
              Testemunhos
            </p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-white">
              O que nossos clientes dizem
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                text: 'A Casa Turca transformou meu apartamento num oasis luxuoso. Profissionalismo impecável!',
                name: 'João Silva',
                role: 'Cliente - Condomínio Premium',
              },
              {
                text: 'Excelente atendimento e qualidade de materiais. Recomendo para qualquer projeto premium.',
                name: 'Maria Santos',
                role: 'Arquiteta Parceira',
              },
              {
                text: 'Designer IA inovador! Consegui visualizar meu espaço antes da execução final. Impressionante!',
                name: 'Roberto Oliveira',
                role: 'Cliente - Renovação Residencial',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-[#1CA7A1]/20 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:border-[#D4AF37]/50 transition duration-300"
              >
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div>
                  <p className="text-white font-semibold">{testimonial.name}</p>
                  <p className="text-[#1CA7A1] text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA FINAL SECTION ===== */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Pronto para transformar seu espaço?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Contacte-nos hoje e receba uma consulta premium personalizada. Estamos prontos para criar o design que você merece.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/designer-ia"
              className="px-8 py-4 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white font-semibold rounded-full transition duration-300 shadow-lg shadow-[#1CA7A1]/20 hover:shadow-xl hover:shadow-[#1CA7A1]/30 hover:-translate-y-1"
            >
              Teste o Designer IA
            </Link>
            <button
              onClick={() => document.getElementById('contact-section')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-[#1CA7A1] text-[#1CA7A1] hover:bg-[#1CA7A1]/10 font-semibold rounded-full transition duration-300"
            >
              Agendar Visita
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
