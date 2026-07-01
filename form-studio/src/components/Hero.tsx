import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

const clients = ['APEX', 'MERIDIAN', 'VANTAGE', 'STRATUM', 'ORION', 'VOLTA', 'HELIX', 'NOVA'];

function MarqueeContent() {
  return (
    <>
      {clients.map((name, i) => (
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
          {i < clients.length - 1 && (
            <span
              style={{
                color: '#d42a1a',
                fontSize: '8px',
                padding: '0 20px',
              }}
            >
              ●
            </span>
          )}
        </span>
      ))}
      {/* Trailing separator for seamless loop */}
      <span style={{ color: '#d42a1a', fontSize: '8px', padding: '0 20px' }}>●</span>
    </>
  );
}

export default function Hero() {
  return (
    <section
      id="work"
      style={{
        background: '#f5f4f2',
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
      }}
    >
      {/* Massive background brand text */}
      <div className="bg-brand-text">FORM</div>

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          maxWidth: '1200px',
          margin: '0 auto',
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
          BRAND IDENTITY · STRATEGY · MOTION · WEB
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
            lineHeight: 0.95,
            color: '#0a0a0a',
            letterSpacing: '-0.02em',
            marginBottom: '28px',
            textTransform: 'uppercase',
          }}
        >
          We Build Brands<br />That Mean Something
          <span className="red-dot" />
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
          Strategy. Identity. Motion. Web. Everything your brand needs to compete — nothing it doesn't.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          style={{ display: 'flex', gap: '14px', marginBottom: '48px', flexWrap: 'wrap' }}
        >
          <a
            href="#contact"
            className="cta-primary"
            style={{
              background: '#0a0a0a',
              color: '#ffffff',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.08em',
              padding: '14px 32px',
              borderRadius: '0',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'inline-block',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#d42a1a')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0a')}
          >
            Start a Project
          </a>
          <a
            href="#work"
            style={{
              background: 'transparent',
              color: '#0a0a0a',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.08em',
              padding: '14px 32px',
              border: '1.5px solid #0a0a0a',
              borderRadius: '0',
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
            See Our Work
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
