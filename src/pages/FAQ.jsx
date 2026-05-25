import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GearWatermark, Sparks } from '../components/index.jsx'
import { FAQS, BRAND } from '../constants.js'
import { ChevronDown, HelpCircle, Phone, Mail, ArrowRight, MessageSquare } from 'lucide-react'

function AccordionItem({ question, answer, isOpen, onToggle }) {
  return (
    <div className="faq-item" style={{ marginBottom: '1rem', borderColor: isOpen ? 'var(--brand-red)' : 'var(--border)', transition: 'all 0.25s ease' }}>
      <button
        className="faq-question"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          textAlign: 'left',
          background: isOpen ? 'rgba(204,30,30,0.03)' : 'none',
          padding: '1.5rem',
          color: isOpen ? '#fff' : 'var(--foreground)',
          borderBottom: isOpen ? '1px solid var(--border)' : '1px solid transparent'
        }}
      >
        <span style={{ display: 'flex', alignItems: 'center', gap: '0.85rem' }}>
          <HelpCircle size={18} style={{ color: isOpen ? 'var(--brand-red)' : 'var(--steel)', flexShrink: 0, transition: 'color 0.25s' }} />
          <span style={{ fontWeight: 600, fontSize: '1.05rem' }}>{question}</span>
        </span>
        <ChevronDown
          size={18}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            transition: 'transform 0.25s ease, color 0.25s',
            color: isOpen ? 'var(--brand-red)' : 'var(--steel)',
            flexShrink: 0
          }}
        />
      </button>

      {/* Answer container with smooth height transitions */}
      <div
        style={{
          maxHeight: isOpen ? '500px' : '0px',
          overflow: 'hidden',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          background: 'rgba(10,10,10,0.3)'
        }}
      >
        <div style={{ padding: '1.5rem', fontSize: '0.95rem', color: 'var(--chrome)', lineHeight: 1.7 }}>
          {answer}
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0) // Default first one open

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? -1 : index)
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '7rem 1.5rem 4rem', background: '#0A0A0A', overflow: 'hidden' }}>
      {/* Background decorations */}
      <GearWatermark size={600} top="-15%" left="-120px" />
      <Sparks count={4} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ maxWidth: 850, marginBottom: '4rem' }}>
          <div className="section-tag">Common Inquiries</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.92, marginBottom: '1.5rem' }}>
            <span className="chrome-text">FREQUENTLY ASKED </span>
            <span style={{ color: 'var(--brand-red)' }}>QUESTIONS</span>
          </h1>
          <p className="font-heading" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--chrome)', fontWeight: 500, lineHeight: 1.4 }}>
            Got questions about how our certified mobile automotive services work? Find transparent answers about pricing, scheduling, coverage, and warranties below.
          </p>
        </div>

        {/* Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="faq-layout">
          {/* FAQ Accordion List */}
          <div>
            {FAQS.map((faq, idx) => (
              <AccordionItem
                key={idx}
                question={faq.q}
                answer={faq.a}
                isOpen={openIndex === idx}
                onToggle={() => handleToggle(idx)}
              />
            ))}
          </div>

          {/* Sidebar CTA cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginTop: '2rem' }}>
            {/* Quick Contact Card */}
            <div className="card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', background: 'var(--surface-1)' }}>
              <div style={{ color: 'var(--brand-red)', marginBottom: '1.25rem' }}>
                <MessageSquare size={36} />
              </div>
              <h3 className="font-display" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.75rem' }}>STILL HAVE QUESTIONS?</h3>
              <p className="font-heading" style={{ color: 'var(--steel)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.75rem', flexGrow: 1 }}>
                Our team is standing by to help. Send us an email, give us a call, or fill out our simple online form to get a personalized quote or clarification.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <a href={`tel:${BRAND.phone}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--foreground)', fontWeight: 600 }}>
                  <Phone size={16} style={{ color: 'var(--brand-red)' }} /> {BRAND.phone}
                </a>
                <a href={`mailto:${BRAND.email}`} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: 'var(--foreground)', fontWeight: 600 }}>
                  <Mail size={16} style={{ color: 'var(--brand-red)' }} /> {BRAND.email}
                </a>
              </div>
              <Link to="/contact" className="btn-secondary" style={{ marginTop: '1.5rem', width: '100%', fontSize: '0.85rem' }}>
                Contact Support <ArrowRight size={14} />
              </Link>
            </div>

            {/* Instant Booking Card */}
            <div className="card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', background: 'linear-gradient(135deg, rgba(204,30,30,0.08) 0%, var(--surface-1) 100%)', border: '1px solid rgba(204,30,30,0.15)' }}>
              <div style={{ color: 'var(--gold)', marginBottom: '1.25rem' }}>
                <GearWatermark size={80} top="10px" right="10px" />
                <HelpCircle size={36} style={{ color: 'var(--gold)' }} />
              </div>
              <h3 className="font-display" style={{ fontSize: '1.75rem', color: '#fff', marginBottom: '0.75rem' }}>READY TO BOOK?</h3>
              <p className="font-heading" style={{ color: 'var(--steel)', fontSize: '0.9rem', lineHeight: 1.6, marginBottom: '1.75rem', flexGrow: 1 }}>
                Book a certified mobile mechanic now. Select your desired date, outline your vehicle issues, and receive a guaranteed prompt arrival.
              </p>
              <Link to="/book" className="btn-primary" style={{ width: '100%', fontSize: '0.85rem' }}>
                Schedule Service Now <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width: 992px) {
          .faq-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
