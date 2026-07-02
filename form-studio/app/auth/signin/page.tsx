'use client';

import { useState } from 'react';

export default function AdminSignInPage() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#0a0a0a',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
      }}
    >
      <div style={{ width: '100%', maxWidth: '420px' }}>
        {/* Logo */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <a href="/" style={{ textDecoration: 'none' }}>
            <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '20px', color: '#ffffff', display: 'block' }}>
              ECOTONE
            </span>
            <span style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '11px', color: '#C4902E', letterSpacing: '0.06em' }}>
              Colour For Life Coatings
            </span>
          </a>
        </div>

        <div
          style={{
            background: '#141414',
            border: '1px solid #2a2a2a',
            padding: '48px 40px',
          }}
        >
          <h1
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 800,
              fontSize: '24px',
              color: '#ffffff',
              textTransform: 'uppercase',
              letterSpacing: '-0.01em',
              marginBottom: '32px',
              textAlign: 'center',
            }}
          >
            Admin Sign In
          </h1>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div>
              <label
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Email
              </label>
              <input
                type="email"
                required
                placeholder="admin@ecotonearabia.com"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#ffffff',
                  background: '#0a0a0a',
                  border: '1px solid #2a2a2a',
                  outline: 'none',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
              />
            </div>
            <div>
              <label
                style={{
                  fontFamily: 'Inter',
                  fontWeight: 500,
                  fontSize: '11px',
                  color: 'rgba(255,255,255,0.45)',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  display: 'block',
                  marginBottom: '8px',
                }}
              >
                Password
              </label>
              <input
                type="password"
                required
                placeholder="••••••••"
                style={{
                  width: '100%',
                  padding: '14px 16px',
                  fontFamily: 'Space Grotesk',
                  fontWeight: 400,
                  fontSize: '14px',
                  color: '#ffffff',
                  background: '#0a0a0a',
                  border: '1px solid #2a2a2a',
                  outline: 'none',
                }}
                onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
                onBlur={(e) => (e.currentTarget.style.borderColor = '#2a2a2a')}
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              style={{
                width: '100%',
                background: loading ? '#808080' : '#8B6914',
                color: '#ffffff',
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '13px',
                letterSpacing: '0.08em',
                padding: '14px',
                border: 'none',
                cursor: loading ? 'not-allowed' : 'pointer',
                textTransform: 'uppercase',
                marginTop: '8px',
                transition: 'background 0.15s ease',
              }}
              onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#664A0E'; }}
              onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#8B6914'; }}
            >
              {loading ? 'Signing in…' : 'Sign In'}
            </button>
          </form>
        </div>

        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', color: 'rgba(255,255,255,0.3)', textAlign: 'center', marginTop: '24px' }}>
          © 2024 ECOTONE Arabia
        </p>
      </div>
    </div>
  );
}
