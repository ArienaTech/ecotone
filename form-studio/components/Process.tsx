'use client';

import { motion } from 'motion/react';

const steps = [
  {
    number: '01',
    name: 'Discovery',
    description:
      "Two weeks understanding your market, competitors, and what you're really building. Stakeholder interviews, brand audit, competitive analysis.",
    timeframe: 'Approx. 2 weeks',
  },
  {
    number: '02',
    name: 'Strategy',
    description:
      'A complete brand brief: position, personality, voice, audience, and the single idea that makes you different.',
    timeframe: 'Approx. 1 week',
  },
  {
    number: '03',
    name: 'Design',
    description:
      'Identity designed across all touchpoints. Logo system, colour, typography, photography art direction, and the complete visual language.',
    timeframe: 'Approx. 3–4 weeks',
  },
  {
    number: '04',
    name: 'Launch',
    description:
      'Complete handoff: editable files, brand guidelines document, usage examples, and optional ongoing support retainer.',
    timeframe: '1 week + ongoing',
  },
];

export default function Process() {
  return (
    <section id="process" style={{ background: '#ffffff', padding: '120px 6%' }}>
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
          OUR PROCESS
        </p>
        <h2
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: 'clamp(28px, 4vw, 62px)',
            color: '#0a0a0a',
            lineHeight: 1.1,
            marginBottom: '80px',
          }}
        >
          How we build brands<br />that last.
        </h2>

        {/* Steps — horizontal with connecting line */}
        <div className="process-steps" style={{ position: 'relative' }}>
          {/* Horizontal connecting line across the top (desktop) */}
          <div
            className="process-line"
            style={{
              position: 'absolute',
              top: '6px',
              left: '6px',
              right: '6px',
              height: '1px',
              background: '#d6d6d6',
              zIndex: 0,
            }}
          />

          <div
            style={{
              display: 'flex',
              gap: '0',
            }}
            className="process-inner"
          >
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.15 }}
                style={{ flex: 1, position: 'relative', paddingRight: i < steps.length - 1 ? '32px' : '0' }}
              >
                {/* Red dot marker */}
                <div
                  style={{
                    width: '12px',
                    height: '12px',
                    borderRadius: '50%',
                    background: '#d42a1a',
                    marginBottom: '20px',
                    position: 'relative',
                    zIndex: 1,
                  }}
                />

                <h3
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: '18px',
                    color: '#0a0a0a',
                    marginBottom: '12px',
                  }}
                >
                  {step.number} {step.name}
                </h3>

                <p
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 300,
                    fontSize: '14px',
                    color: '#808080',
                    lineHeight: 1.65,
                    maxWidth: '220px',
                    marginBottom: '12px',
                  }}
                >
                  {step.description}
                </p>

                <p
                  style={{
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '12px',
                    color: '#808080',
                  }}
                >
                  {step.timeframe}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
