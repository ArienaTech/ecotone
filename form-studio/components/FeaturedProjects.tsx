'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const EASE = [0.16, 1, 0.3, 1] as const;

const projects = [
  { name: 'Premium Development Project', category: 'Colour By Design', slug: 'premium-development-project', image: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Premium%20Development%20Project.png' },
  { name: 'Half Moon Bay Marina', category: 'Functional Coatings', slug: 'half-moon-bay-marina', image: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Half%20Moon%20Bay%20Marina.png' },
  { name: 'Commercial Infrastructure', category: 'Urban Infrastructure', slug: 'commercial-infrastructure', image: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Commercial%20Infrastructure.png' },
  { name: 'Carlaw Park Student Village', category: 'Prefabricated Facades', slug: 'carlaw-park-student-village', image: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Carlaw%20Park%20Student%20Village.png' },
  { name: 'Macarthur Anglican School', category: 'Cladding Finishes', slug: 'macarthur-anglican-school', image: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Macarthur%20Anglican%20School.png' },
  { name: 'Factory Applied Finishes', category: 'Factory Finishes', slug: 'factory-applied-finishes', image: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/Factory%20Applied%20Finishes.png' },
];

const categoryColors: Record<string, string> = {
  'Colour By Design': '#8B6914',
  'Functional Coatings': '#1A3A5C',
  'Urban Infrastructure': '#4a4a8a',
  'Prefabricated Facades': '#6A4010',
  'Cladding Finishes': '#6a2d4a',
  'Factory Finishes': '#2d4a6a',
};

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.a
      href={`/portfolio/${project.slug}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.1 }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ display: 'block', background: '#ffffff', textDecoration: 'none', overflow: 'hidden', position: 'relative' }}
    >
      {/* Image */}
      <div style={{ width: '100%', height: '220px', overflow: 'hidden', position: 'relative' }}>
        <motion.img
          src={project.image}
          alt={project.name}
          animate={{ scale: hovered ? 1.06 : 1 }}
          transition={{ duration: 0.5, ease: EASE }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        />
        {/* Overlay on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ position: 'absolute', inset: 0, background: 'rgba(139,105,20,0.15)' }}
        />
      </div>

      {/* Card body */}
      <div style={{ padding: '24px 24px 28px' }}>
        <span
          style={{ display: 'inline-block', background: categoryColors[project.category] || '#8B6914', color: '#ffffff', fontFamily: 'Inter', fontWeight: 500, fontSize: '10px', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', marginBottom: '14px' }}
        >
          {project.category}
        </span>

        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '17px', color: '#0a0a0a', marginBottom: '16px', lineHeight: 1.3 }}>
          {project.name}
        </h3>

        <motion.span
          animate={{ x: hovered ? 6 : 0 }}
          transition={{ duration: 0.2 }}
          style={{ display: 'inline-block', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '12px', color: '#8B6914', textTransform: 'uppercase', letterSpacing: '0.06em' }}
        >
          View Project →
        </motion.span>
      </div>

      {/* Bottom green bar that grows on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '3px', background: '#8B6914', transformOrigin: 'left' }}
      />
    </motion.a>
  );
}

export default function FeaturedProjects() {
  return (
    <section style={{ background: '#f5f4f2', padding: '120px 6%', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '64px', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="section-eyebrow"
            >
              Our Work
            </motion.span>
            <div style={{ overflow: 'hidden' }}>
              <motion.h2
                initial={{ y: '100%' }}
                whileInView={{ y: '0%' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
                style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(32px, 4vw, 64px)', color: '#0a0a0a', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}
              >
                Featured Projects
              </motion.h2>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#606060', maxWidth: '560px', lineHeight: 1.7 }}
            >
              Explore our portfolio of transformative coating solutions across residential, commercial and infrastructure projects. Each project reflects our commitment to innovation, sustainability and lasting beauty.
            </motion.p>
          </div>
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/portfolio"
            style={{ display: 'inline-block', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '12px', letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8B6914', textDecoration: 'none', border: '1.5px solid #8B6914', padding: '12px 28px', transition: 'all 0.15s ease', flexShrink: 0 }}
            onMouseEnter={(e) => { e.currentTarget.style.background = '#8B6914'; e.currentTarget.style.color = '#ffffff'; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B6914'; }}
          >
            View All Projects →
          </motion.a>
        </div>

        {/* Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
