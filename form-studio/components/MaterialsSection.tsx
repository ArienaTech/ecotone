'use client';

import { motion } from 'motion/react';

const materials = [
  {
    name: 'Concrete',
    description: 'Advanced concrete coatings for infrastructure and commercial applications',
    icon: '◻',
  },
  {
    name: 'Mortar',
    description: 'Precision color matching for mortar joint restoration',
    icon: '◈',
  },
  {
    name: 'Fibre Cement',
    description: 'Specialized coatings for fibre cement panel systems',
    icon: '◧',
  },
  {
    name: 'Compressed Fibre Cement',
    description: 'High-performance coatings for compressed fibre cement cladding and soffits',
    icon: '◫',
  },
  {
    name: 'Metal & Steel',
    description: 'Protective and decorative coatings for metal surfaces',
    icon: '◉',
  },
];

export default function MaterialsSection() {
  return (
    <section style={{ background: '#0a0a0a', padding: '120px 6%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ maxWidth: '700px', marginBottom: '72px' }}>
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{
              fontFamily: 'Inter',
              fontWeight: 500,
              fontSize: '11px',
              color: '#74c69d',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            Surface Expertise
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 800,
              fontSize: 'clamp(32px, 4vw, 64px)',
              color: '#ffffff',
              lineHeight: 0.96,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            Every Surface.<br />Every Colour.<br />Built to Last
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '15px',
              color: 'rgba(255,255,255,0.6)',
              lineHeight: 1.7,
            }}
          >
            Advanced coating solutions for every commercial surface material
          </motion.p>
        </div>

        {/* Materials grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(5, 1fr)',
            gap: '2px',
            marginBottom: '48px',
          }}
          className="materials-grid"
        >
          {materials.map((material, i) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                background: '#141414',
                padding: '36px 24px',
                borderTop: '2px solid #2d6a4f',
                transition: 'background 0.2s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#1a1a1a')}
              onMouseLeave={(e) => (e.currentTarget.style.background = '#141414')}
            >
              <span style={{ fontSize: '24px', display: 'block', marginBottom: '16px', color: '#2d6a4f' }}>
                {material.icon}
              </span>
              <h3
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '15px',
                  color: '#ffffff',
                  marginBottom: '10px',
                  lineHeight: 1.3,
                }}
              >
                {material.name}
              </h3>
              <p
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.5)',
                  lineHeight: 1.65,
                }}
              >
                {material.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing line + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}
        >
          <p
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 600,
              fontSize: '16px',
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            Don&apos;t see your material? We coat everything.
          </p>
          <a
            href="/contact"
            style={{
              display: 'inline-block',
              background: '#2d6a4f',
              color: '#ffffff',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.08em',
              padding: '12px 28px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              transition: 'background 0.15s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1a4a35')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#2d6a4f')}
          >
            Discuss Your Material
          </a>
        </motion.div>
      </div>
    </section>
  );
}
