import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata: Metadata = {
  title: 'Casa Turca Acabamentos | Design Premium & Interiores de Luxo',
  description:
    'Transformamos espaços em design de luxo, sem stress. Móveis sob medida, design de interiores, instalação profissional e IA Studio em Luanda, Angola.',
  keywords: [
    'acabamentos premium',
    'design de interiores',
    'móveis sob medida',
    'Luanda',
    'Angola',
    'design luxo',
  ],
  metadataBase: new URL('https://www.casaturca-acabamentos.com'),
  openGraph: {
    title: 'Casa Turca Acabamentos | Design Premium & Interiores de Luxo',
    description:
      'Transformamos espaços em design de luxo, sem stress. Acabamentos premium, design inteligente, gestão total de obra.',
    url: 'https://www.casaturca-acabamentos.com',
    siteName: 'Casa Turca Acabamentos',
    locale: 'pt_AO',
    type: 'website',
    images: [
      {
        url: 'https://www.casaturca-acabamentos.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Casa Turca Acabamentos - Design Premium',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Casa Turca Acabamentos | Design Premium',
    description:
      'Transformamos espaços em design de luxo, sem stress. Acabamentos premium em Luanda.',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#1CA7A1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className="bg-[#0f1115] text-gray-300">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
