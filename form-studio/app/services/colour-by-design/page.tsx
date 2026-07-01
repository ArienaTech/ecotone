import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';

export default function ColourByDesignPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        {/* Hero */}
        <section style={{ background: '#0a0a0a', padding: '100px 6% 80px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#74c69d', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Architectural Excellence
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px, 5.5vw, 80px)', color: '#ffffff', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Colour By Design
            </h1>
            <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '20px', color: '#74c69d', marginBottom: '20px' }}>
              Bringing colour, protection & transformation to Architecture.
            </p>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '600px', lineHeight: 1.65 }}>
              For almost three decades, ECOTONE has redefined what&apos;s possible in architectural surfaces, leading the way in Colour By Design across Australia and New Zealand.
            </p>
          </div>
        </section>

        {/* Main content */}
        <section style={{ background: '#ffffff', padding: '100px 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }} className="about-grid">
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(24px, 2.5vw, 40px)', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  We Make Stunning Work of Concrete and Cladding
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75, marginBottom: '20px' }}>
                  Concrete and cladding are blank canvases with endless possibilities. Our Colour By Design approach allows architects to preserve, protect, or transform these surfaces, achieving finishes that:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '28px' }}>
                  {[
                    'Emulate premium materials like stone, timber, metal or bespoke design',
                    'Enhance monolithic materiality, creating seamless internal and external finishes',
                    'Ensure full Gulf building standards compliance while maintaining creative freedom for concrete surfaces',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '12px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: '#505050', lineHeight: 1.6 }}>
                      <span style={{ color: '#2d6a4f', fontWeight: 700, flexShrink: 0 }}>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75 }}>
                  By working with your designs, ECOTONE delivers long-lasting, sustainable architectural facades that will WOW you and your client. Our advanced coatings also provide apartment buildings with essential waterproofing and weathering ensuring durability and compliance with Gulf building standards.
                </p>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '24px' }}>
                  Concrete Facades: Designed to Inspire, Built to Last
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75, marginBottom: '20px' }}>
                  Concrete is a defining element in modern architecture, but exposure to the elements can cause weathering, discolouration, and surface wear over time. We can provide a complete solution.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { heading: 'Preserve & Protect', desc: 'Maintain the natural beauty of concrete while shielding against UV, water, and pollutants to prevent aging and staining.' },
                    { heading: 'Restore & Renew', desc: 'Correct colour inconsistencies, repair faded surfaces, and rejuvenate concrete without altering its texture.' },
                    { heading: 'Transform with Material Finishes', desc: 'Reimagine concrete with premium finishes that mimic stone, timber, brick, or metal, seamlessly integrating with or redefining the building\'s aesthetic.' },
                  ].map((item) => (
                    <div key={item.heading} style={{ borderLeft: '3px solid #2d6a4f', paddingLeft: '16px' }}>
                      <h4 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#0a0a0a', marginBottom: '6px' }}>{item.heading}</h4>
                      <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: '#606060', lineHeight: 1.6 }}>{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sub-specializations */}
            <div style={{ marginBottom: '80px' }}>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '32px' }}>
                Sub-Specializations
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }} className="materials-grid">
                {[
                  { name: 'Concrete Facades', desc: 'Specialized concrete surface treatments' },
                  { name: 'Cladding Finishes', desc: 'Advanced cladding coating systems' },
                  { name: 'Prefabricated Facades', desc: 'Factory-applied facade solutions' },
                  { name: 'Material Finishes', desc: 'Industrial-grade surface treatments' },
                ].map((item) => (
                  <div key={item.name} style={{ background: '#f5f4f2', padding: '28px 24px', borderTop: '3px solid #2d6a4f' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#0a0a0a', marginBottom: '8px' }}>{item.name}</h3>
                    <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: '#606060', lineHeight: 1.6 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Monolithic Materiality */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }} className="about-grid">
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  Monolithic Materiality — Seamless Aesthetic, Inside & Out
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75, marginBottom: '16px' }}>
                  Achieving monolithic materiality demands precision, innovation and durability. ECOTONE&apos;s advanced coatings allow architects to create cohesive, seamless surfaces across both interiors and exteriors, ensuring:
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Consistent texture, colour, and finish throughout the entire structure',
                    'A fully integrated weatherproofing and waterproofing solution',
                    'Aesthetic freedom with custom colours and natural material effects',
                  ].map((item) => (
                    <li key={item} style={{ display: 'flex', gap: '12px', fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: '#505050', lineHeight: 1.6 }}>
                      <span style={{ color: '#2d6a4f', fontWeight: 700, flexShrink: 0 }}>✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#0a0a0a', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  Prefabrication — Revolutionising Modern Construction
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75, marginBottom: '16px' }}>
                  Prefabrication has revolutionised modern construction, offering efficiency, cost-effectiveness, and precision. But what if prefab surfaces could also be custom-designed, weatherproof, and architecturally striking?
                </p>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75, marginBottom: '16px' }}>
                  Our coatings can be applied off-site in a controlled environment, ensuring: Superior durability before installation, bespoke finishes that match architectural intent, and seamless integration with other materials and facade systems.
                </p>
                <div style={{ background: '#f0f8f4', border: '1px solid #b8ddc8', padding: '16px' }}>
                  <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '14px', color: '#1a4a35', lineHeight: 1.6 }}>
                    Prefab panels no longer need to look generic. With ECOTONE, they become an extension of your architectural vision.
                  </p>
                </div>
              </div>
            </div>

            {/* Process */}
            <div style={{ background: '#0a0a0a', padding: '56px', marginBottom: '80px' }}>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '40px' }}>
                Customer Experience Process
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '24px' }} className="materials-grid">
                {[
                  { step: '01', title: 'Consultation & Vision Boards', desc: 'We review samples, images, and architectural plans to understand your aesthetic and technical requirements.' },
                  { step: '02', title: 'Sample Creation', desc: 'We develop bespoke coatings and finishes for your approval.' },
                  { step: '03', title: 'Review & Approval', desc: 'We refine the samples until they meet your design intent.' },
                  { step: '04', title: 'Application', desc: 'Our expert applicator team applies coatings with precision for flawless results.' },
                  { step: '05', title: 'Review & Support', desc: 'We conduct post-application checks and ongoing support to ensure long-term performance.' },
                ].map((item) => (
                  <div key={item.step}>
                    <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '36px', color: '#2d6a4f', display: 'block', marginBottom: '12px', lineHeight: 1 }}>
                      {item.step}
                    </span>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '14px', color: '#ffffff', marginBottom: '8px', lineHeight: 1.3 }}>
                      {item.title}
                    </h3>
                    <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Case study */}
            <div style={{ background: '#f5f4f2', padding: '48px', borderLeft: '4px solid #2d6a4f' }}>
              <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#2d6a4f', letterSpacing: '0.16em', textTransform: 'uppercase', display: 'block', marginBottom: '16px' }}>
                Case Study
              </span>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '22px', color: '#0a0a0a', marginBottom: '12px' }}>
                Eden View Apartments, Auckland – NZ
              </h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: '#606060', lineHeight: 1.7, marginBottom: '16px' }}>
                Architect: Pb&amp;A Architects | Builder: Ganellen Constructions | Precaster: Concretec | Developer: Young &amp; Partners
              </p>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#505050', lineHeight: 1.75 }}>
                This project showcases what ECOTONE&apos;s CXD process delivers — grey precast concrete transformed into a natural brick appearance using ECOTONE Matt and ECOTONE Sharp emulsion stains. The same system and results are now available across the Gulf.
              </p>
            </div>
          </div>
        </section>

        <EnquiryForm />

      </main>
      <Footer />
    </div>
  );
}
