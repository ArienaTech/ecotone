'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const products = [
  {
    name: 'ECOTONE Matt',
    description: 'Versatile water-based matte emulsion stain suitable for a variety of surfaces and colours.',
    category: 'Emulsion Stains',
    features: ['Matte finish', 'Multi-surface application', 'Water-based formula', 'Wide colour range'],
    applications: ['Concrete facades', 'Masonry surfaces', 'Cladding panels'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2021/08/TDS-ECOTONE-Matt_ECO-0037D.pdf',
  },
  {
    name: 'ECOTONE Matt Plus',
    description: 'Emulsion stain with repellant properties to minimise the environmental effect of water.',
    category: 'Protective Coatings',
    features: ['Water repellant', 'Enhanced durability', 'Matte finish', 'Breathable formula'],
    applications: ['Exposed facades', 'Coastal buildings', 'High-moisture environments'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2022/09/ECC-TDS-Self-Cleaning-Coating_ECC-0002.pdf',
  },
  {
    name: 'ECOTONE Sharp',
    description: 'Semi-gloss emulsion stain to achieve sharper colours & metallic finishes.',
    category: 'Decorative Finishes',
    features: ['Semi-gloss finish', 'Metallic effects', 'Vibrant colour depth', 'Enhanced sheen'],
    applications: ['Accent surfaces', 'Metallic replication', 'Interior feature walls'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2021/08/TDS-ECOTONE-Fix_ECO-0039D.pdf',
  },
  {
    name: 'ECOTONE Minsil',
    description: 'Mineral silicate emulsion stain designed to bond to denser surfaces and materials.',
    category: 'Mineral Coatings',
    features: ['Deep penetration', 'Chemical bonding', 'High durability', 'Dense surface adhesion'],
    applications: ['Dense concrete', 'Engineering brick', 'Glazed surfaces'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2021/12/TDS-ECOTONE-Minsil_ECO-0036D.pdf',
  },
  {
    name: 'ECOTONE Prime',
    description: 'A preparatory layer designed for non-porous surfaces to strengthen adhesive properties.',
    category: 'Primers & Preparation',
    features: ['Adhesion promoter', 'Non-porous surface prep', 'Compatibility enhancer', 'Fast drying'],
    applications: ['Pre-treatment coat', 'Smooth surface preparation', 'Enhanced bond strength'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2021/08/TDS-ECOTONE-Prime_ECO-0040D.pdf',
  },
  {
    name: 'ECOTONE Seal',
    description: 'A versatile, water and stain-resistant fluoropolymer sealer with strong binding properties and excellent graffiti resistance.',
    category: 'Protective Sealers',
    features: ['Fluoropolymer technology', 'Graffiti resistance', 'Stain resistant', 'Long-term protection'],
    applications: ['Public infrastructure', 'High-traffic areas', 'Anti-graffiti applications'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2022/09/ECC-TDS-Ultra-Graffiti-Shield_ECC-0008.pdf',
  },
  {
    name: 'ECOTONE WP Membrane Primer',
    description: 'A superior sealer for penetrating and binding chalky underbound masonry and other surfaces.',
    category: 'Waterproof Systems',
    features: ['Deep penetration', 'Consolidating primer', 'Chalky surface treatment', 'Waterproofing preparation'],
    applications: ['Weathered masonry', 'Porous substrates', 'Membrane preparation'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2022/09/ECC-TDS-Porosity-Sealer_ECC-0003.pdf',
  },
  {
    name: 'ECOTONE Waterproof Membrane',
    description: 'A weather and water-resistant, elastomeric coating with satin finish providing highly elastic waterproof protection.',
    category: 'Waterproof Systems',
    features: ['Elastomeric formula', 'Crack bridging', 'Satin finish', 'Weather resistant'],
    applications: ['Waterproof facades', 'Planter boxes', 'Balconies and terraces'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2022/09/ECC-TDS-Barrier-Coating_ECC-0004.pdf',
  },
  {
    name: 'ECOTONE Graffiti Remover',
    description: 'Specialized graffiti removal solution for effective cleaning without surface damage.',
    category: 'Cleaning Solutions',
    features: ['Surface-safe formula', 'Effective removal', 'No surface damage', 'Fast acting'],
    applications: ['Public buildings', 'Transport infrastructure', 'Urban surfaces'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2021/08/TDS-ECOTONE-Graffiti-Remover_ECO-0038D.pdf',
  },
  {
    name: 'ECOCLEAN Concrete Sealer',
    description: 'Advanced concrete sealing solution for enhanced protection and durability.',
    category: 'Functional Coatings',
    features: ['Photocatalytic technology', 'Self-cleaning', 'UV activation', 'Long-lasting'],
    applications: ['External concrete', 'Public paving', 'Architectural surfaces'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2022/09/ECC-TDS-Concrete-Sealer_ECC-0006.pdf',
  },
  {
    name: 'ECOCLEAN Antiviral Coating',
    description: 'Advanced antiviral coating technology for enhanced surface hygiene.',
    category: 'Functional Coatings',
    features: ['Antiviral properties', 'Antibacterial', 'Anti-mould', 'Continuous protection'],
    applications: ['Hospitals', 'Schools', 'Public transport', 'Hospitality'],
    datasheet: 'https://ecotonecoatings.com/wp-content/uploads/2022/09/ECC-TDS-Antiviral-Coating_ECC-0010.pdf',
  },
];

const categoryColors: Record<string, string> = {
  'Emulsion Stains': '#8B6914',
  'Protective Coatings': '#1A3A5C',
  'Decorative Finishes': '#4a4a8a',
  'Mineral Coatings': '#6A4010',
  'Primers & Preparation': '#7A5810',
  'Protective Sealers': '#4a2d6a',
  'Waterproof Systems': '#2d4a6a',
  'Cleaning Solutions': '#6a2d4a',
  'Functional Coatings': '#8B6914',
};

export default function EcotoneProductsPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              ECOTONE Products
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(40px, 6vw, 96px)', color: '#ffffff', lineHeight: 0.95, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '24px' }}>
              Our Products
            </h1>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '18px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.65 }}>
              Premium coating solutions engineered for durability, aesthetics, and performance in the Middle East&apos;s demanding climate.
            </p>
          </div>
          <div style={{ position: 'absolute', top: '50%', right: '-2%', transform: 'translateY(-50%)', fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(80px, 14vw, 220px)', color: 'rgba(255,255,255,0.03)', letterSpacing: '-0.04em', userSelect: 'none', pointerEvents: 'none', lineHeight: 1 }}>
            PRODUCTS
          </div>
        </section>

        {/* Technical presentations */}
        <section style={{ background: '#8B6914', padding: '48px 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Technical Presentations
            </p>
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {[
                { label: 'ECOTONE Arabia',    href: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/PDF/ECOTONE-ARABIA.pdf' },
                { label: 'Company Overview',  href: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/PDF/ECOTONE-ARABIA.pdf' },
                { label: 'Hybrid Stone Solutions', href: 'https://cpvmmxiiwlzkqapnimws.supabase.co/storage/v1/object/public/Ecotone/PDF/Hybrid-Stone-Solutions-for-Saudi-Mega-Projects%20.pdf' },
              ].map((pres) => (
                <a
                  key={pres.label}
                  href={pres.href}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    color: '#ffffff',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 600,
                    fontSize: '13px',
                    padding: '12px 24px',
                    textDecoration: 'none',
                    letterSpacing: '0.04em',
                    transition: 'background 0.15s ease',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = 'rgba(255,255,255,0.2)')}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                  {pres.label}
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Products grid */}
        <section id="catalogue" style={{ background: '#000000', padding: '80px 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="products-grid three-col">
              {products.map((product) => (
                <div
                  key={product.name}
                  style={{
                    background: '#0a0a0a',
                    padding: '36px 28px',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      background: categoryColors[product.category] || '#8B6914',
                      color: '#ffffff',
                      fontFamily: 'Inter',
                      fontWeight: 500,
                      fontSize: '10px',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      marginBottom: '20px',
                      alignSelf: 'flex-start',
                    }}
                  >
                    {product.category}
                  </span>

                  <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '18px', color: '#ffffff', marginBottom: '10px' }}>
                    {product.name}
                  </h3>
                  <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, marginBottom: '20px', flex: 1 }}>
                    {product.description}
                  </p>

                  <div style={{ marginBottom: '16px' }}>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#8B6914', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Key Features
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {product.features.map((f) => (
                        <span key={f} style={{ background: '#F5EAD0', border: '1px solid #D4A838', color: '#664A0E', fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', padding: '3px 10px' }}>
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginBottom: '20px' }}>
                    <p style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: 'rgba(255,255,255,0.45)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '8px' }}>
                      Applications
                    </p>
                    {product.applications.map((a) => (
                      <p key={a} style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.55)', marginBottom: '4px', display: 'flex', gap: '6px' }}>
                        <span style={{ color: '#8B6914', flexShrink: 0 }}>→</span>{a}
                      </p>
                    ))}
                  </div>

                  <a
                    href={product.datasheet}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-block',
                      border: '1.5px solid #8B6914',
                      color: '#8B6914',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 700,
                      fontSize: '11px',
                      letterSpacing: '0.08em',
                      padding: '8px 18px',
                      textDecoration: 'none',
                      textTransform: 'uppercase',
                      alignSelf: 'flex-start',
                      transition: 'all 0.15s ease',
                    }}
                    onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = '#8B6914'; e.currentTarget.style.color = '#ffffff'; }}
                    onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#8B6914'; }}
                  >
                    Datasheet ↓
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="technical" style={{ background: '#0a0a0a', padding: '80px 6%', textAlign: 'center' }}>
          <div style={{ maxWidth: '700px', margin: '0 auto' }}>
            <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(28px, 3.5vw, 48px)', color: '#ffffff', letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Need Technical Support?
            </h2>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '16px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '36px' }}>
              Our team provides full technical support across UAE and Saudi Arabia. Contact us to discuss your project requirements and product selection.
            </p>
            <a href="/contact" style={{ display: 'inline-block', background: '#8B6914', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '14px 40px', textDecoration: 'none', textTransform: 'uppercase' }}>
              Get Technical Support
            </a>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
