'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';

const services = [
  {
    slug: 'colour-by-design',
    eyebrow: 'Architectural Excellence',
    heading: 'Colour By Design',
    subheading: 'Bringing colour, protection & transformation to Architecture.',
    intro: 'For almost three decades, ECOTONE has redefined what\'s possible in architectural surfaces, leading the way in Colour By Design across Australia and New Zealand.',
    paragraphs: [
      'Concrete and cladding are blank canvases with endless possibilities. Our Colour By Design approach allows architects to preserve, protect, or transform these surfaces, achieving finishes that emulate premium materials like stone, timber, metal or bespoke design, enhance monolithic materiality creating seamless internal and external finishes, and ensure full Gulf building standards compliance while maintaining creative freedom.',
      'By working with your designs, ECOTONE delivers long-lasting, sustainable architectural facades that will WOW you and your client. Our advanced coatings also provide apartment buildings with essential waterproofing and weathering ensuring durability and compliance with Gulf building standards.',
    ],
    cta: { label: 'Explore Colour By Design', href: '/services/colour-by-design' },
    subServices: ['Concrete Facades', 'Cladding Finishes', 'Prefabricated Facades', 'Material Finishes'],
  },
  {
    slug: 'colour-matching',
    eyebrow: 'Precision Colour Solutions',
    heading: 'Colour Matching',
    subheading: 'Repair, restore and rejuvenate building materials.',
    intro: 'We offer colour matching services that repair, restore and rejuvenate brick, block, mortar and concrete building materials.',
    paragraphs: [
      'Our products and applications aim to deliver stunningly sustainable results – an enhanced aesthetic appeal that lasts the test of time. ECOTONE products and applications are not comparable to paint. We call them emulsion stains to differentiate them from the properties of paint that prevent building materials from being able to breathe, making them prone to fading, cracking and peeling in the built environment.',
      'Our ECOTONE emulsion stains are different. Each one provides a unique benefit based on building material application and desired finish. All have been scientifically formulated to preserve the breathability of existing surface materials making them an environmentally-friendly choice.',
    ],
    cta: { label: 'Get Colour Consultation', href: '/services/colour-matching' },
    subServices: [],
  },
  {
    slug: 'factory-finishes',
    eyebrow: 'Industrial Grade Solutions',
    heading: 'Factory Finishes',
    subheading: 'Cast Grey. Finish Anything.',
    intro: 'ECOTONE Arabia\'s factory applied coating system gives precast concrete manufacturers complete control over colour and finish - applied after casting, before panels leave your yard.',
    paragraphs: [
      'One standard grey mix delivers every colour, texture and stone effect your project demands. Backed by a 25 year colour warranty, it is the only system of its kind available in the Gulf market.',
      'ECOTONE\'s mineral silicate coating is applied to fully cured concrete, completely separating colour from the casting process. You cast standard grey. We deliver the exact finish your architect specified - stone, timber, brick, metallic, heritage, or bespoke — colour-approved in your factory before a single panel leaves the yard.',
    ],
    cta: { label: 'Industrial Consultation', href: '/services/factory-finishes' },
    subServices: ['Stone & Heritage', 'Timber Effect', 'Metallic', 'Opaque & Brick', 'Translucent', 'Vivid & Bespoke'],
  },
  {
    slug: 'functional-coatings',
    eyebrow: 'Next Generation Protection',
    heading: 'Functional Coatings',
    subheading: 'Invisible self-cleaning coating systems.',
    intro: 'Through ECOCLEAN coatings, we are moving our industry forward towards invisible self-cleaning coating systems that maintain the beauty of a surface while sustainably extending its life.',
    paragraphs: [
      'Our ECOCLEAN coatings and systems are the next generation of functional and protective coatings that use photocatalyst and nanocatalyst technology to break down harmful compounds that come into contact with a coated surface. They provide Anti-Carbonation protection, Graffiti Resistance, and Self-Cleaning properties.',
      'Photocatalyst and nanocatalyst coatings are one of the most exciting innovations that have come out of the building industry. From an external building perspective, these coatings use the natural power of light to self-clean surfaces with the double benefit of extending the lifecycle of an asset AND reducing its maintenance costs.',
    ],
    cta: { label: 'Learn More', href: '/services/functional-coatings' },
    subServices: [],
  },
  {
    slug: 'urban-infrastructure',
    eyebrow: 'Sustainable Infrastructure',
    heading: 'Urban Infrastructure',
    subheading: 'From Heritage Districts to Infrastructure Corridors.',
    intro: 'ECOTONE Arabia delivers premium coating solutions for large scale infrastructure across the Gulf - bridges, tunnels, freeways, public realm projects and heritage developments.',
    paragraphs: [
      'Our mineral based systems provide the durability demanded by high exposure public infrastructure while delivering the architectural quality expected of landmark projects across the Gulf building standards.',
      'Gulf infrastructure faces extreme demands - intense UV, severe thermal expansion, salt air in coastal zones and the constant visual scrutiny of landmark public projects. ECOTONE\'s permanent silicate bonding technology eliminates the maintenance cycle with a single factory applied application, backed by a 25 year guarantee.',
    ],
    cta: { label: 'Infrastructure Consultation', href: '/services/urban-infrastructure' },
    subServices: ['Heritage Districts', 'Bridges, Tunnels and Freeways', 'Mega Projects', 'Luxury Resorts & Hospitality', 'Colour Rescue and Repair'],
  },
  {
    slug: 'weather-proof-finishes',
    eyebrow: 'Ultimate Weather Protection',
    heading: 'Weather-Proof Finishes',
    subheading: 'Engineered for the Gulf. Built to Last 25 Years.',
    intro: 'ECOTONE Arabia\'s weather defense systems are mineral-based coating solutions specifically engineered for the extreme climate demands of the Gulf.',
    paragraphs: [
      'Intense UV exposure, thermal cycling between day and night, sandstorm abrasion, salt laden coastal air, and surface temperatures exceeding 55°C. Where conventional paint fails within years, ECOTONE chemically bonds to the substrate and carries a 25 year performance guarantee.',
      'ECOTONE is a mineral stain, not a paint. It chemically bonds into concrete, masonry, and cementitious surfaces at a molecular level - becoming part of the substrate rather than sitting on top of it. The result is a breathable, permanently bonded finish that cannot crack, peel or delaminate regardless of temperature or UV exposure.',
    ],
    cta: { label: 'Weather Assessment', href: '/services/weather-proof-finishes' },
    subServices: ['Rain & Moisture Protection', 'UV & Solar Protection', 'Thermal Performance', 'Wind & Impact Resistance'],
  },
];

