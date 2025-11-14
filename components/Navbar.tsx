'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

const links = [
  { href: '/', label: 'Início' },
  { href: '/portfolio', label: 'Portefólio' },
  { href: '/designer-ia', label: 'Designer IA' },
  { href: '/ferramenta-ia', label: 'Ferramenta IA' },
  { href: '/contactos', label: 'Contactos' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#f8f7f4]/90 backdrop-blur border-b border-gold/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span
            className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-gold via-[#f6d67e] to-gold text-sm font-semibold text-charcoal shadow"
            aria-hidden
          >
            CT
          </span>
          <span className="font-serif text-xl tracking-wide text-charcoal">
            A Casa Turca
          </span>
        </Link>
        <button
          className="rounded-full border border-charcoal/10 p-2 text-charcoal transition hover:border-gold hover:text-gold lg:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
        </button>
        <ul className="hidden items-center gap-8 text-sm font-medium uppercase tracking-[0.18em] text-charcoal lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`group relative pb-2 transition-colors hover:text-gold ${
                  pathname === link.href ? 'text-gold' : ''
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-[2px] origin-left scale-x-0 bg-gold transition-transform duration-300 ${
                    pathname === link.href ? 'scale-x-100' : 'group-hover:scale-x-100'
                  }`}
                  aria-hidden
                />
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/designer-ia"
              className="rounded-full border border-gold bg-gold px-4 py-2 text-xs font-semibold text-charcoal shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Consultoria Premium
            </Link>
          </li>
        </ul>
      </nav>
      {open && (
        <div className="border-t border-gold/10 bg-[#f8f7f4]/95 backdrop-blur lg:hidden">
          <ul className="space-y-2 px-6 py-4 text-sm uppercase tracking-[0.2em] text-charcoal">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block rounded-md px-3 py-2 transition hover:bg-gold/10 hover:text-gold ${
                    pathname === link.href ? 'text-gold' : ''
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/designer-ia"
                onClick={() => setOpen(false)}
                className="block rounded-full border border-gold bg-gold px-4 py-2 text-center text-xs font-semibold text-charcoal shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
              >
                Consultoria Premium
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
