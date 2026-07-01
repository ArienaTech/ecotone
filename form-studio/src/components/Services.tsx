import { useState } from 'react';
import { motion } from 'motion/react';

const services = [
  {
    name: 'Brand Strategy',
    description:
      "Positioning, messaging, and the clarity that makes everything else possible. We define who you are, who you're for, and why it matters.",
  },
  {
    name: 'Visual Identity',
    description:
      'Logos, colour, type, and the brand systems that scale across every touchpoint. Work that endures, not trends that expire.',
  },
  {
    name: 'Motion & Content',
    description:
      'Bringing the brand to life across video, social, and digital. Motion guidelines, campaign assets, and content that performs.',
  },
  {
    name: 'Web & Digital',
    description:
      'Websites and digital experiences built entirely on the identity. Fast, accessible, and designed to convert.',
  },
];

function ServiceRow({ service, index }: { service: (typeof services)[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: 'easeOut', delay: index * 0.1 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        padding: '36px 0 36px 20px',
        borderTop: '0.5px solid #d6d6d6',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        cursor: 'pointer',
        transform: hovered ? 'translateY(-2px)' : 'translateY(0)',
        boxShadow: hovered ? '0 2px 12px rgba(0,0,0,0.08)' : 'none',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
      }}
    >
      {/* Red left border indicator */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          top: 0,
          bottom: 0,
          width: '3px',
          background: '#d42a1a',
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.15s ease',
        }}
      />

      <div style={{ flex: 1, paddingRight: '32px' }}>
        <h3
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: 'clamp(22px, 3vw, 40px)',
            color: '#0a0a0a',
            marginBottom: '10px',
          }}
        >
          {service.name}
        </h3>
        <p
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 300,
            fontSize: '15px',
            color: '#808080',
            maxWidth: '440px',
            lineHeight: 1.65,
          }}
        >
          {service.description}
        </p>
      </div>

      <div style={{ flexShrink: 0, marginLeft: '32px', paddingTop: '4px' }}>
        <span
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '20px',
            color: '#0a0a0a',
            letterSpacing: '-0.02em',
          }}
        >
          →
        </span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  return (
    <section id="services" style={{ background: '#ffffff', padding: '120px 6%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            color: '#808080',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          WHAT WE DO
        </p>
        <h2
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: 'clamp(32px, 4.5vw, 72px)',
            color: '#0a0a0a',
            lineHeight: 1.0,
            marginBottom: '72px',
          }}
        >
          Four disciplines.<br />One studio.
        </h2>

        <div>
          {services.map((service, i) => (
            <ServiceRow key={service.name} service={service} index={i} />
          ))}
          {/* Bottom border on last row */}
          <div style={{ borderBottom: '0.5px solid #d6d6d6' }} />
        </div>
      </div>
    </section>
  );
}
