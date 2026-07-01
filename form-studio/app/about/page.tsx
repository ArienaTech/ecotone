'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sections = [
  {
    label: 'Who We Are',
    heading: 'Australian Coating Excellence in the Middle East',
    paragraphs: [
      'Since 2023, ECOTONE Arabia has served as the exclusive authorized distributor of ECOTONE coating systems in the Middle East. We\'ve delivered 25 years of Australian coating innovation to the Gulf region with technology perfected in Australia\'s extreme outback—conditions remarkably similar to your climate challenges.',
      'With 1000+ projects completed and proven performance in 50°C+ temperatures, ECOTONE now protects Gulf buildings with the same 25-year guarantee. We provide genuine Australian coating systems, technical support in UAE and Saudi Arabia, and regional expertise backed by ECOTONE Australia\'s full warranty.',
    ],
  },
  {
    label: 'Our Middle East Commitment',
    heading: 'Established 2023. Built for the Long Term.',
    paragraphs: [
      'We provide complete ECOTONE coating solutions across the Gulf region. We understand the unique challenges of the Middle East environment—temperatures and extreme thermal cycling—backed by solutions proven in Australia\'s comparable outback conditions.',
      'Our team brings familiarity with Gulf architectural preferences and regional green building standards. Every project receives the same attention to detail, quality standards, and 25-year performance guarantees that made ECOTONE the coating of choice for Australia\'s most demanding architectural projects.',
    ],
  },
  {
    label: 'Why Choose ECOTONE Arabia',
    heading: 'Australian Innovation. Middle East Expertise.',
    paragraphs: [
      'Twenty-five years of Australian coating innovation meets local Gulf expertise. Our technology was perfected in extreme outback conditions matching your climate challenges, not the milder environments most suppliers design for. Dubai-based operations with UAE and KSA technical support deliver local responsiveness backed by global technology leadership.',
      'From colour matching and custom finishes to functional protective coatings, we provide complete solutions with a 25-year warranty guaranteeing no cracking, peeling, or fading. Traditional suppliers sell paint—we deliver guaranteed performance with local support.',
    ],
  },
];

const stats = [
  { val: '2023', label: 'Est. Middle East' },
  { val: '25yr', label: 'Performance Guarantee' },
  { val: '1000+', label: 'Projects Globally' },
  { val: '3', label: 'Countries Served' },
];

export default function AboutPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section
          style={{
            background: '#0a0a0a',
            padding: '100px 6% 80px',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span
              style={{
                fontFamily: 'Inter',
                fontWeight: 500,
                fontSize: '11px',
                color: '#74c69d',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                display: 'block',
                marginBottom: '20px',
              }}
            >
              Our Story — Australian coating excellence in the Middle East
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
              About Us
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
              A journey of innovation, quality, and architectural excellence delivering Australian coating technology to the Middle East.
            </p>
          </div>
          <div
            style={{
              position: 'absolute',
              top: '50%',
              right: '-5%',
              transform: 'translateY(-50%)',
              fontFamily: 'Space Grotesk',
              fontWeight: 800,
              fontSize: 'clamp(120px, 20vw, 320px)',
              color: 'rgba(255,255,255,0.03)',
              letterSpacing: '-0.04em',
              userSelect: 'none',
              pointerEvents: 'none',
              lineHeight: 1,
            }}
          >
            ABOUT
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ background: '#2d6a4f', padding: '40px 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }} className="stats-bar">
            {stats.map((s) => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '32px', color: '#ffffff', display: 'block', letterSpacing: '-0.02em' }}>
                  {s.val}
                </span>
                <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Content sections */}
        {sections.map((section, i) => (
          <section
            key={section.label}
            style={{
              background: i % 2 === 0 ? '#ffffff' : '#f5f4f2',
              padding: '100px 6%',
            }}
          >
            <div
              style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: '1fr 2fr',
                gap: '80px',
                alignItems: 'start',
              }}
              className="about-grid"
            >
              <div>
                <span
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 500,
                    fontSize: '11px',
                    color: '#2d6a4f',
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    display: 'block',
                    marginBottom: '16px',
                  }}
                >
                  {section.label}
                </span>
                <h2
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 800,
                    fontSize: 'clamp(24px, 2.5vw, 40px)',
                    color: '#0a0a0a',
                    lineHeight: 1.1,
                    letterSpacing: '-0.02em',
                    textTransform: 'uppercase',
                  }}
                >
                  {section.heading}
                </h2>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {section.paragraphs.map((p, pi) => (
                  <p
                    key={pi}
                    style={{
                      fontFamily: 'Inter',
                      fontWeight: 400,
                      fontSize: '16px',
                      color: '#505050',
                      lineHeight: 1.75,
                    }}
                  >
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </section>
        ))}

        {/* CTA section */}
        <section style={{ background: '#0a0a0a', padding: '100px 6%', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 800,
                fontSize: 'clamp(28px, 3.5vw, 52px)',
                color: '#ffffff',
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              Work With Us
            </h2>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '16px',
                color: 'rgba(255,255,255,0.6)',
                lineHeight: 1.7,
                marginBottom: '36px',
              }}
            >
              Ready to bring Australian coating technology to your Gulf project? Get in touch with our team.
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a
                href="/contact"
                style={{
                  background: '#2d6a4f',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  padding: '14px 36px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                Contact Us
              </a>
              <a
                href="/portfolio"
                style={{
                  background: 'transparent',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  padding: '14px 36px',
                  border: '1.5px solid rgba(255,255,255,0.4)',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                View Portfolio
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
