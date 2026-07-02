import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Coating Services | ECOTONE Arabia',
  description:
    'Complete coating solutions — from precision colour matching and Colour By Design to factory finishes, functional coatings, urban infrastructure and weather-proof facade systems.',
  alternates: { canonical: '/services' },
  openGraph: {
    url: '/services',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Concrete%20Facades/Half%20Moon%20Bay%20Marina.png',
      width: 1200,
      height: 630,
      alt: 'Half Moon Bay Marina — ECOTONE concrete facade coating',
    }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
