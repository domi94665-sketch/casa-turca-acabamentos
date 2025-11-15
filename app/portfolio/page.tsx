import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import SectionHeader from '@/components/SectionHeader';
import { Button } from '@/components/Button';
import { getAllProjects } from '@/lib/portfolio';
import type { Project } from '@/lib/types';

export const metadata: Metadata = {
  title: 'Portefólio — Casa Turca Acabamentos',
  description:
    'Explore projetos residenciais e comerciais entregues pela Casa Turca Acabamentos com design de luxo e execução impecável.',
  openGraph: {
    title: 'Portefólio — Casa Turca Acabamentos',
    description:
      'Galeria de ambientes premium em Luanda com móveis sob medida, acabamentos importados e gestão chave na mão.',
    url: 'https://www.casaturcaacabamentos.com/portfolio',
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_PT',
    type: 'article',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portefólio — Casa Turca Acabamentos',
    description:
      'Projetos premium realizados pela Casa Turca com IA de design, mobiliário exclusivo e gestão total de obra.',
  },
};

export const revalidate = 60;

function projectHasSlug(project: Project): project is Project & { slug: { current: string } } {
  return Boolean(project.slug?.current);
}

export default async function PortfolioPage() {
  const projects = (await getAllProjects()).filter(projectHasSlug);

  return (
    <main className="bg-night text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(28,167,161,0.16),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(212,175,55,0.1),_transparent_65%)]">
        <div className="mx-auto max-w-5xl space-y-6 px-4 py-20 text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">Portefólio Casa Turca</p>
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
            Projetos que refletem luxo discreto e execução impecável.
          </h1>
          <p className="mx-auto max-w-3xl text-sm text-white/70 sm:text-base">
            Esta seleção apresenta ambientes residenciais, corporativos e comerciais entregues pela Casa Turca. Cada projeto é planejado de forma consultiva para clientes que valorizam precisão e tranquilidade.
          </p>
          <Button href="/contacto" className="justify-center">Quero um projeto como estes</Button>
        </div>
      </section>

      <section className="border-b border-white/5 bg-abyss py-16 md:py-24">
        <div className="mx-auto max-w-6xl px-4">
          <SectionHeader
            eyebrow="Galeria"
            title="Detalhes que elevam cada ambiente."
            description="Mobiliário integrado, iluminação estratégica, pavimentos sofisticados e materiais nobres selecionados para cada cliente."
          />
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {projects.map((project) => {
              const heroImage = project.featuredImage?.asset?.url;
              const slug = project.slug.current;
              const category = project.category?.title ?? 'Projeto Casa Turca';

              return (
                <Link
                  key={project._id ?? slug}
                  href={`/portfolio/${slug}`}
                  className="group block overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition hover:border-teal/40 hover:shadow-aurora focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-night"
                >
                  <article className="flex h-full flex-col">
                    <div className="relative aspect-[5/3] w-full overflow-hidden">
                      {heroImage ? (
                        <Image
                          src={heroImage}
                          alt={project.featuredImage?.alt ?? `Projeto ${project.title}`}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                          sizes="(min-width: 768px) 50vw, 100vw"
                        />
                      ) : (
                        <div className="h-full w-full bg-gradient-to-br from-teal/20 via-white/10 to-amber/20" />
                      )}
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-night/20 to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col justify-between space-y-4 px-6 py-6 text-sm text-white/70">
                      <div className="space-y-4">
                        <div className="flex flex-wrap items-center gap-3 text-[11px] uppercase tracking-[0.24em] text-white/50">
                          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/60">{category}</span>
                          {project.category?.slug?.current && (
                            <span className="text-white/50">{project.category.slug.current.replace(/-/g, ' ')}</span>
                          )}
                        </div>
                        <h2 className="text-xl font-semibold text-white">{project.title}</h2>
                        {project.description && <p className="text-xs text-white/60">{project.description}</p>}
                      </div>
                      <div className="flex items-center justify-between text-[11px] text-white/55">
                        <span className="text-white/40">Ver detalhes</span>
                        <span className="text-teal group-hover:text-[#3bd7cf]">Portefólio Casa Turca</span>
                      </div>
                    </div>
                  </article>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-midnight py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.2fr,1fr] md:items-center">
          <div className="space-y-6">
            <SectionHeader
              eyebrow="Experiência Casa Turca"
              title="Do briefing à entrega, cada etapa é acompanhada pelos nossos especialistas."
              description="Acompanhamos clientes que vivem fora de Luanda, investidores imobiliários e famílias que desejam ambientes prontos para habitar no prazo combinado."
            />
            <ul className="space-y-3 text-sm text-white/70">
              <li>• Relatórios semanais com fotos, vídeos e indicadores de progresso.</li>
              <li>• Seleção conjunta de materiais no showroom e por videochamada.</li>
              <li>• Styling final com peças decorativas e integração tecnológica.</li>
            </ul>
            <Button href="/contacto" variant="secondary">Agendar curadoria do seu projeto</Button>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 text-sm text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">Testemunhos</p>
            <blockquote className="mt-4 space-y-4">
              <p className="text-sm text-white/75">
                “A Casa Turca assumiu todo o processo de remodelação enquanto eu estava fora do país. Recebi relatórios semanais
                e voltei para um apartamento pronto, com cada detalhe no lugar.”
              </p>
              <footer className="text-[11px] uppercase tracking-[0.22em] text-white/50">
                Cliente Residencial • Talatona
              </footer>
            </blockquote>
            <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 p-4 text-xs text-white/60">
              <p className="font-semibold uppercase tracking-[0.22em] text-white/40">Serviços incluídos</p>
              <ul className="mt-3 space-y-2">
                <li>• Projeto de design completo</li>
                <li>• Mobiliário sob medida</li>
                <li>• Pavimento e iluminação integrada</li>
                <li>• Gestão total de obra</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
