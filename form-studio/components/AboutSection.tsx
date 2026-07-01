'use client';

import { motion } from 'motion/react';

export default function AboutSection() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 6%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '80px',
            alignItems: 'start',
          }}
          className="about-grid"
        >
          {/* Left column */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <span className="section-eyebrow">About</span>
            <h2
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 800,
                fontSize: 'clamp(36px, 4vw, 64px)',
                color: '#0a0a0a',
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                marginBottom: '32px',
              }}
            >
              ECOTONE<br />ARABIA
            </h2>

            {/* Stat badges */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '40px', flexWrap: 'wrap' }}>
              {[
                { val: '25yr', label: 'Guarantee' },
                { val: '1000+', label: 'Projects' },
                { val: '2023', label: 'Est. Middle East' },
              ].map((item) => (
                <div
                  key={item.val}
                  style={{
                    background: '#f5f4f2',
                    border: '1px solid #e5e5e5',
                    padding: '14px 20px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '20px', color: '#2d6a4f', display: 'block' }}>
                    {item.val}
                  </span>
                  <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '10px', color: '#808080', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut', delay: 0.1 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
          >
            {[
              'ECOTONE Arabia brings Australian coating innovation to the Middle East — proven across 1000+ extreme climate projects, backed by a 25-year performance guarantee.',
              'As the exclusive regional distributor of ECOTONE coating systems, we partner with architects, developers, and contractors on custom finishes, colour matching, and protective coatings built for certainty of outcome.',
              'With technical support across the UAE and Saudi Arabia, we deliver landmark projects built to last.',
            ].map((text, i) => (
              <p
                key={i}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 400,
                  fontSize: '15px',
                  color: '#505050',
                  lineHeight: 1.75,
                }}
              >
                {text}
              </p>
            ))}

            <div style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}>
              <a
                href="/about"
                style={{
                  background: '#2d6a4f',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  padding: '12px 28px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1a4a35')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#2d6a4f')}
              >
                About Us
              </a>
              <a
                href="/contact"
                style={{
                  background: 'transparent',
                  color: '#0a0a0a',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '12px',
                  letterSpacing: '0.08em',
                  padding: '12px 28px',
                  border: '1.5px solid #0a0a0a',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#0a0a0a';
                  e.currentTarget.style.color = '#ffffff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#0a0a0a';
                }}
              >
                Get in Touch
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
