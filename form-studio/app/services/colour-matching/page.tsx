import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Colour Matching | Precision Facade Colour Reproduction',
  description:
    'ECOTONE\'s precision colour matching service reproduces any hue to exact specification — ideal for heritage restorations, brand-standard facades and seamless repairs across the Gulf.',
  alternates: { canonical: '/services/colour-matching' },
  openGraph: {
    url: '/services/colour-matching',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Colour%20by%20Design/Custom%20Colour%20Solution.jpg',
      width: 1200,
      height: 630,
      alt: 'Custom colour solution — ECOTONE precision colour matching',
    }],
  },
};

export default function ColourMatchingPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Precision Colour Solutions
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px, 5.5vw, 80px)', color: '#ffffff', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Colour Matching
            </h1>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.65 }}>
              We offer colour matching services that repair, restore and rejuvenate brick, block, mortar and concrete building materials.
            </p>
          </div>
        </section>

        <section style={{ background: '#0a0a0a', padding: 'clamp(60px,8vh,100px) 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }} className="about-grid two-col">
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(24px, 2.5vw, 40px)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  Before & After Transformations
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px' }}>
                  Our products and applications aim to deliver stunningly sustainable results – an enhanced aesthetic appeal that lasts the test of time. See the remarkable results of our colour matching expertise.
                </p>

                {/* Before/After placeholder */}
                <div style={{ width: '100%', height: '280px', background: 'linear-gradient(90deg, #e8e5e0 50%, #c8e8d8 50%)', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', marginBottom: '20px' }}>
                  <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, right: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', color: '#909090', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Before</span>
                  </div>
                  <div style={{ position: 'absolute', left: '50%', top: 0, bottom: 0, right: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', color: '#8B6914', letterSpacing: '0.1em', textTransform: 'uppercase' }}>After</span>
                  </div>
                  <div style={{ width: '3px', height: '100%', background: '#8B6914', position: 'absolute', left: '50%' }} />
                </div>
              </div>

              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  Unique Environmentally-Friendly Emulsion Stains
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                    ECOTONE products and applications are not comparable to paint. We call them emulsion stains to differentiate them from the properties of paint that prevent building materials from being able to &lsquo;breathe&rsquo; making them prone to fading, cracking and peeling in the built environment.
                  </p>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                    Our ECOTONE emulsion stains are different. Each one provides a unique benefit based on building material application and desired finish. All have been scientifically formulated to preserve the breathability of existing surface materials making them an environmentally-friendly choice.
                  </p>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                    Our emulsion stains are manufactured locally and made to last in our environment. They make better use of raw materials, energy and water than paint alternatives. The result is not only sustainable but stunning!
                  </p>
                </div>
              </div>
            </div>

            {/* Case study */}
            <div style={{ background: '#141414', padding: 'clamp(24px,4vw,48px)', borderLeft: '4px solid #8B6914' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#8B6914', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                Case Study — Standard and Bespoke
              </span>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '22px', color: '#ffffff', marginBottom: '12px' }}>
                East Palm Beach Apartments, Gold Coast – QLD
              </h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7, marginBottom: '16px' }}>
                Builder: McNab Constructions | Developer: BluePoint Property | Architect: Archiodom
              </p>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                Said to be the benchmark in coastal living, our team restored the fair-faced concrete of this building, delivering a stunning, lasting finish that meets the demands of the coastal environment.
              </p>
            </div>

            <div style={{ marginTop: '48px', display: 'flex', gap: '16px' }}>
              <a href="/contact" style={{ display: 'inline-block', background: '#8B6914', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', padding: '14px 32px', textDecoration: 'none', textTransform: 'uppercase' }}>
                Get Colour Consultation
              </a>
              <a href="/ecotone-products" style={{ display: 'inline-block', background: 'transparent', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', padding: '14px 32px', border: '1.5px solid rgba(255,255,255,0.5)', textDecoration: 'none', textTransform: 'uppercase' }}>
                View Products
              </a>
            </div>
          </div>
        </section>

        <EnquiryForm />

      </main>
      <Footer />
    </div>
  );
}
