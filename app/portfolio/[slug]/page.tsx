import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Button } from '@/components/Button';
import SectionHeader from '@/components/SectionHeader';
import { getAllProjects, getProjectBySlug } from '@/lib/portfolio';

interface PortfolioProjectPageProps {
  params: {
    slug: string;
  };
}

export const revalidate = 60;

export async function generateStaticParams() {
  const projects = await getAllProjects();

  return projects
    .filter((project) => Boolean(project.slug?.current))
    .map((project) => ({ slug: project.slug.current }));
}

export async function generateMetadata({ params }: PortfolioProjectPageProps): Promise<Metadata> {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Projeto não encontrado — Casa Turca Acabamentos',
    };
  }

  const title = `${project.title} — Portefólio Casa Turca`;
  const description =
    project.description ?? 'Projeto premium executado pela Casa Turca Acabamentos com gestão total da obra.';
  const imageUrl = project.featuredImage?.asset?.url;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://www.casaturcaacabamentos.com/portfolio/${params.slug}`,
      siteName: 'Casa Turca Acabamentos',
      locale: 'pt_PT',
      type: 'article',
      images: imageUrl ? [{ url: imageUrl, alt: project.featuredImage?.alt ?? project.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: imageUrl ? [imageUrl] : undefined,
    },
  };
}

export default async function PortfolioProjectPage({ params }: PortfolioProjectPageProps) {
  const project = await getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const heroImage = project.featuredImage?.asset?.url;
  const gallery = project.gallery?.filter((image) => Boolean(image.asset?.url)) ?? [];
  const categoryTitle = project.category?.title ?? 'Projeto Casa Turca';

  return (
    <main className="bg-night text-white">
      <section className="border-b border-white/5 bg-[radial-gradient(circle_at_top,_rgba(28,167,161,0.16),_transparent_55%),_radial-gradient(circle_at_bottom,_rgba(212,175,55,0.1),_transparent_65%)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-white/60">{categoryTitle}</p>
            <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{project.title}</h1>
            {project.description && <p className="max-w-xl text-sm text-white/70 sm:text-base">{project.description}</p>}
            <div className="flex flex-wrap items-center gap-3">
              <Button href="/contacto" className="justify-center" size="lg">
                Quero um projeto assim
              </Button>
              <Button href="/portfolio" variant="ghost" size="lg" className="text-xs">
                Voltar ao portefólio
              </Button>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-4 text-[11px] text-white/60">
              <p>
                Cuidamos de cada etapa: concept design, produção de mobiliário sob medida, instalação de pavimentos e
                gestão de obra com relatórios semanais.
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.6)]">
            {heroImage ? (
              <Image
                src={heroImage}
                alt={project.featuredImage?.alt ?? `Vista principal do projeto ${project.title}`}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 45vw, (min-width: 768px) 50vw, 100vw"
              />
            ) : (
              <div className="h-full w-full bg-gradient-to-br from-teal/20 via-white/10 to-amber/20" />
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-transparent" />
          </div>
        </div>
      </section>

      {gallery.length > 0 && (
        <section className="border-b border-white/5 bg-abyss py-16 md:py-24">
          <div className="mx-auto max-w-6xl px-4">
            <SectionHeader
              eyebrow="Galeria do projeto"
              title="Detalhes que elevam o ambiente."
              description="Materiais nobres, iluminação estratégica e mobiliário desenhado exclusivamente para o cliente."
            />

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {gallery.map((image) => (
                <div
                  key={image._key}
                  className="group overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_18px_60px_rgba(0,0,0,0.5)]"
                >
                  <div className="relative aspect-[5/4] w-full overflow-hidden">
                    <Image
                      src={image.asset.url!}
                      alt={image.alt ?? `Detalhe do projeto ${project.title}`}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-105"
                      sizes="(min-width: 1024px) 40vw, (min-width: 768px) 45vw, 100vw"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-night/70 via-night/20 to-transparent" />
                  </div>
                  <div className="space-y-2 px-5 py-4 text-[12px] text-white/65">
                    <p>{image.alt ?? 'Acabamento Casa Turca'}</p>
                    <p className="text-white/45">Transformamos o conceito aprovado em execução impecável.</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="bg-midnight py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 md:grid-cols-[1.1fr,0.9fr] md:items-center">
          <div className="space-y-5">
            <SectionHeader
              eyebrow="Experiência Casa Turca"
              title="Do briefing à entrega, acompanhamos cada decisão."
              description="Integração de IA para ideias iniciais, equipa própria para execução e gestão chave na mão para clientes exigentes."
            />
            <ul className="space-y-3 text-sm text-white/70">
              <li>• Relatórios semanais com fotos e vídeos do avanço da obra.</li>
              <li>• Seleção conjunta de materiais premium, presenciais ou por videochamada.</li>
              <li>• Styling final com peças decorativas, iluminação e tecnologia integradas.</li>
            </ul>
            <div className="flex flex-wrap gap-3">
              <Button href="/contacto" size="lg">
                Quero falar com a equipa
              </Button>
              <Link href="/servicos" className="text-xs font-medium uppercase tracking-[0.2em] text-white/60 hover:text-white">
                Ver serviços completos
              </Link>
            </div>
          </div>
          <div className="space-y-4 rounded-3xl border border-teal/40 bg-teal/5 p-6 text-sm text-white/70">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-teal">Gestão Casa Turca</p>
            <p>
              Entregamos projetos completos em Luanda e principais cidades, coordenando equipas, fornecedores e prazos para
              que o cliente viva a experiência de um design sem stress.
            </p>
            <p className="text-white/50">
              Cada projeto é acompanhado pelos nossos diretores criativos e gestores de obra para garantir precisão em cada
              acabamento.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
