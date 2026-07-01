'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

function useCounter(target: number, duration = 1.6, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

function AnimatedStat({ val, numericVal, suffix, label, delay }: { val: string; numericVal?: number; suffix?: string; label: string; delay: number }) {
  const [started, setStarted] = useState(false);
  const count = useCounter(numericVal ?? 0, 1.6, started && !!numericVal);
  const display = numericVal ? `${count}${suffix ?? ''}` : val;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      onViewportEnter={() => setStarted(true)}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      style={{ background: '#f5f4f2', border: '1px solid #e5e5e5', padding: '16px 20px', textAlign: 'center', cursor: 'default' }}
    >
      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '22px', color: '#2d6a4f', display: 'block' }}>
        {display}
      </span>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '10px', color: '#808080', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
        {label}
      </span>
    </motion.div>
  );
}

export default function AboutSection() {
  return (
    <section style={{ background: '#ffffff', padding: '120px 6%', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">

          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              About
            </motion.span>

            <div style={{ overflow: 'hidden', marginBottom: '32px' }}>
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px, 4vw, 64px)', color: '#0a0a0a', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase' }}
              >
                ECOTONE<br />ARABIA
              </motion.h2>
            </div>

            {/* Animated green accent bar */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
              style={{ height: '3px', background: '#2d6a4f', width: '60px', marginBottom: '32px', transformOrigin: 'left' }}
            />

            {/* Stat badges */}
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <AnimatedStat val="25yr" numericVal={25} suffix="yr" label="Guarantee" delay={0.2} />
              <AnimatedStat val="1000+" numericVal={1000} suffix="+" label="Projects" delay={0.3} />
              <AnimatedStat val="2023" label="Est. Middle East" delay={0.4} />
            </div>
          </div>

          {/* Right */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {[
              'ECOTONE Arabia brings Australian coating innovation to the Middle East — proven across 1000+ extreme climate projects, backed by a 25-year performance guarantee.',
              'As the exclusive regional distributor of ECOTONE coating systems, we partner with architects, developers, and contractors on custom finishes, colour matching, and protective coatings built for certainty of outcome.',
              'With technical support across the UAE and Saudi Arabia, we deliver landmark projects built to last.',
            ].map((text, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
                style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75 }}
              >
                {text}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              style={{ display: 'flex', gap: '16px', marginTop: '8px', flexWrap: 'wrap' }}
            >
              <a
                href="/about"
                style={{ background: '#2d6a4f', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', padding: '12px 28px', textDecoration: 'none', textTransform: 'uppercase', display: 'inline-block', transition: 'background 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.background = '#1a4a35')}
                onMouseLeave={(e) => (e.currentTarget.style.background = '#2d6a4f')}
              >
                About Us
              </a>
              <a
                href="/contact"
                style={{ background: 'transparent', color: '#0a0a0a', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', padding: '12px 28px', border: '1.5px solid #0a0a0a', textDecoration: 'none', textTransform: 'uppercase', display: 'inline-block', transition: 'all 0.15s ease' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a'; }}
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
