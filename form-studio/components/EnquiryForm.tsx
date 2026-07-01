'use client';

import { useState } from 'react';
import { motion } from 'motion/react';

const projectTypes = [
  'Colour Matching',
  'Colour by Design',
  'Functional Coatings',
  'Urban Infrastructure',
  'Weather-Proof Finishes',
  'Factory Finishes',
  'Other',
];

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  fontFamily: 'Space Grotesk',
  fontWeight: 400,
  fontSize: '14px',
  color: '#0a0a0a',
  background: '#ffffff',
  border: '1px solid #d6d6d6',
  outline: 'none',
  transition: 'border-color 0.15s ease',
};

export default function EnquiryForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setStatus('success');
  }

  return (
    <section id="enquiry" style={{ background: '#f5f4f2', padding: '120px 6%' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: 'center', marginBottom: '56px' }}
        >
          <span className="section-eyebrow" style={{ display: 'block', textAlign: 'center', marginBottom: '16px' }}>
            Project Enquiry
          </span>
          <h2
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 800,
              fontSize: 'clamp(28px, 3.5vw, 52px)',
              color: '#0a0a0a',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              marginBottom: '16px',
              textTransform: 'uppercase',
            }}
          >
            Ready to Transform<br />Your Project?
          </h2>
          <p
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '15px',
              color: '#606060',
              lineHeight: 1.7,
              maxWidth: '560px',
              margin: '0 auto',
            }}
          >
            Fill out the form below and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            background: '#ffffff',
            padding: '56px',
            border: '1px solid #e5e5e5',
          }}
        >
          {status === 'success' ? (
            <div style={{ textAlign: 'center', padding: '40px 0' }}>
              <span style={{ fontSize: '48px', display: 'block', marginBottom: '20px' }}>✓</span>
              <h3 style={{ fontFamily: 'Space Grotesk', fontWeight: 700, fontSize: '22px', color: '#2d6a4f', marginBottom: '12px' }}>
                Thank you! Your enquiry has been submitted successfully.
              </h3>
              <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '15px', color: '#606060' }}>
                We&apos;ll be in touch soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', color: '#505050', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#2d6a4f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', color: '#505050', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#2d6a4f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')}
                  />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }} className="form-row">
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', color: '#505050', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+971 55 000 0000"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#2d6a4f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')}
                  />
                </div>
                <div>
                  <label style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', color: '#505050', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                    Company / Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Your company name"
                    style={inputStyle}
                    onFocus={(e) => (e.currentTarget.style.borderColor = '#2d6a4f')}
                    onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')}
                  />
                </div>
              </div>

              <div>
                <label style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', color: '#505050', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Project Type
                </label>
                <select
                  style={{ ...inputStyle, appearance: 'none', cursor: 'pointer', backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'8\' viewBox=\'0 0 12 8\'%3E%3Cpath d=\'M1 1l5 5 5-5\' stroke=\'%23808080\' stroke-width=\'1.5\' fill=\'none\'/%3E%3C/svg%3E")', backgroundRepeat: 'no-repeat', backgroundPosition: 'right 16px center' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#2d6a4f')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')}
                >
                  <option value="">Select project type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              <div>
                <label style={{ fontFamily: 'Inter', fontWeight: 500, fontSize: '12px', color: '#505050', letterSpacing: '0.08em', textTransform: 'uppercase', display: 'block', marginBottom: '8px' }}>
                  Project Details
                </label>
                <textarea
                  rows={5}
                  placeholder="Tell us about your project requirements, timeline, and any specific challenges you're facing…"
                  style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = '#2d6a4f')}
                  onBlur={(e) => (e.currentTarget.style.borderColor = '#d6d6d6')}
                />
              </div>

              {status === 'error' && (
                <p style={{ fontFamily: 'Inter', fontSize: '14px', color: '#cc3333', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span>✕</span> Something went wrong. Please try again or contact us directly.
                </p>
              )}

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
                <p style={{ fontFamily: 'Inter', fontWeight: 400, fontSize: '12px', color: '#909090', maxWidth: '400px', lineHeight: 1.6 }}>
                  By submitting this form, you agree to our privacy policy. We&apos;ll only use your information to respond to your enquiry.
                </p>
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading ? '#808080' : '#2d6a4f',
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
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => { if (!loading) e.currentTarget.style.background = '#1a4a35'; }}
                  onMouseLeave={(e) => { if (!loading) e.currentTarget.style.background = '#2d6a4f'; }}
                >
                  {loading ? 'Submitting…' : 'Submit Enquiry'}
                </button>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
