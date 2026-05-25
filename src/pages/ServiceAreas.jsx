import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { GearWatermark, Sparks } from '../components/index.jsx'
import { SERVICE_AREAS, BRAND } from '../constants.js'
import { MapPin, Search, Phone, Calendar, Compass, ShieldCheck } from 'lucide-react'

export default function ServiceAreas() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredAreas = SERVICE_AREAS.filter(area =>
    area.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div style={{ position: 'relative', minHeight: '100vh', padding: '7rem 1.5rem 4rem', background: '#0A0A0A', overflow: 'hidden' }}>
      {/* Background decorations */}
      <GearWatermark size={550} top="-5%" right="-80px" />
      <Sparks count={5} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Header */}
        <div style={{ maxWidth: 800, marginBottom: '4rem' }}>
          <div className="section-tag">Coverage Area</div>
          <h1 className="font-display" style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', lineHeight: 0.92, marginBottom: '1.5rem' }}>
            <span className="chrome-text">WE BRING THE SHOP </span>
            <span style={{ color: 'var(--brand-red)' }}>TO YOU</span>
          </h1>
          <p className="font-heading" style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--chrome)', fontWeight: 500, lineHeight: 1.4 }}>
            Professional mobile auto repair services direct to your driveway, office parking lot, or roadside location across the Greater Atlanta Metro Area.
          </p>
        </div>

        {/* Search & Grid Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem', margin: '3rem 0' }} className="service-areas-layout">
          {/* Left panel: Info & Search */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div className="card" style={{ padding: '2.5rem', background: 'linear-gradient(135deg, var(--surface-1) 0%, rgba(20,20,20,0.8) 100%)' }}>
              <h3 className="font-display" style={{ fontSize: '2rem', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Compass style={{ color: 'var(--brand-red)' }} /> FIND YOUR CITY
              </h3>
              <p className="font-heading" style={{ color: 'var(--steel)', fontSize: '0.95rem', marginBottom: '2rem', lineHeight: 1.6 }}>
                Type your city or area below to instantly check if you are within our certified mobile mechanic service coverage zone.
              </p>

              {/* Search input with icon */}
              <div style={{ position: 'relative', width: '100%', marginBottom: '2rem' }}>
                <input
                  type="text"
                  placeholder="Search service areas (e.g. Marietta, Atlanta...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    paddingLeft: '3rem',
                    fontSize: '1rem',
                    height: '52px',
                    borderColor: searchQuery ? 'var(--brand-red)' : 'var(--border)'
                  }}
                />
                <Search
                  size={20}
                  style={{
                    position: 'absolute',
                    left: '1.25rem',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: searchQuery ? 'var(--brand-red)' : 'var(--steel)',
                    transition: 'color 0.2s'
                  }}
                />
              </div>

              {/* Status Message */}
              {searchQuery && (
                <div style={{
                  padding: '1rem',
                  borderRadius: '4px',
                  background: filteredAreas.length > 0 ? 'rgba(232, 200, 75, 0.05)' : 'rgba(204, 30, 30, 0.05)',
                  border: `1px solid ${filteredAreas.length > 0 ? 'rgba(232, 200, 75, 0.15)' : 'rgba(204, 30, 30, 0.15)'}`,
                  color: filteredAreas.length > 0 ? 'var(--gold)' : 'var(--brand-red-bright)',
                  fontFamily: 'Barlow, sans-serif',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  marginBottom: '2rem'
                }}>
                  <MapPin size={18} />
                  {filteredAreas.length > 0
                    ? `Yes! We service ${filteredAreas.length} location(s) matching "${searchQuery}".`
                    : `No exact match for "${searchQuery}". Call us! We may still service your area.`
                  }
                </div>
              )}

              {/* Grid of badges */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(130px, 1fr))', gap: '0.75rem' }}>
                {filteredAreas.map((area, idx) => (
                  <div key={idx} className="area-badge" style={{ justifyContent: 'center', textAlign: 'center', fontWeight: 600 }}>
                    <MapPin size={13} style={{ color: 'var(--brand-red)', flexShrink: 0 }} />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              {filteredAreas.length === 0 && (
                <div style={{ textAlign: 'center', padding: '2rem 1rem', color: 'var(--steel)' }}>
                  <p className="font-heading" style={{ fontSize: '1rem', marginBottom: '1rem' }}>
                    Don't see your city listed? We often travel outside our standard zone for fleets, engine diagnostics, and multi-vehicle service appointments.
                  </p>
                  <a href={`tel:${BRAND.phone}`} className="btn-secondary" style={{ fontSize: '0.8rem', padding: '0.5rem 1.25rem' }}>
                    <Phone size={14} /> Call for Special Booking
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Features row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '4rem' }}>
          <div className="card" style={{ padding: '2rem', background: 'var(--surface-1)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(204,30,30,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', marginBottom: '1.25rem' }}>
              <ShieldCheck size={24} />
            </div>
            <h4 className="font-display" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>Certified Mechanics</h4>
            <p className="font-heading" style={{ color: 'var(--steel)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              All repairs are performed by ASE Certified, highly qualified technicians equipped with industry-leading diagnostic scanners and tools.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem', background: 'var(--surface-1)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(204,30,30,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', marginBottom: '1.25rem' }}>
              <MapPin size={24} />
            </div>
            <h4 className="font-display" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>Zero Towing Fees</h4>
            <p className="font-heading" style={{ color: 'var(--steel)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Skip the expensive tow truck bills. We drive our fully stock auto workshop directly to your exact location, saving you time and money.
            </p>
          </div>

          <div className="card" style={{ padding: '2rem', background: 'var(--surface-1)' }}>
            <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(204,30,30,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--brand-red)', marginBottom: '1.25rem' }}>
              <Calendar size={24} />
            </div>
            <h4 className="font-display" style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.75rem' }}>Flexible Scheduling</h4>
            <p className="font-heading" style={{ color: 'var(--steel)', fontSize: '0.9rem', lineHeight: 1.6 }}>
              Available Monday through Saturday from 7:00 AM to 7:00 PM. Book online or call to secure a high-priority emergency mobile dispatch.
            </p>
          </div>
        </div>

        {/* CTA banner */}
        <div style={{
          marginTop: '5rem',
          padding: '3.5rem 2.5rem',
          background: 'linear-gradient(135deg, rgba(204,30,30,0.15) 0%, rgba(10,10,10,0.95) 100%)',
          border: '1.5px solid var(--brand-red)',
          borderRadius: '8px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <GearWatermark size={300} top="-50px" right="-50px" />
          <h2 className="font-display" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#fff', marginBottom: '1rem', lineHeight: 1 }}>
            READY TO GET BACK ON THE ROAD?
          </h2>
          <p className="font-heading" style={{ color: 'var(--chrome)', fontSize: '1.1rem', maxWidth: 650, margin: '0 auto 2.5rem', lineHeight: 1.5 }}>
            Don't spend your day waiting in a greasy repair shop waiting room. Let the certified specialists at Mark Forged handle your vehicle repair on-site today.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/book" className="btn-primary" style={{ padding: '0.9rem 2.25rem', fontSize: '0.95rem' }}>
              <Calendar size={18} /> Schedule Mobile Visit
            </Link>
            <a href={`tel:${BRAND.phone}`} className="btn-secondary" style={{ padding: '0.9rem 2.25rem', fontSize: '0.95rem' }}>
              <Phone size={18} /> {BRAND.phone}
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media(min-width: 992px) {
          .service-areas-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
