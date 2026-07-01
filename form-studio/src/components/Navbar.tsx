import { useState } from 'react';
import { X, Menu } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const navLinks = ['Work', 'Services', 'Process', 'Pricing', 'Contact'];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[6%]"
        style={{
          height: '60px',
          background: 'rgba(245,244,242,0.95)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #d6d6d6',
        }}
      >
        {/* Logo */}
        <a href="#" className="flex items-baseline gap-[6px] no-underline">
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '16px', color: '#0a0a0a' }}>
            Form
          </span>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 300, fontSize: '16px', color: 'rgba(10,10,10,0.6)' }}>
            Studio
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link"
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '12px',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#0a0a0a',
                textDecoration: 'none',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#d42a1a')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0a0a0a')}
            >
              {link}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex">
          <a
            href="#contact"
            style={{
              background: '#0a0a0a',
              color: '#ffffff',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.08em',
              padding: '10px 22px',
              borderRadius: '0',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'inline-block',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#d42a1a')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#0a0a0a')}
          >
            Start a Project
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setMobileOpen(true)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
        >
          <Menu size={22} color="#0a0a0a" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex flex-col"
            style={{ background: '#0a0a0a' }}
          >
            <div className="flex items-center justify-between px-[6%]" style={{ height: '60px' }}>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '16px', color: '#ffffff' }}>
                Form<span style={{ fontWeight: 300, color: 'rgba(255,255,255,0.6)', marginLeft: '6px' }}>Studio</span>
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
              >
                <X size={22} color="#ffffff" />
              </button>
            </div>
            <div className="flex flex-col justify-center flex-1 px-[6%] gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 800,
                    fontSize: 'clamp(32px, 8vw, 48px)',
                    color: '#ffffff',
                    textDecoration: 'none',
                  }}
                >
                  {link}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: '14px',
                  letterSpacing: '0.08em',
                  color: '#d42a1a',
                  textDecoration: 'none',
                  textTransform: 'uppercase',
                  marginTop: '16px',
                }}
              >
                Start a Project →
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
