import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ECOTONE Products | Premium Coating Systems',
  description:
    'Browse ECOTONE\'s range of premium mineral-based coating products — eco-certified, climate-tested and engineered for 25-year performance in Gulf conditions.',
  alternates: { canonical: '/ecotone-products' },
  openGraph: {
    url: '/ecotone-products',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Factory%20Finishes/Factory%20Finish.jpg',
      width: 1200,
      height: 630,
      alt: 'ECOTONE factory finish coating product',
    }],
  },
};

export default function EcotoneProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
