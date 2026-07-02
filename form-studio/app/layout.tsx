import type { Metadata, Viewport } from 'next';
import './globals.css';

const OG_IMAGE = {
  url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Featured%20Projects/Saint%20Moritz%20Esplanade.jpg',
  width: 1200,
  height: 630,
  alt: 'Saint Moritz Esplanade — ECOTONE premium facade coating project',
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://ecotone.ae'),
  title: {
    default: 'ECOTONE Arabia | Premium Facade Coatings for the Gulf',
    template: '%s | ECOTONE Arabia',
  },
  description:
    'ECOTONE Arabia delivers mineral-based facade coatings engineered for 25-year durability and eco-certified performance — trusted by architects, developers and contractors across the Gulf.',
  keywords: [
    'facade coatings', 'architectural coatings', 'mineral coatings', 'concrete coatings',
    'cladding finishes', 'colour by design', 'factory finishes', 'functional coatings',
    'weather proof coatings', 'eco-certified coatings', 'Gulf coatings', 'UAE coatings',
    'Saudi Arabia coatings', 'sustainable coatings', '25 year guarantee', 'ECOTONE',
  ],
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
  formatDetection: { telephone: false },
  openGraph: {
    type: 'website',
    locale: 'en_AE',
    siteName: 'ECOTONE Arabia',
    title: 'ECOTONE Arabia | Premium Facade Coatings for the Gulf',
    description:
      'ECOTONE Arabia delivers mineral-based facade coatings engineered for 25-year durability and eco-certified performance — trusted by architects, developers and contractors across the Gulf.',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@ecotone_arabia',
    title: 'ECOTONE Arabia | Premium Facade Coatings for the Gulf',
    description:
      'Mineral-based facade coatings engineered for 25-year durability. Eco-certified. Gulf climate proven.',
    images: [OG_IMAGE.url],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  themeColor: '#0a0a0a',
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
