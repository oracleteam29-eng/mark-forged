import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

// ── Logo SVG Icon ──────────────────────────────────────────
export function LogoIcon({ className = 'h-11 w-11' }) {
  return (
    <svg viewBox="0 0 80 80" className={className} aria-label="Mark Forged Logo" fill="none">
      <circle cx="40" cy="40" r="38" fill="#0A0A0A" stroke="#CC1E1E" strokeWidth="3" />
      <path d="M40 12 L46 26 L60 20 L54 34 L68 38 L54 42 L60 56 L46 50 L40 64 L34 50 L20 56 L26 42 L12 38 L26 34 L20 20 L34 26 Z"
        fill="none" stroke="#C0C8D0" strokeWidth="2" opacity="0.6" />
      <circle cx="40" cy="40" r="12" fill="#CC1E1E" opacity="0.9" />
      <path d="M36 40 L39 43 L44 37" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <text x="40" y="56" textAnchor="middle" fill="#E8C84B" fontFamily="Bebas Neue,sans-serif" fontSize="8" letterSpacing="1">MF</text>
    </svg>
  )
}

// ── Logo Wordmark ──────────────────────────────────────────
export function LogoWordmark() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1, gap: 2 }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: '6px' }}>
        <span className="font-display chrome-text" style={{ fontSize: '1.25rem', letterSpacing: '0.08em' }}>
          MARK FORGED
        </span>
        <span className="font-heading gold-text" style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700, textTransform: 'uppercase' }}>
          LLC
        </span>
      </div>
      <span className="font-heading" style={{ fontSize: '0.6rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--chrome)', fontWeight: 600 }}>
        Mobile Mechanic
      </span>
    </div>
  )
}

// ── Gear SVG ──────────────────────────────────────────────
export function GearSVG({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} aria-hidden="true" fill="currentColor">
      <path d="M50 5 L55 18 L65 14 L66 27 L78 26 L74 38 L86 42 L78 52 L88 60 L77 65 L82 77 L69 76 L70 89 L58 84 L52 95 L45 84 L33 89 L34 76 L21 77 L26 65 L15 60 L25 52 L17 42 L29 38 L25 26 L37 27 L38 14 L48 18 Z" opacity="0.85" />
      <circle cx="50" cy="50" r="14" fill="none" stroke="currentColor" strokeWidth="6" />
    </svg>
  )
}

// ── Gear Watermark ─────────────────────────────────────────
export function GearWatermark({ size = 420, top = '10%', right = '-80px' }) {
  return (
    <div
      className="gear-watermark"
      style={{ width: size, height: size, top, right, color: 'var(--brand-red)' }}
      aria-hidden="true"
    >
      <GearSVG className="w-full h-full" />
    </div>
  )
}

// ── Sparks ────────────────────────────────────────────────
export function Sparks({ count = 6 }) {
  const sparks = Array.from({ length: count })
  return (
    <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none' }} aria-hidden="true">
      {sparks.map((_, i) => {
        const isRed = i % 2 === 0
        const left = (i * 17 + 10) % 95
        const delay = (i * 0.7) % 5
        const duration = 5 + (i % 4)
        const size = 2 + (i % 3)
        return (
          <span
            key={i}
            className="spark"
            style={{
              left: `${left}%`,
              bottom: '-10px',
              width: size,
              height: size,
              background: isRed ? 'var(--brand-red-bright)' : 'var(--chrome)',
              boxShadow: isRed ? '0 0 8px var(--brand-red-bright)' : '0 0 6px var(--chrome)',
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
            }}
          />
        )
      })}
    </div>
  )
}

