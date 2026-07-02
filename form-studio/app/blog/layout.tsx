import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Blog | ECOTONE Arabia Insights',
  description:
    'Industry insights, coating technology updates and project stories from ECOTONE Arabia — the Gulf\'s leading facade coating specialists.',
  alternates: { canonical: '/blog' },
  openGraph: {
    url: '/blog',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Featured%20Projects/Modern%20Architecture.jpg',
      width: 1200,
      height: 630,
      alt: 'Modern architecture with ECOTONE coating — blog insights',
    }],
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
