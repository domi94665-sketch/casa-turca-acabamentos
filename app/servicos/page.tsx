import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import ServiceCard from '@/components/ServiceCard';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Serviços — Casa Turca Acabamentos',
  description:
    'Conheça os serviços completos de design, mobiliário, pavimento, pintura, eletricidade e gestão de obra da Casa Turca Acabamentos.',
  openGraph: {
    title: 'Serviços — Casa Turca Acabamentos',
    description:
      'Consultoria, produção e execução premium para projetos residenciais e corporativos em Angola.',
    url: 'https://www.casaturcaacabamentos.com/servicos',
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_PT',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Serviços — Casa Turca Acabamentos',
    description:
      'Projetos chave na mão com móveis sob medida, pavimento de alto padrão, pintura premium e eletricidade especializada.',
  },
};

const categorias = [
  {
    eyebrow: 'Design de interiores',
    title: 'Conceitos exclusivos desenhados com base na sua rotina.',
    items: [
      'Briefing imersivo com mapeamento de estilo de vida',
      'Moodboards, materiais e cores alinhados à identidade do cliente',
      'Plantas humanizadas, layout funcional e ergonomia detalhada',
      'Renderizações 3D e realidade aumentada para aprovação final',
    ],
  },
  {
    eyebrow: 'Móveis sob medida',
    title: 'Produção própria para garantir qualidade e prazos.',
    items: [
      'Cozinhas, roupeiros, closets e mobiliário solto',
      'Madeira natural, MDF laqueado, serralharia e estofados premium',
      'Ferragens importadas e sistemas de iluminação integrada',
      'Instalação e acabamento final com equipa especializada',
    ],
    accent: 'emerald' as const,
  },
  {
    eyebrow: 'Pavimentos & revestimentos',
    title: 'Soluções resistentes e sofisticadas para cada ambiente.',
    items: [
      'Pisos vinílicos, madeira engenheirada e porcelanatos grandes formatos',
      'Revestimentos 3D, boiserie, microcimento e pedra natural',
      'Tratamentos acústicos e térmicos específicos',
      'Nivelamento, impermeabilização e manutenção pós-obra',
    ],
    accent: 'gold' as const,
  },
  {
    eyebrow: 'Pintura premium',
    title: 'Acabamentos impecáveis em interiores e exteriores.',
    items: [
      'Pintura decorativa, texturas especiais e efeitos metalizados',
      'Paleta personalizada com consultoria de cor',
      'Proteções, correções e preparação completa das superfícies',
      'Selagem contra humidade e garantia de durabilidade',
    ],
  },
  {
    eyebrow: 'Eletricidade & iluminação',
    title: 'Infraestrutura segura e estética iluminada com intenção.',
    items: [
      'Projetos elétricos e luminotécnicos assinados por engenheiros',
      'Instalação de tomadas, automação e sistemas inteligentes',
      'Luminárias embutidas, perfis de LED e iluminação cênica',
      'Adequação a normas e certificações de segurança',
    ],
    accent: 'emerald' as const,
  },
  {
    eyebrow: 'Gestão total de obra',
    title: 'Coordenamos cada equipa para entregar a chave na sua mão.',
    items: [
      'Planeamento executivo com cronograma visível ao cliente',
      'Coordenação de fornecedores, compras e logística',
      'Supervisão diária com relatórios e visitas agendadas',
      'Checklist de entrega, styling final e pós-obra assistido',
    ],
    accent: 'gold' as const,
  },
];

const etapas = [
  {
    title: 'Visita técnica e diagnóstico',
    description:
      'Alinhamos objetivos, prazos e investimento mínimo (500.000 Kz) para garantir o padrão premium Casa Turca.',
  },
  {
    title: 'Projeto executivo & orçamento',
    description:
      'Apresentamos design completo, memoriais descritivos e cronograma com fases claras de execução.',
  },
  {
    title: 'Produção, obra e acompanhamento',
    description:
      'Executamos mobiliário e acabamentos com equipas próprias e reportes semanais.',
  },
  {
    title: 'Entrega e manutenção',
    description:
      'Finalizamos com checklist detalhado, ajustes finos e plano de manutenção personalizada.',
  },
];

export default function ServicosPage() {
  return (
    <main className="bg-night text-white">
      <section className="border-b border-white/5 bg-midnight/90">
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-20 md:py-24 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Serviços Casa Turca</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Do conceito à entrega. Cada detalhe sob o nosso controlo.
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
            Combinamos design autoral, produção própria e gestão total de obra para entregar ambientes prontos para viver ou receber clientes. Um processo consultivo para pessoas exigentes.
          </p>
          <Button href="/contacto" className="justify-center">Solicitar proposta detalhada</Button>
        </div>
      </section>

      <section className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Categorias"
            title="Cada disciplina conduzida pela nossa equipa especializada."
            description="Selecionamos materiais nobres, supervisionamos cada instalação e entregamos tudo pronto, com garantia Casa Turca."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {categorias.map((categoria) => (
              <ServiceCard key={categoria.eyebrow} {...categoria} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-midnight py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Processo premium"
            title="Transparência total, do primeiro contacto ao pós-obra."
            description="Operamos com metodologia concierge e softwares de acompanhamento para que cada cliente saiba o que está a acontecer em tempo real."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {etapas.map((etapa, index) => (
              <div key={etapa.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-center text-sm text-white/70">
                <span className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full border border-teal/40 bg-teal/10 text-[11px] font-semibold uppercase tracking-[0.2em] text-teal">
                  0{index + 1}
                </span>
                <p className="text-base font-semibold text-white">{etapa.title}</p>
                <p className="mt-3 text-xs text-white/60">{etapa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-abyss py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Investimento"
              title="Projetos a partir de 500.000 Kz garantem padrão Casa Turca."
              description="Esse valor mínimo permite que selecionemos materiais, equipas e tecnologia que sustentam a entrega premium."
            />
            <ul className="space-y-3 text-sm text-white/70">
              <li>• Planeamos o investimento por fase para otimizar fluxo financeiro.</li>
              <li>• Negociamos diretamente com fornecedores e marcas internacionais.</li>
              <li>• Garantimos margens de segurança no cronograma e na logística.</li>
            </ul>
            <Button href="/portfolio" variant="secondary">Ver resultados alcançados</Button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Kit de iniciação</p>
            <p className="mt-3 text-base font-semibold text-white">Receba o guia Casa Turca para preparar o seu projeto.</p>
            <p className="mt-3 text-xs text-white/60">
              Dicas de preparação do espaço, checklist de briefing e plano de recolha de referências para acelerar a fase de design.
            </p>
            <Button href="/contacto" className="mt-6 w-full justify-center">Solicitar kit</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
