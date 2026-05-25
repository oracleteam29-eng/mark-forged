import React from 'react'
import { Link } from 'react-router-dom'
import { GearWatermark, Sparks, ASEBadge, MFBadge } from '../components/index.jsx'
import { ShieldCheck, Award, Wrench, Clock, Users, CheckCircle, ArrowRight } from 'lucide-react'

const VALUES = [
  { icon: ShieldCheck, title: 'Integrity', desc: "We tell you exactly what's wrong and what it costs — no upsells, no unnecessary parts." },
  { icon: Award,       title: 'Excellence', desc: "Every repair meets OEM standards. We treat every vehicle as if it were our own." },
  { icon: Clock,       title: 'Reliability', desc: "We show up on time, every time. Your schedule matters to us." },
  { icon: Users,       title: 'Customer First', desc: "From the first call to the final bolt, your satisfaction drives everything we do." },
]

const TIMELINE = [
  { year: '2015', event: 'Started hands-on training and automotive apprenticeship.' },
  { year: '2017', event: 'Earned ASE Certification — became a certified automotive professional.' },
  { year: '2019', event: 'Launched Mark Forged mobile mechanic service in the Atlanta metro area.' },
  { year: '2021', event: 'Expanded to fleet maintenance programs and commercial accounts.' },
  { year: '2023', event: 'Grew to 500+ satisfied customers with a perfect 5-star rating.' },
  { year: '2025', event: 'Continuing to serve Atlanta with certified mobile automotive excellence.' },
]

export default function About() {
  return (
    <>
      {/* Hero */}
      <section style={{ position: 'relative', padding: '7rem 1.5rem 4rem', background: '#0A0A0A', overflow: 'hidden' }}>
        <GearWatermark size={500} top="-10%" right="-100px" />
        <Sparks count={4} />
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div className="section-tag">Our Story</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.92, marginBottom: '1rem' }}>
            <span className="chrome-text">ABOUT </span>
            <span style={{ color: 'var(--brand-red)' }}>MARK FORGED</span>
          </h1>
          <p className="font-heading" style={{ color: 'var(--chrome)', fontSize: '1.125rem', maxWidth: 600, lineHeight: 1.65 }}>
            Built on passion, certified through discipline, and driven by the promise of honest, top-quality mobile automotive service.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="section" style={{ background: 'var(--surface-1)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="section-tag">Who We Are</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--foreground)', marginBottom: '1.25rem' }}>
              FORGED IN<br /><span style={{ color: 'var(--brand-red)' }}>DEDICATION</span>
            </h2>
            <p className="font-heading" style={{ color: 'var(--chrome)', lineHeight: 1.7, marginBottom: '1rem', fontSize: '0.9375rem' }}>
              Mark Forged Certified Mobile Mechanic LLC was founded on one simple belief: quality automotive service shouldn't require you to miss a day of work or spend hours in a waiting room.
            </p>
            <p className="font-heading" style={{ color: 'var(--chrome)', lineHeight: 1.7, marginBottom: '1.5rem', fontSize: '0.9375rem' }}>
              With years of hands-on experience and a deep passion for cars, our ASE-certified team brings professional-grade equipment and dealership-quality repairs directly to your home, office, or wherever your vehicle sits.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {['ASE Certified Technician', 'Fully Mobile — We Come To You', '10+ Years Automotive Experience', 'Transparent Upfront Pricing', 'All Makes & Models Serviced'].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--chrome)', fontSize: '0.875rem', fontFamily: 'Barlow, sans-serif' }}>
                  <CheckCircle size={14} style={{ color: 'var(--brand-red)', flexShrink: 0 }} /> {item}
                </div>
              ))}
            </div>
          </div>

          {/* Badges / Visual */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2rem' }}>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', justifyContent: 'center' }}>
              <ASEBadge size={120} />
              <MFBadge size={120} />
            </div>
            <div className="red-border" style={{ color: 'var(--chrome)', fontSize: '0.875rem', lineHeight: 1.7, maxWidth: 320, fontFamily: 'Barlow, sans-serif' }}>
              <strong style={{ color: '#fff', display: 'block', fontFamily: 'Bebas Neue, sans-serif', fontSize: '1.1rem', letterSpacing: '0.06em', marginBottom: '0.25rem' }}>
                OUR COMMITMENT
              </strong>
              We stand behind every repair with parts and labor warranty. If it's not done right, we'll make it right — no questions asked.
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Core Values</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--foreground)' }}>
              WHAT DRIVES US
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {VALUES.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="card" style={{ padding: '2rem', textAlign: 'center' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', margin: '0 auto 1rem',
                  background: 'rgba(204,30,30,0.1)', border: '1px solid rgba(204,30,30,0.25)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)',
                }}>
                  <Icon size={24} />
                </div>
                <h3 className="font-display" style={{ fontSize: '1.3rem', color: 'var(--foreground)', marginBottom: '0.6rem' }}>{title}</h3>
                <p className="font-heading" style={{ fontSize: '0.875rem', color: 'var(--chrome)', lineHeight: 1.6 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section" style={{ background: 'var(--surface-1)' }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-tag" style={{ justifyContent: 'center' }}>Our Journey</div>
            <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: 'var(--foreground)' }}>
              THE TIMELINE
            </h2>
          </div>
          <div style={{ position: 'relative', paddingLeft: '2.5rem' }}>
            {/* Vertical line */}
            <div style={{ position: 'absolute', left: 12, top: 0, bottom: 0, width: 2, background: 'linear-gradient(to bottom, var(--brand-red), var(--border))' }} />
            {TIMELINE.map(({ year, event }, i) => (
              <div key={year} style={{ position: 'relative', marginBottom: '2rem', paddingBottom: i < TIMELINE.length - 1 ? '0' : '0' }}>
                {/* Dot */}
                <div style={{
                  position: 'absolute', left: -30, top: 4, width: 12, height: 12,
                  borderRadius: '50%', background: 'var(--brand-red)', border: '2px solid var(--background)',
                  boxShadow: '0 0 10px rgba(204,30,30,0.4)',
                }} />
                <div className="font-display" style={{ fontSize: '1.1rem', color: 'var(--brand-red)', marginBottom: '0.25rem' }}>{year}</div>
                <p className="font-heading" style={{ fontSize: '0.9375rem', color: 'var(--chrome)', lineHeight: 1.6 }}>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'linear-gradient(135deg, #0f0a0a, #1a0505)', padding: '5rem 1.5rem', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(204,30,30,0.12) 0%, transparent 70%)' }} />
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 6vw, 4rem)', color: '#fff', marginBottom: '1rem' }}>
            READY TO EXPERIENCE<br /><span style={{ color: 'var(--brand-red)' }}>THE DIFFERENCE?</span>
          </h2>
          <p className="font-heading" style={{ color: 'var(--chrome)', maxWidth: 480, margin: '0 auto 2.5rem', lineHeight: 1.6 }}>
            Let Mark Forged handle it — certified, honest, and right at your door.
          </p>
          <Link to="/book" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2.5rem' }}>
            Book Now <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </>
  )
}
