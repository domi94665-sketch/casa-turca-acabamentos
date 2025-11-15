import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const siteUrl = 'https://www.casaturcaacabamentos.com';

export const metadata: Metadata = {
  title: 'Casa Turca Acabamentos — Design de luxo em Luanda',
  description:
    'Transformamos o seu espaço em um design de luxo, sem stress. Móveis sob medida, IA de design e gestão total de obra para residências e empresas.',
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: 'Casa Turca Acabamentos — Design de luxo em Luanda',
    description:
      'Projetos premium com móveis sob medida, tecnologia de IA e gestão chave na mão para clientes de alto padrão.',
    url: siteUrl,
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Turca Acabamentos — Design de luxo em Luanda',
    description:
      'Mobiliário sob medida, acabamentos premium e IA de design para transformar o seu espaço com elegância.',
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt" className={`${inter.variable} ${playfair.variable}`} suppressHydrationWarning>
      <body className="bg-night text-white antialiased">
        <div className="relative flex min-h-screen flex-col">
          <div
            className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(28,167,161,0.12),_transparent_58%),_radial-gradient(circle_at_bottom,_rgba(212,175,55,0.08),_transparent_62%)]"
            aria-hidden
          />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
