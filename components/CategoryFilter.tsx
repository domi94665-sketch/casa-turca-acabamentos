'use client';

import type { Category } from '@/lib/types';
import { useMemo, useState } from 'react';

interface CategoryFilterProps {
  categories: Category[];
  onChange: (slug: string | null) => void;
}

export default function CategoryFilter({ categories, onChange }: CategoryFilterProps) {
  const [active, setActive] = useState<string | null>(null);

  const options = useMemo(
    () => [{ _id: 'all', title: 'Todos', slug: { current: '' } }, ...categories],
    [categories],
  );

  return (
    <div className="flex flex-wrap items-center gap-3">
      {options.map((category) => {
        const slug = category.slug.current || null;
        const isActive = active === slug || (!active && slug === null);
        return (
          <button
            key={category._id}
            onClick={() => {
              const next = slug === null ? null : slug;
              setActive(next);
              onChange(next);
            }}
            className={`rounded-full border px-5 py-2 text-sm uppercase tracking-[0.2em] transition ${
              isActive
                ? 'border-gold bg-gold text-charcoal shadow-lg'
                : 'border-charcoal/10 bg-white text-charcoal/70 hover:border-gold/60 hover:text-charcoal'
            }`}
          >
            {category.title}
          </button>
        );
      })}
    </div>
  );
}
