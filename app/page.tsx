import type { Metadata } from 'next';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Casa Turca Acabamentos — Landing oficial',
  description:
    'Landing page premium da Casa Turca Acabamentos. Projetos de interiores com móveis sob medida, IA de design e gestão total da obra em Luanda.',
  openGraph: {
    title: 'Casa Turca Acabamentos — Landing oficial',
    description:
      'Transformamos o seu espaço em um design de luxo, sem stress. Conheça serviços, IA exclusiva e portefólio da Casa Turca.',
    url: 'https://www.casaturcaacabamentos.com/',
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Turca Acabamentos — Landing oficial',
    description:
      'Móveis sob medida, IA de design e gestão completa de obra para clientes premium em Angola.',
  },
};

const services = [
  {
    eyebrow: 'Design & Consultoria',
    title: 'Arquitetura de interiores focada no seu estilo.',
    items: [
      'Estudo completo de layout e ergonomia',
      'Moodboards, paleta cromática e acabamentos',
      'Renderizações fotorrealistas e vídeos 3D',
      'Planeamento financeiro alinhado ao investimento',
    ],
  },
  {
    eyebrow: 'Mobiliário & Pavimento',
    title: 'Produção própria para entregar como foi imaginado.',
    items: [
      'Móveis sob medida em madeira, MDF, inox e lacados',
      'Teto falso, divisórias e iluminação embutida',
      'Pavimentos em vinil, madeira engenheirada e pedra natural',
      'Revestimentos premium, papel de parede e boiserie',
    ],
    accent: 'emerald' as const,
  },
  {
    eyebrow: 'Gestão de Obra',
    title: 'Chave na mão: coordenamos equipas, prazos e orçamento.',
    items: [
      'Cronograma executivo com milestones semanais',
      'Supervisão técnica e qualidade em cada etapa',
      'Serviços complementares de eletricidade e domótica',
      'Pós-obra com ajustes finos e garantia de entrega',
    ],
    accent: 'gold' as const,
  },
];

const processSteps = [
  {
    etapa: '1',
    titulo: 'Diagnóstico & Inspiração',
    texto:
      'Levantamento presencial ou virtual, entendimento profundo do estilo de vida, prioridades e investimento pretendido.',
  },
  {
    etapa: '2',
    titulo: 'Proposta & Design',
    texto:
      'Estudo de layout, materiais, orçamentos e renderizações aprovadas consigo antes da produção.',
  },
  {
    etapa: '3',
    titulo: 'Execução & Gestão',
    texto:
      'Produção de mobiliário, coordenação de equipas e acompanhamento diário da obra por gestores seniores.',
  },
  {
    etapa: '4',
    titulo: 'Entrega & Pós-venda',
    texto:
      'Entrega com checklist premium, ajustes finais e suporte pós-obra para manter o padrão Casa Turca.',
  },
];

const portfolioPreview = [
  {
    title: 'Residência premium • Talatona',
    description: 'Conceito personalizado com mobiliário integrado, iluminação inteligente e acabamentos importados.',
    location: 'Talatona',
    backgroundClass: "bg-[url('https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=1200')]",
  },
  {
    title: 'Penthouse vista mar • Luanda Sul',
    description: 'Sala gourmet com marcenaria curva, perfis de LED e pedras naturais selecionadas.',
    location: 'Luanda Sul',
    backgroundClass: "bg-[url('https://images.pexels.com/photos/6585766/pexels-photo-6585766.jpeg?auto=compress&cs=tinysrgb&w=1200')]",
  },
  {
    title: 'Centralidade do Kilamba • Escritório boutique',
    description: 'Espaço corporativo com divisórias acústicas, mobiliário sob medida e identidade visual aplicada.',
    location: 'Centralidade do Kilamba',
    backgroundClass: "bg-[url('https://images.pexels.com/photos/6585758/pexels-photo-6585758.jpeg?auto=compress&cs=tinysrgb&w=1200')]",
  },
];

