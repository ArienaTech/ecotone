'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects = [
  {
    name: 'Central Station',
    category: 'Urban Infrastructure',
    slug: 'central-station',
    description: 'Heritage restoration and modern integration at one of Sydney\'s busiest transport hubs. ECOTONE coatings provide durable protection for high-traffic public spaces.',
  },
  {
    name: 'Eden View Apartments',
    category: 'Residential',
    slug: 'eden-view-apartments',
    description: 'Premium residential development featuring ECOTONE\'s concrete coating systems. The project showcases our ability to deliver sophisticated finishes for luxury apartment complexes.',
  },
  {
    name: 'Half Moon Bay Marina',
    category: 'Marine / Coastal',
    slug: 'half-moon-bay-marina',
    description: 'Coastal marine environment project demonstrating ECOTONE\'s weather-resistant coatings. The marina required specialized protection against salt spray and harsh coastal conditions.',
  },
  {
    name: 'Luna Apartments Burleigh Heads',
    category: 'Coastal Residential',
    slug: 'luna-apartments-burleigh-heads',
    description: 'Coastal residential development featuring ECOTONE\'s premium coating systems. The project highlights our expertise in delivering stunning finishes for beachfront properties.',
  },
  {
    name: 'Macarthur Anglican School',
    category: 'Education',
    slug: 'macarthur-anglican-school',
    description: 'Educational facility featuring ECOTONE\'s cladding finishes. Using our CXD process, we created specialized wood grain colour finishes for compressed fibre cement cladding soffits.',
  },
  {
    name: 'Queen Victoria Market',
    category: 'Heritage / Commercial',
    slug: 'queen-victoria-market',
    description: 'Heritage market precinct revitalization featuring ECOTONE\'s weather-proof finishes. This iconic Melbourne landmark required careful restoration with modern protection.',
  },
  {
    name: 'Richmond Quarter',
    category: 'Mixed Use',
    slug: 'richmond-quarter',
    description: 'Mixed-use development showcasing ECOTONE\'s versatility across multiple surface types and applications. The project demonstrates our capability in large-scale urban developments.',
  },
  {
    name: 'S84 Arcade – Canberra Centre',
    category: 'Commercial',
    slug: 's84-arcade-canberra-centre',
    description: 'Commercial retail space in Canberra Centre featuring ECOTONE\'s premium finishes. The project required durable coatings suitable for high-traffic retail environments.',
  },
  {
    name: 'Sirius',
    category: 'Residential',
    slug: 'sirius',
    description: 'Iconic Sydney residential building featuring ECOTONE\'s concrete facade solutions. The project showcases our ability to work with challenging architectural designs.',
  },
  {
    name: 'Wee Hur – Prima Projects',
    category: 'Student Accommodation',
    slug: 'wee-hur-prima-projects',
    description: 'Student accommodation development featuring ECOTONE\'s factory finishes. The project demonstrates our capability in delivering consistent, high-quality finishes for multi-unit developments.',
  },
  {
    name: 'Wee Hur Student Accommodation',
    category: 'Student Accommodation',
    slug: 'wee-hur-student-accommodation',
    description: 'Canberra student housing project featuring ECOTONE\'s comprehensive coating solutions. The development required durable finishes suitable for high-occupancy residential use.',
  },
];

const categoryColors: Record<string, string> = {
  'Urban Infrastructure': '#2d4a6a',
  'Residential': '#2d6a4f',
  'Marine / Coastal': '#1a6b6b',
  'Coastal Residential': '#4a6a2d',
  'Education': '#6a4a2d',
  'Heritage / Commercial': '#6a2d4a',
  'Mixed Use': '#4a2d6a',
  'Commercial': '#2d4a6a',
  'Student Accommodation': '#6a6a2d',
};

export default function PortfolioPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: '100px 6% 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#74c69d', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Our Work
            </span>
            <h1
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 800,
                fontSize: 'clamp(40px, 6vw, 96px)',
                color: '#ffffff',
                lineHeight: 0.95,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                marginBottom: '24px',
              }}
            >
              Featured Projects
            </h1>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '18px',
                color: 'rgba(255,255,255,0.65)',
                maxWidth: '600px',
                lineHeight: 1.65,
              }}
            >
              Explore our portfolio of completed projects showcasing ECOTONE&apos;s premium coating solutions across residential, commercial, and infrastructure developments.
            </p>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '-2%', transform: 'translateY(-50%)', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(80px, 15vw, 240px)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
            PORTFOLIO
          </div>
        </section>

        {/* Projects grid */}
        <section style={{ background: '#f5f4f2', padding: '80px 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '2px',
              }}
              className="projects-grid"
            >
              {projects.map((project) => (
                <a
                  key={project.slug}
                  href={`/portfolio/${project.slug}`}
                  style={{
                    display: 'block',
                    background: '#ffffff',
                    padding: '36px 28px',
                    textDecoration: 'none',
                    transition: 'transform 0.2s ease',
                    cursor: 'pointer',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
                >
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
                      marginBottom: '16px',
                    }}
                  >
                    {project.category}
                  </span>

                  {/* Image placeholder */}
                  <div style={{ width: '100%', height: '200px', background: '#f0eeeb', marginBottom: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '11px', color: '#c0bdb8', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Project Image
                    </span>
                  </div>

                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '18px', color: '#0a0a0a', marginBottom: '12px', lineHeight: 1.3 }}>
                    {project.name}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: '#606060', lineHeight: 1.65, marginBottom: '20px' }}>
                    {project.description}
                  </p>
                  <span style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '12px', color: '#2d6a4f', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    View Project →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
