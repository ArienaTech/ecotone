'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function BlogPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Insights & Expertise
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 96px)', color: '#ffffff', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '24px' }}>
              Our Blog
            </h1>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.65 }}>
              Expert insights, tips, and case studies on premium coating solutions and architectural finishes.
            </p>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '-2%', transform: 'translateY(-50%)', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(100px, 18vw, 280px)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
            BLOG
          </div>
        </section>

        {/* Blog listing */}
        <section style={{ background: '#f5f4f2', padding: '80px 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 340px', gap: '64px', alignItems: 'start' }} className="contact-grid two-col">

            <div>
              {/* Placeholder - no real Ecotone posts yet */}
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', padding: '48px', textAlign: 'center' }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '48px', color: '#e8e5e0', display: 'block', marginBottom: '16px' }}>✍</span>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '22px', color: '#0a0a0a', marginBottom: '12px' }}>
                  New Insights Coming Soon
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#606060', lineHeight: 1.7, maxWidth: '400px', margin: '0 auto' }}>
                  We&apos;re preparing expert articles on Gulf building coating solutions, architectural finishes, and sustainability. Subscribe below to be notified when we publish.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Newsletter */}
              <div style={{ background: '#8B6914', padding: '36px 28px' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '20px', color: '#ffffff', marginBottom: '12px' }}>
                  Stay Updated
                </h3>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.65, marginBottom: '20px' }}>
                  Subscribe to our newsletter to receive the latest updates, tips, and insights on premium coating solutions.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <input
                    type="email"
                    placeholder="Your email address"
                    style={{
                      width: '100%',
                      padding: '12px 14px',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 400,
                      fontSize: '14px',
                      color: '#0a0a0a',
                      background: '#ffffff',
                      border: 'none',
                      outline: 'none',
                    }}
                  />
                  <button
                    style={{
                      width: '100%',
                      padding: '12px',
                      background: '#0a0a0a',
                      color: '#ffffff',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 700,
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      border: 'none',
                      cursor: 'pointer',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>

              {/* Quick links */}
              <div style={{ background: '#ffffff', border: '1px solid #e5e5e5', padding: '28px' }}>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>
                  Our Services
                </h3>
                {[
                  { label: 'Colour By Design', href: '/services/colour-by-design' },
                  { label: 'Colour Matching', href: '/services/colour-matching' },
                  { label: 'Factory Finishes', href: '/services/factory-finishes' },
                  { label: 'Functional Coatings', href: '/services/functional-coatings' },
                  { label: 'Urban Infrastructure', href: '/services/urban-infrastructure' },
                  { label: 'Weather Defense', href: '/services/weather-proof-finishes' },
                ].map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    style={{ display: 'block', fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '14px', color: '#0a0a0a', textDecoration: 'none', padding: '8px 0', borderBottom: '1px solid #f0f0f0', transition: 'color 0.15s ease' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#8B6914')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#0a0a0a')}
                  >
                    {link.label} →
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
