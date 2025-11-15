import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Sobre — Casa Turca Acabamentos',
  description:
    'Conheça a história, missão e valores da Casa Turca Acabamentos. Design premium com raiz turca e execução impecável em Angola.',
  openGraph: {
    title: 'Sobre — Casa Turca Acabamentos',
    description:
      'Descubra como a Casa Turca combina artesanato, tecnologia e gestão para entregar projetos de luxo sem stress.',
    url: 'https://www.casaturcaacabamentos.com/sobre',
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_PT',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sobre — Casa Turca Acabamentos',
    description:
      'Somos especialistas em design de luxo com móveis sob medida, IA de design e gestão chave na mão.',
  },
};

const valores = [
  {
    title: 'Precisão artesanal',
    description:
      'Cada detalhe é fabricado, testado e instalado por especialistas que combinam técnicas turcas com padrões europeus.',
  },
  {
    title: 'Tecnologia a favor da estética',
    description:
      'Renderizações hiper-realistas, geminação digital com IA e acompanhamento remoto da obra para tomada de decisão rápida.',
  },
  {
    title: 'Experiência concierge',
    description:
      'Planeamos, coordenamos e comunicamos cada etapa com clareza. Os clientes acompanham o progresso sem lidar com imprevistos.',
  },
];

export default function SobrePage() {
  return (
    <main className="bg-night text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(28,167,161,0.18),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(212,175,55,0.1),_transparent_65%)]">
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Sobre a Casa Turca</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Uma casa angolana com alma turca e foco em resultados impecáveis.
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
            Somos um atelier premium de acabamentos e interiores sediado em Luanda. Aliamos herança estética do Bósforo,
            tecnologia proprietária e uma equipa multidisciplinar para entregar ambientes que traduzem o estilo dos nossos clientes.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-[11px] uppercase tracking-[0.24em] text-white/60">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Fundada em 2018</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Estúdio &amp; fábrica própria em Luanda</span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1">Equipe de arquitetos, designers e engenheiros</span>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.3fr,1fr] md:items-start">
          <div className="space-y-8">
            <SectionHeader
              eyebrow="História"
              title="Da tradição turca à sofisticação angolana."
              description="A fundadora cresceu entre ateliers familiares em Istambul, onde aprendeu a valorizar materiais nobres e processos manuais. Em Luanda, encontrou clientes que partilhavam o desejo por espaços memoráveis e sem complicações."
            />
            <div className="space-y-6 text-sm text-white/70">
              <p>
                A Casa Turca nasceu com a missão de entregar interiores de luxo sem o stress tradicional das obras. Reunimos
                num único lugar consultoria estética, produção própria de mobiliário, aplicação de acabamentos e gestão de obra.
              </p>
              <p>
                Hoje, atendemos residências e empresas que buscam ambientes exclusivos. Operamos com cronogramas rigorosos,
                comunicação transparente e uma equipa formada por arquitetos, designers, gestores de projeto e artesãos especializados.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Manifesto</p>
            <p className="mt-3 text-base font-semibold text-white">Luxo é calma, precisão e consistência.</p>
            <p className="mt-4 text-sm text-white/70">
              Controlamos todas as etapas para garantir que o resultado final seja fiel ao sonho do cliente: design autoral,
              materiais nobres e execução sem improvisos.
            </p>
            <Button href="/contacto" className="mt-6 w-full justify-center">
              Falar com a direção
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-midnight py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Valores"
            title="Pilares que sustentam cada projeto Casa Turca."
            description="Trabalhamos de forma consultiva, transparente e artesanal para proteger o seu investimento e elevar a sua qualidade de vida."
            align="center"
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {valores.map((valor) => (
              <div key={valor.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal/80">{valor.title}</p>
                <p className="mt-3 text-white/70">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-abyss py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-2 md:items-center">
          <div className="space-y-5">
            <SectionHeader
              eyebrow="Diferenciais"
              title="Porque os clientes de alto padrão confiam em nós."
              description="Do briefing inicial à entrega final, operamos como guardiões da visão do cliente, garantindo fidelidade estética e conforto absoluto."
            />
            <ul className="space-y-3 text-sm text-white/70">
              <li>• Equipa fixa e treinada internamente, sem subcontratações improvisadas.</li>
              <li>• IA proprietária para simulações rápidas e decisões assertivas.</li>
              <li>• Logística de importação e armazenagem para materiais raros.</li>
              <li>• Relatórios semanais, acompanhamento remoto e visitas agendadas.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Clientes atendidos</p>
            <div className="mt-4 grid gap-4 text-white/80 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-teal/70">Residencial</p>
                <p className="mt-2 text-lg font-semibold text-white">Condomínios premium</p>
                <p className="mt-2 text-xs text-white/60">Talatona, Morro Bento, Kilamba, Nova Vida.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.24em] text-teal/70">Corporativo</p>
                <p className="mt-2 text-lg font-semibold text-white">Escritórios &amp; retail</p>
                <p className="mt-2 text-xs text-white/60">Empresas multinacionais, clínicas e boutiques.</p>
              </div>
            </div>
            <Button href="/portfolio" variant="secondary" className="mt-6">
              Ver projetos recentes
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
