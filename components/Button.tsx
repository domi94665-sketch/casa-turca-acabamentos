'use client';

import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef } from 'react';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full font-semibold uppercase tracking-[0.22em] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-night',
  {
    variants: {
      variant: {
        primary: 'bg-teal text-midnight hover:bg-[#3bd7cf]',
        secondary: 'bg-transparent border border-teal/50 text-teal hover:bg-teal/10',
        ghost: 'bg-white/5 text-white hover:bg-white/10',
      },
      size: {
        default: 'px-6 py-2.5 text-[11px]',
        sm: 'px-4 py-2 text-[10px]',
        lg: 'px-8 py-3 text-xs',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'default',
    },
  },
);

type ButtonAsButton = ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type ButtonAsLink = AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };

type ButtonProps = {
  className?: string;
} & VariantProps<typeof buttonVariants> & (ButtonAsButton | ButtonAsLink);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, href, ...props }, ref) => {
    const composedClassName = cn(buttonVariants({ variant, size }), className);

    if (href) {
      return (
        <Link
          ref={ref as never}
          href={href}
          className={composedClassName}
          {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
        />
      );
    }

    return (
      <button
        ref={ref as never}
        className={composedClassName}
        {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
      />
    );
  },
);

Button.displayName = 'Button';

export { Button, buttonVariants };
