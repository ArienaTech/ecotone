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

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
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

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE }}
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: 'clamp(40px, 5.5vw, 100px)',
            lineHeight: 0.96,
            color: '#0a0a0a',
            letterSpacing: '-0.02em',
            marginBottom: '28px',
            textTransform: 'uppercase',
          }}
        >
          Mineral-Based.<br />Climate-Proof.<br />
          <span style={{ color: '#2d6a4f' }}>Built to Last</span>
          <span className="eco-dot" />
        </motion.h1>

        {/* Body */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.15 }}
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '16px',
            color: '#606060',
            lineHeight: 1.65,
            maxWidth: '560px',
            marginBottom: '36px',
          }}
        >
          Premium facade solutions with 25-year durability and eco-certified protection. We work alongside architects, developers, and contractors to deliver sustainable, durable finishes that preserve and enhance architectural vision.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          style={{ display: 'flex', gap: '14px', marginBottom: '56px', flexWrap: 'wrap' }}
        >
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
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          style={{ display: 'flex', gap: '48px', marginBottom: '40px', flexWrap: 'wrap' }}
          className="stats-bar"
        >
          {[
            { number: '25yr', label: 'Performance Guarantee' },
            { number: '1000+', label: 'Projects Completed' },
            { number: '55°C+', label: 'Temperature Proven' },
          ].map((stat) => (
            <div key={stat.number}>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#0a0a0a', letterSpacing: '-0.02em', display: 'block' }}>
                {stat.number}
              </span>
              <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#808080', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Thin divider */}
        <div style={{ height: '1px', background: '#d6d6d6', width: '100%', marginBottom: '28px' }} />

        {/* Marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
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
