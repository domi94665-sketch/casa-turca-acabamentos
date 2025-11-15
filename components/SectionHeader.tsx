interface SectionHeaderProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export default function SectionHeader({
  subtitle,
  title,
  description,
  centered = true,
}: SectionHeaderProps) {
  const containerClass = centered ? 'text-center' : '';
  const maxWidthClass = centered ? 'max-w-2xl mx-auto' : '';

  return (
    <div className={`${containerClass} mb-16 ${maxWidthClass}`}>
      {subtitle && (
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#D4AF37] mb-4">
          {subtitle}
        </p>
      )}
      <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">{title}</h2>
      {description && <p className="text-lg text-gray-300 leading-relaxed">{description}</p>}
    </div>
  );
}
