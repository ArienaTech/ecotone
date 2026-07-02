'use client';

import { motion } from 'motion/react';

export default function CtaSection() {
  return (
    <section
      id="contact"
      style={{
        background: '#d42a1a',
        padding: 'clamp(64px,10vh,120px) 6%',
        textAlign: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <h2
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: 'clamp(40px, 6vw, 108px)',
            color: '#ffffff',
            lineHeight: 0.95,
            letterSpacing: '-0.02em',
            marginBottom: '44px',
          }}
        >
          LET&apos;S BUILD<br />SOMETHING
        </h2>

        <a
          href="mailto:hello@formstudio.co"
          style={{
            display: 'inline-block',
            background: '#ffffff',
            color: '#0a0a0a',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '15px',
            letterSpacing: '0.08em',
            padding: '18px 48px',
            borderRadius: '0',
            textDecoration: 'none',
            textTransform: 'uppercase',
            transition: 'all 0.15s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#0a0a0a';
            e.currentTarget.style.color = '#ffffff';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = '#ffffff';
            e.currentTarget.style.color = '#0a0a0a';
          }}
        >
          Start a Project →
        </a>

        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '13px',
            color: 'rgba(255,255,255,0.7)',
            marginTop: '20px',
          }}
        >
          Average response time: 4 hours
        </p>
      </motion.div>
    </section>
  );
}
