import type { Project } from '@/lib/types';
import PortfolioCard from './PortfolioCard';

interface PortfolioGridProps {
  projects: Project[];
}

export default function PortfolioGrid({ projects }: PortfolioGridProps) {
  if (!projects.length) {
    return (
      <div className="rounded-3xl border border-dashed border-gold/40 bg-white/70 p-12 text-center text-charcoal/60">
        Não existem projetos nesta categoria por enquanto.
      </div>
    );
  }

  return (
    <div className="grid gap-10 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <PortfolioCard key={project._id} project={project} />
      ))}
    </div>
  );
}
