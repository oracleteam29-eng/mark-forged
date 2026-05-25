import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { GearWatermark, Sparks, ASEBadge, MFBadge, LogoIcon } from '../components/index.jsx'
import { SERVICES, TESTIMONIALS, BRAND } from '../constants.js'
import {
  ShieldCheck, Zap, Settings, Cpu, Truck, Search,
  Star, Phone, MapPin, ArrowRight, CheckCircle, Clock
} from 'lucide-react'

const SERVICE_ICONS = { shield: ShieldCheck, zap: Zap, settings: Settings, cpu: Cpu, truck: Truck, search: Search }

// ── Stats row ──────────────────────────────────────────────
const STATS = [
  { value: '500+', label: 'Happy Customers' },
  { value: '10+', label: 'Years Experience' },
  { value: '6', label: 'Services Offered' },
  { value: '5★', label: 'Average Rating' },
]

// ── Why Us ─────────────────────────────────────────────────
const WHY = [
  { icon: ShieldCheck, title: 'ASE Certified',   desc: 'Professionally trained and certified — you get expert-level quality every single time.' },
  { icon: Clock,       title: 'Fast Response',   desc: 'Same-day service available. We understand you can\'t wait days for your car to get fixed.' },
  { icon: MapPin,      title: 'We Come To You',  desc: 'At your home, office, or wherever you are. No tow truck, no waiting room.' },
  { icon: CheckCircle, title: 'Upfront Pricing', desc: 'No hidden fees, no surprises. Full quote before we touch your vehicle.' },
]

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden', background: '#0A0A0A' }}>
        {/* Background grid */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 0,
          backgroundImage: `
            linear-gradient(rgba(204,30,30,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(204,30,30,0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }} />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0, zIndex: 1,
          background: 'radial-gradient(ellipse at 60% 50%, rgba(204,30,30,0.08) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(232,200,75,0.04) 0%, transparent 50%)',
        }} />

        <GearWatermark size={600} top="5%" right="-120px" />
        <Sparks count={8} />

        <div className="container" style={{ position: 'relative', zIndex: 2, padding: '0 1.5rem' }}>
          <div style={{ maxWidth: 780 }}>
            {/* Tag */}
            <div className="section-tag" style={{ marginBottom: '1.5rem' }}>
              <Phone size={12} /> Mobile Mechanic · Atlanta Metro Area
            </div>

            {/* Headline */}
            <h1 className="font-display chrome-text" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)', lineHeight: 0.9, letterSpacing: '0.02em', marginBottom: '0.5rem' }}>
              MARK<br />
              <span style={{ color: 'var(--brand-red)', WebkitTextFillColor: 'var(--brand-red)' }}>FORGED</span>
            </h1>
            <h2 className="font-display" style={{ fontSize: 'clamp(1.1rem, 3vw, 2rem)', color: 'var(--chrome)', letterSpacing: '0.25em', marginBottom: '1.5rem' }}>
              CERTIFIED MOBILE MECHANIC LLC
            </h2>

            {/* Description */}
            <p className="font-heading" style={{ fontSize: '1.125rem', color: 'var(--chrome)', lineHeight: 1.65, maxWidth: 560, marginBottom: '2.5rem' }}>
              ASE Certified automotive specialist — we bring the garage to your driveway.
              Expert repairs, honest pricing, right where you are.
            </p>

            {/* CTA */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <Link to="/book" className="btn-primary" style={{ fontSize: '1rem', padding: '0.9rem 2.25rem' }}>
                Book Now <ArrowRight size={16} />
              </Link>
              <Link to="/services" className="btn-secondary" style={{ fontSize: '1rem' }}>
                View Services
              </Link>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
              <ASEBadge size={80} />
              <MFBadge size={80} />
              <div className="red-border" style={{ color: 'var(--chrome)', fontSize: '0.8rem', lineHeight: 1.7, fontFamily: 'Barlow, sans-serif' }}>
                <strong style={{ color: '#fff', display: 'block', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1rem', letterSpacing: '0.06em' }}>CERTIFIED & TRUSTED</strong>
                ASE Certified Professional<br />
                Mark Forged Certified Specialist<br />
                Fully Insured
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div style={{ position: 'absolute', bottom: '2rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.4rem', color: 'var(--steel)', fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontFamily: 'Barlow Condensed, sans-serif', zIndex: 2 }}>
          <span>Scroll</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom, var(--brand-red), transparent)' }} />
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div style={{ background: 'var(--brand-red)', padding: '1.5rem 1.5rem' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', gap: '1rem', textAlign: 'center' }}>
          {STATS.map(({ value, label }) => (
            <div key={label}>
              <div className="font-display" style={{ fontSize: '2.25rem', color: '#fff', lineHeight: 1 }}>{value}</div>
              <div className="font-heading" style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.12em', textTransform: 'uppercase', marginTop: '0.25rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES OVERVIEW ── */}
      <section className="section" style={{ background: 'var(--surface-1)' }}>
        <div className="container">
          <div className="section-tag">What We Do</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--foreground)', marginBottom: '0.75rem' }}>
            OUR SERVICES
          </h2>
          <p className="font-heading" style={{ color: 'var(--chrome)', maxWidth: 560, marginBottom: '3rem', lineHeight: 1.6 }}>
            From brakes to diagnostics — we handle it all at your location.
          </p>

          <div className="grid-auto">
            {SERVICES.map(({ id, icon, title, description }) => {
              const Icon = SERVICE_ICONS[icon]
              return (
                <div key={id} className="card" style={{ padding: '1.75rem' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: 6,
                    background: 'rgba(204,30,30,0.12)', border: '1px solid rgba(204,30,30,0.25)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '1rem', color: 'var(--brand-red)',
                  }}>
                    {Icon && <Icon size={22} />}
                  </div>
                  <h3 className="font-display" style={{ fontSize: '1.3rem', color: 'var(--foreground)', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>{title}</h3>
                  <p className="font-heading" style={{ fontSize: '0.875rem', color: 'var(--chrome)', lineHeight: 1.6 }}>{description}</p>
                </div>
              )
            })}
          </div>

          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <Link to="/services" className="btn-primary">All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="section-tag">Why Choose Us</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--foreground)', marginBottom: '1rem' }}>
              THE MARK FORGED<br />
              <span style={{ color: 'var(--brand-red)' }}>DIFFERENCE</span>
            </h2>
            <p className="font-heading" style={{ color: 'var(--chrome)', lineHeight: 1.65, marginBottom: '2rem' }}>
              Skip the dealership hassle and long waits. We come to you with professional-grade equipment and unmatched expertise.
            </p>
            <Link to="/about" className="btn-secondary">Learn About Us</Link>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {WHY.map(({ icon: Icon, title, desc }) => (
              <div key={title} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 6, flexShrink: 0,
                  background: 'rgba(204,30,30,0.1)', border: '1px solid rgba(204,30,30,0.2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: 'var(--brand-red)',
                }}>
                  <Icon size={20} />
                </div>
                <div>
                  <h4 className="font-heading" style={{ fontWeight: 700, color: '#fff', marginBottom: '0.25rem', fontSize: '1rem' }}>{title}</h4>
                  <p className="font-heading" style={{ fontSize: '0.875rem', color: 'var(--chrome)', lineHeight: 1.5 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section" style={{ background: 'var(--surface-1)' }}>
        <div className="container">
          <div className="section-tag">Reviews</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 6vw, 4rem)', color: 'var(--foreground)', marginBottom: '3rem' }}>
            WHAT CUSTOMERS SAY
          </h2>
          <div className="grid-auto">
            {TESTIMONIALS.map(({ name, rating, text, location }) => (
              <div key={name} className="card" style={{ padding: '1.75rem' }}>
                <div className="stars" style={{ marginBottom: '1rem' }}>
                  {Array.from({ length: rating }).map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
                </div>
                <p className="font-heading" style={{ color: 'var(--chrome)', lineHeight: 1.65, marginBottom: '1.25rem', fontSize: '0.9375rem', fontStyle: 'italic' }}>
                  "{text}"
                </p>
                <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1rem' }}>
                  <div className="font-heading" style={{ fontWeight: 700, color: '#fff', fontSize: '0.9rem' }}>{name}</div>
                  <div style={{ fontSize: '0.75rem', color: 'var(--steel)', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.2rem' }}>
                    <MapPin size={11} /> {location}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section style={{ position: 'relative', background: 'linear-gradient(135deg, #0f0a0a 0%, #1a0505 50%, #0f0a0a 100%)', padding: '5rem 1.5rem', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(204,30,30,0.15) 0%, transparent 70%)', zIndex: 0 }} />
        <GearWatermark size={400} top="50%" right="-60px" />
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div className="section-tag" style={{ justifyContent: 'center' }}>Ready to Book?</div>
          <h2 className="font-display" style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', color: '#fff', marginBottom: '1rem' }}>
            WE COME<br /><span style={{ color: 'var(--brand-red)' }}>TO YOU</span>
          </h2>
          <p className="font-heading" style={{ color: 'var(--chrome)', fontSize: '1.125rem', maxWidth: 500, margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Book your mobile mechanic appointment today and get back on the road fast.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/book" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
              Book Appointment <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="btn-secondary" style={{ fontSize: '1rem' }}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
