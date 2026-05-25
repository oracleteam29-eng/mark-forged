import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { GearWatermark, Sparks, ASEBadge, MFBadge } from '../components/index.jsx'
import { SERVICES, WHY_MOBILE, TEXT_TESTIMONIALS, BRAND } from '../constants.js'
import { Shield, Check, Mail, Phone, Wrench, Calendar, CheckSquare, Facebook, Twitter, Instagram } from 'lucide-react'

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

export default function Home() {
  // Set SEO tags on mount
  useEffect(() => {
    document.title = "Mark Forged Certified Mobile Mechanic LLC | Professional Auto Repair At Your Door"
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "We bring the shop to you. ASE Certified mobile mechanic — brakes, batteries, tune-ups, engine & transmission work, all delivered to your location."
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      "Mark Forged Certified Mobile Mechanic LLC | Professional Auto Repair At Your Door"
    )
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      "ASE Certified. MF Certified. Expert repairs brought to your driveway, parking lot, or workplace."
    )
  }, [])

  return (
    <>
      {/* ── Hero Section ── */}
      <section className="relative h-screen min-h-[680px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
        {/* Video BG */}
        <video
          src="/hero-bg.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        />
        {/* Gradients */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(10,10,10,0.92) 0%, rgba(40,8,8,0.85) 60%, rgba(10,10,10,0.95) 100%)',
          }}
        />
        <div className="absolute inset-0 grease-texture" />
        <Sparks count={8} />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#141414]/80 border-l-[3px] border-[color:var(--brand-red)] rounded-sm">
            <Wrench size={14} className="text-[color:var(--gold)]" />
            <span className="font-heading text-xs tracking-widest uppercase text-[color:var(--gold)]">
              Mark Forged Certified · ASE Certified Specialist
            </span>
          </div>

          <h1
            className="font-display mt-6 leading-[0.92] text-[clamp(48px,10vw,108px)]"
            style={{ animationDelay: '0.1s' }}
          >
            <span className="chrome-text">WE BRING THE</span>{' '}
            <span className="text-[color:var(--brand-red)] red-glow">SHOP TO YOU.</span>
          </h1>

          <p
            className="mt-6 text-base md:text-lg text-[color:var(--chrome)] max-w-2xl mx-auto leading-relaxed"
            style={{ animationDelay: '0.25s' }}
          >
            No matter where you are — at home, in a parking lot, or at your workplace — Mark Forged Certified Mobile Mechanic LLC delivers expert automotive repair straight to your vehicle. Your fleet and daily drivers stay on the road.
          </p>

          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animationDelay: '0.4s' }}
          >
            <Link to="/book" className="btn-primary">
              <Calendar size={18} /> Schedule A Service
            </Link>
            <a href={`mailto:${BRAND.email}`} className="btn-secondary">
              <Mail size={18} /> Send Us A Message
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap justify-center items-center gap-x-6 gap-y-2 text-sm text-[color:var(--steel)]"
            style={{ animationDelay: '0.55s' }}
          >
            <span className="flex items-center gap-2">
              <CheckSquare size={14} className="text-[color:var(--brand-red)]" /> Transparent
            </span>
            <span className="text-[color:var(--gold)]">•</span>
            <span className="flex items-center gap-2">
              <CheckSquare size={14} className="text-[color:var(--brand-red)]" /> Dependable
            </span>
            <span className="text-[color:var(--gold)]">•</span>
            <span className="flex items-center gap-2">
              <CheckSquare size={14} className="text-[color:var(--brand-red)]" /> Skilled
            </span>
            <span className="text-[color:var(--gold)]">•</span>
            <span className="flex items-center gap-2">🛠️ ASE Certified</span>
          </div>

          <div className="absolute bottom-6 right-6 hidden md:flex flex-col gap-3">
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
      </section>

      {/* ── Services Section ── */}
      <section className="relative bg-[color:var(--surface-2)] py-24 md:py-28 overflow-hidden grease-texture">
        <GearWatermark size={500} top="5%" right="-150px" />
        <div className="relative max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="eyebrow">What We Handle</div>
            <h2 className="font-display text-4xl md:text-6xl chrome-text mt-3">
              EXPERT REPAIRS DELIVERED TO YOUR DOOR
            </h2>
            <p className="mt-4 text-[color:var(--chrome)]">
              From your driveway to your workplace — full-service auto repair, brought right to you.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map(svc => (
              <div key={svc.title} className="brand-card group !p-0 overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={svc.img}
                    alt={`${svc.title} — Mark Forged Mobile Mechanic`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(180deg, rgba(10,10,10,0) 40%, rgba(10,10,10,0.85) 100%)',
                    }}
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-[color:var(--foreground)] group-hover:text-[color:var(--brand-red)] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="mt-3 text-sm text-[color:var(--steel)] leading-relaxed">
                    {svc.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section className="relative bg-[#0A0A0A] py-24 md:py-28 overflow-hidden">
        <GearWatermark size={550} top="0" right="-200px" />
        <div className="relative max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="eyebrow">The Mobile Difference</div>
            <h2 className="font-display text-4xl md:text-6xl chrome-text mt-3 section-title-bar">
              WHY GO MOBILE? WHY MARK FORGED?
            </h2>
            <p className="mt-6 text-[color:var(--chrome)] leading-relaxed">
              Your fleet and daily drivers deserve reliable care 💯 We deliver fast, dependable mobile auto repair built to keep your vehicles on the road with minimal interruption.
            </p>
            <p className="mt-4 text-[color:var(--steel)] leading-relaxed">
              Brick-and-mortar shops mean tow trucks, rental vehicles, and wasted hours in waiting rooms. Mark Forged Certified Mobile Mechanic LLC removes all of that — we travel to your home, office, job site, or anywhere your vehicle is. Same professional repairs. Zero shop markup.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_MOBILE.map(why => (
              <div
                key={why.title}
                className="bg-[color:var(--surface-1)] border border-[#1F1F1F] border-l-4 border-l-[color:var(--brand-red)] p-5 rounded-sm"
              >
                <div className="text-2xl">{why.icon}</div>
                <div className="font-heading text-base text-[color:var(--foreground)] mt-2">
                  {why.title}
                </div>
                <div className="text-xs text-[color:var(--steel)] mt-1">{why.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3 Steps Process ── */}
      <section className="relative bg-[color:var(--surface-2)] py-24 md:py-28 grease-texture">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <div className="eyebrow">How It Works</div>
          <h2 className="font-display text-4xl md:text-6xl chrome-text mt-3">3 SIMPLE STEPS</h2>
          <div className="mt-14 grid md:grid-cols-3 gap-8 relative">
            {[
              {
                n: 1,
                icon: '📞',
                title: 'Reach Out',
                desc: 'Call, text, or book online. Tell us about your vehicle issue and where you are. We get back to you fast.',
              },
              {
                n: 2,
                icon: '🚐',
                title: 'We Show Up',
                desc: 'We drive directly to your vehicle, equipped with all the tools and components needed for the job.',
              },
              {
                n: 3,
                icon: '✅',
                title: 'Back On The Road',
                desc: 'Professional repair completed on the spot. Your vehicle runs again — exactly where you need it.',
              },
            ].map(step => (
              <div key={step.n} className="relative">
                <div className="w-16 h-16 mx-auto rounded-full bg-[color:var(--brand-red)] flex items-center justify-center font-display text-3xl text-white red-glow-box">
                  {step.n}
                </div>
                <div className="text-3xl mt-5">{step.icon}</div>
                <h3 className="font-heading text-xl text-[color:var(--foreground)] mt-3">
                  {step.title}
                </h3>
                <p className="text-sm text-[color:var(--steel)] mt-2 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Credentials ── */}
      <section className="bg-[#0A0A0A] py-24 md:py-28 relative overflow-hidden">
        <GearWatermark size={600} top="-100px" right="-200px" />
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 text-center">
          <div className="eyebrow">Professional Credentials</div>
          <h2 className="font-display text-4xl md:text-6xl chrome-text mt-3">
            CERTIFIED. SKILLED. TRUSTED.
          </h2>
          <div className="mt-12 flex flex-wrap justify-center items-center gap-12">
            <div
              className="flex flex-col items-center"
              style={{ filter: 'drop-shadow(0 0 25px rgba(232,200,75,0.35))' }}
            >
              <ASEBadge size={140} />
              <div className="mt-3 font-heading text-sm text-[color:var(--gold)]">
                ASE CERTIFIED
              </div>
            </div>
            <div
              className="flex flex-col items-center"
              style={{ filter: 'drop-shadow(0 0 25px rgba(204,30,30,0.4))' }}
            >
              <MFBadge size={140} />
              <div className="mt-3 font-heading text-sm text-[color:var(--brand-red)]">
                MARK FORGED SPECIALIST
              </div>
            </div>
          </div>
          <p className="mt-10 max-w-3xl mx-auto text-[color:var(--chrome)] leading-relaxed">
            Lead Specialist Jay Melvin Thomas carries ASE certification — the automotive industry's benchmark for service excellence — along with Mark Forged Certified Mobile Automotive Specialist credentials. When you schedule with Mark Forged Certified Mobile Mechanic LLC, you're getting a professionally trained, certified technician — not just someone with a toolbox. 🛠️
          </p>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section className="bg-[color:var(--surface-1)] py-24 md:py-28">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center">
            <div className="eyebrow">What Clients Say</div>
            <h2 className="font-display text-4xl md:text-6xl chrome-text mt-3">
              TRANSPARENT. DEPENDABLE. SKILLED.
            </h2>
          </div>
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {TEXT_TESTIMONIALS.map(t => (
              <div key={t.name} className="brand-card relative">
                <div className="absolute top-3 right-5 text-6xl text-[color:var(--dark-steel)] font-display leading-none">
                  "
                </div>
                <div className="flex gap-0.5 text-[color:var(--gold)]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <span key={idx} style={{ color: 'var(--gold)' }}>★</span>
                  ))}
                </div>
                <p className="mt-4 text-[color:var(--chrome)] text-sm leading-relaxed">
                  {t.quote}
                </p>
                <div className="mt-5 pt-4 border-t border-[#1F1F1F]">
                  <div className="font-heading text-[color:var(--foreground)]">{t.name}</div>
                  <div className="text-xs text-[color:var(--steel)]">{t.source}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Band ── */}
      <section
        className="relative py-24 md:py-32 overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #CC1E1E 0%, #8B1010 60%, #2A0808 100%)',
        }}
      >
        <Sparks count={6} />
        <div className="relative max-w-[1100px] mx-auto px-6 md:px-10 text-center text-white">
          <h2 className="font-display text-5xl md:text-7xl">NO MATTER WHERE YOU ARE.</h2>
          <h3 className="font-display text-3xl md:text-5xl mt-2 opacity-95">WE BRING THE SHOP TO YOU.</h3>
          <p className="mt-6 max-w-2xl mx-auto text-white/90 leading-relaxed">
            Skip the tow truck. Don't take time off work. Forget about sitting in a waiting room. Mark Forged Certified Mobile Mechanic LLC delivers professional auto repair straight to your vehicle.
          </p>
          <p className="mt-3 text-white/80 text-sm">📧 {BRAND.email}</p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/book"
              className="inline-flex items-center justify-center gap-2 bg-[#0A0A0A] text-white font-display text-lg px-9 py-4 rounded-sm hover:bg-black transition-colors"
            >
              Schedule A Service →
            </Link>
            <a
              href={`mailto:${BRAND.email}`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white font-display text-lg px-9 py-3.5 rounded-sm hover:bg-white hover:text-[color:var(--brand-red)] transition-colors"
            >
              Send A Message
            </a>
          </div>
          <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-white/80">
            <span className="flex items-center gap-2">🚐 Mobile Service</span>
            <span className="flex items-center gap-2">⏱️ Open 6 Days</span>
            <span className="flex items-center gap-2">🛠️ ASE Certified</span>
          </div>
        </div>
      </section>
    </>
  )
}