export default function HomePage() {
  return (
    <main className="bg-night text-white">
      <Hero />

      <section id="servicos" className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionHeader
              eyebrow="Serviços"
              title="Soluções completas de acabamentos para quem exige excelência."
              description="Da consultoria estratégica à execução chave na mão. Tudo com a assinatura Casa Turca, garantindo consistência estética, precisão técnica e tranquilidade total para si."
            />
            <p className="max-w-sm text-xs text-white/55">
              Projetos a partir de 500.000 Kz asseguram materiais premium, gestão dedicada e equipas especializadas em ambientes de alto padrão.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <ServiceCard key={service.eyebrow} {...service} />
            ))}
          </div>
        </div>
      </section>

      <section id="ia" className="border-b border-white/5 bg-midnight py-16 md:py-24">
        <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 md:flex-row md:items-center">
          <div className="md:w-1/2">
            <SectionHeader
              eyebrow="IA de Design"
              title="Uma ferramenta exclusiva que entende a sua casa."
              description="Envie uma foto do seu espaço e receba três variações de design alinhadas ao seu estilo, objetivos e orçamento. Um ponto de partida seguro para avançar com um projeto premium."
            />
            <ul className="mt-6 space-y-3 text-xs text-white/70">
              <li>• Upload de fotos do ambiente atual com orientação da equipa.</li>
              <li>• Sugestões de estilos, materiais e iluminação com curadoria humana.</li>
              <li>• Orçamento estimado e possibilidades de execução em fases.</li>
              <li>• Possibilidade de avançar diretamente para o projeto executivo Casa Turca.</li>
            </ul>
            <div className="mt-6 flex flex-wrap items-center gap-3 text-[11px] text-white/60">
              <span className="rounded-full border border-teal/40 bg-teal/10 px-3 py-1 uppercase tracking-[0.22em] text-teal">
                Exclusivo Casa Turca
              </span>
              <span>Mais clareza antes de investir. Mais confiança na hora de avançar.</span>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/ia-studio" variant="primary">Simular ideias de design</Button>
              <Button href="/contacto" variant="ghost" className="text-white/80 hover:text-white">
                Falar com especialista
              </Button>
            </div>
          </div>
          <div className="md:w-1/2">
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-emerald-400/40 via-teal/10 to-cyan-400/40 opacity-60 blur-xl" />
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050608] p-5 shadow-aurora">
                <div className="mb-4 flex items-center justify-between text-[11px] text-white/60">
                  <span className="uppercase tracking-[0.24em] text-teal">Casa Turca • IA Studio</span>
                  <span className="rounded-full border border-white/15 bg-white/10 px-2 py-0.5 text-[10px] uppercase tracking-[0.18em]">
                    Beta exclusivo
                  </span>
                </div>
                <div className="rounded-2xl border border-dashed border-teal/40 bg-white/5 p-6 text-center">
                  <p className="text-xs font-medium text-white/80">Arraste uma foto da sua sala aqui</p>
                  <p className="mt-2 text-[11px] text-white/55">
                    A IA sugere variações de design alinhadas ao seu estilo e orçamento. Escolha a favorita e transforme-a em projeto real.
                  </p>
                  <Button href="/ia-studio" className="mt-6 justify-center">Iniciar simulação</Button>
                </div>
                <div className="mt-5 grid gap-3 text-[11px] text-white/65 md:grid-cols-3">
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-teal">Estilo</p>
                    <p className="mt-1 text-xs text-white">Moderno minimalista</p>
                    <p className="mt-1 text-[10px] text-white/60">Linhas limpas, tons neutros e iluminação controlada.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-teal">Orçamento</p>
                    <p className="mt-1 text-xs text-white">A partir de 650.000 Kz</p>
                    <p className="mt-1 text-[10px] text-white/60">Possibilidade de execução em fases estratégicas.</p>
                  </div>
                  <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-teal">Próximo passo</p>
                    <p className="mt-1 text-xs text-white">Visita técnica agendada</p>
                    <p className="mt-1 text-[10px] text-white/60">Equipe especializada transforma a proposta em obra.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="processo" className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Processo"
            title="Simples para si. Detalhado para nós."
            description="Operamos com método concierge: comunicação constante, cronograma transparente e controle de qualidade rigoroso em cada disciplina."
            align="left"
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {processSteps.map((step) => (
              <div
                key={step.etapa}
                className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/5 p-5 text-xs text-white/70"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/40">
                    Etapa {step.etapa}
                  </span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-teal/40 bg-teal/10 text-[11px] font-semibold text-teal">
                    {step.etapa}
                  </span>
                </div>
                <p className="text-sm font-semibold text-white">{step.titulo}</p>
                <p className="text-[11px] text-white/70">{step.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="portfolio" className="border-b border-white/5 bg-midnight py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
            <SectionHeader
              eyebrow="Portefólio"
              title="Ambientes que contam histórias de luxo discreto."
              description="Da zona sul de Luanda às principais centralidades, entregamos espaços residenciais e comerciais com assinatura Casa Turca."
            />
            <Button href="/portfolio" variant="secondary">
              Ver galeria completa
            </Button>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {portfolioPreview.map((item) => (
              <div key={item.title} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                <div className={`h-52 w-full bg-cover bg-center transition duration-500 group-hover:scale-105 ${item.backgroundClass}`} />
                <div className="space-y-2 px-5 py-4 text-sm text-white/70">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-teal/80">Projeto assinatura</p>
                  <p className="text-white">{item.title}</p>
                  <p className="text-xs">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="parceiros" className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div>
            <SectionHeader
              eyebrow="Para Arquitetos & Designers"
              title="O parceiro operacional que executa o seu conceito com precisão."
              description="Assumimos a gestão técnica e a execução integral do projeto, garantindo fidelidade ao conceito original, comunicação transparente e acabamentos impecáveis."
            />
            <ul className="mt-6 space-y-3 text-xs text-white/70">
              <li>• Execução fiel ao projeto aprovado com o cliente.</li>
              <li>• Comunicação técnica direta com o arquiteto responsável.</li>
              <li>• Mobiliário planejado alinhado ao fluxo e ergonomia do espaço.</li>
              <li>• Parcerias recorrentes com condições exclusivas.</li>
            </ul>
          </div>
          <div className="rounded-2xl border border-teal/30 bg-teal/5 p-6 text-sm text-white/80">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Programa de parceria</p>
            <p className="mt-3 text-base font-semibold text-white">
              Queremos ser o seu parceiro operacional de confiança.
            </p>
            <p className="mt-3 text-[12px] text-white/70">
              Fale connosco para construir uma colaboração contínua em que a Casa Turca assume a execução da obra enquanto
              você mantém o foco na criação e na experiência do cliente.
            </p>
            <Button href="/parceiros" className="mt-6 w-full justify-center">Explorar parcerias</Button>
          </div>
        </div>
      </section>

      <section id="contacto" className="bg-midnight py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr,1fr]">
          <div>
            <SectionHeader
              eyebrow="Contacto"
              title="Vamos falar sobre o seu próximo projeto."
              description="Envie uma mensagem com a visão do espaço, objetivo do projeto e orçamento estimado. A nossa equipa responde com os próximos passos para avançarmos com segurança."
            />
            <div className="mt-6 grid gap-4 text-sm text-white/75 md:grid-cols-2">
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Morada</p>
                <p>Av. Mortala Mohamed</p>
                <p>Luanda, Angola</p>
              </div>
              <div className="space-y-1">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Contacto</p>
                <p>Tel/WhatsApp: <span className="font-mono">+244 946 654 528</span></p>
              </div>
            </div>
            <p className="mt-6 text-[11px] text-white/55">
              Projetos ideais: interiores residenciais e comerciais em condomínios e centralidades, com foco em clientes de renda média-alta e alta.
            </p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/80">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">
              Formulário de interesse (modelo)
            </p>
            <form className="mt-4 space-y-4 text-xs">
              <div>
                <label className="mb-1 block text-[11px] uppercase tracking-[0.2em] text-white/60">Nome completo</label>
                <input
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none focus:border-teal/70"
                  placeholder="Como devemos tratar você?"
                  type="text"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] uppercase tracking-[0.2em] text-white/60">Telefone / WhatsApp</label>
                <input
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none focus:border-teal/70"
                  placeholder="+244..."
                  type="tel"
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] uppercase tracking-[0.2em] text-white/60">Tipo de espaço</label>
                <select className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none focus:border-teal/70">
                  <option>Apartamento</option>
                  <option>Moradia</option>
                  <option>Escritório</option>
                  <option>Loja / Comercial</option>
                  <option>Outro</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-[11px] uppercase tracking-[0.2em] text-white/60">Objetivo do projeto</label>
                <textarea
                  rows={3}
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none focus:border-teal/70"
                  placeholder="Ex.: remodelar sala e cozinha, criar suíte master, renovar escritório..."
                />
              </div>
              <div>
                <label className="mb-1 block text-[11px] uppercase tracking-[0.2em] text-white/60">Orçamento estimado</label>
                <input
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-xs text-white outline-none focus:border-teal/70"
                  placeholder="A partir de 500.000 Kz"
                  type="text"
                />
              </div>
              <Button type="button" className="w-full justify-center">
                Enviar pedido de análise
              </Button>
              <p className="text-[10px] text-white/55">
                Ao enviar, a equipa entra em contacto para alinhar detalhes, solicitar fotos e sugerir a melhor forma de avançar com o seu projeto.
              </p>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