// ── ASE Badge ─────────────────────────────────────────────
export function ASEBadge({ size = 96 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-label="ASE Certified">
      <defs>
        <radialGradient id="aseGrad" cx="50%" cy="40%">
          <stop offset="0%" stopColor="#3a7bd5" />
          <stop offset="100%" stopColor="#1c3f7a" />
        </radialGradient>
      </defs>
      <g fill="#E8C84B">
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i * 15 * Math.PI) / 180
          const x1 = 60 + Math.cos(angle) * 54
          const y1 = 60 + Math.sin(angle) * 54
          const x2 = 60 + Math.cos(angle + 0.05) * 48
          const y2 = 60 + Math.sin(angle + 0.05) * 48
          const x3 = 60 + Math.cos(angle - 0.05) * 48
          const y3 = 60 + Math.sin(angle - 0.05) * 48
          return <polygon key={i} points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`} />
        })}
      </g>
      <circle cx="60" cy="60" r="44" fill="url(#aseGrad)" stroke="#0c1f3d" strokeWidth="2" />
      <text x="60" y="58" textAnchor="middle" fill="#fff" fontFamily="Bebas Neue,sans-serif" fontSize="28" fontWeight="700">ASE</text>
      <text x="60" y="76" textAnchor="middle" fill="#E8C84B" fontFamily="Barlow,sans-serif" fontSize="7" letterSpacing="1">CERTIFIED</text>
    </svg>
  )
}

// ── Mark Forged Certified Badge ───────────────────────────
export function MFBadge({ size = 96 }) {
  return (
    <svg viewBox="0 0 120 120" width={size} height={size} aria-label="Mark Forged Certified">
      <circle cx="60" cy="60" r="56" fill="#0A0A0A" stroke="#CC1E1E" strokeWidth="3" />
      <path d="M 14 60 A 46 46 0 0 1 106 60" fill="none" stroke="#CC1E1E" strokeWidth="10" strokeDasharray="4 6" />
      <text x="60" y="50" textAnchor="middle" fill="#C0C8D0" fontFamily="Bebas Neue,sans-serif" fontSize="15">MARK</text>
      <text x="60" y="64" textAnchor="middle" fill="#C0C8D0" fontFamily="Bebas Neue,sans-serif" fontSize="15">FORGED</text>
      <text x="60" y="78" textAnchor="middle" fill="#E8C84B" fontFamily="Barlow,sans-serif" fontSize="7" letterSpacing="1.5">CERTIFIED</text>
      <text x="60" y="90" textAnchor="middle" fill="#909090" fontFamily="Barlow,sans-serif" fontSize="6" letterSpacing="1">SPECIALIST</text>
    </svg>
  )
}

// ── Loading Screen ─────────────────────────────────────────
export function LoadingScreen() {
  const [visible, setVisible] = useState(true)
  const [fading, setFading] = useState(false)
  const title = 'MARK FORGED'

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (sessionStorage.getItem('markForgedLoaded')) { setVisible(false); return }
    const t1 = setTimeout(() => setFading(true), 3000)
    const t2 = setTimeout(() => {
      setVisible(false)
      sessionStorage.setItem('markForgedLoaded', '1')
    }, 3500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 200,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        background: '#0A0A0A',
        opacity: fading ? 0 : 1,
        transition: 'opacity 0.5s ease',
      }}
    >
      {/* Spinning ring + logo */}
      <div style={{ position: 'relative', width: 200, height: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div
          className="spin-slow"
          style={{
            position: 'absolute', inset: 0,
            background: 'conic-gradient(from 0deg, transparent 0%, #CC1E1E 25%, transparent 50%, #C0C8D0 75%, transparent 100%)',
            borderRadius: '50%',
            mask: 'radial-gradient(circle, transparent 60%, #000 62%, #000 80%, transparent 82%)',
            WebkitMask: 'radial-gradient(circle, transparent 60%, #000 62%, #000 80%, transparent 82%)',
            opacity: 0.5,
          }}
        />
        <LogoIcon className="w-32 h-32" style={{ position: 'relative', zIndex: 1 }} />
      </div>

      {/* Animated title */}
      <div style={{ marginTop: '2rem', display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
        <h2 className="font-display chrome-text" style={{ fontSize: 'clamp(1.75rem, 5vw, 2.5rem)', letterSpacing: '0.06em' }}>
          {title.split('').map((ch, i) => (
            <span key={i} className="letter-in" style={{ display: 'inline-block', animationDelay: `${1.5 + i * 0.05}s` }}>
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h2>
        <span className="font-heading gold-text letter-in" style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.15em', animationDelay: '2.2s' }}>
          LLC
        </span>
      </div>

      <p className="font-heading letter-in" style={{
        marginTop: '0.6rem', fontSize: '0.65rem', letterSpacing: '0.28em',
        textTransform: 'uppercase', color: 'var(--chrome)', animationDelay: '2.5s',
      }}>
        Certified Mobile Automotive Specialist
      </p>

      {/* Progress bar */}
      <div style={{ marginTop: '2rem', width: 260, height: 3, background: '#1A1A1A', borderRadius: 4, overflow: 'hidden' }}>
        <div
          className="progress-fill"
          style={{
            height: '100%',
            background: 'linear-gradient(90deg, #8B1010, #CC1E1E, #E83030)',
            boxShadow: '0 0 10px #CC1E1E',
          }}
        />
      </div>
    </div>
  )
}

// ── Navbar ─────────────────────────────────────────────────
import { NAV_LINKS, BRAND } from '../constants.js'
import { Facebook, Twitter, Instagram, Menu, X } from 'lucide-react'

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setOpen(false), [location.pathname])

  return (
    <header
      style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.55)',
        backdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '2px solid var(--brand-red)' : '2px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.6)' : 'none',
      }}
    >
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '0 1.25rem', height: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {/* Logo */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <LogoIcon className="h-11 w-11" style={{ filter: 'drop-shadow(0 0 8px rgba(204,30,30,0.4))' }} />
          <LogoWordmark />
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none', alignItems: 'center', gap: '1.75rem' }} className="desktop-nav">
          {NAV_LINKS.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link${location.pathname === to ? ' active' : ''}`}
            >
              {label}
            </Link>
          ))}
          <Link to="/book" className="btn-primary" style={{ padding: '0.6rem 1.25rem', fontSize: '0.8rem' }}>
            Book Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="hamburger-btn"
          aria-label="Toggle menu"
          style={{ background: 'none', border: 'none', color: 'var(--brand-red)', padding: '0.5rem' }}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{
          background: '#0A0A0A', borderTop: '1px solid #1A1A1A',
          padding: '1.5rem 1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem',
        }}>
          {NAV_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className={`nav-link${location.pathname === to ? ' active' : ''}`}>
              {label}
            </Link>
          ))}
          <Link to="/book" className="btn-primary" style={{ marginTop: '0.5rem', textAlign: 'center' }}>
            Book Now
          </Link>
          <div style={{ display: 'flex', gap: '1rem', paddingTop: '1rem', borderTop: '1px solid #1A1A1A' }}>
            <a href={BRAND.social.facebook} target="_blank" rel="noreferrer" style={{ color: 'var(--chrome)' }}><Facebook size={20} /></a>
            <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" style={{ color: 'var(--chrome)' }}><Twitter size={20} /></a>
            <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--chrome)' }}><Instagram size={20} /></a>
          </div>
        </div>
      )}

      <style>{`
        @media(min-width:1024px){
          .desktop-nav { display: flex !important; }
          .hamburger-btn { display: none !important; }
        }
      `}</style>
    </header>
  )
}

