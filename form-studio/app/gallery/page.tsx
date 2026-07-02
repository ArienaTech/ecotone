'use client';

import { useState } from 'react';
import Image from 'next/image';
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
const FAF = 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Factory%20Finishes/';
const FTP = 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Featured%20Projects/';

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

// --- Factory Finishes ---
// Psychology: finished result first (wow factor) → quality close-ups build confidence →
//             process/manufacturing shows capability → landmark project closes with prestige
const factoryFinishes = [
  { title: 'Factory Finish',          src: FAF + 'Factory%20Finish.jpg'          },
  { title: 'Industrial Coating',      src: FAF + 'Industrial%20Coating.jpg'      },
  { title: 'Factory Coating',         src: FAF + 'Factory%20Coating.jpg'         },
  { title: 'Production Quality',      src: FAF + 'Production%20Quality.JPG'      },
  { title: 'Industrial Application',  src: FAF + 'Industrial%20Application.jpg'  },
  { title: 'Factory Application',     src: FAF + 'Factory%20Application.jpg'     },
  { title: 'Manufacturing Detail',    src: FAF + 'Manufacturing%20Detail.jpg'    },
  { title: 'Manufacturing Process',   src: FAF + 'Manufacturing%20Process.jpg'   },
  { title: 'Factory Process',         src: FAF + 'Factory%20Process.jpg'         },
  { title: 'Wee Hur Regent',          src: FAF + 'Wee%20Hur%20Regent.JPG'        },
  { title: 'Woodford Prison Sample',  src: FAF + 'Woodford%20Prison%20Sample.png'},
].map((item) => ({ ...item, category: 'Factory Finishes' }));

// --- Featured Projects ---
// Psychology: lead with prestige brand names (Saint Moritz) → architectural excellence →
//             contemporary/modern aspiration → premium finish → bridge to broader portfolio
const featuredProjects = [
  { title: 'Saint Moritz Esplanade',  src: FTP + 'Saint%20Moritz%20Esplanade.jpg' },
  { title: 'Saint Moritz',            src: FTP + 'Saint%20Moritz.jpg'             },
  { title: 'Architectural Excellence',src: FTP + 'Architectural%20Excellence.jpg' },
  { title: 'Contemporary Design',     src: FTP + 'Contemporary%20Design.jpg'      },
  { title: 'Modern Architecture',     src: FTP + 'Modern%20Architecture.jpg'      },
  { title: 'Premium Finish',          src: FTP + 'Premium%20Finish.jpg'           },
  { title: 'Lusher Road Croydon',     src: FTP + 'Lusher%20Road%20Croydon.png'    },
  { title: 'Lusher Road Artboard',    src: FTP + 'Lusher%20Road%20Artboard.png'   },
  { title: 'Bridge Road Project',     src: FTP + 'Bridge%20Road%20Project.jpg'    },
].map((item) => ({ ...item, category: 'Featured Projects' }));

const allItems = [
  ...colourByDesign,
  ...claddingFinishes,
  ...concreteFacades,
  ...factoryFinishes,
  ...featuredProjects,
].map((item, i) => ({ ...item, id: i + 1 }));

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = activeCategory === 'All'
    ? allItems
    : allItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const showPrev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null));
  const showNext = () => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') showPrev();
    else if (e.key === 'ArrowRight') showNext();
    else if (e.key === 'Escape') closeLightbox();
  };

  const activeLightboxItem = lightboxIndex !== null ? filtered[lightboxIndex] : null;

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
        <section style={{ background: '#0a0a0a', padding: '32px 6%', borderBottom: '1px solid #2a2a2a' }}>
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
                  color: activeCategory === cat ? '#ffffff' : 'rgba(255,255,255,0.65)',
                  border: '1px solid',
                  borderColor: activeCategory === cat ? '#8B6914' : '#2a2a2a',
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
        <section style={{ background: '#0a0a0a', padding: '48px 6% 80px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            {filtered.length === 0 ? (
              <div style={{ textAlign: 'center', padding: '80px 0', fontFamily: 'Inter', color: '#888', fontSize: '15px' }}>
                No projects in this category yet. Check back soon.
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3" style={{ gap: '8px' }}>
                {filtered.map((item, index) => (
                  <div
                    key={item.id}
                    onClick={() => openLightbox(index)}
                    style={{
                      position: 'relative',
                      aspectRatio: '16 / 10',
                      overflow: 'hidden',
                      cursor: 'zoom-in',
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
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                      style={{
                        objectFit: 'cover',
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
            <a href="/portfolio" style={{ display: 'inline-block', background: '#0a0a0a', color: '#8B6914', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '13px 32px', textDecoration: 'none', textTransform: 'uppercase' }}>
              View Portfolio
            </a>
            <a href="/contact" style={{ display: 'inline-block', background: 'transparent', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '13px 32px', border: '1.5px solid rgba(255,255,255,0.5)', textDecoration: 'none', textTransform: 'uppercase' }}>
              Project Enquiry
            </a>
          </div>
        </section>

      </main>
      <Footer />

      {/* Lightbox */}
      {activeLightboxItem && (
        <div
          role="dialog"
          aria-modal="true"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0,0,0,0.92)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            outline: 'none',
          }}
          onClick={closeLightbox}
          ref={(el) => el?.focus()}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            style={{
              position: 'absolute',
              top: '20px',
              right: '24px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#ffffff',
              fontSize: '32px',
              lineHeight: 1,
              fontWeight: 300,
              zIndex: 10,
              padding: '4px 8px',
            }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous image"
            style={{
              position: 'absolute',
              left: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#ffffff',
              cursor: 'pointer',
              width: '48px',
              height: '48px',
              fontSize: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            ‹
          </button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next image"
            style={{
              position: 'absolute',
              right: '16px',
              top: '50%',
              transform: 'translateY(-50%)',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              color: '#ffffff',
              cursor: 'pointer',
              width: '48px',
              height: '48px',
              fontSize: '22px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 10,
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >
            ›
          </button>

          {/* Image */}
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              maxWidth: '90vw',
              maxHeight: '85vh',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeLightboxItem.src}
              alt={activeLightboxItem.title}
              style={{
                maxWidth: '90vw',
                maxHeight: '78vh',
                objectFit: 'contain',
                display: 'block',
                boxShadow: '0 24px 80px rgba(0,0,0,0.6)',
              }}
            />
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <span style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '14px',
                color: '#ffffff',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                display: 'block',
              }}>
                {activeLightboxItem.title}
              </span>
              <span style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '11px',
                color: '#C4902E',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                marginTop: '4px',
                display: 'block',
              }}>
                {activeLightboxItem.category}
              </span>
              <span style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '11px',
                color: 'rgba(255,255,255,0.35)',
                marginTop: '6px',
                display: 'block',
              }}>
                {(lightboxIndex ?? 0) + 1} / {filtered.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
