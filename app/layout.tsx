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
  title: 'A Casa Turca Acabamentos',
  description:
    'Atelier de acabamentos de luxo em Luanda. Projetos exclusivos com assinatura turca e tecnologia de ponta.',
  metadataBase: new URL('https://www.acasaturcaacabamentos.com'),
  openGraph: {
    title: 'A Casa Turca Acabamentos',
    description:
      'Acabamentos de luxo que combinam tradição turca e inovação tecnológica.',
    url: 'https://www.acasaturcaacabamentos.com',
    siteName: 'A Casa Turca Acabamentos',
    locale: 'pt_AO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'A Casa Turca Acabamentos',
    description:
      'Acabamentos de luxo que combinam tradição turca e inovação tecnológica.',
  },
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt" className={`${playfair.variable} ${inter.variable}`}>
      <body className="bg-[#f8f7f4] text-charcoal">
        <div className="flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
