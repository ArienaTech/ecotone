'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = ['All', 'Colour By Design', 'Colour Matching', 'Factory Finishes', 'Functional Coatings', 'Urban Infrastructure', 'Weather Defense'];

const BASE = 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Colour%20by%20Design/';

// Ordered for optimal sale psychology:
// 1. Open with the most impressive/aspirational to grab attention (Design Excellence)
// 2. Reinforce premium positioning early (Premium Complex, Waterfront Development)
// 3. Build authority and breadth (Architectural Design, Commercial Hospitality, ECOTONE Presentation)
// 4. Sustain emotion and local relevance (Eden View, Canvas QLD)
// 5. Demonstrate versatility (Bond Project, Colour Design Project)
// 6. Close with personalisation/invitation (Custom Colour Solution, Custom Project)
const colourByDesignItems = [
  { title: 'Design Excellence',      src: BASE + 'Design%20Excellence.jpeg',        ext: 'jpeg' },
  { title: 'Premium Complex',        src: BASE + 'Premium%20Complex.jpeg',           ext: 'jpeg' },
  { title: 'Waterfront Development', src: BASE + 'Waterfront%20Development.jpeg',    ext: 'jpeg' },
  { title: 'Architectural Design',   src: BASE + 'Architectural%20Design.png',       ext: 'png'  },
  { title: 'Commercial Hospitality', src: BASE + 'Commercial%20Hospitality.jpg',     ext: 'jpg'  },
  { title: 'ECOTONE Presentation',   src: BASE + 'ECOTONE%20Presentation.jpg',       ext: 'jpg'  },
  { title: 'Eden View',              src: BASE + 'Eden%20View.png',                  ext: 'png'  },
  { title: 'Canvas QLD',             src: BASE + 'Canvas%20QLD.png',                 ext: 'png'  },
  { title: 'Bond Project',           src: BASE + 'Bond%20Project.png',               ext: 'png'  },
  { title: 'Colour Design Project',  src: BASE + 'Colour%20Design%20Project.png',    ext: 'png'  },
  { title: 'Custom Colour Solution', src: BASE + 'Custom%20Colour%20Solution.jpg',   ext: 'jpg'  },
  { title: 'Custom Project',         src: BASE + 'Custom%20Project.png',             ext: 'png'  },
].map((item, i) => ({ ...item, id: i + 1, category: 'Colour By Design' }));

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? colourByDesignItems
    : colourByDesignItems.filter((item) => item.category === activeCategory);

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
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
                onClick={() => setActiveCategory(cat)}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  padding: '8px 18px',
                  background: activeCategory === cat ? '#8B6914' : 'transparent',
                  color: activeCategory === cat ? '#ffffff' : '#0a0a0a',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#8B6914' : '#d6d6d6',
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
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0', fontFamily: 'Inter', color: '#888', fontSize: '15px' }}>
                No projects in this category yet. Check back soon.
              </div>
            ) : (
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '8px',
                }}
              >
                {filtered.map((item, i) => (
                  <div
                    key={item.id}
                    style={{
                      position: 'relative',
                      aspectRatio: '16 / 10',
                      overflow: 'hidden',
                      cursor: 'pointer',
                      background: '#e8e5e0',
                    }}
                    onMouseEnter={(e) => {
                      (e.currentTarget.querySelector('img') as HTMLImageElement | null)?.style.setProperty('transform', 'scale(1.06)');
                      (e.currentTarget.querySelector('.overlay') as HTMLElement | null)?.style.setProperty('opacity', '1');
                    }}
                    onMouseLeave={(e) => {
                      (e.currentTarget.querySelector('img') as HTMLImageElement | null)?.style.setProperty('transform', 'scale(1)');
                      (e.currentTarget.querySelector('.overlay') as HTMLElement | null)?.style.setProperty('opacity', '0');
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.title}
                      style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        display: 'block',
                        transition: 'transform 0.4s ease',
                      }}
                    />
                    {/* Persistent title bar */}
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.72) 0%, rgba(0,0,0,0) 100%)',
                      padding: '28px 14px 14px',
                    }}>
                      <span style={{
                        fontFamily: 'Space Grotesk',
                        fontWeight: 700,
                        fontSize: '12px',
                        color: '#ffffff',
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        display: 'block',
                      }}>
                        {item.title}
                      </span>
                      <span style={{
                        fontFamily: 'Inter',
                        fontWeight: 500,
                        fontSize: '10px',
                        color: '#C4902E',
                        letterSpacing: '0.08em',
                        textTransform: 'uppercase',
                        marginTop: '3px',
                        display: 'block',
                      }}>
                        {item.category}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div
                      className="overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background: 'rgba(139,105,20,0.18)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        pointerEvents: 'none',
                      }}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: '#8B6914', padding: '60px 6%', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(24px, 3vw, 40px)', color: '#ffffff', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}>
            Want to See More?
          </h2>
          <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.8)', marginBottom: '28px' }}>
            Explore our full project portfolio or contact us to discuss your project.
          </p>
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
            <a href="/portfolio" style={{ display: 'inline-block', background: '#ffffff', color: '#8B6914', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '13px 32px', textDecoration: 'none', textTransform: 'uppercase' }}>
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
