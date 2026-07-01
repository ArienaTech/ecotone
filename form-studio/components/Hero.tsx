'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ChevronDown } from 'lucide-react';

const EASE = [0.16, 1, 0.3, 1] as const;

const marqueeItems = ['UAE', 'Saudi Arabia', 'Bahrain', '25-Year Guarantee', '1000+ Projects', 'Eco-Certified', 'Australian Innovation', 'Gulf Climate Proven'];

function useCounter(target: number, duration = 1.8, start = false) {
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

function StatCard({ number, suffix, label, delay }: { number: number; suffix: string; label: string; delay: number }) {
  const [started, setStarted] = useState(false);
  const count = useCounter(number, 1.6, started);
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: EASE, delay }}
      onViewportEnter={() => setStarted(true)}
      style={{ borderLeft: '2px solid #2d6a4f', paddingLeft: '16px' }}
    >
      <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 3vw, 30px)', color: '#0a0a0a', letterSpacing: '-0.03em', display: 'block', lineHeight: 1 }}>
        {count}{suffix}
      </span>
      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#808080', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px', display: 'block' }}>
        {label}
      </span>
    </motion.div>
  );
}

function MarqueeContent() {
  return (
    <>
      {marqueeItems.map((name, i) => (
        <span key={i} className="flex items-center">
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 300, fontSize: '13px', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(10,10,10,0.4)' }}>
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

function AnimatedHeadline() {
  const words = [
    { text: 'Climate-Proof', green: false },
    { text: 'Facades.', green: false },
    { text: 'Built', green: true },
    { text: 'to', green: true },
    { text: 'Last.', green: true },
  ];
  return (
    <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px, 5.5vw, 100px)', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '24px', display: 'flex', flexWrap: 'wrap', gap: '0.22em', overflow: 'hidden' }}>
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            initial={{ y: '110%', opacity: 0 }}
            animate={{ y: '0%', opacity: 1 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.2 + i * 0.1 }}
            style={{ display: 'inline-block', color: word.green ? '#2d6a4f' : '#0a0a0a' }}
          >
            {word.text}
          </motion.span>
        </span>
      ))}
      <span style={{ overflow: 'hidden', display: 'inline-block' }}>
        <motion.span initial={{ y: '110%', opacity: 0 }} animate={{ y: '0%', opacity: 1 }} transition={{ duration: 0.7, ease: EASE, delay: 0.7 }} style={{ display: 'inline-block' }}>
          <span className="eco-dot" />
        </motion.span>
      </span>
    </h1>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={sectionRef} id="hero" style={{ background: '#f5f4f2', position: 'relative', overflow: 'hidden', minHeight: '100vh' }}>
      <motion.div className="bg-brand-text" style={{ y: bgY }}>ECO</motion.div>

      {/* Subtle grid */}
      <motion.div
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 2, delay: 0.5 }}
        style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(45,106,79,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(45,106,79,0.04) 1px, transparent 1px)', backgroundSize: '80px 80px', zIndex: 1, pointerEvents: 'none' }}
      />

      {/* Left accent line — hidden on mobile via media query */}
      <motion.div
        initial={{ scaleY: 0, originY: 0 }} animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: EASE, delay: 0.3 }}
        className="hidden md:block"
        style={{ position: 'absolute', left: '3%', top: '15%', bottom: '15%', width: '2px', background: 'linear-gradient(to bottom, transparent, #2d6a4f, transparent)', zIndex: 2, pointerEvents: 'none' }}
      />

      <motion.div
        style={{ position: 'relative', zIndex: 10, width: '100%', padding: 'clamp(80px,10vh,140px) 6% clamp(40px,5vh,80px)', display: 'flex', flexDirection: 'column', justifyContent: 'center', minHeight: '100vh', y: contentY, opacity }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
          style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#2d6a4f', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '20px' }}
        >
          Luxury Surface Enhancement
        </motion.p>

        <AnimatedHeadline />

        <motion.p
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.75 }}
          style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: 'clamp(14px, 1.6vw, 16px)', color: '#808080', lineHeight: 1.65, maxWidth: '520px', marginBottom: '32px' }}
        >
          Mineral-based facade coatings engineered for 25-year durability and eco-certified performance. Trusted by architects, developers, and contractors across the Gulf.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 0.9 }}
          style={{ display: 'flex', gap: '12px', marginBottom: '48px', flexWrap: 'wrap' }}
        >
          <a href="/services" style={{ background: '#2d6a4f', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '13px 28px', textDecoration: 'none', textTransform: 'uppercase', display: 'inline-block', transition: 'background 0.15s ease' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#1a4a35')} onMouseLeave={(e) => (e.currentTarget.style.background = '#2d6a4f')}>
            Explore Services
          </a>
          <a href="/contact" style={{ background: 'transparent', color: '#0a0a0a', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '13px 28px', border: '1.5px solid #0a0a0a', textDecoration: 'none', textTransform: 'uppercase', display: 'inline-block', transition: 'all 0.15s ease' }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#0a0a0a'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0a0a0a'; }}>
            Project Enquiry
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5, delay: 1.0 }}
          style={{ display: 'flex', gap: 'clamp(20px, 4vw, 40px)', marginBottom: '36px', flexWrap: 'wrap' }}
        >
          <StatCard number={25} suffix="yr" label="Performance Guarantee" delay={1.0} />
          <StatCard number={1000} suffix="+" label="Projects Completed" delay={1.1} />
          <StatCard number={55} suffix="°C+" label="Temperature Proven" delay={1.2} />
        </motion.div>

        {/* Divider */}
        <motion.div initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ duration: 0.8, ease: EASE, delay: 1.0 }}
          style={{ height: '1px', background: '#0a0a0a', width: '100%', marginBottom: '24px', transformOrigin: 'left' }} />

        {/* Marquee */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.1 }} style={{ overflow: 'hidden', marginBottom: '32px' }}>
          <div className="animate-marquee"><MarqueeContent /><MarqueeContent /></div>
        </motion.div>

        {/* Scroll button */}
        <motion.button
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 0.6 }}
          onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
          className="hero-scroll-btn"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', background: 'none', border: 'none', cursor: 'pointer', padding: '8px', alignSelf: 'center' }}
        >
          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '10px', color: '#808080', letterSpacing: '0.16em', textTransform: 'uppercase' }}>Scroll</span>
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}>
            <ChevronDown size={16} color="#2d6a4f" />
          </motion.div>
        </motion.button>
      </motion.div>
    </section>
  );
}