export default function ServicesPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: '100px 6% 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#74c69d', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Our Services
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
              Complete Coating<br />Solutions
            </h1>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.65 }}>
              From precision colour matching to functional protective coatings — comprehensive solutions for every architectural challenge in the Gulf.
            </p>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '-2%', transform: 'translateY(-50%)', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(80px, 14vw, 220px)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
            SERVICES
          </div>
        </section>

        {/* Quick nav */}
        <section style={{ background: '#2d6a4f', padding: '24px 6%', overflowX: 'auto' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', gap: '8px', flexWrap: 'nowrap', minWidth: 'max-content' }}>
            {services.map((s) => (
              <a
                key={s.slug}
                href={`#${s.slug}`}
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '12px',
                  color: 'rgba(255,255,255,0.8)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '8px 16px',
                  border: '1px solid rgba(255,255,255,0.2)',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; e.currentTarget.style.color = '#ffffff'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.8)'; }}
              >
                {s.heading}
              </a>
            ))}
          </div>
        </section>

        {/* Service sections */}
        {services.map((service, i) => (
          <section
            key={service.slug}
            id={service.slug}
            style={{ background: i % 2 === 0 ? '#ffffff' : '#f5f4f2', padding: '100px 6%', scrollMarginTop: '64px' }}
          >
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }} className="about-grid">
                <div>
                  <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#2d6a4f', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                    {service.eyebrow}
                  </span>
                  <h2
                    style={{
                      fontFamily: 'Space Grotesk',
                      fontWeight: 800,
                      fontSize: 'clamp(28px, 3vw, 52px)',
                      color: '#0a0a0a',
                      lineHeight: 0.96,
                      letterSpacing: '-0.02em',
                      textTransform: 'uppercase',
                      marginBottom: '12px',
                    }}
                  >
                    {service.heading}
                  </h2>
                  <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '16px', color: '#2d6a4f', marginBottom: '24px', lineHeight: 1.4 }}>
                    {service.subheading}
                  </p>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75, marginBottom: '32px' }}>
                    {service.intro}
                  </p>
                  {service.subServices.length > 0 && (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '32px' }}>
                      {service.subServices.map((sub) => (
                        <span key={sub} style={{ background: '#f0f8f4', border: '1px solid #b8ddc8', color: '#1a4a35', fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', padding: '6px 14px', letterSpacing: '0.04em' }}>
                          {sub}
                        </span>
                      ))}
                    </div>
                  )}
                  <a
                    href={service.cta.href}
                    style={{
                      display: 'inline-block',
                      background: '#2d6a4f',
                      color: '#ffffff',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 700,
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      padding: '12px 28px',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                    }}
                  >
                    {service.cta.label}
                  </a>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  {service.paragraphs.map((p, pi) => (
                    <p key={pi} style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75 }}>
                      {p}
                    </p>
                  ))}
                  {/* Performance callout */}
                  <div style={{ background: '#0a0a0a', padding: '24px', marginTop: '8px' }}>
                    <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                      {[
                        { val: '25yr', label: 'Warranty' },
                        { val: '55°C+', label: 'Proven' },
                        { val: '1000+', label: 'Projects' },
                      ].map((stat) => (
                        <div key={stat.val}>
                          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '24px', color: '#74c69d', display: 'block', letterSpacing: '-0.02em' }}>{stat.val}</span>
                          <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: 'rgba(255,255,255,0.6)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <EnquiryForm />

      </main>
      <Footer />
    </div>
  );
}
