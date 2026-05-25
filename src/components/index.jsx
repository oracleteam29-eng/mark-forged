import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Menu, X } from 'lucide-react'
import { BRAND, NAV_LINKS } from '../constants.js'

// ── Logo Image Icon ──────────────────────────────────────────
export function LogoIcon({ className = 'h-11 w-11' }) {
  return (
    <img
      src="/assets/logo.png"
      alt="Mark Forged Logo"
      className={className}
      style={{ objectFit: 'contain' }}
    />
  )
}

// ── Logo Wordmark ──────────────────────────────────────────
export function LogoWordmark() {
  return (
    <div className="flex flex-col leading-none">
      <div className="flex items-baseline gap-2">
        <span className="font-display text-[22px] text-[color:var(--brand-red)] tracking-wide">
          MARK FORGED
        </span>
        <span className="font-heading text-[12px] text-[color:var(--gold)] uppercase tracking-widest">
          LLC
        </span>
      </div>
      <span className="font-heading text-[11px] uppercase tracking-[0.18em] chrome-text">
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
      className="gear-watermark text-[color:var(--brand-red)]"
      style={{ width: size, height: size, top, right }}
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
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
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
      <text x="60" y="55" textAnchor="middle" fill="#C0C8D0" fontFamily="Bebas Neue,sans-serif" fontSize="18">MARK FORGED</text>
      <text x="60" y="70" textAnchor="middle" fill="#E8C84B" fontFamily="Barlow,sans-serif" fontSize="7" letterSpacing="1.5">CERTIFIED</text>
      <text x="60" y="84" textAnchor="middle" fill="#909090" fontFamily="Barlow,sans-serif" fontSize="6" letterSpacing="1">SPECIALIST</text>
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
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-[#0A0A0A] transition-opacity duration-500"
      style={{ opacity: fading ? 0 : 1 }}
    >
      <div className="relative flex items-center justify-center" style={{ width: 200, height: 200 }}>
        <div
          className="absolute inset-0 spin-slow opacity-40"
          style={{
            background: 'conic-gradient(from 0deg, transparent 0%, #CC1E1E 25%, transparent 50%, #C0C8D0 75%, transparent 100%)',
            borderRadius: '50%',
            mask: 'radial-gradient(circle, transparent 60%, #000 62%, #000 80%, transparent 82%)',
            WebkitMask: 'radial-gradient(circle, transparent 60%, #000 62%, #000 80%, transparent 82%)',
          }}
        />
        <LogoIcon className="w-32 h-32 relative z-10" />
      </div>

      <div className="mt-8 flex items-baseline gap-3">
        <h2 className="font-display text-3xl md:text-4xl chrome-text">
          {title.split('').map((ch, i) => (
            <span key={i} className="letter-in inline-block" style={{ animationDelay: `${1.5 + i * 0.04}s` }}>
              {ch === ' ' ? '\u00A0' : ch}
            </span>
          ))}
        </h2>
        <span className="font-heading text-sm text-[color:var(--gold)] letter-in" style={{ animationDelay: '2.2s' }}>
          LLC
        </span>
      </div>

      <p className="mt-3 text-[10px] md:text-xs text-[color:var(--chrome)] tracking-[0.3em] uppercase letter-in" style={{ animationDelay: '2.5s' }}>
        Certified Mobile Automotive Specialist
      </p>

      <div className="mt-8 w-64 h-[3px] bg-[#1A1A1A] rounded-full overflow-hidden">
        <div
          className="h-full progress-fill"
          style={{
            background: 'linear-gradient(90deg, #8B1010, #CC1E1E, #E83030)',
            boxShadow: '0 0 10px #CC1E1E',
          }}
        />
      </div>
    </div>
  )
}

// ── Navbar ─────────────────────────────────────────────────
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(10,10,10,0.97)' : 'rgba(10,10,10,0.55)',
        backdropFilter: 'blur(14px)',
        borderBottom: scrolled ? '2px solid var(--brand-red)' : '2px solid transparent',
        boxShadow: scrolled ? '0 4px 24px rgba(0,0,0,0.6)' : 'none',
      }}
    >
      <div className="max-w-[1400px] mx-auto px-5 md:px-10 h-[70px] flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <LogoIcon className="h-11 w-11" />
          <LogoWordmark />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/book" className="btn-primary !py-[10px] !px-6 !text-[16px]">
            Book Now
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(o => !o)}
          className="lg:hidden p-2 text-[color:var(--brand-red)]"
          aria-label="Toggle menu"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-[#0A0A0A] border-t border-[#1A1A1A] px-5 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link${location.pathname === link.to ? ' active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/book" className="btn-primary mt-2">
            Book Now
          </Link>
          <div className="flex gap-4 pt-4 border-t border-[#1A1A1A]">
            <a href={BRAND.social.facebook} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)]">
              <Facebook size={20} />
            </a>
            <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)]">
              <Twitter size={20} />
            </a>
            <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)]">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

