'use client';

import { motion } from 'motion/react';

const projects = [
  { name: 'Premium Development Project', category: 'Colour By Design', slug: 'premium-development-project' },
  { name: 'Half Moon Bay Marina', category: 'Functional Coatings', slug: 'half-moon-bay-marina' },
  { name: 'Commercial Infrastructure', category: 'Urban Infrastructure', slug: 'commercial-infrastructure' },
  { name: 'Carlaw Park Student Village', category: 'Prefabricated Facades', slug: 'carlaw-park-student-village' },
  { name: 'Macarthur Anglican School', category: 'Cladding Finishes', slug: 'macarthur-anglican-school' },
  { name: 'Factory Applied Finishes', category: 'Factory Finishes', slug: 'factory-applied-finishes' },
];

const categoryColors: Record<string, string> = {
  'Colour By Design': '#2d6a4f',
  'Functional Coatings': '#1a6b6b',
  'Urban Infrastructure': '#4a4a8a',
  'Prefabricated Facades': '#6a4a2d',
  'Cladding Finishes': '#6a2d4a',
  'Factory Finishes': '#2d4a6a',
};

export default function FeaturedProjects() {
  return (
    <section style={{ background: '#f5f4f2', padding: '120px 6%' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 800,
                fontSize: 'clamp(32px, 4vw, 64px)',
                color: '#0a0a0a',
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Featured Projects
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '15px',
                color: '#606060',
                maxWidth: '560px',
                lineHeight: 1.7,
              }}
            >
              Explore our portfolio of transformative coating solutions across residential, commercial and infrastructure projects. Each project reflects our commitment to innovation, sustainability and lasting beauty.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/portfolio"
            style={{
              display: 'inline-block',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: '#2d6a4f',
              textDecoration: 'none',
              border: '1.5px solid #2d6a4f',
              padding: '12px 28px',
              transition: 'all 0.15s ease',
              flexShrink: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#2d6a4f';
              e.currentTarget.style.color = '#ffffff';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#2d6a4f';
            }}
          >
            View All Projects →
          </motion.a>
        </div>

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}
          className="projects-grid"
        >
          {projects.map((project, i) => (
            <motion.a
              key={project.slug}
              href={`/portfolio/${project.slug}`}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              style={{
                display: 'block',
                background: '#ffffff',
                padding: '40px 32px',
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
                transition: 'transform 0.2s ease',
                cursor: 'pointer',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
            >
              {/* Category badge */}
              <span
                style={{
                  display: 'inline-block',
                  background: categoryColors[project.category] || '#2d6a4f',
                  color: '#ffffff',
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '10px',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  padding: '4px 10px',
                  marginBottom: '20px',
                }}
              >
                {project.category}
              </span>

              {/* Project image placeholder */}
              <div
                style={{
                  width: '100%',
                  height: '180px',
                  background: '#f0eeeb',
                  marginBottom: '20px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '11px', color: '#c0bdb8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                  Project Image
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '17px',
                  color: '#0a0a0a',
                  marginBottom: '12px',
                  lineHeight: 1.3,
                }}
              >
                {project.name}
              </h3>

              <span
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 600,
                  fontSize: '12px',
                  letterSpacing: '0.06em',
                  color: '#2d6a4f',
                  textTransform: 'uppercase',
                }}
              >
                View Project →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
