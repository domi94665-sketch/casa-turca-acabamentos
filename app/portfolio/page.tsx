import PageHeader from '@/components/PageHeader';
import PortfolioBrowser from '@/components/PortfolioBrowser';
import { sanityClient } from '@/lib/sanity.client';
import { ALL_PROJECTS_QUERY, CATEGORIES_QUERY } from '@/lib/queries';
import type { Category, Project } from '@/lib/types';
import { fallbackCategories, fallbackProjects } from '@/lib/mock-data';

export const revalidate = 60;

export default async function PortfolioPage() {
  let projects: Project[] = fallbackProjects;
  let categories: Category[] = fallbackCategories;

  try {
    const [fetchedProjects, fetchedCategories] = await Promise.all([
      sanityClient.fetch<Project[]>(ALL_PROJECTS_QUERY).catch(() => null),
      sanityClient.fetch<Category[]>(CATEGORIES_QUERY).catch(() => null),
    ]);

    if (Array.isArray(fetchedProjects) && fetchedProjects.length > 0) {
      projects = fetchedProjects;
    }
    if (Array.isArray(fetchedCategories) && fetchedCategories.length > 0) {
      categories = fetchedCategories;
    }
  } catch (error) {
    console.log('Portfolio fetch error, using fallback data:', error);
  }

  return (
    <div className="mx-auto max-w-6xl space-y-16 px-6 py-20">
      <PageHeader
        title="Portefólio de Acabamentos Exclusivos"
        subtitle="Explore uma seleção de ambientes residenciais e corporativos moldados ao detalhe pela nossa equipa."
      />
      <PortfolioBrowser
        projects={projects}
        categories={categories}
      />
    </div>
  );
}
