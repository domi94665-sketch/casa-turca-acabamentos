'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '/', label: 'Home' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/servicos', label: 'Serviços' },
  { href: '/portfolio', label: 'Portfólio' },
  { href: '/ia-studio', label: 'IA Studio' },
  { href: '/parceiros', label: 'Parceiros' },
  { href: '/contacto', label: 'Contacto' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-[#0f1115] via-[#0f1115]/95 to-[#0f1115]/80 backdrop-blur-md border-b border-[#1CA7A1]/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#1CA7A1] to-[#D4AF37] flex items-center justify-center font-bold text-white">
            CT
          </div>
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-white">Casa Turca</p>
            <p className="text-xs text-[#1CA7A1]">Acabamentos</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <button
          className="lg:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <ul className="hidden items-center gap-8 text-sm font-semibold text-gray-300 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative pb-2 transition-colors duration-300 ${
                  pathname === link.href ? 'text-[#1CA7A1]' : 'hover:text-[#1CA7A1]'
                }`}
              >
                {link.label}
                <span
                  className={`absolute inset-x-0 -bottom-1 h-[2px] bg-[#1CA7A1] transition-transform duration-300 origin-left ${
                    pathname === link.href ? 'scale-x-100' : 'scale-x-0 hover:scale-x-100'
                  }`}
                  aria-hidden
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <Link
          href="/contacto"
          className="hidden lg:block px-6 py-2 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white text-sm font-semibold rounded-full transition duration-300 shadow-lg shadow-[#1CA7A1]/20"
        >
          Agendar Visita
        </Link>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-[#0f1115] border-b border-[#1CA7A1]/10">
          <ul className="space-y-2 px-6 py-6 text-sm font-semibold text-gray-300">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 rounded-md transition duration-300 ${
                    pathname === link.href
                      ? 'bg-[#1CA7A1]/20 text-[#1CA7A1]'
                      : 'hover:bg-[#1CA7A1]/10 hover:text-[#1CA7A1]'
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contacto"
                onClick={() => setOpen(false)}
                className="block w-full px-6 py-2 bg-[#1CA7A1] hover:bg-[#1CA7A1]/90 text-white text-sm font-semibold rounded-full text-center transition duration-300 mt-4"
              >
                Agendar Visita
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
