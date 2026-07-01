import { ExternalLink, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer style={{ background: '#0a0a0a', padding: '64px 6% 40px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '40px',
            marginBottom: '48px',
          }}
          className="footer-grid"
        >
          {/* Column 1: Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '8px' }}>
              <span
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 800,
                  fontSize: '16px',
                  color: '#ffffff',
                }}
              >
                Form Studio
              </span>
              <span
                style={{
                  display: 'inline-block',
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: '#d42a1a',
                  marginLeft: '4px',
                }}
              />
            </div>
            <p
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 300,
                fontSize: '13px',
                color: '#808080',
                marginBottom: '20px',
                lineHeight: 1.6,
              }}
            >
              Brand Identity Studio · London
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#808080', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#808080')}
              >
                <ExternalLink size={18} />
              </a>
              <a
                href="mailto:hello@formstudio.co"
                style={{ color: '#808080', transition: 'color 0.15s ease' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = '#808080')}
              >
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Work */}
          <div>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '11px',
                color: '#808080',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Work
            </p>
            {['Brand Strategy', 'Visual Identity', 'Motion & Content', 'Web & Digital'].map((item) => (
              <a
                key={item}
                href="#services"
                style={{
                  display: 'block',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 300,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)',
                  textDecoration: 'none',
                  marginBottom: '10px',
                  transition: 'color 0.15s ease',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Column 3: Studio */}
          <div>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '11px',
                color: '#808080',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Studio
            </p>
            {[
              'hello@formstudio.co',
              '+44 (0)20 7000 0001',
              '4 Shoreditch High Street, London E1 6PQ',
            ].map((item) => (
              <p
                key={item}
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 300,
                  fontSize: '13px',
                  color: 'rgba(255,255,255,0.7)',
                  marginBottom: '10px',
                  lineHeight: 1.5,
                }}
              >
                {item}
              </p>
            ))}
          </div>

          {/* Column 4: Work with us */}
          <div>
            <p
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '11px',
                color: '#808080',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                marginBottom: '16px',
              }}
            >
              Work with us
            </p>
            <p
              style={{
                fontFamily: 'Space Grotesk',
                fontWeight: 300,
                fontSize: '13px',
                color: 'rgba(255,255,255,0.7)',
                marginBottom: '10px',
              }}
            >
              Currently booking: Q3 2025
            </p>
            <a
              href="mailto:studio@formstudio.co"
              style={{
                display: 'block',
                fontFamily: 'Space Grotesk',
                fontWeight: 300,
                fontSize: '13px',
                color: 'rgba(255,255,255,0.7)',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#ffffff')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
            >
              studio@formstudio.co
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid #1f1f1f',
            paddingTop: '24px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '11px',
              color: 'rgba(255,255,255,0.4)',
            }}
          >
            © 2025 Form Studio Ltd. All rights reserved.
          </p>
          <span
            style={{
              display: 'inline-block',
              width: '5px',
              height: '5px',
              borderRadius: '50%',
              background: '#d42a1a',
            }}
          />
        </div>
      </div>
    </footer>
  );
}
