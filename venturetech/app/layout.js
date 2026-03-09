import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'VentureTech — Vi bygger teknologiselskaper sammen med gründere',
  description: 'VentureTech er et norsk venture studio som kombinerer kapital, utviklere og AI-kompetanse for å ta ideer fra null til skalerbart selskap.',
  metadataBase: new URL('https://venturetech.no'),
  openGraph: {
    title: 'VentureTech — Norges venture studio',
    description: 'Vi bygger teknologiselskaper sammen med Norges beste gründere.',
    url: 'https://venturetech.no',
    siteName: 'VentureTech',
    locale: 'nb_NO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="nb">
      <body className="font-body antialiased">
        <div className="noise-overlay" aria-hidden="true" />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
