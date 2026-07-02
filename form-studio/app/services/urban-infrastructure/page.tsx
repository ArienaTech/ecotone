import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import EnquiryForm from '@/components/EnquiryForm';

const whereWeWork = [
  {
    name: 'Heritage Districts',
    desc: 'Riyadh Yellow Limestone and Najdi mud render replication for heritage-sensitive zones. Authentic stone character delivered at precast scale, without artisan dependency or quarry lead times.',
  },
  {
    name: 'Bridges, Tunnels and Freeways',
    desc: 'Heritage stone appearance applied to infrastructure corridors. Consistent colour across every panel, factory-applied before installation — no on site delays, no weather disruption.',
  },
  {
    name: 'Mega Projects',
    desc: 'When natural stone cannot meet programme or volume requirements, ECOTONE-finished precast fills the gap. Finished panels delivered in 1–2 weeks versus 6–12 weeks for quarry stone.',
  },
  {
    name: 'Luxury Resorts and Hospitality',
    desc: 'Mud render replication without specialist artisan dependency, delivered consistently across large surface areas at commercial scale.',
  },
  {
    name: 'Colour Rescue and Repair',
    desc: 'Fix oxide colour inconsistency on existing panels. Restore uniformity across mismatched batches and save assets from the cost and programme impact of recasting.',
  },
];

const stats = [
  { val: '25yr', label: 'Colour Warranty' },
  { val: '55°C+', label: 'Temperature Tolerance' },
  { val: '1,000+', label: 'Projects Completed' },
  { val: '1–2 Wks', label: 'Panel Delivery vs 6–12 for Natural Stone' },
];

export default function UrbanInfrastructurePage() {
  return (
    <div style={{ overflowX: 'hidden' }}>
      <Navbar />
      <main style={{ paddingTop: '64px' }}>

        <section style={{ background: '#0a0a0a', padding: 'clamp(80px,10vh,100px) 6% clamp(48px,6vh,80px)', position: 'relative', overflow: 'hidden' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 10 }}>
            <span style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '11px', color: '#C4902E', letterSpacing: '0.18em', textTransform: 'uppercase', display: 'block', marginBottom: '20px' }}>
              Sustainable Infrastructure
            </span>
            <h1 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(36px, 5.5vw, 80px)', color: '#ffffff', lineHeight: 0.96, letterSpacing: '-0.02em', textTransform: 'uppercase', marginBottom: '16px' }}>
              Urban Infrastructure
            </h1>
            <p style={{ fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '22px', color: '#C4902E', marginBottom: '20px' }}>
              From Heritage Districts to Infrastructure Corridors.
            </p>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '17px', color: 'rgba(255,255,255,0.65)', maxWidth: '640px', lineHeight: 1.65 }}>
              ECOTONE Arabia delivers premium coating solutions for large scale infrastructure across the Gulf — bridges, tunnels, freeways, public realm projects and heritage developments.
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
                  Infrastructure Challenges in the Gulf
                </h2>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75, marginBottom: '20px' }}>
                  Gulf infrastructure faces extreme demands — intense UV, severe thermal expansion, salt air in coastal zones and the constant visual scrutiny of landmark public projects. Conventional coatings require frequent maintenance cycles that disrupt operations and create ongoing cost.
                </p>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.75 }}>
                  ECOTONE&apos;s permanent silicate bonding technology eliminates this cycle with a single factory applied application, backed by a 25 year guarantee.
                </p>
              </div>
              <div>
                <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: 'clamp(22px, 2.2vw, 36px)', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.02em', marginBottom: '20px' }}>
                  Why Specify ECOTONE for Infrastructure
                </h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  {[
                    '25-year colour warranty — the only one available in the Gulf market',
                    'Factory-applied — no on-site application, no weather delays, no disruption to programme',
                    'Consistent finish across every panel — no batch variation, no site rejections',
                    'Heritage stone and texture replication at precast scale',
                    'Engineered and tested for 55°C+ Gulf conditions',
                  ].map((item) => (
                    <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ color: '#8B6914', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>✓</span>
                      <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Where we work */}
            <div>
              <h2 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '28px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '32px' }}>
                Where We Work
              </h2>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="projects-grid three-col">
                {whereWeWork.map((item) => (
                  <div key={item.name} style={{ background: '#0a0a0a', padding: '32px 24px', borderTop: '3px solid #8B6914' }}>
                    <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '16px', color: '#ffffff', marginBottom: '12px' }}>{item.name}</h3>
                    <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '13px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65 }}>{item.desc}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '48px' }}>
                <a href="/contact" style={{ display: 'inline-block', background: '#8B6914', color: '#ffffff', fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '13px', letterSpacing: '0.08em', padding: '14px 36px', textDecoration: 'none', textTransform: 'uppercase' }}>
                  Infrastructure Consultation
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
