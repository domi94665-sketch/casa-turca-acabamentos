import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Parceiros | Casa Turca Acabamentos',
  description:
    'Conheça nossa rede de arquitetos e designers premium que trabalham conosco.',
  openGraph: {
    title: 'Parceiros | Casa Turca Acabamentos',
    description: 'Nossa rede de parceiros premium em design e arquitetura.',
    url: 'https://www.casaturca-acabamentos.com/parceiros',
  },
};

export default function PartnersPage() {
  const partners = [
    {
      name: 'Studio Arquitecto Silva',
      specialty: 'Design Residencial',
      description: 'Especialistas em projetos residenciais de luxo com visão inovadora.',
      icon: '🏢',
    },
    {
      name: 'Arquitetos Premium Group',
      specialty: 'Projetos Corporativos',
      description: 'Soluções arquitetônicas para espaços corporativos e comerciais.',
      icon: '🏭',
    },
    {
      name: 'Interior Design Elite',
      specialty: 'Consultoria Estética',
      description: 'Design de interiores personalizado e consultoria estética premium.',
      icon: '🎨',
    },
    {
      name: 'Luanda Modern Design',
      specialty: 'Conceito & Inovação',
      description: 'Pioneiros em designs modernos e conceitos inovadores em Angola.',
      icon: '✨',
    },
    {
      name: 'Luxury Spaces',
      specialty: 'Espaços Premium',
      description: 'Especialistas em criação de espaços de luxo e exclusividade.',
      icon: '👑',
    },
    {
      name: 'Design Consultoria SA',
      specialty: 'Gestão de Projetos',
      description: 'Gerenciamento profissional e consultoria em projetos complexos.',
      icon: '📊',
    },
  ];

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
                Rede de Confiança
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                Nossos Parceiros
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                Trabalhamos com os melhores arquitetos e designers de Luanda para garantir qualidade, inovação e excelência em cada projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parceiros Grid */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="p-8 rounded-xl border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:from-[#1CA7A1]/10 transition duration-300"
              >
                <div className="text-4xl mb-4">{partner.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{partner.name}</h3>
                <p className="text-[#1CA7A1] text-sm font-semibold mb-3">{partner.specialty}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{partner.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que parceria */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#0f1115] via-[#1CA7A1]/5 to-[#050608]">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            subtitle="Benefícios"
            title="Por que trabalhar com nossos parceiros"
            centered
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Experiência Reconhecida',
                desc: 'Profissionais com trajetória comprovada e projetos premiados em todo o país.',
              },
              {
                title: 'Visão Inovadora',
                desc: 'Sempre atualizados com tendências globais e adaptados ao contexto local.',
              },
              {
                title: 'Equipa Integrada',
                desc: 'Todos trabalham em sinergia para entregar projetos de máxima qualidade.',
              },
              {
                title: 'Consultoria Premium',
                desc: 'Atendimento personalizado e dedicação total ao seu projeto específico.',
              },
              {
                title: 'Soluções Personalizadas',
                desc: 'Cada projeto é único. Criamos soluções específicas para seu espaço.',
              },
              {
                title: 'Garantia de Qualidade',
                desc: 'Compromisso com excelência em cada fase do projeto e suporte contínuo.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-lg border border-[#1CA7A1]/20 hover:border-[#D4AF37]/50 transition duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] mb-4" />
                <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Become Partner */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Quer fazer parte da nossa rede?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Se você é um profissional de design ou arquitetura e acredita na excelência, vamos adorar conversar.
          </p>
          <Button href="/contacto" variant="primary">
            Envie sua proposta
          </Button>
        </div>
      </section>
    </div>
  );
}
