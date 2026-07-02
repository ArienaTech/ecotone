import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';

export const metadata: Metadata = {
  title: 'Functional Coatings | Performance Facade Solutions',
  description:
    'ECOTONE functional coatings go beyond aesthetics — delivering anti-graffiti, anti-carbonation, waterproofing and thermal-barrier performance for demanding Gulf environments.',
  alternates: { canonical: '/services/functional-coatings' },
  openGraph: {
    url: '/services/functional-coatings',
    images: [{
      url: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Concrete%20Facades/Modern%20Infrastructure.jpeg',
      width: 1200,
      height: 630,
      alt: 'Modern infrastructure with ECOTONE functional coating',
    }],
  },
};

export default function FunctionalCoatingsPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Next Generation Protection
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px, 5.5vw, 80px)', color: '#ffffff', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Functional Coatings
            </h1>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.65 }}>
              Through ECOCLEAN coatings, we are moving our industry forward towards invisible self-cleaning coating systems that maintain the beauty of a surface while sustainably extending its life.
            </p>
          </div>
        </section>

        <section style={{ background: '#0a0a0a', padding: 'clamp(60px,8vh,100px) 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }} className="about-grid two-col">
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(24px, 2.5vw, 40px)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  The Benefits of ECOCLEAN Coatings
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '28px' }}>
                  Our ECOCLEAN coatings and systems are the next generation of functional and protective coatings that use photocatalyst and nanocatalyst technology to break down harmful compounds that come into contact with a coated surface. They have three main benefits in the built environment.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '28px' }}>
                  {[
                    { title: 'Anti-Carbonation', desc: 'Protects concrete from carbonation and weathering maintaining surface appearance and extending asset life.' },
                    { title: 'Graffiti Resistance', desc: 'Prevents graffiti from clinging to a coated surface avoiding the need for destructive and abrasive cleaning.' },
                    { title: 'Self-Cleaning', desc: 'Continuously breaks down harmful compounds on a surface reducing cleaning and maintenance costs.' },
                  ].map((benefit) => (
                    <div key={benefit.title} style={{ borderLeft: '3px solid #8B6914', paddingLeft: '16px' }}>
                      <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', color: '#ffffff', marginBottom: '6px' }}>{benefit.title}</h3>
                      <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{benefit.desc}</p>
                    </div>
                  ))}
                </div>
                <div style={{ background: '#F5EAD0', border: '1px solid #D4A838', padding: '16px' }}>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: '#664A0E', lineHeight: 1.65 }}>
                    The use of functional and protective coatings means surfaces and buildings look almost as good as new. Lifecycle and cleaning costs are significantly reduced in addition to building materials having extended life.
                  </p>
                </div>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  Endless Possibilities — Exterior to Interior
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px' }}>
                  Photocatalyst and nanocatalyst coatings are one of the most exciting innovations that have come out of the building industry. From an external building perspective, these coatings use the natural power of light to self-clean surfaces with the double benefit of extending the lifecycle of an asset AND reducing its maintenance costs.
                </p>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '28px' }}>
                  By working in the dark through nanotechnology, these coatings can also be used in the interior surfaces of buildings and transport systems including workplaces, schools, universities, hospitals, shopping centres, retail stores, apartment buildings, public toilets, hotels, airports, aeroplanes, buses, trams, and trains.
                </p>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }} className="inner-two-col">
                  <div>
                    <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>External Benefits</h4>
                    {['Maintains long-term appearance', 'Reduced lifecycle cost', 'Reduced cleaning cost', 'Longer asset life', 'Air purifying properties'].map((item) => (
                      <p key={item} style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#8B6914', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                      </p>
                    ))}
                  </div>
                  <div>
                    <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '12px' }}>Internal Benefits</h4>
                    {['Improved Internal Air Quality (IAQ)', 'Antiviral/antibacterial/anti-mould', 'Reduced maintenance/cleaning costs', 'Deodorising', 'Reduced VOCs'].map((item) => (
                      <p key={item} style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.6)', marginBottom: '8px', display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                        <span style={{ color: '#8B6914', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div style={{ background: '#141414', padding: 'clamp(24px,4vw,48px)', borderLeft: '4px solid #8B6914', marginBottom: '48px' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#8B6914', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                Project References
              </span>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '12px' }}>
                Architect: Carr | Builder: IB Projects
              </p>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>
                Case studies: Portsea Surf Life Saving Club – Victoria, Carlaw Park Student Village, East Apartments Palm Beach, Northern Territory Project
              </p>
            </div>

            <a href="/contact" style={{ display: 'inline-block', background: '#8B6914', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '14px 36px', textDecoration: 'none', textTransform: 'uppercase' }}>
              Enquire About Functional Coatings
            </a>
          </div>
        </section>

        <EnquiryForm />

      </main>
      <Footer />
    </div>
  );
}
