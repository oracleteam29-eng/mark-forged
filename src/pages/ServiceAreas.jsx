import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PageHeader } from '../components/index.jsx'
import { BRAND } from '../constants.js'
import { Home as HomeIcon, Building2, AlertTriangle, HelpCircle } from 'lucide-react'

export default function ServiceAreas() {
  // Set SEO tags
  useEffect(() => {
    document.title = "Service Areas | Mark Forged Certified Mobile Mechanic LLC"
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Mark Forged Certified Mobile Mechanic LLC covers a broad area for mobile auto repair. Residential, commercial, and on-site emergency service available."
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      "Service Areas | Mark Forged Certified Mobile Mechanic LLC"
    )
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      "No matter where you are, we travel to you. Residential, commercial, and emergency mobile mechanic coverage."
    )
  }, [])

  return (
    <>
      <PageHeader
        eyebrow="Our Reach"
        title={
          <>
            <span className="chrome-text">WHERE WE </span>
            <span className="text-[color:var(--brand-red)] red-glow">OPERATE</span>
          </>
        }
        subtitle="Mark Forged Certified Mobile Mechanic LLC travels to your location — wherever that may be."
      />

      {/* Intro text */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 text-center">
          <p className="text-lg text-[color:var(--chrome)] leading-relaxed">
            No matter where you are, we bring the shop to you 🧰 Mark Forged Certified Mobile Mechanic LLC covers a wide service radius for all mobile auto repair needs. Not sure if we reach your area? Just drop us an email or message — we'll confirm right away.
          </p>
        </div>
      </section>

      {/* Card info section */}
      <section className="bg-[color:var(--surface-1)] py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div
            className="brand-card text-center"
            style={{
              borderColor: "var(--brand-red)",
              boxShadow: "0 0 40px rgba(204,30,30,0.2)",
            }}
          >
            <h2 className="font-display text-3xl md:text-5xl chrome-text">
              MOBILE SERVICE — WE DRIVE TO YOU
            </h2>
            <p className="mt-5 max-w-3xl mx-auto text-[color:var(--chrome)] leading-relaxed">
              Unlike a traditional garage, Mark Forged Certified Mobile Mechanic LLC isn't anchored to one spot. We deliver professional auto repair directly to your address. Our coverage includes residential streets, commercial properties, parking structures, job sites, and fleet depots.
            </p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <HomeIcon className="text-[color:var(--brand-red)]" size={28} />,
                title: "Home & Residential",
                desc: "Your driveway, apartment lot, neighborhood street."
              },
              {
                icon: <Building2 className="text-[color:var(--brand-red)]" size={28} />,
                title: "Business & Commercial",
                desc: "Office parking, business lots, fleet facilities."
              },
              {
                icon: <AlertTriangle className="text-[color:var(--brand-red)]" size={28} />,
                title: "Roadside & Emergency",
                desc: "Vehicle broke down? We travel to your breakdown spot."
              }
            ].map(item => (
              <div key={item.title} className="brand-card">
                {item.icon}
                <h3 className="font-heading text-lg text-[color:var(--foreground)] mt-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[color:var(--steel)] mt-2">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-[color:var(--steel)]">
            Reach out directly at{" "}
            <a href={`mailto:${BRAND.email}`} className="text-[color:var(--brand-red)] hover:underline">
              {BRAND.email}
            </a>
            {" "}or through social media to verify coverage for your specific location. We serve an extensive area and can frequently accommodate requests beyond our standard range.
          </p>
        </div>
      </section>

      {/* Fleet Banner */}
      <section className="bg-[#0A0A0A] py-16">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="bg-[color:var(--surface-1)] border-l-4 border-[color:var(--gold)] p-7 rounded-sm flex items-start gap-4">
            <Building2 className="text-[color:var(--gold)] shrink-0 mt-1" size={28} />
            <div>
              <h3 className="font-heading text-xl text-[color:var(--gold)]">FLEET ACCOUNTS</h3>
              <p className="text-[color:var(--chrome)] mt-2 leading-relaxed">
                We arrange recurring on-site maintenance for commercial fleets, cutting vehicle downtime across your entire operation at your premises.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Map Section */}
      <section className="bg-[color:var(--surface-2)] py-20">
        <div className="max-w-[1100px] mx-auto px-6 md:px-10">
          <div className="text-center">
            <div className="eyebrow">Service Map</div>
            <h2 className="font-display text-3xl md:text-5xl chrome-text mt-3">
              YOUR ADDRESS = OUR WORKSHOP
            </h2>
          </div>
          <div className="mt-10 rounded-lg overflow-hidden border border-[#1F1F1F]">
            <iframe
              title="Mark Forged Mobile Service Area"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6857811!2d-84.5!3d34.9!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDAwJzAwLjAiTiA4NMKwMDAnMDAuMCJX!5e0!3m2!1sen!2sus!4v1700000000000"
              width="100%"
              height="380"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.7)" }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="py-20"
        style={{
          background: 'linear-gradient(135deg, #8B1010 0%, #1A0606 100%)',
        }}
      >
        <div className="max-w-[800px] mx-auto px-6 md:px-10 text-center text-white">
          <h3 className="font-display text-3xl md:text-5xl">UNSURE IF WE REACH YOU?</h3>
          <p className="mt-4 text-white/90">
            Drop us a message — we'll verify your area instantly.
          </p>
          <Link to="/contact" className="btn-primary mt-7 !bg-black hover:!bg-[#1A1A1A]">
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  )
}
