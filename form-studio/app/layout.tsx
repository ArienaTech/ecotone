import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ecotone | Colour For Life Coatings',
  description:
    'Long-lasting colour and functional coatings designed for the building and construction industry in Arabia. Stunningly sustainable, weather-resistant solutions.',
  keywords: 'colour coatings, functional coatings, building materials, sustainable coatings, architectural finishes, Arabia',
  manifest: '/manifest.json',
  icons: {
    icon: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Ecotone-logo.png',
    apple: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Ecotone-logo.png',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'ECOTONE Arabia',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    title: 'Ecotone | Colour For Life Coatings',
    description:
      'Long-lasting colour and functional coatings designed for the building and construction industry in Arabia. Stunningly sustainable, weather-resistant solutions.',
    siteName: 'ECOTONE Arabia',
  },
};

export const viewport: Viewport = {
  themeColor: '#f5f4f2',
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
