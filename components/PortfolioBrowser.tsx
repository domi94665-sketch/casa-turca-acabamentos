'use client';

import { useMemo, useState } from 'react';
import type { Category, Project } from '@/lib/types';
import CategoryFilter from './CategoryFilter';
import PortfolioGrid from './PortfolioGrid';

interface PortfolioBrowserProps {
  projects: Project[];
  categories: Category[];
}

export default function PortfolioBrowser({ projects, categories }: PortfolioBrowserProps) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const filtered = useMemo(() => {
    if (!activeCategory) return projects;
    return projects.filter((project) => project.category?.slug.current === activeCategory);
  }, [projects, activeCategory]);

  return (
    <div className="space-y-10">
      <CategoryFilter categories={categories} onChange={setActiveCategory} />
      <PortfolioGrid projects={filtered} />
    </div>
  );
}
