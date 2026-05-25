import React, { useEffect, useState } from 'react'
import { PageHeader } from '../components/index.jsx'
import { PORTFOLIO_GALLERY, PORTFOLIO_CATEGORIES, BEFORE_AFTER, BRAND } from '../constants.js'
import { Instagram, Facebook, Twitter } from 'lucide-react'

export default function Portfolio() {
  // Set SEO tags
  useEffect(() => {
    document.title = "Portfolio | Mark Forged Certified Mobile Mechanic LLC | Actual Mobile Repairs"
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Actual mobile auto repairs at client locations. Brakes, batteries, engines, transmissions — repaired on-site by Mark Forged Certified Mobile Mechanic LLC."
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      "Portfolio of Actual Mobile Repairs | Mark Forged Certified Mobile Mechanic"
    )
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      "500+ vehicles repaired. ASE Certified. Genuine before & after documentation."
    )
  }, [])

  const [activeCat, setActiveCat] = useState("All")

  const filteredGallery = activeCat === "All"
    ? PORTFOLIO_GALLERY
    : PORTFOLIO_GALLERY.filter(item => item.cat === activeCat)

  return (
    <>
      <PageHeader
        eyebrow="Actual Jobs · Actual Clients"
        title={
          <>
            <span className="chrome-text">OUR </span>
            <span className="text-[color:var(--brand-red)] red-glow">WORK</span>
          </>
        }
        subtitle="Genuine repairs. Proven results. Real clients — served at their location."
      />

      {/* Red badge bar */}
      <section className="py-8" style={{ background: "linear-gradient(90deg, #8B1010, #CC1E1E, #8B1010)" }}>
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 text-center text-white font-heading text-sm md:text-base tracking-widest uppercase">
          500+ Vehicles Repaired · ASE Certified · Fully Mobile · Mark Forged Specialist
        </div>
      </section>

      {/* Category filters */}
      <section className="bg-[#0A0A0A] pt-14">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10 flex flex-wrap gap-3 justify-center">
          {PORTFOLIO_CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-5 py-2 rounded-sm font-heading text-sm uppercase tracking-widest transition-colors ${
                activeCat === cat
                  ? "bg-[color:var(--brand-red)] text-white"
                  : "bg-[color:var(--surface-1)] text-[color:var(--chrome)] hover:bg-[color:var(--surface-2)]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Before & After section */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center">
            <div className="eyebrow">Before & After</div>
            <h2 className="font-display text-3xl md:text-5xl chrome-text mt-3">
              RESULTS THAT SPEAK FOR THEMSELVES
            </h2>
          </div>

          <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {BEFORE_AFTER.map(item => (
              <div key={item.label} className="brand-card !p-3">
                <div className="grid grid-cols-2 gap-2">
                  {/* Before */}
                  <div
                    className="relative aspect-square rounded-sm overflow-hidden"
                    style={{ background: "linear-gradient(135deg, #2a2a2a, #0A0A0A)" }}
                  >
                    {item.before ? (
                      <img
                        src={item.before}
                        alt={`${item.label} — before`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 grease-texture" />
                    )}
                    <span className="absolute top-2 left-2 bg-[color:var(--brand-red)] text-white text-[10px] font-heading px-2 py-0.5 rounded-sm uppercase z-10">
                      Before
                    </span>
                  </div>

                  {/* After */}
                  <div
                    className="relative aspect-square rounded-sm overflow-hidden"
                    style={{
                      background: "linear-gradient(135deg, #1A1A1A, #0A0A0A)",
                      boxShadow: "inset 0 0 20px rgba(204,30,30,0.2)",
                    }}
                  >
                    {item.after ? (
                      <img
                        src={item.after}
                        alt={`${item.label} — after`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 grease-texture" />
                    )}
                    <span className="absolute top-2 left-2 bg-emerald-600 text-white text-[10px] font-heading px-2 py-0.5 rounded-sm uppercase z-10">
                      After
                    </span>
                  </div>
                </div>

                <div className="text-center text-xs text-[color:var(--chrome)] uppercase tracking-widest mt-3 font-heading">
                  {item.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Gallery Section */}
      <section className="bg-[color:var(--surface-1)] py-16">
        <div className="max-w-[1300px] mx-auto px-6 md:px-10">
          <div className="text-center mb-10">
            <div className="eyebrow">Live Gallery</div>
            <h2 className="font-display text-3xl md:text-5xl chrome-text mt-3">
              STRAIGHT FROM THE FIELD
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {filteredGallery.map((item, idx) => (
              <div
                key={idx}
                className="group relative overflow-hidden rounded-md border border-[#1F1F1F] bg-black aspect-[4/5]"
              >
                <img
                  src={item.src}
                  alt={`${item.label} — Mark Forged Certified Mobile Mechanic`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/65 transition-colors flex items-end p-4">
                  <div>
                    <div className="text-[color:var(--brand-red)] font-heading text-[10px] uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                      Mark Forged Mobile Mechanic
                    </div>
                    <div className="font-display text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Follow section */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div
            className="brand-card text-center"
            style={{
              borderColor: "var(--brand-red)",
              boxShadow: "0 0 40px rgba(204,30,30,0.25)",
            }}
          >
            <h3 className="font-display text-3xl chrome-text">📸 STAY CONNECTED</h3>
            <p className="mt-3 text-[color:var(--chrome)]">
              See real jobs, on-location repairs, and before/after documentation.
            </p>
            <div className="mt-6 flex justify-center gap-4">
              <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="btn-primary">
                <Instagram size={18} /> Visit Instagram
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-5 text-[color:var(--chrome)]">
              <a href={BRAND.social.facebook} target="_blank" rel="noreferrer" className="hover:text-[color:var(--brand-red)]">
                <Facebook size={22} />
              </a>
              <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" className="hover:text-[color:var(--brand-red)]">
                <Twitter size={22} />
              </a>
              <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="hover:text-[color:var(--brand-red)]">
                <Instagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
