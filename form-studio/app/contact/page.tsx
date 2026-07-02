import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Get in Touch
            </span>
            <h1
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 800,
                fontSize: 'clamp(40px, 6vw, 96px)',
                color: '#ffffff',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              Contact Us
            </h1>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '18px',
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '600px',
                lineHeight: 1.65,
              }}
            >
              Get in touch with our team for expert coating solutions and project consultation across the Middle East.
            </p>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '-5%', transform: 'translateY(-50%)', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(100px, 18vw, 280px)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
            CONTACT
          </div>
        </section>

        {/* Contact info + form */}
        <section style={{ background: '#000000', padding: 'clamp(60px,8vh,100px) 6%' }}>
          <div
            style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '80px', alignItems: 'start' }}
            className="contact-grid two-col"
          >
            {/* Info panel */}
            <div>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '24px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '32px' }}>
                Contact Information
              </h2>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
                <div>
                  <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#8B6914', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Phone
                  </span>
                  <a href="tel:+971558934401" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', color: '#ffffff', textDecoration: 'none', display: 'block', marginBottom: '4px' }}>
                    UAE: +971 55 893 4401
                  </a>
                  <a href="tel:+966501109913" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', color: '#ffffff', textDecoration: 'none', display: 'block' }}>
                    Saudi Arabia: +966 50 110 9913
                  </a>
                </div>

                <div>
                  <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#8B6914', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Email
                  </span>
                  <a href="mailto:info@ecotonearabia.com" style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '15px', color: '#ffffff', textDecoration: 'none' }}>
                    info@ecotonearabia.com
                  </a>
                </div>

                <div>
                  <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#8B6914', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Location
                  </span>
                  <p style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
                    Building A1 – Dubai Silicon Oasis<br />Dubai, United Arab Emirates
                  </p>
                </div>

                <div>
                  <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#8B6914', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Service Areas
                  </span>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    {['UAE', 'Saudi Arabia', 'Bahrain'].map((region) => (
                      <span
                        key={region}
                        style={{
                          background: '#8B6914',
                          color: '#ffffff',
                          fontFamily: 'Inter',
                          fontWeight: 500,
                          fontSize: '11px',
                          letterSpacing: '0.08em',
                          padding: '5px 12px',
                        }}
                      >
                        {region}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Form */}
            <ContactForm />
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
