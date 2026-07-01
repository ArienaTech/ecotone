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
              fontSize: '13px',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(10,10,10,0.4)',
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
      {/* Massive background watermark */}
      <div className="bg-brand-text">ECO</div>

      {/* Content — full width, no maxWidth cap */}
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
        }}
      >
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            color: '#808080',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}
        >
          Luxury Surface Enhancement
        </motion.p>

        {/* Headline — matches original layout: large, uppercase, spans width naturally */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5.5vw, 100px)',
            lineHeight: 0.95,
            color: '#0a0a0a',
            letterSpacing: '-0.02em',
            marginBottom: '28px',
            textTransform: 'uppercase',
          }}
        >
          Mineral-Based. Climate-Proof.<br />
          Built to Last
          <span className="eco-dot" />
        </motion.h1>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            color: '#808080',
            lineHeight: 1.6,
            maxWidth: '520px',
            marginBottom: '36px',
          }}
        >
          Premium facade solutions with 25-year durability and eco-certified protection. We work alongside architects, developers, and contractors to deliver sustainable, durable finishes.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          style={{ display: 'flex', gap: '14px', marginBottom: '48px', flexWrap: 'wrap' }}
        >
          <a
            href="/services"
            style={{
              background: '#0a0a0a',
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
            onMouseEnter={(e) => (e.currentTarget.style.background = '#2d6a4f')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0a')}
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
        </motion.div>

        {/* Thin divider */}
        <div style={{ height: '1px', background: '#0a0a0a', width: '100%', marginBottom: '32px' }} />

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{ overflow: 'hidden' }}
        >
          <div className="animate-marquee">
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
