import type { Metadata } from 'next';
import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/Button';

export const metadata: Metadata = {
  title: 'Contacto — Casa Turca Acabamentos',
  description:
    'Fale com a Casa Turca Acabamentos para projetos de interiores, móveis sob medida e gestão de obra premium em Angola.',
  openGraph: {
    title: 'Contacto — Casa Turca Acabamentos',
    description:
      'Agende uma reunião com a Casa Turca e conheça o processo premium com IA de design, mobiliário próprio e gestão chave na mão.',
    url: 'https://www.casaturcaacabamentos.com/contacto',
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_PT',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contacto — Casa Turca Acabamentos',
    description:
      'Entre em contacto para transformar o seu espaço em um design de luxo sem stress.',
  },
};

const canais = [
  {
    title: 'Visita ao showroom',
    description: 'Agende uma visita para conhecer materiais, mobiliário e a equipa Casa Turca.',
    details: 'Av. Mortala Mohamed, Luanda. Atendimento com hora marcada.',
  },
  {
    title: 'Consultoria digital',
    description: 'Chamada de vídeo para clientes fora de Luanda ou no exterior.',
    details: 'Apresentamos o processo, analisamos o espaço e definimos próximos passos.',
  },
];

export default function ContactoPage() {
  return (
    <main className="bg-night text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(28,167,161,0.18),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(212,175,55,0.12),_transparent_65%)]">
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Contacto Casa Turca</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Vamos falar sobre o seu próximo projeto premium.
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
            Conte-nos sobre o espaço, o objetivo e o orçamento disponível (a partir de 500.000 Kz). A nossa equipa prepara uma proposta personalizada com segurança e clareza.
          </p>
        </div>
      </section>

      <section className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr,1fr]">
          <div>
            <SectionHeader
              eyebrow="Formulário premium"
              title="Conte-nos sobre o seu projeto."
              description="Quanto mais detalhes partilhar, mais rápido conseguimos preparar um estudo personalizado."
            />
            <form className="mt-8 space-y-5 text-sm">
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">Nome completo</label>
                <input
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-teal/70"
                  placeholder="Nome e apelido"
                  type="text"
                />
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">Telefone / WhatsApp</label>
                  <input
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-teal/70"
                    placeholder="+244..."
                    type="tel"
                  />
                </div>
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">E-mail</label>
                  <input
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-teal/70"
                    placeholder="nome@empresa.com"
                    type="email"
                  />
                </div>
              </div>
              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">Tipo de espaço</label>
                  <select className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-teal/70">
                    <option>Apartamento</option>
                    <option>Moradia</option>
                    <option>Escritório</option>
                    <option>Loja / Comercial</option>
                    <option>Outro</option>
                  </select>
                </div>
                <div>
                  <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">Localização</label>
                  <input
                    className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-teal/70"
                    placeholder="Cidade / Condomínio"
                    type="text"
                  />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">Objetivo do projeto</label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-teal/70"
                  placeholder="Ex.: remodelar sala e cozinha, criar suíte master, renovar loja..."
                />
              </div>
              <div>
                <label className="mb-2 block text-[11px] uppercase tracking-[0.2em] text-white/60">Orçamento estimado</label>
                <input
                  className="w-full rounded-lg border border-white/15 bg-black/40 px-3 py-2 text-sm text-white outline-none focus:border-teal/70"
                  placeholder="A partir de 500.000 Kz"
                  type="text"
                />
              </div>
              <Button type="button">Enviar pedido de análise</Button>
              <p className="text-[11px] text-white/55">
                Após o envio, a nossa equipa entra em contacto em até 48 horas úteis para alinhar detalhes, solicitar fotos adicionais e agendar a visita técnica.
              </p>
            </form>
          </div>
          <div className="space-y-6 rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Canais de atendimento</p>
            {canais.map((canal) => (
              <div key={canal.title} className="rounded-2xl border border-white/10 bg-black/40 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-teal/70">{canal.title}</p>
                <p className="mt-2 text-white/80">{canal.description}</p>
                <p className="mt-2 text-xs text-white/60">{canal.details}</p>
              </div>
            ))}
            <div className="rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/60">
              <p className="font-semibold uppercase tracking-[0.2em] text-white/40">Contactos diretos</p>
              <p className="mt-2 text-white/75">WhatsApp: +244 946 654 528</p>
              <p className="text-white/75">E-mail: atendimento@casaturca.design</p>
              <p className="mt-2 text-white/55">
                Atendimento de segunda a sexta, das 9h às 18h. Respostas prioritárias para projetos em Luanda e principais cidades.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-midnight py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Dicas"
            title="Como preparar o briefing perfeito."
            description="Três pontos essenciais para acelerar a criação do seu design premium."
            align="center"
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {['Partilhe fotos e vídeos do espaço atual com boa iluminação.', 'Envie referências que traduzem o estilo desejado (Pinterest, Instagram).', 'Informe prazos importantes, como mudança ou inauguração.'].map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
