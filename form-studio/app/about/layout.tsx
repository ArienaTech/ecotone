import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About ECOTONE | Australian Innovation in the Gulf',
  description:
    'For nearly three decades ECOTONE has led architectural coating excellence in Australia and New Zealand. Now bringing proven mineral-based facade technology to the Gulf.',
  alternates: { canonical: '/about' },
  openGraph: {
    url: '/about',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Concrete%20Facades/Contemporary%20Architecture.jpeg',
      width: 1200,
      height: 630,
      alt: 'Contemporary architecture with ECOTONE facade coating',
    }],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
