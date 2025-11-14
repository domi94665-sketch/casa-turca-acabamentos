import PageHeader from '@/components/PageHeader';
import PortfolioBrowser from '@/components/PortfolioBrowser';
import { sanityClient } from '@/lib/sanity.client';
import { ALL_PROJECTS_QUERY, CATEGORIES_QUERY } from '@/lib/queries';
import type { Category, Project } from '@/lib/types';
import { fallbackCategories, fallbackProjects } from '@/lib/mock-data';

export const revalidate = 60;

export default async function PortfolioPage() {
  const [projects, categories] = await Promise.all([
    sanityClient.fetch<Project[]>(ALL_PROJECTS_QUERY),
    sanityClient.fetch<Category[]>(CATEGORIES_QUERY),
  ]);

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-20">
      <PageHeader
        title="Portefólio de Acabamentos Exclusivos"
        subtitle="Explore uma seleção de ambientes residenciais e corporativos moldados ao detalhe pela nossa equipa."
      />
      <PortfolioBrowser
        projects={Array.isArray(projects) && projects.length ? projects : fallbackProjects}
        categories={Array.isArray(categories) && categories.length ? categories : fallbackCategories}
      />
    </div>
  );
}
