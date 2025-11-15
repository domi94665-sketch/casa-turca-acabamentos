import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  align?: 'left' | 'center';
  className?: string;
};

export default function SectionHeader({ eyebrow, title, description, align = 'left', className }: SectionHeaderProps) {
  return (
    <div
      className={cn(
        'space-y-3',
        align === 'center' ? 'text-center mx-auto max-w-3xl' : '',
        className,
      )}
    >
      {eyebrow ? (
        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-teal/80">{eyebrow}</p>
      ) : null}
      <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl md:text-4xl">{title}</h2>
      {description ? (
        <p className="text-sm text-white/60 sm:text-base">{description}</p>
      ) : null}
    </div>
  );
}
