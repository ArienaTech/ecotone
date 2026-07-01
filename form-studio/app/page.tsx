import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoSection from '@/components/VideoSection';
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
      <main style={{ paddingTop: '64px' }}>
        <Hero />
        <VideoSection />
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
