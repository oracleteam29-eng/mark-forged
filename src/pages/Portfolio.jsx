import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GearWatermark, Sparks } from '../components/index.jsx'
import { ArrowRight, Wrench, CheckCircle } from 'lucide-react'

const PORTFOLIO_ITEMS = [
  { id: 1, category: 'Brakes', title: 'Full Brake System Overhaul', desc: 'Complete front and rear brake replacement — pads, rotors, and calipers on a 2019 Toyota Camry. Customer back on the road same day.', tags: ['Brakes', 'Toyota', 'Same Day'] },
  { id: 2, category: 'Engine', title: 'Engine Timing Belt Replacement', desc: 'Replaced the worn timing belt and water pump on a 2016 Honda Accord to prevent catastrophic engine failure. Preventative maintenance saved the customer thousands.', tags: ['Engine', 'Honda', 'Preventative'] },
  { id: 3, category: 'Electrical', title: 'Dead Battery & Alternator Swap', desc: 'Customer stranded at work — diagnosed a failing alternator and dead battery. Replaced both in the parking lot within 2 hours.', tags: ['Electrical', 'Emergency', 'Alternator'] },
  { id: 4, category: 'Diagnostics', title: 'Check Engine Light Diagnosis', desc: 'Traced an intermittent misfire code to a faulty ignition coil on a 2020 Hyundai Elantra. Diagnosed and repaired in one visit.', tags: ['Diagnostics', 'Hyundai', 'OBD-II'] },
  {
    id: 5, category: 'Fleet', title: 'Fleet Maintenance — 8 Vehicles', desc: "Scheduled oil changes, tire rotations, and brake inspections for a local delivery company's fleet. All 8 vehicles done in a single weekend.", tags: ['Fleet', 'Commercial', 'Multi-Vehicle'] },
  { id: 6, category: 'Suspension', title: 'Front Strut & Shock Replacement', desc: 'Replaced worn struts and shocks on a 2017 Ford F-150. Restored ride comfort and handling for a customer doing daily highway commutes.', tags: ['Suspension', 'Ford', 'Ride Quality'] },
  { id: 7, category: 'Tune-Up', title: 'Complete 100K Mile Tune-Up', desc: 'Spark plugs, air filter, fuel filter, PCV valve, and fluid top-off for a high-mileage 2014 Nissan Altima. Engine runs smoother than new.', tags: ['Tune-Up', 'Nissan', 'Maintenance'] },
  { id: 8, category: 'Brakes', title: 'Emergency Brake Line Repair', desc: 'Customer noticed brake fluid leak — responded within an hour and replaced the corroded brake line. Potentially life-saving repair done at their home.', tags: ['Brakes', 'Emergency', 'Safety'] },
]

const CATEGORIES = ['All', ...new Set(PORTFOLIO_ITEMS.map(p => p.category))]

export default function Portfolio() {
  const [filter, setFilter] = useState('All')
  const filtered = filter === 'All' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(p => p.category === filter)

  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '7rem 1.5rem 4rem', background: '#0A0A0A', overflow: 'hidden' }}>
        <GearWatermark size={500} top="-10%" right="-100px" />
        <Sparks count={4} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag">Our Work</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.92, marginBottom: '1rem' }}>
            <span className="chrome-text">OUR </span>
            <span style={{ color: 'var(--brand-red)' }}>PORTFOLIO</span>
          </h1>
          <p className="font-heading" style={{ color: 'var(--chrome)', fontSize: '1.125rem', maxWidth: 560, lineHeight: 1.65 }}>
            Real jobs, real results. Here's a look at the work we've done for customers across the Atlanta metro area.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="section" style={{ background: 'var(--surface-1)' }}>
        <div className="container">
          {/* Filter tabs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '2.5rem' }}>
            {CATEGORIES.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                style={{
                  padding: '0.5rem 1.25rem', borderRadius: 4, border: '1px solid',
                  borderColor: filter === cat ? 'var(--brand-red)' : 'var(--border)',
                  background: filter === cat ? 'rgba(204,30,30,0.12)' : 'transparent',
                  color: filter === cat ? 'var(--brand-red)' : 'var(--chrome)',
                  fontFamily: 'Barlow, sans-serif', fontWeight: 600, fontSize: '0.8rem',
                  letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer',
                  transition: 'all 0.2s',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid-auto">
            {filtered.map(({ id, category, title, desc, tags }) => (
              <div key={id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                {/* Visual header */}
                <div style={{
                  padding: '2rem', position: 'relative', overflow: 'hidden',
                  background: 'linear-gradient(135deg, rgba(204,30,30,0.1) 0%, var(--surface-2) 100%)',
                  minHeight: 140, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    position: 'absolute', inset: 0, opacity: 0.04,
                    backgroundImage: 'linear-gradient(rgba(204,30,30,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(204,30,30,0.3) 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                  <Wrench size={48} style={{ color: 'var(--brand-red)', opacity: 0.35 }} />
                  <span style={{
                    position: 'absolute', top: '0.75rem', right: '0.75rem',
                    background: 'rgba(204,30,30,0.15)', border: '1px solid rgba(204,30,30,0.3)',
                    padding: '0.2rem 0.6rem', borderRadius: 3, fontSize: '0.65rem',
                    fontFamily: 'Barlow Condensed, sans-serif', color: 'var(--brand-red)',
                    fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
                  }}>
                    {category}
                  </span>
                </div>

                {/* Content */}
                <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                  <h3 className="font-display" style={{ fontSize: '1.2rem', color: 'var(--foreground)', marginBottom: '0.6rem', letterSpacing: '0.04em' }}>{title}</h3>
                  <p className="font-heading" style={{ fontSize: '0.875rem', color: 'var(--chrome)', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>{desc}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                    {tags.map(t => (
                      <span key={t} style={{
                        padding: '0.2rem 0.5rem', borderRadius: 3, fontSize: '0.7rem',
                        background: 'var(--surface-2)', border: '1px solid var(--border)',
                        color: 'var(--steel)', fontFamily: 'Barlow, sans-serif',
                      }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--brand-red)', padding: '4rem 1.5rem', textAlign: 'center' }}>
        <div className="container">
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1rem' }}>
            YOUR CAR COULD BE NEXT
          </h2>
          <p className="font-heading" style={{ color: 'rgba(255,255,255,0.8)', maxWidth: 500, margin: '0 auto 2rem', lineHeight: 1.6 }}>
            Let us handle your repair — right at your door, with certified results.
          </p>
          <Link to="/book" style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
            background: '#fff', color: 'var(--brand-red)', fontFamily: 'Barlow, sans-serif',
            fontWeight: 700, fontSize: '0.9rem', padding: '0.75rem 1.75rem',
            borderRadius: 4, border: 'none', textTransform: 'uppercase', letterSpacing: '0.08em',
          }}>
            Book Now <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  )
}
