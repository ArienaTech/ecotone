import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const projects: Record<string, {
  name: string;
  category: string;
  description: string;
  overview: string;
  architect?: string;
  builder?: string;
  developer?: string;
  year?: string;
  products?: string[];
}> = {
  'central-station': {
    name: 'Central Station',
    category: 'Urban Infrastructure',
    description: 'Heritage restoration and modern integration at one of Sydney\'s busiest transport hubs.',
    overview: 'ECOTONE coatings provide durable protection for high-traffic public spaces at Central Station. This landmark urban infrastructure project required coatings that could withstand the demands of one of Sydney\'s busiest transit hubs while maintaining the heritage character of the building.',
    products: ['ECOTONE Matt', 'ECOTONE Seal', 'ECOCLEAN Concrete Sealer'],
  },
  'eden-view-apartments': {
    name: 'Eden View Apartments',
    category: 'Residential',
    description: 'Premium residential development featuring ECOTONE\'s concrete coating systems.',
    overview: 'This project showcases ECOTONE\'s ability to deliver sophisticated finishes for luxury apartment complexes. Grey precast concrete was transformed into a natural brick appearance using ECOTONE Matt and ECOTONE Sharp emulsion stains.',
    architect: 'Pb&A Architects',
    builder: 'Ganellen Constructions',
    developer: 'Young & Partners',
    products: ['ECOTONE Matt', 'ECOTONE Sharp', 'ECOTONE Prime'],
  },
  'half-moon-bay-marina': {
    name: 'Half Moon Bay Marina',
    category: 'Marine / Coastal',
    description: 'Coastal marine environment project demonstrating ECOTONE\'s weather-resistant coatings.',
    overview: 'The marina required specialized protection against salt spray and harsh coastal conditions. ECOTONE\'s weather-resistant coatings delivered long-term performance in this demanding marine environment.',
    products: ['ECOTONE Matt Plus', 'ECOTONE Waterproof Membrane', 'ECOTONE Seal'],
  },
  'luna-apartments-burleigh-heads': {
    name: 'Luna Apartments Burleigh Heads',
    category: 'Coastal Residential',
    description: 'Coastal residential development featuring ECOTONE\'s premium coating systems.',
    overview: 'This beachfront property required premium coatings capable of withstanding the salt-laden coastal environment. ECOTONE\'s mineral-based systems delivered stunning finishes with long-term protection.',
    products: ['ECOTONE Matt Plus', 'ECOTONE Sharp', 'ECOTONE Seal'],
  },
  'macarthur-anglican-school': {
    name: 'Macarthur Anglican School',
    category: 'Education',
    description: 'Educational facility featuring ECOTONE\'s cladding finishes with CXD wood grain process.',
    overview: 'Using our CXD process, we created specialized wood grain colour finishes for compressed fibre cement cladding soffits at this educational facility. The result is a natural timber aesthetic with superior durability.',
    products: ['ECOTONE Matt', 'ECOTONE Sharp', 'ECOTONE Prime'],
  },
  'queen-victoria-market': {
    name: 'Queen Victoria Market',
    category: 'Heritage / Commercial',
    description: 'Heritage market precinct revitalization featuring ECOTONE\'s weather-proof finishes.',
    overview: 'This iconic Melbourne landmark required careful restoration using modern protection that respects the heritage character of the building. ECOTONE\'s weather-proof finishes were carefully colour-matched to the original palette.',
    products: ['ECOTONE Matt', 'ECOTONE Minsil', 'ECOTONE Waterproof Membrane'],
  },
  'richmond-quarter': {
    name: 'Richmond Quarter',
    category: 'Mixed Use',
    description: 'Mixed-use development showcasing ECOTONE\'s versatility across multiple surface types.',
    overview: 'This large-scale urban development demonstrates ECOTONE\'s capability across multiple surface types and applications, from concrete facades to fibre cement cladding and metal elements.',
    products: ['ECOTONE Matt', 'ECOTONE Sharp', 'ECOTONE Prime', 'ECOTONE Seal'],
  },
  's84-arcade-canberra-centre': {
    name: 'S84 Arcade – Canberra Centre',
    category: 'Commercial',
    description: 'Commercial retail space in Canberra Centre featuring ECOTONE\'s premium finishes.',
    overview: 'This high-traffic retail environment required durable coatings that could maintain their appearance under constant use. ECOTONE\'s premium finishes delivered both aesthetics and performance.',
    products: ['ECOTONE Matt Plus', 'ECOTONE Seal', 'ECOCLEAN Antiviral Coating'],
  },
  'sirius': {
    name: 'Sirius',
    category: 'Residential',
    description: 'Iconic Sydney residential building featuring ECOTONE\'s concrete facade solutions.',
    overview: 'The Sirius building is one of Sydney\'s most architecturally significant residential buildings. ECOTONE\'s concrete facade solutions were applied to preserve and protect this iconic structure.',
    products: ['ECOTONE Minsil', 'ECOTONE Matt', 'ECOTONE Seal'],
  },
  'wee-hur-prima-projects': {
    name: 'Wee Hur – Prima Projects',
    category: 'Student Accommodation',
    description: 'Student accommodation development featuring ECOTONE\'s factory finishes.',
    overview: 'This multi-unit student accommodation development required consistent, high-quality factory-applied finishes across a large number of precast panels. ECOTONE\'s factory finish system delivered colour consistency and long-term performance.',
    builder: 'Wee Hur',
    products: ['ECOTONE Matt', 'ECOTONE Prime', 'ECOTONE Waterproof Membrane'],
  },
  'wee-hur-student-accommodation': {
    name: 'Wee Hur Student Accommodation',
    category: 'Student Accommodation',
    description: 'Canberra student housing project featuring ECOTONE\'s comprehensive coating solutions.',
    overview: 'This high-occupancy residential development in Canberra required durable finishes suitable for intensive use. ECOTONE\'s comprehensive coating solutions provided both protection and aesthetic quality.',
    builder: 'Wee Hur',
    products: ['ECOTONE Matt', 'ECOTONE Matt Plus', 'ECOTONE Seal'],
  },
};

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) {
    return (
      <div style={{ overflowX: 'hidden' }}>
        <Navbar />
        <main style={{ paddingTop: '64px', minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '24px', background: '#f5f4f2' }}>
          <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '48px', color: '#0a0a0a', textTransform: 'uppercase' }}>
            Project Not Found
          </h1>
          <a
            href="/portfolio"
            style={{
              background: '#2d6a4f',
              color: '#ffffff',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '13px',
              letterSpacing: '0.08em',
              padding: '14px 32px',
              textDecoration: 'none',
              textTransform: 'uppercase',
            }}
          >
            ← Back to Portfolio
          </a>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: '80px 6% 60px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <a href="/portfolio" style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', color: '#74c69d', textDecoration: 'none', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'inline-block', marginBottom: '28px' }}>
              ← Back to Portfolio
            </a>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#74c69d', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
              {project.category}
            </span>
            <h1
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 800,
                fontSize: 'clamp(32px, 5vw, 72px)',
                color: '#ffffff',
                lineHeight: 0.96,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                marginBottom: '20px',
              }}
            >
              {project.name}
            </h1>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.65 }}>
              {project.description}
            </p>
          </div>
        </section>

        {/* Image placeholder */}
        <div style={{ width: '100%', height: '480px', background: '#e8e5e0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#b0aaa0', letterSpacing: '0.15em', textTransform: 'uppercase' }}>
            Project Photography
          </span>
        </div>

        {/* Content */}
        <section style={{ background: '#ffffff', padding: '80px 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '80px', alignItems: 'start' }} className="contact-grid">
            <div>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '24px' }}>
                Project Overview
              </h2>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: '#505050', lineHeight: 1.8, marginBottom: '40px' }}>
                {project.overview}
              </p>

              <a
                href="/contact"
                style={{
                  display: 'inline-block',
                  background: '#2d6a4f',
                  color: '#ffffff',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '13px',
                  letterSpacing: '0.08em',
                  padding: '14px 32px',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                }}
              >
                Enquire About This System
              </a>
            </div>

            <div>
              {/* Project Details */}
              {(project.architect || project.builder || project.developer || project.year) && (
                <div style={{ background: '#f5f4f2', padding: '28px', marginBottom: '24px' }}>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
                    Project Details
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {project.architect && (
                      <div>
                        <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#808080', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Architect</span>
                        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '14px', color: '#0a0a0a' }}>{project.architect}</span>
                      </div>
                    )}
                    {project.builder && (
                      <div>
                        <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#808080', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Builder</span>
                        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '14px', color: '#0a0a0a' }}>{project.builder}</span>
                      </div>
                    )}
                    {project.developer && (
                      <div>
                        <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#808080', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Developer</span>
                        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '14px', color: '#0a0a0a' }}>{project.developer}</span>
                      </div>
                    )}
                    {project.year && (
                      <div>
                        <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#808080', letterSpacing: '0.1em', textTransform: 'uppercase', display: 'block', marginBottom: '4px' }}>Year</span>
                        <span style={{ fontFamily: 'Space Grotesk', fontWeight: 400, fontSize: '14px', color: '#0a0a0a' }}>{project.year}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Products Used */}
              {project.products && project.products.length > 0 && (
                <div style={{ background: '#f5f4f2', padding: '28px' }}>
                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '20px' }}>
                    Products Used
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {project.products.map((product) => (
                      <div
                        key={product}
                        style={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: '10px',
                          fontFamily: 'Space Grotesk',
                          fontWeight: 400,
                          fontSize: '14px',
                          color: '#0a0a0a',
                        }}
                      >
                        <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2d6a4f', flexShrink: 0, display: 'inline-block' }} />
                        {product}
                      </div>
                    ))}
                  </div>
                  <a href="/ecotone-products" style={{ display: 'inline-block', marginTop: '20px', fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '12px', color: '#2d6a4f', textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    View All Products →
                  </a>
                </div>
              )}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
