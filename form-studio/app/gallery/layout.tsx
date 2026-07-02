import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery | ECOTONE Arabia Project Showcase',
  description:
    'A visual showcase of ECOTONE\'s premium coating solutions — concrete facades, cladding finishes, colour by design, factory finishes and featured projects across the Gulf.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    url: '/gallery',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Featured%20Projects/Architectural%20Excellence.jpg',
      width: 1200,
      height: 630,
      alt: 'Architectural Excellence — ECOTONE featured project',
    }],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
