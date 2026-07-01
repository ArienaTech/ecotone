'use client';

import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

const materials = [
  { name: 'Concrete', description: 'Advanced concrete coatings for infrastructure and commercial applications', icon: '◻' },
  { name: 'Mortar', description: 'Precision color matching for mortar joint restoration', icon: '◈' },
  { name: 'Fibre Cement', description: 'Specialized coatings for fibre cement panel systems', icon: '◧' },
  { name: 'Compressed Fibre Cement', description: 'High-performance coatings for compressed fibre cement cladding and soffits', icon: '◫' },
  { name: 'Metal & Steel', description: 'Protective and decorative coatings for metal surfaces', icon: '◉' },
];

export default function MaterialsSection() {
  return (
    <section style={{ background: '#0a0a0a', padding: '120px 6%', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ maxWidth: '700px', marginBottom: '72px' }}>
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}
          >
            Surface Expertise
          </motion.span>

          <div style={{ overflow: 'hidden', marginBottom: '20px' }}>
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 64px)', color: '#ffffff', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase' }}
            >
              Every Surface.<br />Every Colour.<br />Built to Last
            </motion.h2>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}
          >
            Advanced coating solutions for every commercial surface material
          </motion.p>
        </div>

        {/* Materials grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px', marginBottom: '48px' }} className="materials-grid">
          {materials.map((material, i) => (
            <motion.div
              key={material.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              style={{ background: '#141414', padding: '36px 24px', borderTop: '2px solid #8B6914', cursor: 'default' }}
            >
              <motion.span
                initial={{ scale: 0.5, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                style={{ fontSize: '28px', display: 'block', marginBottom: '16px', color: '#8B6914' }}
              >
                {material.icon}
              </motion.span>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', color: '#ffffff', marginBottom: '10px', lineHeight: 1.3 }}>
                {material.name}
              </h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>
                {material.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Closing CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}
        >
          <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}>
            Don&apos;t see your material? We coat everything.
          </p>
          <a
            href="/contact"
            style={{ display: 'inline-block', background: '#8B6914', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', padding: '12px 28px', textDecoration: 'none', textTransform: 'uppercase', transition: 'background 0.15s ease', flexShrink: 0 }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#664A0E')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#8B6914')}
          >
            Discuss Your Material
          </a>
        </motion.div>
      </div>
    </section>
  );
}