// ── Footer ─────────────────────────────────────────────────
export function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#151515] mt-0">
      <div className="h-[3px] shimmer-bar" />
      <div className="max-w-[1400px] mx-auto px-6 md:px-10 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <LogoIcon className="h-14 w-14" />
            <div>
              <div className="font-display text-2xl chrome-text leading-none">MARK FORGED</div>
              <div className="font-heading text-[color:var(--gold)] text-xs tracking-widest mt-1">LLC</div>
            </div>
          </div>
          <p className="text-sm text-[color:var(--chrome)] mt-5 leading-relaxed">
            Mark Forged Certified Mobile Automotive Specialist 🛠️
          </p>
          <p className="text-xs text-[color:var(--steel)] mt-1">
            ASE Certified · Honest · Reliable · Experienced
          </p>
          <div className="flex gap-4 mt-5">
            <a href={BRAND.social.facebook} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)] transition-colors">
              <Facebook size={20} />
            </a>
            <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)] transition-colors">
              <Twitter size={20} />
            </a>
            <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)] transition-colors">
              <Instagram size={20} />
            </a>
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-display text-xl text-[color:var(--foreground)] mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-[color:var(--steel)]">
            <li><Link to="/services" className="hover:text-[color:var(--brand-red)]">Brake Systems & Suspension</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--brand-red)]">Batteries, Starters & Alternators</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--brand-red)]">Tune-Ups & Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--brand-red)]">Engine & Transmission</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--brand-red)]">Fleet Maintenance</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--brand-red)]">Diagnostics & Check Engine</Link></li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-xl text-[color:var(--foreground)] mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-[color:var(--steel)]">
            <li><Link to="/" className="hover:text-[color:var(--brand-red)]">Home</Link></li>
            <li><Link to="/about" className="hover:text-[color:var(--brand-red)]">About</Link></li>
            <li><Link to="/services" className="hover:text-[color:var(--brand-red)]">Services</Link></li>
            <li><Link to="/service-areas" className="hover:text-[color:var(--brand-red)]">Service Areas</Link></li>
            <li><Link to="/portfolio" className="hover:text-[color:var(--brand-red)]">Portfolio</Link></li>
            <li><Link to="/faq" className="hover:text-[color:var(--brand-red)]">FAQ</Link></li>
            <li><Link to="/contact" className="hover:text-[color:var(--brand-red)]">Contact</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-xl text-[color:var(--foreground)] mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-[color:var(--steel)]">
            <li>
              <a href={`mailto:${BRAND.email}`} className="hover:text-[color:var(--brand-red)] transition-colors break-all">
                {BRAND.email}
              </a>
            </li>
            <li>
              <a href={`tel:${BRAND.phone}`} className="hover:text-[color:var(--brand-red)] transition-colors">
                {BRAND.phone}
              </a>
            </li>
          </ul>
          <p className="text-xs text-[color:var(--steel)] mt-5">
            Available 7 Days · Mobile Response
          </p>
          <p className="text-sm text-[color:var(--gold)] mt-1 font-heading uppercase tracking-wider">
            We Come To You 🧰
          </p>
        </div>
      </div>

      <div className="bg-[#040404] py-5 px-4 text-center text-xs text-[color:var(--steel)] border-t border-[#101010]">
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

// ── Page Header Component ──────────────────────────────────
export function PageHeader({ eyebrow, title, subtitle, children }) {
  return (
    <section className="relative bg-[#0A0A0A] grease-texture overflow-hidden border-b border-[#1A1A1A]">
      <GearWatermark size={500} top="-120px" right="-160px" />
      <Sparks count={5} />
      <div className="relative max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32 text-center">
        {eyebrow && <div className="eyebrow mb-4">{eyebrow}</div>}
        <h1 className="font-display text-5xl md:text-7xl chrome-text leading-[0.95]">{title}</h1>
        {subtitle && <p className="mt-5 text-base md:text-lg text-[color:var(--chrome)] max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        {children}
      </div>
    </section>
  )
}

// ── Layout ─────────────────────────────────────────────────
export function Layout({ children }) {
  return (
    <>
      <LoadingScreen />
      <ScrollToTop />
      <Navbar />
      <main className="pt-[70px]">{children}</main>
      <Footer />
    </>
  )
}
