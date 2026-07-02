import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';

const keyProperties = [
  {
    title: 'UV Lock Colour Stabilisation',
    desc: 'Inorganic pigments with 95% UV reflectivity. No colour fading under Gulf sunlight at temperatures above 55°C.',
  },
  {
    title: '100% Breathable',
    desc: 'Vapour permeable system prevents blistering and moisture entrapment behind the coating.',
  },
  {
    title: 'Anti-Carbonation Protection',
    desc: 'Prevents CO₂ penetration into the substrate, protecting rebar and extending the structural life of concrete panels.',
  },
  {
    title: 'Silicate Bonding',
    desc: 'Chemically bonds into precast concrete, masonry and fibre cement. No peeling, no delamination, no surface film.',
  },
  {
    title: 'Temperature Tolerance',
    desc: 'Engineered for surface temperatures up to and exceeding 55°C — tested and proven in comparable extreme-climate conditions.',
  },
];

const stats = [
  { val: '25yr', label: 'Performance Guarantee' },
  { val: '55°C+', label: 'Temperature Proven' },
  { val: '100%', label: 'Breathable System' },
  { val: '<1g/L', label: 'VOC Level' },
];

export default function WeatherProofFinishesPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Ultimate Weather Protection
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(32px, 5vw, 76px)', color: '#ffffff', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Weather Defense Systems
            </h1>
            <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '20px', color: '#C4902E', marginBottom: '20px' }}>
              Engineered for the Gulf. Built to Last 25 Years.
            </p>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.65 }}>
              Mineral-based coating solutions specifically engineered for the extreme climate demands of the Gulf — intense UV exposure, thermal cycling, sandstorm abrasion, salt laden coastal air, and surface temperatures exceeding 55°C.
            </p>
          </div>
        </section>

        {/* Stats bar */}
        <section style={{ background: '#8B6914', padding: '32px 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }} className="stats-bar">
            {stats.map((s) => (
              <div key={s.val} style={{ textAlign: 'center' }}>
                <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#ffffff', display: 'block', letterSpacing: '-0.02em' }}>{s.val}</span>
                <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{s.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: '#0a0a0a', padding: 'clamp(60px,8vh,100px) 6%' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', marginBottom: '80px' }} className="about-grid two-col">
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  Why Conventional Coatings Fail in the Gulf
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px' }}>
                  Standard paint systems form a surface film that expands and contracts with temperature fluctuations, eventually cracking, peeling and allowing moisture to penetrate. In the Gulf climate, this cycle accelerates dramatically.
                </p>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                  Buildings repainted every 3–5 years represent a significant and avoidable ongoing cost. ECOTONE eliminates that cycle entirely with a single application.
                </p>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  How ECOTONE Weather Defense Works
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px' }}>
                  ECOTONE is a mineral stain, not a paint. It chemically bonds into concrete, masonry, and cementitious surfaces at a molecular level — becoming part of the substrate rather than sitting on top of it.
                </p>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                  The result is a breathable, permanently bonded finish that cannot crack, peel or delaminate regardless of temperature or UV exposure.
                </p>
              </div>
            </div>

            {/* Key properties */}
            <div style={{ background: '#141414', padding: 'clamp(24px,4vw,56px)', marginBottom: '80px' }}>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '36px' }}>
                Key Performance Properties
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }} className="projects-grid three-col">
                {keyProperties.map((prop) => (
                  <div key={prop.title} style={{ borderTop: '2px solid #8B6914', paddingTop: '20px' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '15px', color: '#C4902E', marginBottom: '10px' }}>{prop.title}</h3>
                    <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{prop.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Compatible surfaces + applications */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', marginBottom: '48px' }} className="about-grid two-col">
              <div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Compatible Surfaces</h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {['Precast concrete', 'GFRC', 'GRC', 'Fair-faced concrete', 'Fibre cement', 'Brick', 'Masonry', 'CFC'].map((s) => (
                    <span key={s} style={{ background: '#F5EAD0', border: '1px solid #D4A838', color: '#664A0E', fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', padding: '5px 12px' }}>{s}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '16px' }}>Gulf Applications</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {['Building facades and residential towers', 'Commercial and hospitality developments', 'Heritage district restoration and replication', 'Coastal and marine-adjacent buildings', 'Government and civic infrastructure', 'Colour rescue and repair on existing structures'].map((a) => (
                    <p key={a} style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.6)', display: 'flex', gap: '8px' }}>
                      <span style={{ color: '#8B6914', fontWeight: 700, flexShrink: 0 }}>→</span>{a}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <a href="/contact" style={{ display: 'inline-block', background: '#8B6914', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '14px 36px', textDecoration: 'none', textTransform: 'uppercase' }}>
              Weather Assessment
            </a>
          </div>
        </section>

        <EnquiryForm />

      </main>
      <Footer />
    </div>
  );
}
