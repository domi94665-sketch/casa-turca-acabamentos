import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'IA Studio — Casa Turca Acabamentos',
  description:
    'Envie uma foto do seu espaço e receba sugestões premium com a IA Studio da Casa Turca. Design personalizado com tecnologia proprietária.',
  openGraph: {
    title: 'IA Studio — Casa Turca Acabamentos',
    description:
      'Ferramenta exclusiva para simular ideias de design e avançar para execução Casa Turca com segurança.',
    url: 'https://www.casaturcaacabamentos.com/ia-studio',
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_PT',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IA Studio — Casa Turca Acabamentos',
    description:
      'Simule variações de design com IA e avance para um projeto chave na mão com a Casa Turca.',
  },
};

const etapas = [
  {
    title: 'Upload do espaço',
    description:
      'Envie fotos e medidas básicas. A equipa orienta como capturar ângulos que permitam um diagnóstico completo.',
  },
  {
    title: 'Análise com IA + curadoria humana',
    description:
      'A IA sugere estilos e materiais com base nas referências. Os nossos arquitetos refinam e aplicam o olhar Casa Turca.',
  },
  {
    title: 'Entrega de variações',
    description:
      'Receba até três propostas com imagens renderizadas, paletas cromáticas e estimativas de investimento.',
  },
  {
    title: 'Transição para obra',
    description:
      'Se aprovar, transformamos a proposta em projeto executivo e assumimos toda a execução com gestão chave na mão.',
  },
];

export default function IAStudioPage() {
  return (
    <main className="bg-night text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(28,167,161,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(212,175,55,0.12),_transparent_65%)]">
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Casa Turca • IA Studio</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            IA que entende o seu espaço e traduz o seu estilo.
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
            Combine inteligência artificial com curadoria humana para explorar possibilidades antes de iniciar a obra. Ideias premium para quem exige segurança antes de investir.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button href="/contacto" className="justify-center">Solicitar acesso ao beta</Button>
            <Button href="/servicos" variant="ghost" className="text-white/80 hover:text-white">
              Conhecer execução completa
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Como funciona"
              title="Tecnologia proprietária aliada à nossa equipa de design."
              description="A IA Studio foi treinada com projetos reais Casa Turca e aprende continuamente com o feedback dos nossos arquitetos."
            />
            <ul className="space-y-3 text-sm text-white/70">
              <li>• Suporte humano durante todo o processo, por chat ou videochamada.</li>
              <li>• IA foca no estilo do cliente, nas proporções do espaço e no orçamento definido.</li>
              <li>• Resultados em até 72 horas úteis com materiais disponíveis em Angola.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Planos disponíveis</p>
            <ul className="mt-5 space-y-4 text-xs text-white/60">
              <li>
                <span className="text-white">Essencial</span>: 1 divisão, 2 variações de design, relatório resumido.
              </li>
              <li>
                <span className="text-white">Completo</span>: até 4 divisões, 3 variações, video-call de apresentação.
              </li>
              <li>
                <span className="text-white">Executivo</span>: integração direta com equipa Casa Turca e orçamento detalhado.
              </li>
            </ul>
            <Button href="/contacto" className="mt-6 w-full justify-center">
              Falar com especialista em IA
            </Button>
          </div>
        </div>
      </section>

      <section className="border-b border-white/5 bg-midnight py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Etapas"
            title="Da simulação digital ao projeto executado."
            description="Em quatro passos orientamos a evolução do seu projeto com clareza e sofisticação."
          />
          <div className="mt-10 grid gap-4 md:grid-cols-4">
            {etapas.map((etapa, index) => (
              <div key={etapa.title} className="rounded-2xl border border-white/10 bg-white/5 p-5 text-sm text-white/70">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/40">Passo 0{index + 1}</span>
                  <span className="grid h-8 w-8 place-items-center rounded-full border border-teal/40 bg-teal/10 text-[11px] font-semibold text-teal">
                    {index + 1}
                  </span>
                </div>
                <p className="mt-4 text-base font-semibold text-white">{etapa.title}</p>
                <p className="mt-2 text-xs text-white/60">{etapa.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-abyss py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Próximo passo"
              title="Pronto para transformar as ideias em realidade?"
              description="Após a aprovação da variação escolhida, a equipa Casa Turca assume todo o processo executivo e entrega o espaço chave na mão."
            />
            <Button href="/contacto">Agendar reunião de alinhamento</Button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-xs text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Checklist de envio</p>
            <ul className="mt-4 space-y-2">
              <li>• Fotos do ambiente (mínimo 3 ângulos).</li>
              <li>• Medidas aproximadas (largura, comprimento, pé-direito).</li>
              <li>• Referências do que gosta (Pinterest, Instagram, etc.).</li>
              <li>• Estimativa de orçamento e prazo desejado.</li>
            </ul>
            <p className="mt-4 text-[11px] text-white/55">
              Com estas informações, conseguimos gerar simulações fiéis à realidade da sua casa ou empresa.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
