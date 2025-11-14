import Image from 'next/image';
import { notFound } from 'next/navigation';
import PageHeader from '@/components/PageHeader';
import { sanityClient } from '@/lib/sanity.client';
import { ALL_PROJECTS_QUERY, PROJECT_BY_SLUG_QUERY } from '@/lib/queries';
import type { Project } from '@/lib/types';
import { fallbackProjects } from '@/lib/mock-data';

interface ProjectPageProps {
  params: { slug: string };
}

export const revalidate = 60;

export async function generateStaticParams() {
  try {
    const projects = await sanityClient.fetch<Project[]>(ALL_PROJECTS_QUERY);
    if (Array.isArray(projects) && projects.length) {
      return projects.map((project) => ({ slug: project.slug.current }));
    }
  } catch (error) {
    console.log('Sanity fetch failed, using fallback data');
  }

  return fallbackProjects.map((project) => ({ slug: project.slug.current }));
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  let projectFromCms: Project | null = null;

  try {
    const projectResponse = await sanityClient.fetch<Project | null>(PROJECT_BY_SLUG_QUERY, {
      slug: params.slug,
    });
    projectFromCms = Array.isArray(projectResponse) ? null : projectResponse;
  } catch (error) {
    console.log('Sanity fetch failed for project, using fallback data');
  }

  const project = projectFromCms ?? fallbackProjects.find((item) => item.slug.current === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-20">
      <PageHeader
        title={project.title}
        subtitle={project.category?.title}
      />
      {project.featuredImage?.asset?.url && (
        <div className="overflow-hidden rounded-3xl border border-gold/20 shadow-xl">
          <Image
            src={project.featuredImage.asset.url}
            alt={project.featuredImage.alt || project.title}
            width={1600}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(min-width: 1024px) 1000px, 100vw"
          />
        </div>
      )}
      <div className="grid gap-12 md:grid-cols-[2fr,1fr]">
        <article className="space-y-6 text-base leading-relaxed text-charcoal/80">
          <p className="fade-in whitespace-pre-line">
            {project.description ?? 'Projeto exclusivo desenvolvido à medida pela Casa Turca Acabamentos.'}
          </p>
        </article>
        <aside className="space-y-6 rounded-3xl border border-gold/20 bg-white/70 p-8 shadow-lg">
          <h3 className="font-serif text-2xl text-charcoal">Detalhes do projeto</h3>
          <dl className="space-y-4 text-sm text-charcoal/70">
            <div>
              <dt className="uppercase tracking-[0.3em] text-charcoal/60">Categoria</dt>
              <dd className="mt-1 font-medium text-charcoal">{project.category?.title ?? 'Personalizado'}</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-charcoal/60">Localização</dt>
              <dd className="mt-1 font-medium text-charcoal">Luanda, Angola</dd>
            </div>
            <div>
              <dt className="uppercase tracking-[0.3em] text-charcoal/60">Serviços</dt>
              <dd className="mt-1 font-medium text-charcoal">Design, Materiais, Execução</dd>
            </div>
          </dl>
        </aside>
      </div>
      {!!project.gallery?.length && (
        <div className="space-y-6">
          <h3 className="font-serif text-3xl text-charcoal">Galeria</h3>
          <div className="grid gap-6 sm:grid-cols-2">
            {project.gallery.map((item) => (
              <div key={item._key} className="overflow-hidden rounded-3xl border border-gold/20 shadow-lg">
                {item.asset?.url ? (
                  <Image
                    src={item.asset.url}
                    alt={item.alt || project.title}
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                    sizes="(min-width: 1024px) 500px, 100vw"
                  />
                ) : (
                  <div className="flex h-60 items-center justify-center bg-charcoal/5 text-charcoal/50">Sem imagem</div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
