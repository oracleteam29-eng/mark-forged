import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader, GearWatermark, ASEBadge, MFBadge } from '../components/index.jsx'
import { VALUES, WHY_CHOOSE_US, BRAND } from '../constants.js'
import { Mail, Facebook, Twitter, Instagram } from 'lucide-react'

// ── IntersectionObserver Counter Component ───────────────────
function Counter({ to, suffix = "" }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        const start = performance.now()
        const duration = 1800
        const tick = now => {
          const progress = Math.min(1, (now - start) / duration)
          setCount(Math.round(progress * to))
          if (progress < 1) {
            requestAnimationFrame(tick)
          }
        }
        requestAnimationFrame(tick)
        obs.disconnect()
      }
    }, { threshold: 0.4 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [to])

  return (
    <div ref={ref} className="font-display text-5xl md:text-6xl text-[color:var(--brand-red)] red-glow">
      {count}{suffix}
    </div>
  )
}

export default function About() {
  // Set SEO tags
  useEffect(() => {
    document.title = "About MARK DERRICK | Mark Forged Certified Mobile Mechanic LLC"
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Get to know MARK DERRICK — Mark Forged Certified Mobile Auto Repair Specialist & ASE Certified technician. Transparent, dependable, skilled mobile auto repair."
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      "About Mark Forged Certified Mobile Mechanic LLC | MARK DERRICK"
    )
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      "ASE Certified mobile mechanic. Transparent. Dependable. Skilled. We bring the shop to you."
    )
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="The Person Behind The Tools"
        title={
          <>
            <span className="chrome-text">ABOUT </span>
            <span className="text-[color:var(--brand-red)] red-glow">MARK FORGED</span>
          </>
        }
        subtitle="Mark Forged Certified · ASE Certified · Professional Mobile Auto Repair Specialist"
      />

      {/* Story Section */}
      <section className="bg-[color:var(--surface-1)] py-24 relative overflow-hidden">
        <GearWatermark size={500} top="-100px" right="-150px" />
        <div className="relative max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow">Our Background</div>
            <h2 className="font-display text-4xl md:text-5xl text-[color:var(--brand-red)] mt-3 section-title-bar">
              EXPERT REPAIRS AT YOUR DOORSTEP
            </h2>
            <div className="mt-6 space-y-4 text-[color:var(--chrome)] leading-relaxed">
              <p>
                Mark Forged Certified Mobile Mechanic LLC was founded on a straightforward but compelling concept: getting your vehicle repaired shouldn't mean taking a day off, calling a tow truck, or burning hours in a waiting area.
              </p>
              <p>
                Lead Specialist MARK DERRICK is an ASE certified technician with extensive knowledge across all major vehicle systems. Whether you own a personal car or manage an entire fleet, we deliver the same professional tools, diagnostics, and repair expertise you'd find at a full-service garage — brought directly to wherever your vehicle is located.
              </p>
              <p className="text-[color:var(--gold)] font-heading">
                No matter where you are, we bring the shop to you 🧰
              </p>
              <p>
                That's not just a slogan — it's our entire business model. We've helped hundreds of vehicle owners avoid expensive tows, inflated shop markups, and the hassle of car problems disrupting their daily lives.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-lg overflow-hidden border-2 border-[color:var(--brand-red)] red-glow-box">
              <img
                src="/assets/fb1.jpg"
                alt="Mark Forged — ASE Certified Mobile Mechanic"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Credentials Section */}
      <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <div className="eyebrow">Qualifications</div>
          <h2 className="font-display text-4xl md:text-6xl chrome-text mt-3">DUAL CERTIFIED</h2>
          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <div className="brand-card flex flex-col items-center text-center">
              <div style={{ filter: 'drop-shadow(0 0 20px rgba(232,200,75,0.4))' }}>
                <ASEBadge size={130} />
              </div>
              <h3 className="font-heading text-xl text-[color:var(--gold)] mt-5">ASE CERTIFIED</h3>
              <p className="mt-3 text-sm text-[color:var(--chrome)] leading-relaxed">
                ASE (Automotive Service Excellence) certification represents the gold standard in the automotive world. MARK DERRICK has successfully completed ASE's demanding exams to earn this credential — demonstrating professional competence across all automotive systems.
              </p>
            </div>

            <div className="brand-card flex flex-col items-center text-center">
              <div style={{ filter: 'drop-shadow(0 0 20px rgba(204,30,30,0.5))' }}>
                <MFBadge size={130} />
              </div>
              <h3 className="font-heading text-xl text-[color:var(--brand-red)] mt-5">MARK FORGED CERTIFIED</h3>
              <p className="mt-3 text-sm text-[color:var(--chrome)] leading-relaxed">
                Mark Forged Certified Mobile Automotive Specialist — a focused certification recognizing mastery of mobile auto repair methods, on-location diagnostic techniques, and fleet maintenance procedures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        className="py-24 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8B1010 0%, #1A0606 60%, #0A0A0A 100%)',
        }}
      >
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="text-center text-white">
            <div className="eyebrow text-[color:var(--gold)]">What Drives Us</div>
            <h2 className="font-display text-4xl md:text-6xl mt-3">OUR PURPOSE</h2>
            <p className="mt-5 max-w-2xl mx-auto text-white/90 italic text-lg">
              "To deliver fast, dependable, mobile auto repair that keeps your vehicles running — no matter where you are."
            </p>
          </div>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {VALUES.map(val => (
              <div key={val.title} className="bg-[#0A0A0A] border-l-4 border-[color:var(--brand-red)] p-5 rounded-sm">
                <div className="text-2xl">{val.icon}</div>
                <h4 className="font-heading text-lg text-[color:var(--foreground)] mt-2">{val.title}</h4>
                <p className="text-sm text-[color:var(--steel)] mt-1">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { to: 500, suffix: '+', label: 'Vehicles Repaired' },
            { to: 100, suffix: '%', label: 'Fully Mobile — We Travel To You' },
            { to: 2, suffix: '', label: 'Certifications (ASE + MF)' },
            { to: 0, suffix: '', label: 'Tow Trucks Needed' },
          ].map(stat => (
            <div key={stat.label}>
              <Counter to={stat.to} suffix={stat.suffix} />
              <div className="mt-2 text-xs text-[color:var(--chrome)] uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Owner Section */}
      <section className="bg-[color:var(--surface-1)] py-24">
        <div className="max-w-[1000px] mx-auto px-6 md:px-10">
          <div className="brand-card">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="rounded-md overflow-hidden border border-[color:var(--brand-red)]/50">
                  <img
                    src="/assets/jay-owner.png"
                    alt="MARK DERRICK, Lead Technician"
                    className="w-full h-72 object-cover object-top"
                  />
                </div>
              </div>
              <div className="md:col-span-2">
                <div className="eyebrow">The Specialist</div>
                <h3 className="font-display text-4xl chrome-text mt-2">MARK DERRICK</h3>
                <p className="text-[color:var(--gold)] font-heading mt-1">Lead Specialist & Technician</p>
                <p className="text-xs text-[color:var(--steel)] uppercase tracking-widest mt-1">
                  Mark Forged Certified · ASE Certified
                </p>
                <p className="mt-5 text-[color:var(--chrome)] leading-relaxed">
                  We created this business to offer people a better alternative. A certified mechanic who travels to you, provides an upfront quote, and gets it right the first time. No shop politics. No unnecessary add-ons. Just expert auto repair at your doorstep.
                </p>
                <div className="mt-5 flex flex-wrap gap-4 text-sm">
                  <a href={`mailto:${BRAND.email}`} className="flex items-center gap-2 text-[color:var(--chrome)] hover:text-[color:var(--brand-red)]">
                    📧 {BRAND.email}
                  </a>
                </div>
                <div className="mt-3 flex gap-4">
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
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[color:var(--surface-2)] py-24 grease-texture">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center">
            <div className="eyebrow">The Mark Forged Advantage</div>
            <h2 className="font-display text-4xl md:text-6xl chrome-text mt-3">
              WHY PICK MARK FORGED
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WHY_CHOOSE_US.map(item => (
              <div key={item.title} className="brand-card">
                <div className="text-3xl">{item.icon}</div>
                <h3 className="font-heading text-lg text-[color:var(--foreground)] mt-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[color:var(--steel)] mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
