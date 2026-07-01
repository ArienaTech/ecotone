'use client';

import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

const marqueeItems = ['UAE', 'Saudi Arabia', 'Bahrain', '25-Year Guarantee', '1000+ Projects', 'Eco-Certified', 'Australian Innovation', 'Gulf Climate Proven'];

function MarqueeContent() {
  return (
    <>
      {marqueeItems.map((name, i) => (
        <span key={i} className="flex items-center">
          <span
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 300,
              fontSize: '12px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.45)',
            }}
          >
            {name}
          </span>
          {i < marqueeItems.length - 1 && (
            <span style={{ color: '#2d6a4f', fontSize: '8px', padding: '0 20px' }}>●</span>
          )}
        </span>
      ))}
      <span style={{ color: '#2d6a4f', fontSize: '8px', padding: '0 20px' }}>●</span>
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        background: '#f5f4f2',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* Massive background brand text */}
      <div className="bg-brand-text">ECO</div>

      {/* Full-width content wrapper — no maxWidth, only side padding */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          padding: '0 6%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          minHeight: '100vh',
          gap: '0',
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            fontFamily: 'Inter',
            fontWeight: 500,
            fontSize: '11px',
            color: '#2d6a4f',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Luxury Surface Enhancement
        </motion.p>

        {/* Two-column layout: headline left, info right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '0',
            alignItems: 'center',
            marginBottom: '56px',
          }}
          className="hero-grid"
        >
          {/* Left — Headline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h1
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 800,
                fontSize: 'clamp(40px, 5.5vw, 100px)',
                lineHeight: 0.94,
                color: '#0a0a0a',
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                marginBottom: '0',
              }}
            >
              Mineral-<br />Based.<br />Climate-<br />Proof.<br />
              <span style={{ color: '#2d6a4f' }}>Built to Last</span>
              <span className="eco-dot" />
            </h1>
          </motion.div>

          {/* Right — Body + CTAs + Stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
            style={{
              paddingLeft: '8%',
              display: 'flex',
              flexDirection: 'column',
              gap: '32px',
            }}
          >
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '17px',
                color: '#606060',
                lineHeight: 1.7,
              }}
            >
              Premium facade solutions with 25-year durability and eco-certified protection. We work alongside architects, developers, and contractors to deliver sustainable, durable finishes that preserve and enhance architectural vision.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href="/services"
                style={{
                  background: '#2d6a4f',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  transition: 'background 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1a4a35')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#2d6a4f')}
              >
                Explore Services
              </a>
              <a
                href="/contact"
                style={{
                  background: 'transparent',
                  color: '#0a0a0a',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  padding: '14px 32px',
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
                Project Enquiry
              </a>
            </div>

            {/* Stats strip */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                borderTop: '1px solid #d6d6d6',
                paddingTop: '28px',
              }}
            >
              {[
                { number: '25yr', label: 'Performance Guarantee' },
                { number: '1000+', label: 'Projects Completed' },
                { number: '55°C+', label: 'Temperature Proven' },
              ].map((stat, i) => (
                <div
                  key={stat.number}
                  style={{
                    paddingLeft: i > 0 ? '24px' : '0',
                    borderLeft: i > 0 ? '1px solid #d6d6d6' : 'none',
                  }}
                >
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#0a0a0a', letterSpacing: '-0.02em', display: 'block' }}>
                    {stat.number}
                  </span>
                  <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#808080', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Full-width divider + marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div style={{ height: '1px', background: '#d6d6d6', width: '100%', marginBottom: '24px' }} />
          <div style={{ overflow: 'hidden' }}>
            <div className="animate-marquee">
              <MarqueeContent />
              <MarqueeContent />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
