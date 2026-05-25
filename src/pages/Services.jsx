import React from 'react'
import { Link } from 'react-router-dom'
import { GearWatermark, Sparks } from '../components/index.jsx'
import { SERVICES } from '../constants.js'
import { ShieldCheck, Zap, Settings, Cpu, Truck, Search, ArrowRight, Check } from 'lucide-react'

const SERVICE_ICONS = { shield: ShieldCheck, zap: Zap, settings: Settings, cpu: Cpu, truck: Truck, search: Search }

export default function Services() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '7rem 1.5rem 4rem', background: '#0A0A0A', overflow: 'hidden' }}>
        <GearWatermark size={500} top="-10%" right="-100px" />
        <Sparks count={5} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag">Our Expertise</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.92, marginBottom: '1rem' }}>
            <span className="chrome-text">OUR </span>
            <span style={{ color: 'var(--brand-red)' }}>SERVICES</span>
          </h1>
          <p className="font-heading" style={{ color: 'var(--chrome)', fontSize: '1.125rem', maxWidth: 560, lineHeight: 1.65 }}>
            Professional mobile mechanic services — we bring the tools, the expertise, and the solution right to your door.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section" style={{ background: 'var(--surface-1)' }}>
        <div className="container" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {SERVICES.map(({ id, icon, title, description, features }, idx) => {
            const Icon = SERVICE_ICONS[icon]
            const isEven = idx % 2 === 0
            return (
              <div key={id} className="card" style={{
                display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                gap: 0, overflow: 'hidden',
              }}>
                {/* Image placeholder with gradient */}
                <div style={{
                  background: `linear-gradient(135deg, ${isEven ? 'rgba(204,30,30,0.15)' : 'rgba(232,200,75,0.08)'} 0%, var(--surface-2) 100%)`,
                  minHeight: 280, display: 'flex', alignItems: 'center', justifyContent: 'center',
                  position: 'relative', overflow: 'hidden',
                  order: isEven ? 0 : 1,
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0.04,
                    backgroundImage: `
                      linear-gradient(rgba(204,30,30,0.3) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(204,30,30,0.3) 1px, transparent 1px)
                    `,
                    backgroundSize: '30px 30px',
                  }} />
                  {Icon && (
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <Icon size={80} style={{ color: 'var(--brand-red)', opacity: 0.5 }} />
                    </div>
                  )}
                </div>

                {/* Content */}
                <div style={{ padding: '2.5rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', order: isEven ? 1 : 0 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
                    <div style={{
                      width: 40, height: 40, borderRadius: 6,
                      background: 'rgba(204,30,30,0.12)', border: '1px solid rgba(204,30,30,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--brand-red)', flexShrink: 0,
                    }}>
                      {Icon && <Icon size={18} />}
                    </div>
                    <h2 className="font-display" style={{ fontSize: '1.6rem', color: 'var(--foreground)', letterSpacing: '0.04em' }}>{title}</h2>
                  </div>
                  <p className="font-heading" style={{ color: 'var(--chrome)', lineHeight: 1.65, marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
                    {description}
                  </p>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {features.map(f => (
                      <li key={f} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--chrome)', fontSize: '0.875rem', fontFamily: 'Barlow, sans-serif' }}>
                        <Check size={14} style={{ color: 'var(--brand-red)', flexShrink: 0 }} /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/book" className="btn-primary" style={{ alignSelf: 'flex-start', fontSize: '0.8rem', padding: '0.6rem 1.25rem' }}>
                    Book This Service <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand-red)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1rem' }}>
            NEED A SERVICE NOT LISTED?
          </h2>
          <p className="font-heading" style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '2rem', maxWidth: 500, margin: '0 auto 2rem', lineHeight: 1.6 }}>
            We handle most automotive repairs. Contact us — we'll let you know if we can help.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn-secondary" style={{ borderColor: '#fff', color: '#fff' }}>
              Contact Us
            </Link>
            <Link to="/book" style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              background: '#fff', color: 'var(--brand-red)', fontFamily: 'Barlow, sans-serif',
              fontWeight: 700, fontSize: '0.9rem', padding: '0.75rem 1.75rem',
              borderRadius: 4, border: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              Book Now <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
