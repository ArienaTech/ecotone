import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
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
