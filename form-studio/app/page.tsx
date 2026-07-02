import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';

export const metadata: Metadata = {
  title: 'ECOTONE Arabia | Premium Facade Coatings for the Gulf',
  description:
    'Mineral-based facade coatings engineered for 25-year durability and eco-certified performance. Trusted by architects, developers and contractors across UAE, Saudi Arabia and Bahrain.',
  alternates: { canonical: '/' },
  openGraph: {
    url: '/',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Featured%20Projects/Saint%20Moritz%20Esplanade.jpg',
      width: 1200,
      height: 630,
      alt: 'Saint Moritz Esplanade — ECOTONE premium facade coating project',
    }],
  },
};
import AboutSection from '@/components/AboutSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import MaterialsSection from '@/components/MaterialsSection';
import ComparisonSection from '@/components/ComparisonSection';
import EnquiryForm from '@/components/EnquiryForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <FeaturedProjects />
        <MaterialsSection />
        <ComparisonSection />
        <EnquiryForm />
      </main>
      <Footer />
    </div>
  );
}
