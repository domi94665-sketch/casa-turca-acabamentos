import Link from 'next/link';

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
}

export default function Button({
  variant = 'primary',
  href,
  onClick,
  children,
  className = '',
  disabled = false,
  type = 'button',
}: ButtonProps) {
  const baseStyles =
    'px-8 py-4 font-semibold rounded-full transition duration-300 inline-flex items-center justify-center gap-2';

  const variants = {
    primary: 'bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white shadow-lg shadow-[#1CA7A1]/20 hover:shadow-xl hover:shadow-[#1CA7A1]/30 hover:-translate-y-1',
    secondary: 'bg-[#D4AF37] hover:bg-[#D4AF37]/90 text-[#0f1115] shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:shadow-[#D4AF37]/30',
    outline: 'border border-[#1CA7A1] text-[#1CA7A1] hover:bg-[#1CA7A1]/10',
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${combinedClasses} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {children}
    </button>
  );
}
