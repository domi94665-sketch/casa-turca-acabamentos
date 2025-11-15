import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Parceiros — Casa Turca Acabamentos',
  description:
    'Programa de parceria para arquitetos e designers. Execução precisa, mobiliário sob medida e gestão de obra Casa Turca.',
  openGraph: {
    title: 'Parceiros — Casa Turca Acabamentos',
    description:
      'Conte com a Casa Turca para executar projetos com fidelidade ao seu conceito e experiência premium para o cliente.',
    url: 'https://www.casaturcaacabamentos.com/parceiros',
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_PT',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Parceiros — Casa Turca Acabamentos',
    description:
      'Parcerias estratégicas com arquitetos e designers para obras sem stress e resultados premium.',
  },
};

const beneficios = [
  {
    title: 'Execução fiel ao conceito',
    description:
      'Equipa técnica garante que cada detalhe seja respeitado, desde alinhamentos milimétricos até o acabamento final.',
  },
  {
    title: 'Mobiliário e acabamentos integrados',
    description:
      'Produção própria de marcenaria, serralharia e estofos para entregar exatamente como foi desenhado.',
  },
  {
    title: 'Gestão transparente',
    description:
      'Cronogramas partilhados, visitas técnicas agendadas e relatórios semanais com fotos e métricas.',
  },
];

const entregas = [
  'Projeto executivo detalhado com compatibilização de especialidades.',
  'Coordenação de obra com reporting direto ao arquiteto.',
  'Mockups e amostras para aprovação antes da produção.',
  'Styling final e fotografia profissional para portefólio conjunto.',
];

export default function ParceirosPage() {
  return (
    <main className="bg-night text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(28,167,161,0.16),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(212,175,55,0.1),_transparent_65%)]">
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Programa de parceria</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            O braço operacional de arquitetos e designers em Angola.
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
            Entregamos o seu projeto com rigor técnico, gestão eficiente e comunicação transparente. Enquanto cria, nós cuidamos de transformar o conceito em realidade.
          </p>
          <Button href="/contacto" className="justify-center">Marcar conversa estratégica</Button>
        </div>
      </section>

      <section className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Benefícios"
            title="Porque colaborar com a Casa Turca."
            description="Criamos relações de confiança com arquitetos e designers que procuram um parceiro sólido para executar projetos premium."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {beneficios.map((beneficio) => (
              <div key={beneficio.title} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal/80">{beneficio.title}</p>
                <p className="mt-3 text-white/70">{beneficio.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-midnight py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Entregas"
              title="O que garantimos em cada parceria."
              description="Mantemos o seu nome na linha da frente. A Casa Turca atua como extensão da sua equipa, assegurando padrões premium."
            />
            <ul className="space-y-3 text-sm text-white/70">
              {entregas.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Como começamos</p>
            <ol className="mt-4 space-y-3 text-xs text-white/60">
              <li>1. Reunião de alinhamento para conhecer a sua metodologia.</li>
              <li>2. Análise do portefólio e definição de padrões de qualidade.</li>
              <li>3. Acordo de confidencialidade e condições comerciais.</li>
              <li>4. Planeamento conjunto dos primeiros projetos.</li>
            </ol>
            <Button href="/contacto" className="mt-6 w-full justify-center">Iniciar parceria</Button>
          </div>
        </div>
      </section>

      <section className="bg-abyss py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Suporte"
            title="Serviços complementares para o seu cliente."
            description="Podemos ficar em segundo plano ou atuar lado a lado nas reuniões. Defina como prefere trabalhar e ajustamos o formato."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {['Acompanhamento em reuniões com o cliente final.', 'Apoio na apresentação de renderizações e protótipos.', 'Gestão financeira da obra com relatórios partilhados.'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                <p className="text-white/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
