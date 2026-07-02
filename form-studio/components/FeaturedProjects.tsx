'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

// Hand-picked from the gallery using sale psychology:
// 1. Saint Moritz Esplanade  — prestigious name, instant aspiration → hero position (large)
// 2. Half Moon Bay Marina     — premium lifestyle landmark → reinforces aspiration
// 3. Architectural Excellence — scale and craft → builds authority
// 4. Design Excellence        — colour expertise → signals core service
// 5. Queen Victoria Market    — iconic landmark → social proof / trust
// 6. Contemporary Architecture— modern, clean → close with broad appeal
const featured = [
  {
    title: 'Saint Moritz Esplanade',
    category: 'Featured Projects',
    src: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Featured%20Projects/Saint%20Moritz%20Esplanade.jpg',
    span: 2, // wide hero card
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
  {
    title: 'Contemporary Architecture',
    category: 'Concrete Facades',
    src: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Gallery/Concrete%20Facades/Contemporary%20Architecture.jpeg',
    span: 1,
  },
];

function GalleryCard({ item, index }: { item: typeof featured[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href="/gallery"
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
        aspectRatio: item.span === 2 ? '16 / 7' : '4 / 3',
        textDecoration: 'none',
        background: '#1a1a1a',
        cursor: 'pointer',
      }}
    >
      {/* Image */}
      <motion.img
        src={item.src}
        alt={item.title}
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.55, ease: EASE }}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />

      {/* Dark gradient overlay — always visible at bottom */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,0,0,0.78) 0%, rgba(0,0,0,0.08) 55%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none',
      }} />

      {/* Gold hover tint */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ position: 'absolute', inset: 0, background: 'rgba(139,105,20,0.18)', pointerEvents: 'none' }}
      />

      {/* Title bar */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: item.span === 2 ? '32px 28px 24px' : '24px 18px 18px',
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
            marginBottom: '6px',
          }}>
            {item.category}
          </span>
          <p style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: item.span === 2 ? 'clamp(16px, 2vw, 22px)' : '14px',
            color: '#ffffff',
            letterSpacing: '-0.01em',
            textTransform: 'uppercase',
            margin: 0,
            lineHeight: 1.2,
          }}>
            {item.title}
          </p>
        </div>

        {/* View arrow — slides in on hover */}
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
          View Gallery →
        </motion.span>
      </div>
    </motion.a>
  );
}

export default function FeaturedProjects() {
  return (
    <section style={{ background: '#f5f4f2', padding: '120px 6%', overflow: 'hidden' }}>
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
                style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 64px)', color: '#0a0a0a', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}
              >
                Featured Projects
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#606060', maxWidth: '560px', lineHeight: 1.7 }}
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

        {/* Image grid — 3 columns, first card spans 2 */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px' }} className="projects-grid">
          {featured.map((item, i) => (
            <GalleryCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
