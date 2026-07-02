'use client';

import { useState } from 'react';
import { X, Menu, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const serviceLinks = [
  { label: 'Concrete Facades', href: '/gallery' },
  { label: 'Cladding Finishes', href: '/gallery' },
  { label: 'Colour By Design', href: '/services/colour-by-design' },
  { label: 'Factory Finishes', href: '/services/factory-finishes' },
  { label: 'Featured Projects', href: '/gallery' },
];

const topLinks = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/ecotone-products' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-[5%]"
        style={{
          height: '64px',
          background: 'rgba(245,244,242,0.97)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #d6d6d6',
        }}
      >
        {/* Logo */}
        <a href="/" className="flex items-baseline no-underline" style={{ textDecoration: 'none' }}>
          <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '16px', color: '#0a0a0a', letterSpacing: '-0.01em' }}>
            ECOTONE
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          <a
            href="/"
            style={{
              fontFamily: 'Inter',
              fontWeight: 400,
              fontSize: '12px',
              letterSpacing: '0.10em',
              textTransform: 'uppercase',
              color: '#0a0a0a',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = '#8B6914')}
            onMouseLeave={(e) => (e.currentTarget.style.color = '#0a0a0a')}
          >
            Home
          </a>

          {/* Services Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '12px',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: '#0a0a0a',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '0',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8B6914')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0a0a0a')}
            >
              Services <ChevronDown size={12} />
            </button>
            <AnimatePresence>
              {servicesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 8 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    marginTop: '12px',
                    background: '#ffffff',
                    border: '1px solid #e5e5e5',
                    boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
                    minWidth: '220px',
                    zIndex: 100,
                  }}
                >
                  {serviceLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      style={{
                        display: 'block',
                        padding: '12px 20px',
                        fontFamily: 'Space Grotesk',
                        fontWeight: 400,
                        fontSize: '13px',
                        color: '#0a0a0a',
                        textDecoration: 'none',
                        borderBottom: '1px solid #f0f0f0',
                        transition: 'background 0.12s ease, color 0.12s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = '#f5f4f2';
                        e.currentTarget.style.color = '#8B6914';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'transparent';
                        e.currentTarget.style.color = '#0a0a0a';
                      }}
                    >
                      {link.label}
                    </a>
                  ))}
                  <a
                    href="/services"
                    style={{
                      display: 'block',
                      padding: '12px 20px',
                      fontFamily: 'Space Grotesk',
                      fontWeight: 700,
                      fontSize: '12px',
                      letterSpacing: '0.08em',
                      textTransform: 'uppercase',
                      color: '#8B6914',
                      textDecoration: 'none',
                      transition: 'background 0.12s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = '#f5f4f2')}
                    onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                  >
                    All Services →
                  </a>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {topLinks.slice(1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              style={{
                fontFamily: 'Inter',
                fontWeight: 400,
                fontSize: '12px',
                letterSpacing: '0.10em',
                textTransform: 'uppercase',
                color: '#0a0a0a',
                textDecoration: 'none',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#8B6914')}
              onMouseLeave={(e) => (e.currentTarget.style.color = '#0a0a0a')}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:+971558934401"
            style={{
              fontFamily: 'Space Grotesk',
              fontWeight: 600,
              fontSize: '12px',
              color: '#8B6914',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            +971 55 893 4401
          </a>
          <a
            href="/contact"
            style={{
              background: '#8B6914',
              color: '#ffffff',
              fontFamily: 'Space Grotesk',
              fontWeight: 700,
              fontSize: '12px',
              letterSpacing: '0.08em',
              padding: '10px 22px',
              textDecoration: 'none',
              textTransform: 'uppercase',
              display: 'inline-block',
              transition: 'background 0.15s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#664A0E')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#8B6914')}
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="lg:hidden flex items-center justify-center"
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
            className="fixed inset-0 z-[100] flex flex-col overflow-y-auto"
            style={{ background: '#0a0a0a' }}
          >
            <div className="flex items-center justify-between px-[6%]" style={{ height: '64px', flexShrink: 0 }}>
              <span style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '16px', color: '#ffffff', letterSpacing: '-0.01em' }}>
                ECOTONE
              </span>
              <button
                onClick={() => setMobileOpen(false)}
                style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px' }}
              >
                <X size={22} color="#ffffff" />
              </button>
            </div>
            <div className="flex flex-col px-[6%] py-8 gap-2">
              <motion.a
                href="/"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 }}
                onClick={() => setMobileOpen(false)}
                style={{
                  fontFamily: 'Space Grotesk',
                  fontWeight: 700,
                  fontSize: 'clamp(24px, 6vw, 36px)',
                  color: '#ffffff',
                  textDecoration: 'none',
                  paddingBottom: '16px',
                  borderBottom: '1px solid #1f1f1f',
                }}
              >
                Home
              </motion.a>

              {/* Mobile Services */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                style={{ paddingBottom: '16px', borderBottom: '1px solid #1f1f1f' }}
              >
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: 'clamp(24px, 6vw, 36px)',
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '0',
                    width: '100%',
                    textAlign: 'left',
                  }}
                >
                  Services <ChevronDown size={18} style={{ transform: mobileServicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s ease' }} />
                </button>
                <AnimatePresence>
                  {mobileServicesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      style={{ overflow: 'hidden', marginTop: '12px' }}
                    >
                      {serviceLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          style={{
                            display: 'block',
                            fontFamily: 'Space Grotesk',
                            fontWeight: 400,
                            fontSize: '16px',
                            color: 'rgba(255,255,255,0.7)',
                            textDecoration: 'none',
                            padding: '8px 0',
                          }}
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>

              {topLinks.slice(1).map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (i + 2) * 0.07 }}
                  onClick={() => setMobileOpen(false)}
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: 'clamp(24px, 6vw, 36px)',
                    color: '#ffffff',
                    textDecoration: 'none',
                    paddingBottom: '16px',
                    borderBottom: '1px solid #1f1f1f',
                  }}
                >
                  {link.label}
                </motion.a>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '12px' }}
              >
                <a
                  href="tel:+971558934401"
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: '#C4902E',
                    textDecoration: 'none',
                  }}
                >
                  UAE: +971 55 893 4401
                </a>
                <a
                  href="tel:+966501109913"
                  style={{
                    fontFamily: 'Space Grotesk',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: '#C4902E',
                    textDecoration: 'none',
                  }}
                >
                  KSA: +966 50 110 9913
                </a>
                <a
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  style={{
                    display: 'inline-block',
                    background: '#8B6914',
                    color: '#ffffff',
                    fontFamily: 'Space Grotesk',
                    fontWeight: 700,
                    fontSize: '13px',
                    letterSpacing: '0.08em',
                    padding: '14px 28px',
                    textDecoration: 'none',
                    textTransform: 'uppercase',
                    marginTop: '8px',
                    alignSelf: 'flex-start',
                  }}
                >
                  Enquire Now
                </a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
