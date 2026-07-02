import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';

const finishRanges = [
  { name: 'Stone & Heritage', desc: 'Riyadh Yellow Limestone, Najdi mudbrick, coral stone, sandstone replication' },
  { name: 'Timber Effect', desc: 'Natural timber-grain texture on precast panels, facades, soffits and cladding' },
  { name: 'Metallic', desc: 'Copper, bronze, gold, silver and oxidised patina finishes' },
  { name: 'Opaque & Brick', desc: 'Solid colours and brick replication for commercial and residential facades' },
  { name: 'Translucent', desc: 'Layered marble effect with depth and visual complexity' },
  { name: 'Vivid & Bespoke', desc: 'Custom colour matched from sample or CAD, repeatable at any volume' },
];

const stats = [
  { val: '25yr', label: 'Colour Warranty' },
  { val: '55°C+', label: 'Surface Temp Tolerance' },
  { val: '1,000+', label: 'Projects Completed' },
  { val: '<1g/L', label: 'VOC Level' },
];

export default function FactoryFinishesPage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Industrial Grade Solutions
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px, 5.5vw, 80px)', color: '#ffffff', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Factory Finishes
            </h1>
            <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '22px', color: '#C4902E', marginBottom: '20px' }}>
              Cast Grey. Finish Anything.
            </p>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.65 }}>
              ECOTONE Arabia&apos;s factory applied coating system gives precast concrete manufacturers complete control over colour and finish — applied after casting, before panels leave your yard.
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
                  The Problem With Integral Oxide
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '16px' }}>
                  Traditional integral oxide pigmentation creates colour that varies batch to batch, fades over time as CO₂ reacts with the concrete surface, and cannot be corrected once cast.
                </p>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                  Mismatched panels face site rejection, costly rework, or price discounting — eating directly into margin on every affected batch. In the Gulf&apos;s extreme heat, this degradation accelerates further.
                </p>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  The ECOTONE Solution
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '16px' }}>
                  ECOTONE&apos;s mineral silicate coating is applied to fully cured concrete, completely separating colour from the casting process. You cast standard grey. We deliver the exact finish your architect specified — stone, timber, brick, metallic, heritage, or bespoke — colour-approved in your factory before a single panel leaves the yard.
                </p>
              </div>
            </div>

            {/* What this means */}
            <div style={{ background: '#0a0a0a', padding: '56px', marginBottom: '80px' }}>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '32px' }}>
                What This Means For Your Operation
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }} className="comparison-grid two-col">
                {[
                  'One standard grey mix for all panels — no oxide dosing, no colour-specific batching',
                  'Colour approved before dispatch — zero site rejections from colour mismatch',
                  '25 year colour warranty — the only one available in the Gulf market',
                  'Factory applied — no weather delays, no on-site application required',
                  'Engineered for 55°C+ Gulf conditions — UV lock inorganic pigments, 95% UV reflectivity',
                  'Compatible surfaces: Precast, GFRC, GRC, fibre cement, brick, masonry',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                    <span style={{ color: '#C4902E', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                    <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Finish ranges */}
            <div>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '32px' }}>
                Available Finish Ranges
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="projects-grid three-col">
                {finishRanges.map((range) => (
                  <div key={range.name} style={{ background: '#000000', padding: '32px 24px', borderTop: '3px solid #8B6914' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '17px', color: '#ffffff', marginBottom: '10px' }}>{range.name}</h3>
                    <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{range.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <a href="/contact" style={{ display: 'inline-block', background: '#8B6914', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '14px 40px', textDecoration: 'none', textTransform: 'uppercase' }}>
                  Browse Our Factory Finish Range
                </a>
              </div>
            </div>
          </div>
        </section>

        <EnquiryForm />

      </main>
      <Footer />
    </div>
  );
}
