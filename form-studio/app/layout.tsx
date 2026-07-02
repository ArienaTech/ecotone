import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Ecotone | Colour For Life Coatings',
  description:
    'Long-lasting colour and functional coatings designed for the building and construction industry in Arabia. Stunningly sustainable, weather-resistant solutions.',
  keywords: 'colour coatings, functional coatings, building materials, sustainable coatings, architectural finishes, Arabia',
  manifest: '/manifest.json',
  icons: {
    icon: [{ url: '/icon.png', sizes: '1024x1024', type: 'image/png' }],
    apple: [{ url: '/icon.png', sizes: '1024x1024', type: 'image/png' }],
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
  themeColor: '#000000',
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
