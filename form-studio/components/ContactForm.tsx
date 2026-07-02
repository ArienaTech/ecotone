'use client';

import { useState } from 'react';

const projectTypes = [
  'Colour Matching',
  'Colour By Design',
  'Functional Coatings',
  'Urban Infrastructure',
  'Residential Project',
  'Commercial Project',
  'Other',
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  fontFamily: 'Space Grotesk',
  fontWeight: 400,
  fontSize: '14px',
  color: '#ffffff',
  background: '#111111',
  border: '1px solid #2a2a2a',
  outline: 'none',
  transition: 'border-color 0.15s ease',
};

const labelStyle: React.CSSProperties = {
  fontFamily: 'Inter',
  fontWeight: 500,
  fontSize: '11px',
  color: 'rgba(255,255,255,0.55)',
  letterSpacing: '0.10em',
  textTransform: 'uppercase',
  display: 'block',
  marginBottom: '8px',
};

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div style={{ background: '#0a0a0a', border: '1px solid #2a2a2a', padding: 'clamp(24px,5vw,56px)', textAlign: 'center' }}>
        <span style={{ fontSize: '48px', display: 'block', marginBottom: '20px' }}>✓</span>
        <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '22px', color: '#8B6914', marginBottom: '12px' }}>
          Thank you for getting in touch!
        </h3>
        <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: 'rgba(255,255,255,0.55)' }}>
          Our team will respond to your enquiry within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <div style={{ background: '#0a0a0a', border: '1px solid #2a2a2a', padding: 'clamp(20px,4vw,48px)' }}>
      <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '22px', color: '#ffffff', textTransform: 'uppercase', letterSpacing: '-0.01em', marginBottom: '32px' }}>
        Contact Us
      </h3>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row two-col">
          <div>
            <label style={labelStyle}>First Name *</label>
            <input type="text" required placeholder="First name" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')} />
          </div>
          <div>
            <label style={labelStyle}>Last Name *</label>
            <input type="text" required placeholder="Last name" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }} className="form-row two-col">
          <div>
            <label style={labelStyle}>Email Address *</label>
            <input type="email" required placeholder="your@email.com" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')} />
          </div>
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input type="tel" placeholder="+971 55 000 0000" style={inputStyle}
              onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
              onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Company / Organisation</label>
          <input type="text" placeholder="Your company name" style={inputStyle}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')} />
        </div>

        <div>
          <label style={labelStyle}>Project Type</label>
          <select
            style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%23808080\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')}
          >
            <option value="">Select project type</option>
            {projectTypes.map((type) => (
              <option key={type} value={type}>{type}</option>
            ))}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Project Details</label>
          <textarea
            rows={5}
            placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing…"
            style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
            onFocus={(e) => (e.currentTarget.style.borderColor = '#8B6914')}
            onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')}
          />
        </div>

        {status === 'error' && (
          <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#cc3333' }}>
            ✕ Something went wrong. Please try again or contact us directly.
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          style={{
            background: loading ? '#808080' : '#8B6914',
            color: '#ffffff',
            fontFamily: 'Space Grotesk',
            fontWeight: 700,
            fontSize: '13px',
            letterSpacing: '0.08em',
            padding: '14px 36px',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            textTransform: 'uppercase',
            transition: 'background 0.15s ease',
            alignSelf: 'flex-start',
          }}
          onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#664A0E'; }}
          onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#8B6914'; }}
        >
          {loading ? 'Sending…' : 'Send Enquiry'}
        </button>
      </form>
    </div>
  );
}
