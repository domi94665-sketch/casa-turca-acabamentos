import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Sobre Casa Turca | Historia & Missão',
  description:
    'Conheça a história, missão e valores da Casa Turca. Design premium com raízes turcas e inovação angolana.',
  openGraph: {
    title: 'Sobre Casa Turca | Historia & Missão',
    description: 'Conheça a história da Casa Turca Acabamentos.',
    url: 'https://www.casaturca-acabamentos.com/sobre',
  },
};

export default function AboutPage() {
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
                Nossa História
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                De Istambul a Luanda
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                A Casa Turca nasce da fusão entre a tradição artesanal turca e o dinamismo angolano. Trazemos acabamentos premium e design inteligente para transformar espaços em experiências de luxo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Missão & Valores */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Missão */}
            <div className="p-8 rounded-xl border border-[#1CA7A1]/20 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent">
              <div className="w-12 h-12 rounded-lg bg-[#1CA7A1]/20 flex items-center justify-center mb-4 text-2xl">
                🎯
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Missão</h3>
              <p className="text-gray-400 leading-relaxed">
                Transformar espaços em design de luxo, sem stress. Oferecemos soluções premium com gestão completa, combinando tradição, inovação e tecnologia IA.
              </p>
            </div>

            {/* Visão */}
            <div className="p-8 rounded-xl border border-[#1CA7A1]/20 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent">
              <div className="w-12 h-12 rounded-lg bg-[#1CA7A1]/20 flex items-center justify-center mb-4 text-2xl">
                👁️
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Visão</h3>
              <p className="text-gray-400 leading-relaxed">
                Ser referência continental em acabamentos premium e design de interiores, reconhecida por qualidade, inovação e excelência consultiva.
              </p>
            </div>

            {/* Valores */}
            <div className="p-8 rounded-xl border border-[#1CA7A1]/20 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent">
              <div className="w-12 h-12 rounded-lg bg-[#1CA7A1]/20 flex items-center justify-center mb-4 text-2xl">
                ✨
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">Valores</h3>
              <p className="text-gray-400 leading-relaxed">
                Qualidade, Inovação, Consultoria Personalizada, Integridade, Compromisso com Excelência e Sustentabilidade Premium.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#0f1115] via-[#1CA7A1]/5 to-[#050608]">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            subtitle="Por que Casa Turca?"
            title="Nossos Diferenciais"
            description="O que nos torna especiais no mercado premium de acabamentos"
            centered
          />

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Móveis Sob Medida',
                desc: 'Desenho personalizado em madeira nobre, PVC e pladur. Cada peça é uma obra de arte.',
              },
              {
                title: 'IA Studio',
                desc: 'Tecnologia proprietária para visualizar designs em minutos. Decisões informadas em tempo real.',
              },
              {
                title: 'Gestão Completa',
                desc: 'Do conceito à execução. Nós gerenciamos tudo: coordenação, qualidade, prazos, orçamento.',
              },
              {
                title: 'Equipa Elite',
                desc: 'Arquitetos, designers, artesãos e tecnólogos. Experiência internacional e local.',
              },
              {
                title: 'Materiais Premium',
                desc: 'Curadoria cuidadosa de mármores, madeiras e metais nobres com certificação de origem.',
              },
              {
                title: 'Atendimento Consultivo',
                desc: 'Não vendemos. Consultamos. Cada projeto é único e merece atenção dedicada.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-lg border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent transition duration-300"
              >
                <div className="w-2 h-2 rounded-full bg-[#D4AF37] flex-shrink-0 mt-2" />
                <div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Conheça nossa equipa
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Estamos prontos para transformar seu espaço em um design de luxo, sem stress.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contacto" variant="primary">
              Agendar Visita
            </Button>
            <Button href="/servicos" variant="outline">
              Explorar Serviços <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
