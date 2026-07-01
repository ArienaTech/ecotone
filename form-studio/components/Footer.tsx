'use client';

import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', padding: '72px 6% 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
            marginBottom: '56px',
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand */}
          <div>
            <div style={{ marginBottom: '12px' }}>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '18px', color: '#ffffff', display: 'block' }}>
                ECOTONE
              </span>
              <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#74c69d', letterSpacing: '0.06em', display: 'block', marginTop: '4px' }}>
                Colour For Life Coatings
              </span>
            </div>
            <p style={{ fontFamily: 'Space Grotesk', fontWeight: 300, fontSize: '13px', color: '#808080', marginBottom: '24px', lineHeight: 1.7 }}>
              The Middle East&apos;s partner for advanced architectural coatings. Australian innovation. Gulf expertise.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <a
                href="tel:+971558934401"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#808080', textDecoration: 'none', fontSize: '12px', fontFamily: 'Space Grotesk', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#74c69d')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#808080')}
              >
                <Phone size={13} /> +971 55 893 4401
              </a>
              <a
                href="tel:+966501109913"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#808080', textDecoration: 'none', fontSize: '12px', fontFamily: 'Space Grotesk', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#74c69d')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#808080')}
              >
                <Phone size={13} /> +966 50 110 9913
              </a>
              <a
                href="mailto:info@ecotonearabia.com"
                style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#808080', textDecoration: 'none', fontSize: '12px', fontFamily: 'Space Grotesk', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#74c69d')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#808080')}
              >
                <Mail size={13} /> info@ecotonearabia.com
              </a>
              <p style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#808080', fontSize: '12px', fontFamily: 'Space Grotesk', margin: 0, lineHeight: 1.5 }}>
                <MapPin size={13} style={{ flexShrink: 0, marginTop: '2px' }} />
                Building A1 – Dubai Silicon Oasis, Dubai, UAE
              </p>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#808080', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Services
            </p>
            {[
              { label: 'Colour By Design', href: '/services/colour-by-design' },
              { label: 'Colour Matching', href: '/services/colour-matching' },
              { label: 'Factory Finishes', href: '/services/factory-finishes' },
              { label: 'Functional Coatings', href: '/services/functional-coatings' },
              { label: 'Urban Infrastructure', href: '/services/urban-infrastructure' },
              { label: 'Weather Defense', href: '/services/weather-proof-finishes' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{ display: 'block', fontFamily: 'Space Grotesk', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#74c69d')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Column 3: Products */}
          <div>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#808080', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Products
            </p>
            {[
              { label: 'ECOTONE Products', href: '/ecotone-products' },
              { label: 'Product Catalogue', href: '/ecotone-products#catalogue' },
              { label: 'Technical Data', href: '/ecotone-products#technical' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ display: 'block', fontFamily: 'Space Grotesk', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#74c69d')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Column 4: Company */}
          <div>
            <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#808080', letterSpacing: '0.16em', textTransform: 'uppercase', marginBottom: '20px' }}>
              Company
            </p>
            {[
              { label: 'About Us', href: '/about' },
              { label: 'Portfolio', href: '/portfolio' },
              { label: 'Gallery', href: '/gallery' },
              { label: 'Blog', href: '/blog' },
              { label: 'Contact', href: '/contact' },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                style={{ display: 'block', fontFamily: 'Space Grotesk', fontWeight: 300, fontSize: '13px', color: 'rgba(255,255,255,0.65)', textDecoration: 'none', marginBottom: '10px', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#74c69d')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.65)')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #1f1f1f',
            paddingTop: '28px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: '16px',
          }}
        >
          <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: 'rgba(255,255,255,0.35)' }}>
            © 2024 ECOTONE Arabia. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
            {[
              { label: 'Regions We Serve', href: '/about' },
              { label: 'Privacy Policy', href: '#' },
              { label: 'Terms & Conditions', href: '#' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: 'rgba(255,255,255,0.35)', textDecoration: 'none', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