// ── Footer ─────────────────────────────────────────────────
export function Footer() {
  return (
    <footer style={{ background: '#080808', borderTop: '1px solid #151515' }}>
      <div className="shimmer-bar" style={{ height: 3 }} />
      <div style={{ maxWidth: 1400, margin: '0 auto', padding: '4rem 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2.5rem' }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <LogoIcon style={{ width: 56, height: 56 }} />
            <div>
              <div className="font-display chrome-text" style={{ fontSize: '1.35rem' }}>MARK FORGED</div>
              <div className="gold-text font-heading" style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Mobile Mechanic LLC</div>
            </div>
          </div>
          <p style={{ fontSize: '0.875rem', color: 'var(--chrome)', marginTop: '1.25rem', lineHeight: 1.6 }}>
            Certified Mobile Automotive Specialist 🛠️
          </p>
          <p style={{ fontSize: '0.75rem', color: 'var(--steel)', marginTop: '0.25rem' }}>
            ASE Certified · Honest · Reliable · Experienced
          </p>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '1.25rem' }}>
            <a href={BRAND.social.facebook} target="_blank" rel="noreferrer" style={{ color: 'var(--chrome)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
              onMouseLeave={e => e.target.style.color = 'var(--chrome)'}
            ><Facebook size={20} /></a>
            <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" style={{ color: 'var(--chrome)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
              onMouseLeave={e => e.target.style.color = 'var(--chrome)'}
            ><Twitter size={20} /></a>
            <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" style={{ color: 'var(--chrome)', transition: 'color 0.2s' }}
              onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
              onMouseLeave={e => e.target.style.color = 'var(--chrome)'}
            ><Instagram size={20} /></a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display" style={{ fontSize: '1.2rem', color: 'var(--foreground)', marginBottom: '1rem' }}>Services</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--steel)' }}>
            {['Brake Systems & Suspension','Batteries, Starters & Alternators','Tune-Ups & Maintenance','Engine & Transmission','Fleet Maintenance','Diagnostics & Check Engine'].map(s => (
              <li key={s}><Link to="/services" style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
                onMouseLeave={e => e.target.style.color = 'var(--steel)'}
              >{s}</Link></li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display" style={{ fontSize: '1.2rem', color: 'var(--foreground)', marginBottom: '1rem' }}>Quick Links</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--steel)' }}>
            {NAV_LINKS.concat([{ to: '/book', label: 'Book Now' }]).map(({ to, label }) => (
              <li key={to}><Link to={to} style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
                onMouseLeave={e => e.target.style.color = 'var(--steel)'}
              >{label}</Link></li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display" style={{ fontSize: '1.2rem', color: 'var(--foreground)', marginBottom: '1rem' }}>Contact</h4>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', fontSize: '0.875rem', color: 'var(--steel)' }}>
            <li>
              <a href={`mailto:${BRAND.email}`} style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
                onMouseLeave={e => e.target.style.color = 'var(--steel)'}
              >{BRAND.email}</a>
            </li>
            <li>
              <a href={`tel:${BRAND.phone}`} style={{ transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
                onMouseLeave={e => e.target.style.color = 'var(--steel)'}
              >{BRAND.phone}</a>
            </li>
            <li><a href={BRAND.social.facebook} target="_blank" rel="noreferrer" style={{ color: 'var(--steel)' }}>Mark Forged Mechanic</a></li>
          </ul>
          <p style={{ color: 'var(--gold)', fontSize: '0.875rem', marginTop: '1.25rem', fontFamily: 'Barlow, sans-serif' }}>
            We Come To You 🧰
          </p>
          <Link to="/book" className="btn-primary" style={{ display: 'inline-flex', marginTop: '1rem', fontSize: '0.875rem' }}>
            Book Now
          </Link>
        </div>
      </div>

      <div style={{ background: '#040404', padding: '1.25rem 1rem', textAlign: 'center', fontSize: '0.75rem', color: 'var(--steel)' }}>
        {BRAND.copyright} | Mark Forged Certified Mobile Automotive Specialist | ASE Certified
      </div>
    </footer>
  )
}

// ── ScrollToTop ────────────────────────────────────────────
export function ScrollToTop() {
  const location = useLocation()
  useEffect(() => {
    if (typeof window !== 'undefined') window.scrollTo(0, 0)
  }, [location.pathname])
  return null
}

// ── Layout ─────────────────────────────────────────────────
export function Layout({ children }) {
  return (
    <>
      <LoadingScreen />
      <ScrollToTop />
      <Navbar />
      <main className="page-wrapper">{children}</main>
      <Footer />
    </>
  )
}
