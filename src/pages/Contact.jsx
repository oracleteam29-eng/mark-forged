import React, { useState } from 'react'
import { GearWatermark, Sparks } from '../components/index.jsx'
import { BRAND } from '../constants.js'
import { Phone, Mail, Clock, MapPin, CheckCircle, Send, Facebook, Twitter, Instagram } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate API request
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }, 1200)
  }

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '7rem 1.5rem 4rem', background: '#0A0A0A', overflow: 'hidden' }}>
      {/* Background decorations */}
      <GearWatermark size={500} top="-10%" right="-50px" />
      <Sparks count={4} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ maxWidth: 800, marginBottom: '4rem' }}>
          <div className="section-tag">Direct Line</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.92, marginBottom: '1.5rem' }}>
            <span className="chrome-text">CONTACT </span>
            <span style={{ color: 'var(--brand-red)' }}>OUR TEAM</span>
          </h1>
          <p className="font-heading" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--chrome)', fontWeight: 500, lineHeight: 1.4 }}>
            Have a question, need an urgent roadside dispatch, or want a customized quote? Send us a message or call directly. We are ready to help.
          </p>
        </div>

        {/* Two column layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="contact-layout">
          {/* Column 1: Info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Contact details */}
            <div className="card" style={{ padding: '2.5rem', background: 'var(--surface-1)' }}>
              <h3 className="font-display" style={{ fontSize: '1.85rem', color: '#fff', marginBottom: '1.75rem', letterSpacing: '0.05em' }}>
                REACH US DIRECTLY
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '4px', background: 'rgba(204,30,30,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', flexShrink: 0 }}>
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="font-heading" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--steel)', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>Call or Text</div>
                    <a href={`tel:${BRAND.phone}`} className="font-heading" style={{ fontSize: '1.25rem', color: '#fff', fontWeight: 700, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
                      onMouseLeave={e => e.target.style.color = '#fff'}
                    >
                      {BRAND.phone}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '4px', background: 'rgba(204,30,30,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', flexShrink: 0 }}>
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="font-heading" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--steel)', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>Email Address</div>
                    <a href={`mailto:${BRAND.email}`} className="font-heading" style={{ fontSize: '1.15rem', color: '#fff', fontWeight: 600, transition: 'color 0.2s' }}
                      onMouseEnter={e => e.target.style.color = 'var(--brand-red)'}
                      onMouseLeave={e => e.target.style.color = '#fff'}
                    >
                      {BRAND.email}
                    </a>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '4px', background: 'rgba(204,30,30,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', flexShrink: 0 }}>
                    <Clock size={20} />
                  </div>
                  <div>
                    <div className="font-heading" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--steel)', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>Hours of Operation</div>
                    <p className="font-heading" style={{ fontSize: '1rem', color: 'var(--chrome)', fontWeight: 600 }}>
                      Monday – Saturday: 7:00 AM – 7:00 PM
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--steel)', marginTop: '0.15rem' }}>
                      Sunday: Emergency Only (Call Direct)
                    </p>
                  </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
                  <div style={{ width: 44, height: 44, borderRadius: '4px', background: 'rgba(204,30,30,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', flexShrink: 0 }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <div className="font-heading" style={{ fontSize: '0.75rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--steel)', letterSpacing: '0.1em', marginBottom: '0.2rem' }}>Service Location</div>
                    <p className="font-heading" style={{ fontSize: '1.05rem', color: 'var(--chrome)', fontWeight: 600 }}>
                      Greater Atlanta Metro Area, GA
                    </p>
                    <p style={{ fontSize: '0.8rem', color: 'var(--steel)', marginTop: '0.15rem' }}>
                      We drive our mobile automotive workshop straight to you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div style={{ marginTop: '2.5rem', paddingTop: '1.75rem', borderTop: '1px solid var(--border)' }}>
                <div className="font-heading" style={{ fontSize: '0.7rem', fontWeight: 700, textTransform: 'uppercase', color: 'var(--steel)', letterSpacing: '0.15em', marginBottom: '0.75rem' }}>Follow Our Updates</div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href={BRAND.social.facebook} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <Facebook size={16} /> Facebook
                  </a>
                  <a href={BRAND.social.twitter} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <Twitter size={16} /> Twitter
                  </a>
                  <a href={BRAND.social.instagram} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: '0.5rem 1rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem' }}>
                    <Instagram size={16} /> Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Form */}
          <div style={{ position: 'relative' }}>
            <div className="card" style={{ padding: '2.5rem', background: 'var(--surface-1)', position: 'relative', overflow: 'hidden' }}>
              {/* Success message overlay */}
              {submitted ? (
                <div style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  minHeight: '400px',
                  animation: 'letter-in 0.4s ease'
                }}>
                  <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(232, 200, 75, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', marginBottom: '1.5rem', boxShadow: '0 0 20px rgba(232,200,75,0.2)' }}>
                    <CheckCircle size={40} />
                  </div>
                  <h3 className="font-display" style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '0.75rem' }}>MESSAGE RECEIVED</h3>
                  <p className="font-heading" style={{ color: 'var(--chrome)', maxWidth: 380, margin: '0 auto 2rem', fontSize: '1rem', lineHeight: 1.5 }}>
                    Thank you for reaching out! A certified technician will review your request and contact you within the next hour.
                  </p>
                  <button className="btn-secondary" onClick={() => setSubmitted(false)} style={{ fontSize: '0.85rem' }}>
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <h3 className="font-display" style={{ fontSize: '1.85rem', color: '#fff', marginBottom: '0.5rem' }}>
                    SEND A MESSAGE
                  </h3>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="form-grid-2">
                    <div>
                      <label htmlFor="name">Full Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="email">Email Address</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="form-grid-2">
                    <div>
                      <label htmlFor="phone">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        required
                        placeholder="(555) 000-0000"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        required
                        placeholder="e.g. Brake Repair Estimate"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message">How Can We Help?</label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      placeholder="Please details your vehicle year, make, model and the issues you're experiencing..."
                      value={formData.message}
                      onChange={handleChange}
                      style={{ resize: 'vertical' }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{
                      marginTop: '0.5rem',
                      width: '100%',
                      padding: '0.9rem',
                      fontSize: '0.95rem',
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loading ? (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span className="spin-slow" style={{ display: 'inline-block', width: '16px', height: '16px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }} /> Sending...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <Send size={16} /> Send Message
                      </span>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width: 992px) {
          .contact-layout {
            grid-template-columns: 420px 1fr !important;
          }
          .form-grid-2 {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
