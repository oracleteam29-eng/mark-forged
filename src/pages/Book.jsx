import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GearWatermark, Sparks } from '../components/index.jsx'
import { SERVICES, BRAND, SERVICE_AREAS } from '../constants.js'
import { Calendar, Car, MapPin, User, ChevronRight, CheckCircle, Wrench, Clock, FileText, Sparkles } from 'lucide-react'

export default function Book() {
  const today = new Date().toISOString().split('T')[0]

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    year: '',
    make: '',
    model: '',
    serviceId: SERVICES[0]?.id || 'brakes',
    customNotes: '',
    date: '',
    timeSlot: 'morning',
    address: '',
    city: SERVICE_AREAS[0] || 'Atlanta',
    zipCode: ''
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [bookingRef, setBookingRef] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate booking dispatch
    setTimeout(() => {
      // Generate booking reference
      const randomRef = 'MF-' + Math.floor(100000 + Math.random() * 900000)
      setBookingRef(randomRef)
      setLoading(false)
      setSuccess(true)
    }, 1500)
  }

  const selectedService = SERVICES.find(s => s.id === formData.serviceId)

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '7rem 1.5rem 4rem', background: '#0A0A0A', overflow: 'hidden' }}>
      {/* Background decorations */}
      <GearWatermark size={600} top="-10%" left="-100px" />
      <Sparks count={5} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ maxWidth: 800, marginBottom: '3.5rem' }}>
          <div className="section-tag">Booking Engine</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.92, marginBottom: '1.5rem' }}>
            <span className="chrome-text">SCHEDULE A </span>
            <span style={{ color: 'var(--brand-red)' }}>MOBILE VISIT</span>
          </h1>
          <p className="font-heading" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--chrome)', fontWeight: 500, lineHeight: 1.4 }}>
            Skip the waiting room. Provide your details below, and we'll dispatch a certified technician in our mobile workshop directly to you.
          </p>
        </div>

        {/* Success / Receipt Screen */}
        {success ? (
          <div style={{ maxWidth: 750, margin: '0 auto' }}>
            <div className="card" style={{ padding: '3.5rem 2.5rem', background: 'linear-gradient(135deg, rgba(232,200,75,0.05) 0%, var(--surface-1) 100%)', border: '2.5px solid var(--gold)', borderRadius: '8px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '1.5rem', right: '1.5rem', opacity: 0.15, transform: 'rotate(15deg)' }} aria-hidden="true">
                <Sparkles size={80} style={{ color: 'var(--gold)' }} />
              </div>

              <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'rgba(232,200,75,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', margin: '0 auto 1.5rem', boxShadow: '0 0 20px rgba(232,200,75,0.2)' }}>
                  <CheckCircle size={40} />
                </div>
                <h2 className="font-display" style={{ fontSize: '3rem', color: '#fff', marginBottom: '0.5rem', lineHeight: 1 }}>APPOINTMENT CONFIRMED</h2>
                <div className="font-heading" style={{ fontSize: '0.85rem', color: 'var(--gold)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase' }}>
                  REFERENCE #: {bookingRef}
                </div>
                <p className="font-heading" style={{ fontSize: '1rem', color: 'var(--steel)', marginTop: '0.75rem' }}>
                  A confirmation email has been dispatched to <strong style={{ color: 'var(--chrome)' }}>{formData.email}</strong>.
                </p>
              </div>

              {/* Booking receipt details */}
              <div style={{ background: '#0D0D0D', border: '1px solid var(--border)', borderRadius: '6px', padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <h4 className="font-display" style={{ fontSize: '1.35rem', color: '#fff', borderBottom: '1px solid var(--border)', paddingBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <FileText size={18} style={{ color: 'var(--brand-red)' }} /> TRIP DETAILS
                </h4>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.5rem' }} className="receipt-grid">
                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <User size={18} style={{ color: 'var(--brand-red)', marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--steel)', fontWeight: 600 }}>Customer Name</div>
                      <div className="font-heading" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>{formData.name}</div>
                      <div style={{ color: 'var(--steel)', fontSize: '0.85rem' }}>{formData.phone}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Car size={18} style={{ color: 'var(--brand-red)', marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--steel)', fontWeight: 600 }}>Vehicle Details</div>
                      <div className="font-heading" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                        {formData.year} {formData.make} {formData.model}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Wrench size={18} style={{ color: 'var(--brand-red)', marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--steel)', fontWeight: 600 }}>Service Selected</div>
                      <div className="font-heading" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                        {selectedService ? selectedService.title : 'General Repair'}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem' }}>
                    <Calendar size={18} style={{ color: 'var(--brand-red)', marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--steel)', fontWeight: 600 }}>Date & Preferred Window</div>
                      <div className="font-heading" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                        {new Date(formData.date).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
                      </div>
                      <div style={{ color: 'var(--gold)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase', marginTop: '0.1rem' }}>
                        {formData.timeSlot === 'morning' && 'Morning Slot (8:00 AM – 12:00 PM)'}
                        {formData.timeSlot === 'afternoon' && 'Afternoon Slot (12:00 PM – 4:00 PM)'}
                        {formData.timeSlot === 'evening' && 'Evening Slot (4:00 PM – 7:00 PM)'}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', gap: '0.75rem', gridColumn: '1 / -1' }}>
                    <MapPin size={18} style={{ color: 'var(--brand-red)', marginTop: '2px' }} />
                    <div>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', color: 'var(--steel)', fontWeight: 600 }}>Service Address</div>
                      <div className="font-heading" style={{ color: '#fff', fontWeight: 600, fontSize: '0.95rem' }}>
                        {formData.address}, {formData.city}, GA {formData.zipCode}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2.5rem', flexWrap: 'wrap' }}>
                <Link to="/" className="btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '0.9rem' }}>
                  Return Home
                </Link>
                <a href={`tel:${BRAND.phone}`} className="btn-secondary" style={{ padding: '0.75rem 2rem', fontSize: '0.9rem' }}>
                  Urgent Call: {BRAND.phone}
                </a>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem' }} className="booking-layout">
              
              {/* Left Column: Form Fields */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Section 1: Customer Contact */}
                <div className="card" style={{ padding: '2.25rem', background: 'var(--surface-1)' }}>
                  <h3 className="font-display" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <User size={20} style={{ color: 'var(--brand-red)' }} /> 1. CONTACT INFORMATION
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
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
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '1.25rem' }} className="grid-2-col">
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
                    </div>
                  </div>
                </div>

                {/* Section 2: Vehicle details */}
                <div className="card" style={{ padding: '2.25rem', background: 'var(--surface-1)' }}>
                  <h3 className="font-display" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Car size={20} style={{ color: 'var(--brand-red)' }} /> 2. VEHICLE DETAILS
                  </h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.25rem' }} className="grid-3-col">
                    <div>
                      <label htmlFor="year">Year</label>
                      <input
                        type="number"
                        id="year"
                        name="year"
                        required
                        min="1900"
                        max={new Date().getFullYear() + 2}
                        placeholder="e.g. 2018"
                        value={formData.year}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="make">Make</label>
                      <input
                        type="text"
                        id="make"
                        name="make"
                        required
                        placeholder="e.g. Honda"
                        value={formData.make}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="model">Model</label>
                      <input
                        type="text"
                        id="model"
                        name="model"
                        required
                        placeholder="e.g. Accord"
                        value={formData.model}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Section 3: Location */}
                <div className="card" style={{ padding: '2.25rem', background: 'var(--surface-1)' }}>
                  <h3 className="font-display" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <MapPin size={20} style={{ color: 'var(--brand-red)' }} /> 3. SERVICE LOCATION
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label htmlFor="address">Street Address (Driveway, Workplace, Roadside)</label>
                      <input
                        type="text"
                        id="address"
                        name="address"
                        required
                        placeholder="123 Main Street"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }} className="grid-2-col">
                      <div>
                        <label htmlFor="city">City (GA)</label>
                        <select
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                        >
                          {SERVICE_AREAS.map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="zipCode">Zip Code</label>
                        <input
                          type="text"
                          id="zipCode"
                          name="zipCode"
                          required
                          placeholder="e.g. 30060"
                          value={formData.zipCode}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Schedule & Service */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                {/* Section 4: Service & Schedule */}
                <div className="card" style={{ padding: '2.25rem', background: 'var(--surface-1)' }}>
                  <h3 className="font-display" style={{ fontSize: '1.6rem', color: '#fff', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                    <Calendar size={20} style={{ color: 'var(--brand-red)' }} /> 4. SERVICE & APPOINTMENT
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                    <div>
                      <label htmlFor="serviceId">Select Service Needed</label>
                      <select
                        id="serviceId"
                        name="serviceId"
                        value={formData.serviceId}
                        onChange={handleChange}
                      >
                        {SERVICES.map(s => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="date">Preferred Date</label>
                      <input
                        type="date"
                        id="date"
                        name="date"
                        required
                        min={today}
                        value={formData.date}
                        onChange={handleChange}
                      />
                    </div>

                    <div>
                      <label>Preferred Arrival Window</label>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.50rem' }} className="grid-3-col">
                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1rem',
                            borderRadius: '4px',
                            background: formData.timeSlot === 'morning' ? 'rgba(204,30,30,0.08)' : 'var(--surface-2)',
                            border: `1.5px solid ${formData.timeSlot === 'morning' ? 'var(--brand-red)' : 'var(--border)'}`,
                            cursor: 'pointer',
                            color: formData.timeSlot === 'morning' ? '#fff' : 'var(--chrome)',
                            fontWeight: 600,
                            margin: 0
                          }}
                        >
                          <input
                            type="radio"
                            name="timeSlot"
                            value="morning"
                            checked={formData.timeSlot === 'morning'}
                            onChange={handleChange}
                            style={{ width: 'auto', margin: 0 }}
                          />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.9rem' }}>Morning</span>
                            <span style={{ fontSize: '0.7rem', color: 'var(--steel)', fontWeight: 400 }}>8:00 AM – 12:00 PM</span>
                          </div>
                        </label>

                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1rem',
                            borderRadius: '4px',
                            background: formData.timeSlot === 'afternoon' ? 'rgba(204,30,30,0.08)' : 'var(--surface-2)',
                            border: `1.5px solid ${formData.timeSlot === 'afternoon' ? 'var(--brand-red)' : 'var(--border)'}`,
                            cursor: 'pointer',
                            color: formData.timeSlot === 'afternoon' ? '#fff' : 'var(--chrome)',
                            fontWeight: 600,
                            margin: 0
                          }}
                        >
                          <input
                            type="radio"
                            name="timeSlot"
                            value="afternoon"
                            checked={formData.timeSlot === 'afternoon'}
                            onChange={handleChange}
                            style={{ width: 'auto', margin: 0 }}
                          />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.9rem' }}>Afternoon</span>
                            <span style={{ fontSize: '0.7rem', color: 'var(--steel)', fontWeight: 400 }}>12:00 PM – 4:00 PM</span>
                          </div>
                        </label>

                        <label
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.75rem',
                            padding: '1rem',
                            borderRadius: '4px',
                            background: formData.timeSlot === 'evening' ? 'rgba(204,30,30,0.08)' : 'var(--surface-2)',
                            border: `1.5px solid ${formData.timeSlot === 'evening' ? 'var(--brand-red)' : 'var(--border)'}`,
                            cursor: 'pointer',
                            color: formData.timeSlot === 'evening' ? '#fff' : 'var(--chrome)',
                            fontWeight: 600,
                            margin: 0
                          }}
                        >
                          <input
                            type="radio"
                            name="timeSlot"
                            value="evening"
                            checked={formData.timeSlot === 'evening'}
                            onChange={handleChange}
                            style={{ width: 'auto', margin: 0 }}
                          />
                          <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <span style={{ fontSize: '0.9rem' }}>Evening</span>
                            <span style={{ fontSize: '0.7rem', color: 'var(--steel)', fontWeight: 400 }}>4:00 PM – 7:00 PM</span>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="customNotes">Describe Vehicle Symptoms / Special Instructions</label>
                      <textarea
                        id="customNotes"
                        name="customNotes"
                        rows={4}
                        placeholder="e.g. Squeaking noise when braking, please call when you're 15 mins away..."
                        value={formData.customNotes}
                        onChange={handleChange}
                        style={{ resize: 'none' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Submit Panel */}
                <div className="card" style={{ padding: '2rem', background: 'linear-gradient(135deg, rgba(204,30,30,0.05) 0%, rgba(10,10,10,0.85) 100%)', border: '1px solid rgba(204,30,30,0.2)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.50rem', color: 'var(--gold)', marginBottom: '0.75rem' }}>
                    <Wrench size={16} />
                    <span className="font-heading" style={{ fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                      Mark Forged Guarantee
                    </span>
                  </div>
                  <p className="font-heading" style={{ color: 'var(--steel)', fontSize: '0.85rem', lineHeight: 1.5, marginBottom: '1.5rem' }}>
                    All dispatches include comprehensive professional system scans and a 12-month / 12,000-mile warranty on all certified parts and labor.
                  </p>

                  <button
                    type="submit"
                    className="btn-primary"
                    disabled={loading}
                    style={{
                      width: '100%',
                      padding: '1rem',
                      fontSize: '1rem',
                      opacity: loading ? 0.7 : 1,
                      cursor: loading ? 'not-allowed' : 'pointer'
                    }}
                  >
                    {loading ? (
                      <span style={{ display: 'flex', alignItems: 'center', justify: 'center', gap: '0.5rem' }}>
                        <span className="spin-slow" style={{ display: 'inline-block', width: '18px', height: '18px', border: '2px solid rgba(255,255,255,0.3)', borderTopColor: '#fff', borderRadius: '50%' }} /> Dispatching Specialist...
                      </span>
                    ) : (
                      <span style={{ display: 'flex', alignItems: 'center', justify: 'center', gap: '0.5rem' }}>
                        Book Certified Specialist <ChevronRight size={18} />
                      </span>
                    )}
                  </button>
                </div>
              </div>

            </div>
          </form>
        )}
      </div>

      <style>{`
        @media(min-width: 992px) {
          .booking-layout {
            grid-template-columns: 1fr 440px !important;
          }
          .receipt-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
        @media(min-width: 600px) {
          .grid-2-col {
            grid-template-columns: 1fr 1fr !important;
          }
          .grid-3-col {
            grid-template-columns: 1fr 1fr 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
