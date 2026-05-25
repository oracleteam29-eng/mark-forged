import React, { useEffect, useState } from 'react'
import { PageHeader } from '../components/index.jsx'
import { FAQS } from '../constants.js'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  // Set SEO tags
  useEffect(() => {
    document.title = "FAQ | Mark Forged Certified Mobile Mechanic LLC"
    document.querySelector('meta[name="description"]')?.setAttribute(
      "content",
      "Common questions about mobile auto repair, certifications, service areas, fleet service, and booking with Mark Forged Certified Mobile Mechanic LLC."
    )
    document.querySelector('meta[property="og:title"]')?.setAttribute(
      "content",
      "FAQ — Mark Forged Certified Mobile Mechanic LLC"
    )
    document.querySelector('meta[property="og:description"]')?.setAttribute(
      "content",
      "Everything you need to know about mobile auto repair with Mark Forged Certified Mobile Mechanic LLC."
    )
  }, [])

  const [openIdx, setOpenIdx] = useState(0)

  return (
    <>
      <PageHeader
        eyebrow="Common Questions"
        title={
          <>
            <span className="chrome-text">FREQUENTLY ASKED </span>
            <span className="text-[color:var(--brand-red)] red-glow">QUESTIONS</span>
          </>
        }
        subtitle="Everything you need to know about Mark Forged Certified Mobile Mechanic LLC."
      />

      <section className="bg-[color:var(--surface-1)] py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-10 space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIdx === idx
            return (
              <div
                key={faq.q}
                className={`bg-[color:var(--surface-2)] rounded-md overflow-hidden transition-all border-l-4 ${
                  isOpen ? "border-[color:var(--brand-red)]" : "border-transparent"
                }`}
              >
                <button
                  onClick={() => setOpenIdx(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between text-left p-5 hover:bg-[color:var(--surface-3)] transition-colors"
                >
                  <span className="font-heading text-base md:text-lg text-[color:var(--foreground)] pr-4">
                    {faq.q}
                  </span>
                  <ChevronDown
                    size={22}
                    className={`text-[color:var(--brand-red)] shrink-0 transition-transform ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <div
                  className="grid transition-all duration-300 ease-in-out"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-[color:var(--chrome)] leading-relaxed text-sm">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}
