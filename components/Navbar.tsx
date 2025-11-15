'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Button } from '@/components/Button';
import { cn } from '@/lib/utils';

const links = [
  { href: '/', label: 'Início' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portefólio' },
  { href: '/ia-studio', label: 'IA Studio' },
  { href: '/parceiros', label: 'Parcerias' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-night/85 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 md:py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-teal to-gold text-sm font-semibold text-midnight shadow-lg">
            CT
          </span>
          <span className="text-sm font-semibold uppercase tracking-[0.28em] text-white/80">
            Casa Turca
          </span>
        </Link>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/70 transition hover:border-teal/50 hover:text-white lg:hidden"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Alternar menu"
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>

        <ul className="hidden items-center gap-8 text-[11px] font-medium uppercase tracking-[0.22em] text-white/70 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'group relative pb-2 transition-colors hover:text-white',
                  pathname === link.href && 'text-white',
                )}
              >
                {link.label}
                <span
                  aria-hidden
                  className={cn(
                    'absolute inset-x-0 -bottom-0.5 h-[2px] origin-left scale-x-0 bg-gradient-to-r from-teal to-gold transition-transform duration-300',
                    pathname === link.href ? 'scale-x-100' : 'group-hover:scale-x-100',
                  )}
                />
              </Link>
            </li>
          ))}
          <li>
            <Button
              href="/contacto"
              variant="primary"
              className="shadow-[0_0_30px_rgba(28,167,161,0.35)]"
            >
              Agendar visita
            </Button>
          </li>
        </ul>
      </nav>

      {open && (
        <div className="border-t border-white/5 bg-night/95 backdrop-blur lg:hidden">
          <ul className="space-y-2 px-4 py-4 text-[11px] uppercase tracking-[0.24em] text-white/70">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    'block rounded-lg px-3 py-2 transition hover:bg-white/10 hover:text-white',
                    pathname === link.href && 'text-white',
                  )}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Button href="/contacto" className="w-full justify-center" onClick={() => setOpen(false)}>
                Falar com a equipa
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
