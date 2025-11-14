import Image from 'next/image';
import Link from 'next/link';
import type { Project } from '@/lib/types';

interface PortfolioCardProps {
  project: Project;
}

export default function PortfolioCard({ project }: PortfolioCardProps) {
  return (
    <Link
      href={`/portfolio/${project.slug.current}`}
      className="group block overflow-hidden rounded-3xl border border-gold/20 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {project.featuredImage?.asset?.url ? (
          <Image
            src={project.featuredImage.asset.url}
            alt={project.featuredImage.alt || project.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1024px) 400px, 100vw"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-charcoal/5 text-charcoal/50">
            Sem imagem
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/0 opacity-0 transition duration-500 group-hover:opacity-100" />
      </div>
      <div className="space-y-3 px-6 py-6">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.3em] text-charcoal/60">
          <span>{project.category?.title ?? 'Projeto'}</span>
          <span className="text-gold">Explorar</span>
        </div>
        <h3 className="font-serif text-2xl text-charcoal">{project.title}</h3>
        {project.description && (
          <p className="text-sm text-charcoal/70">
            {project.description.length > 140
              ? `${project.description.slice(0, 137)}…`
              : project.description}
          </p>
        )}
      </div>
    </Link>
  );
}
