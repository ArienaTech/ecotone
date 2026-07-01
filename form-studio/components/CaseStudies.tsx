'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const cases = [
  { brand: 'Apex', industry: 'Sustainable materials' },
  { brand: 'Meridian', industry: 'Architecture & property' },
  { brand: 'Vantage', industry: 'Financial services' },
  { brand: 'Stratum', industry: 'Fashion & apparel' },
  { brand: 'Orion', industry: 'Technology' },
  { brand: 'Volta', industry: 'Electric vehicles' },
];

function CaseCard({ item, index }: { item: (typeof cases)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '4 / 3',
        overflow: 'hidden',
        background: '#d6d6d6',
        cursor: 'pointer',
      }}
    >
      {/* Normal state content */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '28px',
          opacity: hovered ? 0 : 1,
          transition: 'opacity 0.3s ease',
          zIndex: 1,
        }}
      >
        <h3
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '22px',
            color: '#0a0a0a',
            marginBottom: '4px',
          }}
        >
          {item.brand}
        </h3>
        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', color: '#808080', marginBottom: '8px' }}>
          {item.industry}
        </p>
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            color: '#808080',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          VIEW CASE STUDY →
        </p>
      </div>

      {/* Hover split: Left half (Before) */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          width: '50%',
          height: '100%',
          background: '#d6d6d6',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '28px 20px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 300,
            fontSize: '11px',
            color: '#808080',
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
          }}
        >
          BEFORE
        </span>
      </div>

      {/* Hover split: Right half (After) */}
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '50%',
          height: '100%',
          background: '#0a0a0a',
          display: 'flex',
          alignItems: 'flex-end',
          padding: '28px 20px',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          zIndex: 2,
        }}
      >
        <span
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: '20px',
            color: '#ffffff',
          }}
        >
          {item.brand}
        </span>
      </div>

      {/* Red divider line */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: '2px',
          background: '#d42a1a',
          transform: `scaleY(${hovered ? 1 : 0})`,
          transformOrigin: 'center',
          transition: 'transform 0.3s ease',
          zIndex: 3,
        }}
      />
    </motion.div>
  );
}

export default function CaseStudies() {
  return (
    <section id="work-grid" style={{ background: '#f5f4f2', padding: '120px 6%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            color: '#808080',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          SELECTED WORK
        </p>
        <h2
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4.5vw, 72px)',
            color: '#0a0a0a',
            lineHeight: 1.0,
            marginBottom: '56px',
          }}
        >
          Work that made<br />a difference.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '2px',
          }}
          className="case-grid"
        >
          {cases.map((item, i) => (
            <CaseCard key={item.brand} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
