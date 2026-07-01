'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = ['All', 'Colour By Design', 'Colour Matching', 'Factory Finishes', 'Functional Coatings', 'Urban Infrastructure', 'Weather Defense'];

const galleryItems = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  category: categories[(i % (categories.length - 1)) + 1],
  label: `Project ${i + 1}`,
}));

export default function GalleryPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#D4A96A', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Visual Showcase
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 96px)', color: '#ffffff', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '24px' }}>
              Gallery
            </h1>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.65 }}>
              A visual showcase of ECOTONE&apos;s premium coating solutions across our project portfolio.
            </p>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '-2%', transform: 'translateY(-50%)', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(100px, 18vw, 280px)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
            GALLERY
          </div>
        </section>

        {/* Category filter */}
        <section style={{ background: '#f5f4f2', padding: '32px 6%', borderBottom: '1px solid #e5e5e5' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '8px 18px',
                  background: cat === 'All' ? '#A78048' : 'transparent',
                  color: cat === 'All' ? '#ffffff' : '#0a0a0a',
                  border: '1px solid',
                  borderColor: cat === 'All' ? '#A78048' : '#d6d6d6',
                  cursor: 'pointer',
                  transition: 'all 0.15s ease',
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Gallery grid */}
        <section style={{ background: '#f5f4f2', padding: '48px 6% 80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '4px',
              }}
              className="materials-grid four-col"
            >
              {galleryItems.map((item, i) => (
                <div
                  key={item.id}
                  style={{
                    background: '#e8e5e0',
                    aspectRatio: i % 5 === 0 ? '1 / 1.4' : '1 / 1',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: '16px',
                    position: 'relative',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    transition: 'transform 0.2s ease',
                    gridRow: i % 5 === 0 ? 'span 1' : 'auto',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.02)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '11px', color: '#a0a0a0', letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: '24px' }}>
                    Image {item.id}
                  </span>
                  <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '10px', color: '#ffffff', background: '#A78048', padding: '3px 10px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {item.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#A78048', padding: '60px 6%', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 40px)', color: '#ffffff', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Want to See More?
          </h2>
          <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.8)', marginBottom: '28px' }}>
            Explore our full project portfolio or contact us to discuss your project.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/portfolio" style={{ display: 'inline-block', background: '#ffffff', color: '#A78048', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '13px 32px', textDecoration: 'none', textTransform: 'uppercase' }}>
              View Portfolio
            </a>
            <a href="/contact" style={{ display: 'inline-block', background: 'transparent', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '13px 32px', border: '1.5px solid rgba(255,255,255,0.5)', textDecoration: 'none', textTransform: 'uppercase' }}>
              Project Enquiry
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
