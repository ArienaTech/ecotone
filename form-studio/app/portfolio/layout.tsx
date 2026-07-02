import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | ECOTONE Arabia',
  description:
    'Explore ECOTONE\'s portfolio of completed coating projects — luxury residential, commercial developments and landmark buildings across the Gulf.',
  alternates: { canonical: '/portfolio' },
  openGraph: {
    url: '/portfolio',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Featured%20Projects/Saint%20Moritz.jpg',
      width: 1200,
      height: 630,
      alt: 'Saint Moritz — ECOTONE featured portfolio project',
    }],
  },
};

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
