import React, { useEffect, useState } from 'react'
import { PageHeader, ASEBadge, MFBadge } from '../components/index.jsx'
import { BRAND } from '../constants.js'
import { Mail, Facebook, Twitter, Instagram, Send, CheckCircle2 } from 'lucide-react'

export default function Contact() {
  // Set SEO tags
  useEffect(() => {
    document.title = "Contact | Mark Forged Certified Mobile Mechanic LLC | Mobile Auto Repair"
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Contact Mark Forged Certified Mobile Mechanic LLC. Call, text, email, or book online for fast, reliable mobile auto repair."
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      "Contact Mark Forged Certified Mobile Mechanic LLC"
    )
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      "Reach us directly via email, Facebook, X, or Instagram. We come to you."
    )
  }, [])

  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
    }, 800)
  }

  return (
    <>
      <PageHeader
        eyebrow="Get In Touch"
        title={
          <>
            <span className="chrome-text">CONTACT </span>
            <span className="text-[color:var(--brand-red)] red-glow">MARK FORGED</span>
          </>
        }
        subtitle="Call, text, email, or book online — we respond fast."
      />

      <section className="bg-[color:var(--surface-1)] py-20">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 grid lg:grid-cols-5 gap-10">
          
          {/* Form Column */}
          <div className="lg:col-span-3">
            <div className="brand-card">
              <div className="eyebrow">Get In Touch</div>
              <h2 className="font-display text-3xl md:text-4xl text-[color:var(--brand-red)] mt-2">
                SEND A REQUEST
              </h2>

              {submitted ? (
                <div className="py-16 text-center">
                  <CheckCircle2 size={64} className="mx-auto text-[color:var(--brand-red)] animate-bounce" />
                  <h3 className="font-display text-3xl chrome-text mt-4">REQUEST RECEIVED!</h3>
                  <p className="mt-2 text-[color:var(--chrome)]">
                    We will respond shortly. 🛠️
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required placeholder="First Name *" className="brand-input" type="text" />
                  <input required placeholder="Last Name *" className="brand-input" type="text" />
                  <input required type="tel" placeholder="Phone Number *" className="brand-input md:col-span-2" />
                  <input type="email" placeholder="Email Address" className="brand-input md:col-span-2" />
                  <input placeholder="Vehicle Info — Year, Make, Model, Mileage" className="brand-input md:col-span-2" />
                  
                  <select className="brand-input md:col-span-2">
                    <option>Service Needed</option>
                    <option>Brake Systems & Suspension</option>
                    <option>Batteries / Starters / Alternators</option>
                    <option>Tune-Up & Maintenance</option>
                    <option>Engine Work</option>
                    <option>Transmission Work</option>
                    <option>Electrical Diagnostics</option>
                    <option>Fleet Service</option>
                    <option>Pre-Purchase Inspection</option>
                    <option>Not Sure — Need Diagnostics</option>
                    <option>Other</option>
                  </select>

                  <input placeholder="Your Location — Address or general area" className="brand-input md:col-span-2" />
                  <textarea rows={4} placeholder="Describe the problem — warning lights, sounds, behavior" className="brand-input md:col-span-2" />
                  
                  <select className="brand-input">
                    <option>When do you need service?</option>
                    <option>ASAP</option>
                    <option>Today</option>
                    <option>This Week</option>
                    <option>This Month</option>
                    <option>Just Getting Info</option>
                  </select>

                  <select className="brand-input">
                    <option>How did you find us?</option>
                    <option>Google</option>
                    <option>Instagram</option>
                    <option>Facebook</option>
                    <option>Twitter / X</option>
                    <option>Referral</option>
                    <option>Other</option>
                  </select>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary md:col-span-2 !text-xl !py-4 flex justify-center items-center gap-2"
                  >
                    {loading ? (
                      <span className="spin-slow inline-block w-5 h-5 border-2 border-white/30 border-t-white rounded-full" />
                    ) : (
                      <>Send My Request 🔧</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Side Info Column */}
          <div className="lg:col-span-2 space-y-5">
            <div className="brand-card">
              <h3 className="font-display text-2xl chrome-text">DIRECT CONTACT</h3>
              <ul className="mt-5 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <Mail size={18} className="text-[color:var(--brand-red)] mt-0.5" />
                  <a href={`mailto:${BRAND.email}`} className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)] break-all">
                    {BRAND.email}
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Facebook size={18} className="text-[color:var(--brand-red)] mt-0.5" />
                  <a href={BRAND.social.facebook} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)]">
                    Mark Forged Certified Mobile Mechanic LLC
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Twitter size={18} className="text-[color:var(--brand-red)] mt-0.5" />
                  <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)]">
                    @MarkForged_LLC
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Instagram size={18} className="text-[color:var(--brand-red)] mt-0.5" />
                  <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="text-[color:var(--chrome)] hover:text-[color:var(--brand-red)]">
                    @MarkForged_LLC
                  </a>
                </li>
              </ul>
              <p className="mt-5 text-xs text-[color:var(--steel)] uppercase tracking-widest">
                Available 6 Days · Mobile Response
              </p>
            </div>

            <div className="rounded-md p-5 border-l-4 border-[color:var(--brand-red)] bg-[color:var(--surface-1)]">
              <p className="text-sm text-[color:var(--chrome)]">
                <span className="text-[color:var(--brand-red)] font-heading">⚡ FASTEST RESPONSE:</span> Message us on Facebook or Instagram for quick replies and photo-based diagnostics.
              </p>
            </div>

            <div className="rounded-md p-5 border-l-4 border-[color:var(--gold)] bg-[color:var(--surface-1)]">
              <p className="text-sm text-[color:var(--chrome)]">
                <span className="text-[color:var(--gold)] font-heading">🛠️ FLEET CLIENTS:</span> Email for fleet maintenance inquiries and scheduled service programs.
              </p>
            </div>

            <div className="brand-card flex items-center justify-around gap-4">
              <div style={{ filter: 'drop-shadow(0 0 12px rgba(232,200,75,0.4))' }}>
                <ASEBadge size={86} />
              </div>
              <div style={{ filter: 'drop-shadow(0 0 12px rgba(204,30,30,0.4))' }}>
                <MFBadge size={86} />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
