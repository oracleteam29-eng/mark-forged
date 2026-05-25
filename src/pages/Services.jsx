import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/index.jsx'
import { DETAILED_SERVICES, BRAND } from '../constants.js'
import { Check } from 'lucide-react'

export default function Services() {
  // Set SEO tags
  useEffect(() => {
    document.title = "Services | Mark Forged Certified Mobile Mechanic LLC | Mobile Auto Repair"
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Brakes, batteries, tune-ups, engine, transmission, and beyond — comprehensive mobile auto repair delivered to your location by an ASE Certified specialist."
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      "Mobile Auto Repair Services | Mark Forged Certified Mobile Mechanic LLC"
    )
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      "Professional mobile mechanic services. Brakes, electrical, tune-ups, engine, transmission — all at your location."
    )
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Our Capabilities"
        title={
          <>
            <span className="chrome-text">OUR </span>
            <span className="text-[color:var(--brand-red)] red-glow">SERVICES</span>
          </>
        }
        subtitle="Professional mobile auto repair — brought to your location by a Mark Forged Certified Specialist."
      />

      {/* Intro section */}
      <section className="bg-[color:var(--surface-2)] py-16 grease-texture">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <p className="text-[color:var(--chrome)] leading-relaxed text-lg">
            Mark Forged Certified Mobile Mechanic LLC brings complete auto shop capability directly to your vehicle — at your home, workplace, parking garage, or job site. Every service below is performed on-site.{' '}
            <span className="text-[color:var(--brand-red)] font-heading">
              No towing. No waiting area. No compromises.
            </span>
          </p>
        </div>
      </section>

      {/* Services Grid/Sections list */}
      {DETAILED_SERVICES.map((svc, sIdx) => (
        <section
          key={svc.title}
          className={`py-20 md:py-24 ${sIdx % 2 === 0 ? 'bg-[#0A0A0A]' : 'bg-[color:var(--surface-1)]'}`}
        >
          <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className={sIdx % 2 === 1 ? 'lg:order-2' : ''}>
              <div className="eyebrow">Service {String(sIdx + 1).padStart(2, '0')}</div>
              <h2 className="font-display text-3xl md:text-5xl chrome-text mt-3 section-title-bar">
                {svc.title}
              </h2>
              <p className="mt-6 text-[color:var(--chrome)] leading-relaxed">
                {svc.body}
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-x-6 gap-y-2">
                {svc.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-[color:var(--steel)]">
                    <Check size={16} className="text-[color:var(--brand-red)] mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className={`relative ${sIdx % 2 === 1 ? 'lg:order-1' : ''}`}>
              <div
                className="relative rounded-lg overflow-hidden border border-[#1F1F1F]"
                style={{
                  boxShadow: '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(204,30,30,0.15)',
                }}
              >
                <img
                  src={svc.image}
                  alt={`${svc.title} — Mark Forged Mobile Mechanic at work`}
                  className="w-full h-[400px] object-cover"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(135deg, rgba(10,10,10,0.4), transparent 40%, rgba(204,30,30,0.18))',
                  }}
                />
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Fleet CTA Section */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #8B1010 0%, #1A0606 100%)',
        }}
      >
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center text-white">
          <h3 className="font-display text-3xl md:text-5xl">FLEET & COMMERCIAL VEHICLES</h3>
          <p className="mt-5 text-white/90 leading-relaxed">
            Keep your fleet and everyday vehicles running at peak performance 💯 Mark Forged Certified Mobile Mechanic LLC provides fleet maintenance programs for businesses and contractors. Reduce vehicle downtime with scheduled on-location service — we come to your lot.
          </p>
          <Link to="/contact" className="btn-primary mt-7 !bg-black hover:!bg-[#1A1A1A]">
            Ask About Fleet Service
          </Link>
        </div>
      </section>
    </>
  )
}
