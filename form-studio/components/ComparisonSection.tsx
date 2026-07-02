'use client';

import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

const comparisons = [
  { traditional: 'Short lifespan (2–5 years)', ecotone: '15–25 year durability' },
  { traditional: 'Limited aesthetic options', ecotone: 'Superior aesthetic options' },
  { traditional: 'Frequent reapplication needed', ecotone: 'Long-term performance' },
  { traditional: 'Massive cost and disruption', ecotone: '80% cost savings' },
  { traditional: 'Poor durability in harsh conditions', ecotone: 'Multi-benefit functional systems' },
  { traditional: 'Extended downtime', ecotone: 'Minimal disruption' },
];

export default function ComparisonSection() {
  return (
    <section style={{ background: '#0a0a0a', padding: 'clamp(64px,10vh,120px) 6%', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ overflow: 'hidden', marginBottom: '16px' }}>
            <motion.h2
              initial={{ y: '100%' }}
              whileInView={{ y: '0%' }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE }}
              style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(28px, 4vw, 56px)', color: '#ffffff', lineHeight: 1.0, letterSpacing: '-0.02em', textTransform: 'uppercase' }}
            >
              Traditional vs ECOTONE Solutions
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.55)', maxWidth: '600px', margin: '0 auto', lineHeight: 1.7 }}
          >
            ECOTONE&apos;s advanced coating systems offer superior alternatives to conventional building maintenance approaches
          </motion.p>
        </div>

        {/* Table */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px' }} className="comparison-grid">

          {/* Column headers */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ background: '#111111', padding: '20px 32px', borderTop: '3px solid #2a2a2a' }}
          >
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#808080' }}>
              Traditional Methods
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ background: '#8B6914', padding: '20px 32px', borderTop: '3px solid #664A0E' }}
          >
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#ffffff' }}>
              ECOTONE Solutions
            </span>
          </motion.div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <>
              <motion.div
                key={`trad-${i}`}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
                style={{ background: i % 2 === 0 ? '#0a0a0a' : '#111111', padding: '20px 32px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #1a1a1a' }}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.1 + i * 0.06 }}
                  style={{ color: '#cc3333', fontSize: '16px', flexShrink: 0, fontWeight: 700 }}
                >
                  ✕
                </motion.span>
                <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.5 }}>
                  {row.traditional}
                </span>
              </motion.div>

              <motion.div
                key={`eco-${i}`}
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.5, ease: 'easeOut', delay: i * 0.06 }}
                style={{ background: i % 2 === 0 ? '#1a1406' : '#161104', padding: '20px 32px', display: 'flex', alignItems: 'center', gap: '12px', borderBottom: '1px solid #2a2008' }}
              >
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.15 + i * 0.06 }}
                  style={{ color: '#8B6914', fontSize: '16px', flexShrink: 0, fontWeight: 700 }}
                >
                  ✓
                </motion.span>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '14px', color: '#C4902E', lineHeight: 1.5 }}>
                  {row.ecotone}
                </span>
              </motion.div>
            </>
          ))}
        </div>
      </div>
    </section>
  );
}
