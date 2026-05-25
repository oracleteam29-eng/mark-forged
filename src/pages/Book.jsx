import React, { useEffect, useState } from 'react'
import { PageHeader } from '../components/index.jsx'
import { BOOKABLE_SERVICES } from '../constants.js'
import { CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'

export default function Book() {
  // Set SEO tags
  useEffect(() => {
    document.title = "Book A Service | Mark Forged Certified Mobile Mechanic LLC"
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Book your mobile auto repair appointment with Mark Forged Certified Mobile Mechanic LLC. Tell us about your vehicle, location, and preferred time."
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      "Book A Service | Mark Forged Certified Mobile Mechanic LLC"
    )
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      "Book online — we confirm your appointment fast."
    )
  }, [])

  const [step, setStep] = useState(1)
  const [selectedServices, setSelectedServices] = useState([])
  const [confirmed, setConfirmed] = useState(false)

  const toggleService = (srv) => {
    setSelectedServices(prev =>
      prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]
    )
  }

  return (
    <>
      <PageHeader
        eyebrow="Schedule Your Appointment"
        title={
          <>
            <span className="chrome-text">BOOK YOUR </span>
            <span className="text-[color:var(--brand-red)] red-glow">SERVICE</span>
          </>
        }
        subtitle="Tell us about your vehicle and location — we will confirm your appointment fast."
      />

      <section className="bg-[color:var(--surface-1)] py-20">
        <div className="max-w-[800px] mx-auto px-6 md:px-10">
          
          {/* Progress Indicator */}
          {!confirmed && (
            <div className="flex items-center justify-between mb-10">
              {[1, 2, 3].map((num, idx) => (
                <div key={num} className="flex items-center flex-1">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-lg shrink-0 transition-all ${
                      step >= num
                        ? "bg-[color:var(--brand-red)] text-white red-glow-box"
                        : "bg-[color:var(--surface-2)] text-[color:var(--steel)]"
                    }`}
                  >
                    {num}
                  </div>
                  {idx < 2 && (
                    <div
                      className={`flex-1 h-0.5 mx-3 ${
                        step > num ? "bg-[color:var(--brand-red)]" : "bg-[color:var(--surface-2)]"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          {confirmed ? (
            <div className="brand-card text-center py-16">
              <CheckCircle2 size={72} className="mx-auto text-[color:var(--brand-red)] animate-bounce" />
              <h3 className="font-display text-4xl chrome-text mt-4">BOOKING CONFIRMED!</h3>
              <p className="mt-3 text-[color:var(--chrome)]">
                We will contact you shortly to finalize the details. 🛠️
              </p>
            </div>
          ) : (
            <div className="brand-card">
              
              {/* Step 1 */}
              {step === 1 && (
                <div>
                  <h3 className="font-display text-3xl text-[color:var(--brand-red)]">
                    TELL US ABOUT YOUR VEHICLE
                  </h3>
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <input type="number" placeholder="Vehicle Year" className="brand-input" />
                    <input placeholder="Make (e.g. Ford, Toyota)" className="brand-input" />
                    <input placeholder="Model" className="brand-input" />
                    <select className="brand-input">
                      <option>Approximate Mileage</option>
                      <option>Under 50k</option>
                      <option>50k–100k</option>
                      <option>100k–150k</option>
                      <option>150k+</option>
                    </select>
                  </div>

                  <div className="mt-6">
                    <p className="font-heading text-sm uppercase tracking-widest text-[color:var(--chrome)] mb-3">
                      Service Needed
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {BOOKABLE_SERVICES.map(srv => {
                        const isSelected = selectedServices.includes(srv)
                        return (
                          <button
                            key={srv}
                            type="button"
                            onClick={() => toggleService(srv)}
                            className={`px-4 py-2 rounded-full text-sm font-heading transition-colors border ${
                              isSelected
                                ? "bg-[color:var(--brand-red)] border-[color:var(--brand-red)] text-white"
                                : "bg-[color:var(--surface-2)] border-[#2A2A2A] text-[color:var(--chrome)] hover:border-[color:var(--brand-red)]"
                            }`}
                          >
                            {srv}
                          </button>
                        )
                      })}
                    </div>
                  </div>

                  <textarea
                    rows={4}
                    placeholder="Describe the issue — warning lights, sounds, behavior"
                    className="brand-input mt-6"
                  />

                  <button
                    onClick={() => setStep(2)}
                    className="btn-primary mt-6 w-full flex justify-center items-center gap-2"
                  >
                    Next Step <ArrowRight size={18} />
                  </button>
                </div>
              )}

              {/* Step 2 */}
              {step === 2 && (
                <div>
                  <h3 className="font-display text-3xl text-[color:var(--brand-red)]">
                    WHERE IS YOUR VEHICLE?
                  </h3>
                  <div className="mt-6 grid md:grid-cols-2 gap-4">
                    <input required placeholder="Your Name *" className="brand-input md:col-span-2" />
                    <input required type="tel" placeholder="Phone Number *" className="brand-input" />
                    <input type="email" placeholder="Email Address" className="brand-input" />
                    <input placeholder="Service Address — where vehicle will be" className="brand-input md:col-span-2" />
                    <input type="date" className="brand-input" />
                    <select className="brand-input">
                      <option>Preferred Time Window</option>
                      <option>Morning (7AM–12PM)</option>
                      <option>Afternoon (12PM–5PM)</option>
                      <option>Evening (5PM–8PM)</option>
                      <option>Flexible</option>
                    </select>
                    <input placeholder="Gate codes or access notes (optional)" className="brand-input md:col-span-2" />
                  </div>

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setStep(1)}
                      className="btn-secondary flex-1 flex justify-center items-center gap-2"
                    >
                      <ArrowLeft size={18} /> Back
                    </button>
                    <button
                      onClick={() => setStep(3)}
                      className="btn-primary flex-1 flex justify-center items-center gap-2"
                    >
                      Next Step <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 */}
              {step === 3 && (
                <div>
                  <h3 className="font-display text-3xl text-[color:var(--brand-red)]">
                    CONFIRM YOUR BOOKING
                  </h3>
                  <div className="mt-6 bg-[color:var(--surface-2)] border border-[#2A2A2A] rounded-md p-5">
                    <p className="text-[color:var(--chrome)] text-sm">Selected services:</p>
                    <p className="text-[color:var(--brand-red)] font-heading mt-1">
                      {selectedServices.length ? selectedServices.join(", ") : "None selected"}
                    </p>
                    <p className="text-xs text-[color:var(--steel)] mt-4">
                      We will review and call/text you to finalize the date, time, and quote.
                    </p>
                  </div>

                  <textarea
                    rows={3}
                    placeholder="Anything to add?"
                    className="brand-input mt-4"
                  />

                  <div className="mt-6 flex gap-3">
                    <button
                      onClick={() => setStep(2)}
                      className="btn-secondary flex-1 flex justify-center items-center gap-2"
                    >
                      <ArrowLeft size={18} /> Back
                    </button>
                    <button
                      onClick={() => setConfirmed(true)}
                      className="btn-primary flex-1 !text-xl !py-4"
                    >
                      Confirm Booking 🔧
                    </button>
                  </div>
                </div>
              )}

            </div>
          )}
        </div>
      </section>
    </>
  )
}
