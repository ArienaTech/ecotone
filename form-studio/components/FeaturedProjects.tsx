'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

const featured = [
  {
    title: 'Saint Moritz Esplanade',
    category: 'Featured Projects',
    src: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Featured%20Projects/Saint%20Moritz%20Esplanade.jpg',
    span: 2,
  },
  {
    title: 'Half Moon Bay Marina',
    category: 'Concrete Facades',
    src: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Concrete%20Facades/Half%20Moon%20Bay%20Marina.png',
    span: 1,
  },
  {
    title: 'Architectural Excellence',
    category: 'Concrete Facades',
    src: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Concrete%20Facades/Architectural%20Excellence.jpeg',
    span: 1,
  },
  {
    title: 'Design Excellence',
    category: 'Colour By Design',
    src: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Colour%20by%20Design/Design%20Excellence.jpeg',
    span: 1,
  },
  {
    title: 'Queen Victoria Market',
    category: 'Cladding Finishes',
    src: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Cladding%20Finishes/Queen%20Victoria%20Market.png',
    span: 1,
  },
];

function GalleryCard({ item, index, onOpen }: { item: typeof featured[0]; index: number; onOpen: () => void }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      role="button"
      tabIndex={0}
      onClick={onOpen}
      onKeyDown={(e) => e.key === 'Enter' && onOpen()}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.65, ease: EASE, delay: index * 0.08 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        display: 'block',
        position: 'relative',
        overflow: 'hidden',
        gridColumn: item.span === 2 ? 'span 2' : 'span 1',
        background: '#1a1a1a',
        cursor: 'zoom-in',
        outline: 'none',
      }}
    >
      <Image
        src={item.src}
        alt={item.title}
        fill
        sizes="(max-width: 767px) 100vw, (max-width: 1023px) 50vw, 33vw"
        style={{
          objectFit: 'cover',
          transform: hovered ? 'scale(1.07)' : 'scale(1)',
          transition: `transform 0.55s cubic-bezier(${EASE.join(',')})`,
        }}
      />

      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
      }} />

      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ position: 'absolute', inset: 0, background: 'rgba(139,105,20,0.18)', pointerEvents: 'none' }}
      />

      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '20px 18px 16px',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        gap: '12px',
      }}>
        <div>
          <span style={{
            display: 'inline-block',
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '10px',
            color: '#C4902E',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            marginBottom: '5px',
          }}>
            {item.category}
          </span>
          <p style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '13px',
            color: '#ffffff',
            letterSpacing: '0.02em',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: 1.2,
          }}>
            {item.title}
          </p>
        </div>

        <motion.span
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 8 }}
          transition={{ duration: 0.2 }}
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '11px',
            color: '#ffffff',
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            flexShrink: 0,
            whiteSpace: 'nowrap',
          }}
        >
          View Larger ↗
        </motion.span>
      </div>
    </motion.div>
  );
}

export default function FeaturedProjects() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = '';
  };

  const showPrev = () => setLightboxIndex((i) => (i !== null ? (i - 1 + featured.length) % featured.length : null));
  const showNext = () => setLightboxIndex((i) => (i !== null ? (i + 1) % featured.length : null));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') showPrev();
    else if (e.key === 'ArrowRight') showNext();
    else if (e.key === 'Escape') closeLightbox();
  };

  const activeItem = lightboxIndex !== null ? featured[lightboxIndex] : null;

  return (
    <section style={{ background: '#0a0a0a', padding: 'clamp(64px,10vh,120px) 6%', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '48px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              Our Work
            </motion.span>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 64px)', color: '#ffffff', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}
              >
                Featured Projects
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.55)', maxWidth: '560px', lineHeight: 1.7 }}
            >
              A selection of our most iconic projects — from landmark facades to bespoke colour solutions across residential, commercial and infrastructure.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/gallery"
            style={{ display: 'inline-block', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B6914', textDecoration: 'none', border: '1.5px solid #8B6914', padding: '12px 28px', transition: 'all 0.15s ease', flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#8B6914'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B6914'; }}
          >
            View Full Gallery →
          </motion.a>
        </div>

        {/* Image grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gridTemplateRows: '420px 260px', gap: '4px' }} className="projects-grid">
          {featured.map((item, i) => (
            <GalleryCard key={item.title} item={item} index={i} onOpen={() => openLightbox(i)} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {activeItem && (
        <div
          role="dialog"
          aria-modal="true"
          onKeyDown={handleKeyDown}
          tabIndex={-1}
          onClick={closeLightbox}
          ref={(el) => el?.focus()}
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
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            aria-label="Close"
            style={{ position: 'absolute', top: '20px', right: '24px', background: 'none', border: 'none', cursor: 'pointer', color: '#ffffff', fontSize: '32px', lineHeight: 1, fontWeight: 300, zIndex: 10, padding: '4px 8px' }}
          >
            ×
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); showPrev(); }}
            aria-label="Previous"
            style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', cursor: 'pointer', width: '48px', height: '48px', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >‹</button>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); showNext(); }}
            aria-label="Next"
            style={{ position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)', background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: '#ffffff', cursor: 'pointer', width: '48px', height: '48px', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
          >›</button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} style={{ maxWidth: '90vw', maxHeight: '85vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={activeItem.src}
              alt={activeItem.title}
              style={{ maxWidth: '90vw', maxHeight: '78vh', objectFit: 'contain', display: 'block', boxShadow: '0 24px 80px rgba(0,0,0,0.6)' }}
            />
            <div style={{ marginTop: '16px', textAlign: 'center' }}>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#ffffff', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block' }}>
                {activeItem.title}
              </span>
              <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#C4902E', letterSpacing: '0.10em', textTransform: 'uppercase', marginTop: '4px', display: 'block' }}>
                {activeItem.category}
              </span>
              <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: 'rgba(255,255,255,0.35)', marginTop: '6px', display: 'block' }}>
                {(lightboxIndex ?? 0) + 1} / {featured.length}
              </span>
              <a
                href="/gallery"
                onClick={(e) => e.stopPropagation()}
                style={{ display: 'inline-block', marginTop: '16px', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '11px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#C4902E', textDecoration: 'none', border: '1px solid rgba(196,144,46,0.5)', padding: '8px 20px', transition: 'all 0.15s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#C4902E'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#C4902E'; }}
              >
                View Full Gallery →
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
