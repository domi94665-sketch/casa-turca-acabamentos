import { Button } from '@/components/Button';

export default function Hero() {
  return (
    <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(28,167,161,0.18),_transparent_60%),_radial-gradient(circle_at_bottom,_rgba(212,175,55,0.12),_transparent_65%)]">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 py-16 md:flex-row md:items-center md:py-24">
        <div className="md:w-1/2">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.24em] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-teal" />
            Luanda • Acabamentos Premium
          </p>
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Transformamos o seu espaço em um
            <span className="bg-gradient-to-r from-teal via-emerald-200/90 to-gold bg-clip-text text-transparent">
              {' '}design de luxo
            </span>
            , sem stress.
          </h1>
          <p className="mt-5 max-w-xl text-sm text-white/70 sm:text-base">
            Projetos completos de interiores com móveis sob medida, gestão total da obra e tecnologia de IA para traduzir o seu estilo em ambientes extraordinários.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button href="/contacto">Pedir estudo do projeto</Button>
            <Button href="/servicos" variant="ghost" className="text-white/80 hover:text-white">
              Ver serviços
            </Button>
          </div>
          <div className="mt-8 grid max-w-md grid-cols-3 gap-4 text-[11px] text-white/60">
            <div>
              <p className="text-lg font-semibold text-white">500k Kz+</p>
              <p>Projetos mínimos para garantir padrão premium.</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">Chave na mão</p>
              <p>Gestão completa do acabamento da sua obra.</p>
            </div>
            <div>
              <p className="text-lg font-semibold text-white">IA de Design</p>
              <p>Ideias exclusivas com base na sua própria casa.</p>
            </div>
          </div>
        </div>

        <div className="md:w-1/2">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-teal/40 via-white/10 to-gold/40 opacity-60 blur-xl" />
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-aurora">
              <div className="flex gap-1 border-b border-white/10 bg-black/40 px-4 py-3 text-[11px] text-white/60">
                <span className="h-2 w-2 rounded-full bg-red-400" />
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span className="ml-auto uppercase tracking-[0.18em] text-white/40">Vista 3D — Sala Premium</span>
              </div>
              <div className="grid grid-cols-5">
                <div className="col-span-3 min-h-[260px] border-r border-white/10 bg-[url('https://images.pexels.com/photos/6585763/pexels-photo-6585763.jpeg?auto=compress&cs=tinysrgb&w=1200')] bg-cover bg-center" />
                <div className="col-span-2 flex flex-col justify-between bg-black/50 p-4 text-xs">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-teal">Projeto Assinatura</p>
                    <p className="mt-1 text-sm font-semibold text-white">Sala de Estar • Talatona</p>
                    <p className="mt-1 text-[11px] text-white/60">
                      Móveis sob medida, iluminação embutida, teto falso e pavimento em padrão europeu.
                    </p>
                  </div>
                  <div className="mt-4 space-y-2 text-[11px] text-white/60">
                    <div className="flex items-center justify-between">
                      <span>Prazo estimado</span>
                      <span className="text-white">30 dias</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Gestão de obra</span>
                      <span className="text-white">Incluída</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Investimento mínimo</span>
                      <span className="text-emerald-300">500.000 Kz</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t border-white/10 bg-black/60 px-4 py-3 text-[11px] text-white/60">
                “Você imagina. A Casa Turca transforma — com precisão, elegância e gestão total da sua obra.”
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
