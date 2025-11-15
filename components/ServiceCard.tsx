import type { ReactNode } from 'react';

interface ServiceCardProps {
  eyebrow: string;
  title: string;
  items: string[];
  accent?: 'teal' | 'emerald' | 'gold';
  footer?: ReactNode;
}

const accentMap: Record<NonNullable<ServiceCardProps['accent']>, string> = {
  teal: 'text-teal',
  emerald: 'text-emerald-300',
  gold: 'text-gold',
};

export default function ServiceCard({ eyebrow, title, items, accent = 'teal', footer }: ServiceCardProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm">
      <p className={`text-[11px] font-semibold uppercase tracking-[0.24em] ${accentMap[accent]}`}>{eyebrow}</p>
      <h3 className="text-sm font-semibold text-white sm:text-base">{title}</h3>
      <ul className="space-y-2 text-xs text-white/70">
        {items.map((item) => (
          <li key={item}>• {item}</li>
        ))}
      </ul>
      {footer ? <div className="text-xs text-white/60">{footer}</div> : null}
    </div>
  );
}
