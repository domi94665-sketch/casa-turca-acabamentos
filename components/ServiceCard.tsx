import { ReactNode } from 'react';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  features?: string[];
  children?: ReactNode;
}

export default function ServiceCard({
  icon,
  title,
  description,
  features,
  children,
}: ServiceCardProps) {
  return (
    <div className="group relative p-8 rounded-xl border border-[#1CA7A1]/20 hover:border-[#1CA7A1]/50 bg-gradient-to-br from-[#1CA7A1]/5 to-transparent hover:from-[#1CA7A1]/10 transition duration-300">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1CA7A1]/0 to-[#D4AF37]/0 group-hover:from-[#1CA7A1]/5 group-hover:to-[#D4AF37]/5 rounded-xl transition duration-300" />

      <div className="relative">
        <div className="w-12 h-12 rounded-lg bg-[#1CA7A1]/20 flex items-center justify-center mb-4 text-2xl">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-4 leading-relaxed">{description}</p>

        {features && features.length > 0 && (
          <ul className="space-y-2 text-sm text-gray-500">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1CA7A1]" />
                {feature}
              </li>
            ))}
          </ul>
        )}

        {children}
      </div>
    </div>
  );
}
