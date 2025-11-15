import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';
import { ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Serviços | Casa Turca Acabamentos',
  description:
    'Móveis sob medida, design de interiores, instalação, pintura, pavimentação e gestão de obra. Soluções premium de A a Z.',
  openGraph: {
    title: 'Serviços | Casa Turca Acabamentos',
    description: 'Conheça todos os serviços premium da Casa Turca.',
    url: 'https://www.casaturca-acabamentos.com/servicos',
  },
};

export default function ServicesPage() {
  const services = [
    {
      id: 'moveis',
      icon: '📐',
      title: 'Móveis Sob Medida',
      desc: 'Desenho personalizado em madeira nobre, PVC e pladur.',
      features: [
        'Madeira Premium (mogno, carvalho, wengué)',
        'PVC e Pladur de Qualidade',
        'Acabamentos Luxuosos',
        'Dimensões Personalizadas',
        'Design Exclusivo',
      ],
    },
    {
      id: 'design',
      icon: '🎨',
      title: 'Design de Interiores',
      desc: 'Consultoria completa de design, paleta de cores e conceito estético.',
      features: [
        'Consultoria Personalizada',
        'Visualização 3D',
        'Paleta de Cores Premium',
        'Seleção de Materiais',
        'Conceito Estético Único',
      ],
    },
    {
      id: 'teto',
      icon: '🏗️',
      title: 'Teto Falso',
      desc: 'Instalação profissional de tetos falsos com acabamento premium.',
      features: [
        'Gesso e PVC',
        'Iluminação Integrada',
        'Acústica Premium',
        'Instalação Profissional',
        'Garantia Total',
      ],
    },
    {
      id: 'pavimento',
      icon: '🪨',
      title: 'Pavimentação & Ladrilho',
      desc: 'Pavimentos em mármores nobres, cerâmica e pedra natural.',
      features: [
        'Mármores Certificados',
        'Cerâmica Premium',
        'Pedra Natural',
        'Aplicação Profissional',
        'Acabamento Perfeito',
      ],
    },
    {
      id: 'pintura',
      icon: '🎭',
      title: 'Pintura Interior & Exterior',
      desc: 'Pintura profissional com tintas premium e acabamento impecável.',
      features: [
        'Tintas Premium',
        'Cores Personalizadas',
        'Acabamentos Especiais',
        'Interior e Exterior',
        'Garantia de Qualidade',
      ],
    },
    {
      id: 'eletrica',
      icon: '⚡',
      title: 'Instalação Elétrica Básica',
      desc: 'Instalações elétricas profissionais e seguras.',
      features: [
        'Conformidade com Normas',
        'Segurança Garantida',
        'Acabamento Premium',
        'Suporte Técnico',
        'Certificação',
      ],
    },
    {
      id: 'gestao',
      icon: '📋',
      title: 'Gestão de Obra',
      desc: 'Gerenciamento completo do seu projeto de ponta a ponta.',
      features: [
        'Coordenação Total',
        'Cronograma Rigoroso',
        'Controle de Qualidade',
        'Comunicação Constante',
        'Orçamento Transparente',
      ],
    },
    {
      id: 'ia',
      icon: '🤖',
      title: 'IA Studio',
      desc: 'Visualização de designs com inteligência artificial em tempo real.',
      features: [
        'Upload de Imagens',
        'Múltiplas Sugestões',
        'Estilos Personalizados',
        'Salve Inspirações',
        'Integração com Projeto',
      ],
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
                Soluções Premium
              </p>
              <h1 className="text-5xl md:text-7xl font-serif font-bold text-white leading-tight mb-6">
                Serviços Completos
              </h1>
              <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-3xl">
                De móveis sob medida a gestão completa de obra. Todas as soluções que você precisa para transformar seu espaço em design de luxo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços Grid */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                icon={service.icon}
                title={service.title}
                description={service.desc}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Por que escolher */}
      <section className="relative py-24 px-6 bg-gradient-to-r from-[#0f1115] via-[#1CA7A1]/5 to-[#050608]">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            subtitle="Vantagens"
            title="Por que escolher Casa Turca"
            centered
          />

          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                title: 'Equipa Multidisciplinar',
                desc: 'Arquitetos, designers, artesãos e tecnólogos trabalhando em harmonia para seu projeto.',
              },
              {
                title: 'Qualidade Garantida',
                desc: 'Materiais premium com certificação de origem e acabamento impecável em cada detalhe.',
              },
              {
                title: 'Gestão Completa',
                desc: 'Você não precisa se preocupar com nada. Nós gerenciamos coordenação, qualidade e prazos.',
              },
              {
                title: 'Tecnologia IA',
                desc: 'Visualize designs em minutos. Tome decisões informadas antes da execução final.',
              },
              {
                title: 'Atendimento Premium',
                desc: 'Consultoria dedicada, comunicação constante e suporte pós-projeto sempre disponível.',
              },
              {
                title: 'Transparência Total',
                desc: 'Orçamentos claros, cronogramas realistas e sem surpresas durante a execução.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex gap-4 p-6 rounded-lg border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 transition duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-[#D4AF37] flex items-center justify-center text-white font-bold text-lg flex-shrink-0">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-white font-semibold mb-2">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="relative py-24 px-6">
        <div className="mx-auto max-w-6xl">
          <SectionHeader
            subtitle="Metodologia"
            title="Nosso Processo"
            description="4 passos simples para transformar seu espaço"
            centered
          />

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Consulta Inicial',
                desc: 'Entendemos seus objetivos, estilo e necessidades. Avaliamos o espaço.',
              },
              {
                step: '2',
                title: 'Design & Visualização',
                desc: 'Criamos visualizações 3D. Apresentamos opções de materiais e acabamentos.',
              },
              {
                step: '3',
                title: 'Aprovação & Produção',
                desc: 'Finalizamos o design. Iniciamos produção de móveis e seleção de materiais.',
              },
              {
                step: '4',
                title: 'Instalação & Entrega',
                desc: 'Instalação profissional. Garantia total e suporte pós-projeto.',
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col h-full">
                  <div className="w-14 h-14 rounded-full bg-[#1CA7A1] flex items-center justify-center text-white font-bold text-xl mb-6 shadow-lg shadow-[#1CA7A1]/30">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            Pronto para começar?
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Entre em contacto conosco e descubra como podemos transformar seu espaço em um design de luxo.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contacto" variant="primary">
              Agendar Consulta <ArrowRight size={18} />
            </Button>
            <Button href="/ia-studio" variant="secondary">
              Experimentar IA Studio
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
