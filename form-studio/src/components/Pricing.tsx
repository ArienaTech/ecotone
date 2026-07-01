import { motion } from 'motion/react';

const tiers = [
  {
    name: 'Brand Starter',
    price: '£4,800',
    description:
      'Logo mark and wordmark, brand colour palette, typography selection, and a 12-page brand guidelines PDF. Ideal for new businesses launching cleanly.',
    cta: 'Start Here →',
    ctaStyle: 'grey',
    popular: false,
  },
  {
    name: 'Studio Package',
    price: '£9,600',
    description:
      'Everything in Starter, plus motion design guidelines, a 5-page website design, social media templates, and photography art direction brief. Our most popular engagement.',
    cta: 'Begin the Conversation →',
    ctaStyle: 'white',
    popular: true,
  },
  {
    name: 'Full Partnership',
    price: 'Bespoke',
    description:
      'Full brand strategy, identity, motion, web build, ongoing asset creation, and a dedicated monthly retainer. Built for companies at inflection points.',
    cta: "Let's Talk →",
    ctaStyle: 'grey',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" style={{ background: '#0a0a0a', padding: '100px 6%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <p
          style={{
            fontFamily: 'Inter',
            fontWeight: 400,
            fontSize: '11px',
            color: 'rgba(255,255,255,0.5)',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            marginBottom: '12px',
          }}
        >
          INVESTMENT
        </p>
        <h2
          style={{
            fontFamily: 'Space Grotesk',
            fontWeight: 800,
            fontSize: 'clamp(30px, 4vw, 64px)',
            color: '#ffffff',
            lineHeight: 1.0,
            marginBottom: '64px',
          }}
        >
          Straightforward pricing.
        </h2>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1px',
            background: '#333',
          }}
          className="pricing-grid"
        >
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: i * 0.12 }}
              style={{
                background: '#141414',
                padding: '48px 36px',
                position: 'relative',
                border: tier.popular ? '1px solid #d42a1a' : 'none',
              }}
            >
              {/* Popular badge */}
              {tier.popular && (
                <div
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    background: '#0a0a0a',
                    padding: '0 8px',
                    fontFamily: 'Inter',
                    fontWeight: 400,
                    fontSize: '10px',
                    color: '#d42a1a',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    whiteSpace: 'nowrap',
                  }}
                >
                  MOST POPULAR
                </div>
              )}

              <p
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 300,
                  fontSize: '12px',
                  color: '#808080',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  marginBottom: '16px',
                }}
              >
                {tier.name}
              </p>

              <p
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 800,
                  fontSize: 'clamp(28px, 3.5vw, 56px)',
                  color: '#ffffff',
                  lineHeight: 1.0,
                  marginBottom: '0',
                }}
              >
                {tier.price}
              </p>

              <div style={{ height: '1px', background: '#333', margin: '24px 0' }} />

              <p
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 300,
                  fontSize: '14px',
                  color: '#808080',
                  lineHeight: 1.65,
                  marginBottom: '32px',
                }}
              >
                {tier.description}
              </p>

              <a
                href="#contact"
                style={{
                  display: 'inline-block',
                  fontFamily: tier.ctaStyle === 'white' ? 'Space Grotesk' : 'Inter',
                  fontWeight: tier.ctaStyle === 'white' ? 700 : 400,
                  fontSize: '13px',
                  letterSpacing: tier.ctaStyle === 'white' ? '0.1em' : '0',
                  color: tier.ctaStyle === 'white' ? '#ffffff' : '#808080',
                  textDecoration: 'none',
                  textTransform: tier.ctaStyle === 'white' ? 'uppercase' : 'none',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#d42a1a')}
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = tier.ctaStyle === 'white' ? '#ffffff' : '#808080')
                }
              >
                {tier.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
