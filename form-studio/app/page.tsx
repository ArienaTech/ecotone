import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import CaseStudies from '@/components/CaseStudies';
import Process from '@/components/Process';
import Pricing from '@/components/Pricing';
import CtaSection from '@/components/CtaSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '60px' }}>
        <Hero />
        <Services />
        <CaseStudies />
        <Process />
        <Pricing />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
