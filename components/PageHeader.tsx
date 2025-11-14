interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <div className="mx-auto mb-12 max-w-4xl text-center">
      <h1 className="font-serif text-4xl md:text-5xl text-charcoal">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-4 text-base text-charcoal/70 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
