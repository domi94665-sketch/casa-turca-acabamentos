import Link from 'next/link';
import { sanityClient } from '@/lib/sanity.client';
import { FEATURED_PROJECTS_QUERY, TESTIMONIALS_QUERY } from '@/lib/queries';
import PortfolioGrid from '@/components/PortfolioGrid';
import type { Project, Testimonial } from '@/lib/types';
import { fallbackProjects, fallbackTestimonials } from '@/lib/mock-data';

export default async function HomePage() {
  let projects: Project[] = fallbackProjects;
  let testimonials: Testimonial[] = fallbackTestimonials;

  try {
    const [fetchedProjects, fetchedTestimonials] = await Promise.all([
      sanityClient.fetch<Project[]>(FEATURED_PROJECTS_QUERY).catch(() => null),
      sanityClient.fetch<Testimonial[]>(TESTIMONIALS_QUERY).catch(() => null),
    ]);

    if (Array.isArray(fetchedProjects) && fetchedProjects.length) {
      projects = fetchedProjects;
    }
    if (Array.isArray(fetchedTestimonials) && fetchedTestimonials.length) {
      testimonials = fetchedTestimonials;
    }
  } catch (error) {
    console.log('Sanity fetch failed, using fallback data', error);
  }

  const safeProjects = projects || fallbackProjects;
  const safeTestimonials = testimonials || fallbackTestimonials;

  return (
    <div className="space-y-24 pb-24">
      <section className="relative overflow-hidden bg-turquoise/5">
        <div
          className="absolute inset-0 bg-[radial-gradient(circle_at_top,#ffffff,transparent_55%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(15,185,177,0.08),_transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-28 lg:flex-row lg:items-center">
          <div className="max-w-2xl space-y-6 text-charcoal">
            <p className="text-xs uppercase tracking-[0.4em] text-charcoal/70">Atelier boutique • Luanda</p>
            <h1 className="font-serif text-5xl leading-tight md:text-6xl">
              Luxo turco para espaços angolanos inesquecíveis
            </h1>
            <p className="text-lg text-charcoal/70 md:text-xl">
              Combinamos tradição artesanal turca, materiais nobres e inteligência artificial para desenhar ambientes que elevam o padrão do imobiliário premium.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/designer-ia"
                className="rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
              >
                Experimente o Designer IA
              </Link>
              <Link
                href="/portfolio"
                className="rounded-full border border-charcoal/10 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal shadow-sm transition hover:border-gold hover:text-gold"
              >
                Ver portefólio
              </Link>
            </div>
          </div>
          <div className="flex-1 rounded-3xl border border-gold/20 bg-white/70 p-10 shadow-2xl backdrop-blur">
            <h2 className="font-serif text-2xl text-charcoal">Manifesto Casa Turca</h2>
            <ul className="mt-6 space-y-4 text-sm text-charcoal/70">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" aria-hidden />
                Curadoria de materiais nobres com origem certificada.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" aria-hidden />
                Equipa multidisciplinar com arquitetos, artesãos e tecnólogos.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2.5 w-2.5 rounded-full bg-gold" aria-hidden />
                Processos digitais de visualização em 3D e IA generativa.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-xs uppercase tracking-[0.4em] text-gold">Porque somos luxo?</p>
          <h2 className="mt-4 font-serif text-4xl text-charcoal">Tradição, inovação e assinatura exclusiva</h2>
          <p className="mt-4 text-base text-charcoal/70">
            A Casa Turca nasce em Istambul e ganha vida em Luanda. Cada projeto combina a herança estética do Bósforo com o ritmo vibrante de Angola, traduzido em acabamentos personalizados.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[`Materiais raros`, `Processo concierge`, `Tecnologia proprietária`].map((title) => (
            <div
              key={title}
              className="rounded-3xl border border-gold/20 bg-white p-8 text-center shadow-lg transition hover:-translate-y-1 hover:shadow-2xl"
            >
              <h3 className="font-serif text-2xl text-charcoal">{title}</h3>
              <p className="mt-4 text-sm text-charcoal/70">
                Seleção cuidadosa de mármores, madeiras e metais nobres, com atendimento consultivo e visualização hiper-realista em todas as fases.
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-6xl space-y-12 px-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-gold">Portefólio</p>
            <h2 className="mt-2 font-serif text-4xl text-charcoal">Projetos em destaque</h2>
          </div>
          <Link
            href="/portfolio"
            className="self-start rounded-full border border-charcoal/15 bg-white/80 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-charcoal shadow-sm transition hover:border-gold hover:text-gold"
          >
            Ver todos
          </Link>
        </div>
        <PortfolioGrid projects={safeProjects} />
      </section>

      {!!safeTestimonials.length && (
        <section className="bg-charcoal text-[#f8f7f4]">
          <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-20 md:flex-row md:items-center">
            <div className="md:w-1/3">
              <p className="text-xs uppercase tracking-[0.4em] text-gold">Testemunhos</p>
              <h2 className="mt-3 font-serif text-4xl text-gold">Clientes encantados</h2>
            </div>
            <div className="md:w-2/3 space-y-8">
              {safeTestimonials.slice(0, 2).map((testimonial) => (
                <blockquote
                  key={testimonial._id}
                  className="rounded-3xl border border-gold/20 bg-charcoal/40 p-8 shadow-xl"
                >
                  <p className="text-lg leading-relaxed text-[#f8f7f4]/80">“{testimonial.text}”</p>
                  <footer className="mt-4 text-sm font-semibold text-gold">
                    {testimonial.name} {testimonial.projectRef ? `• ${testimonial.projectRef.title}` : ''}
                  </footer>
                </blockquote>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="mx-auto max-w-6xl rounded-3xl border border-gold/20 bg-white/70 px-6 py-16 text-center shadow-2xl">
        <p className="text-xs uppercase tracking-[0.4em] text-gold">Tecnologia proprietária</p>
        <h2 className="mt-4 font-serif text-4xl text-charcoal">Designer IA exclusivo para clientes Casa Turca</h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-charcoal/70">
          Descubra o potencial da inteligência artificial para gerar composições e materiais em minutos. Pré-visualize acabamentos, refine estilos e integre com o nosso atelier físico.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/designer-ia"
            className="rounded-full border border-gold bg-gold px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal shadow-xl transition hover:-translate-y-0.5 hover:shadow-2xl"
          >
            Quero acesso prioritário
          </Link>
          <Link
            href="/contactos"
            className="rounded-full border border-charcoal/10 bg-white/80 px-6 py-3 text-sm font-semibold uppercase tracking-[0.3em] text-charcoal shadow-sm transition hover:border-gold hover:text-gold"
          >
            Agendar visita ao showroom
          </Link>
        </div>
      </section>
    </div>
  );
}
