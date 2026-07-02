'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const categories = [
  'All',
  'Concrete Facades',
  'Cladding Finishes',
  'Colour By Design',
  'Factory Finishes',
  'Featured Projects',
];

const CBD = 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Colour%20by%20Design/';
const CLF = 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Cladding%20Finishes/';
const CNF = 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Concrete%20Facades/';

// --- Colour By Design ---
// Psychology: aspiration → premium → authority → emotion/local → versatility → personalisation
const colourByDesign = [
  { title: 'Design Excellence',      src: CBD + 'Design%20Excellence.jpeg'      },
  { title: 'Premium Complex',        src: CBD + 'Premium%20Complex.jpeg'         },
  { title: 'Waterfront Development', src: CBD + 'Waterfront%20Development.jpeg'  },
  { title: 'Architectural Design',   src: CBD + 'Architectural%20Design.png'     },
  { title: 'Commercial Hospitality', src: CBD + 'Commercial%20Hospitality.jpg'   },
  { title: 'ECOTONE Presentation',   src: CBD + 'ECOTONE%20Presentation.jpg'     },
  { title: 'Eden View',              src: CBD + 'Eden%20View.png'                },
  { title: 'Canvas QLD',             src: CBD + 'Canvas%20QLD.png'               },
  { title: 'Bond Project',           src: CBD + 'Bond%20Project.png'             },
  { title: 'Colour Design Project',  src: CBD + 'Colour%20Design%20Project.png'  },
  { title: 'Custom Colour Solution', src: CBD + 'Custom%20Colour%20Solution.jpg' },
  { title: 'Custom Project',         src: CBD + 'Custom%20Project.png'           },
].map((item) => ({ ...item, category: 'Colour By Design' }));

// --- Cladding Finishes ---
// Psychology: landmark credibility first → premium material → modern aspiration →
//             vibrant energy (×2) → completed projects close with authority
const claddingFinishes = [
  { title: 'Queen Victoria Market', src: CLF + 'Queen%20Victoria%20Market.png'  },
  { title: 'The Bond Panelwood',    src: CLF + 'The%20Bond%20Panelwood.png'     },
  { title: 'Modern Cladding',       src: CLF + 'Modern%20Cladding.png'          },
  { title: 'Vivid VIC Project',     src: CLF + 'Vivid%20VIC%20Project.png'      },
  { title: 'Vivid VIC',             src: CLF + 'Vivid%20VIC.png'                },
  { title: 'Lansell Road Project',  src: CLF + 'Lansell%20Road%20Project.png'   },
  { title: 'Lansell Road',          src: CLF + 'Lansell%20Road.png'             },
].map((item) => ({ ...item, category: 'Cladding Finishes' }));

// --- Concrete Facades ---
// Psychology: design excellence → contemporary style → commercial scale →
//             premium lifestyle landmark → urban breadth → core service → implicit CTA close
const concreteFacades = [
  { title: 'Architectural Excellence',    src: CNF + 'Architectural%20Excellence.jpeg'    },
  { title: 'Contemporary Architecture',   src: CNF + 'Contemporary%20Architecture.jpeg'   },
  { title: 'Modern Commercial Complex',   src: CNF + 'Modern%20Commercial%20Complex.jpeg' },
  { title: 'Half Moon Bay Marina',        src: CNF + 'Half%20Moon%20Bay%20Marina.png'     },
  { title: 'Premium Development',         src: CNF + 'Premium%20Development.png'          },
  { title: 'City Development',            src: CNF + 'City%20Development.jpeg'            },
  { title: 'Architectural Design',        src: CNF + 'Architectural%20Design.jpeg'        },
  { title: 'Commercial Building',         src: CNF + 'Commercial%20Building.jpeg'         },
  { title: 'Commercial Concrete Facade',  src: CNF + 'Commercial%20Concrete%20Facade.png'},
  { title: 'Modern Infrastructure',       src: CNF + 'Modern%20Infrastructure.jpeg'       },
  { title: 'Urban Development',           src: CNF + 'Urban%20Development.jpeg'           },
  { title: 'Urban Project',               src: CNF + 'Urban%20Project.jpeg'               },
].map((item) => ({ ...item, category: 'Concrete Facades' }));

const allItems = [...colourByDesign, ...claddingFinishes, ...concreteFacades].map((item, i) => ({ ...item, id: i + 1 }));

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? allItems
    : allItems.filter((item) => item.category === activeCategory);

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
                {filtered.map((item) => (
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
