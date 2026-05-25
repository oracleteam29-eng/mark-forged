// Brand constants for Mark Forged Certified Mobile Mechanic LLC

export const BRAND = {
  name: 'Mark Forged Certified Mobile Mechanic LLC',
  shortName: 'Mark Forged',
  displayName: 'MARK FORGED',
  tagline: 'Certified Mobile Auto Repair Specialist',
  subTagline: 'ASE Certified · Trustworthy · Dependable · Skilled',
  email: 'markforgedmobilemechanicllc@gmail.com',
  phone: '(555) 800-MARK',
  copyright: '© 2025 Mark Forged Certified Mobile Mechanic LLC. All Rights Reserved.',
  social: {
    facebook: 'https://www.facebook.com/profile.php?id=61582756770311',
    instagram: 'https://instagram.com/Jaymelvin010',
    twitter: 'https://twitter.com/Jaymobile_LLC',
  },
}

export const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/about', label: 'About' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/service-areas', label: 'Service Areas' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact' },
]

// Service definitions
export const SERVICES = [
  {
    img: '/assets/brakes.png',
    title: 'Brake & Suspension Services',
    desc: 'Full brake inspections, pad and rotor swaps, caliper maintenance, and thorough suspension diagnostics and repairs. Drive safely. Stay confident.',
  },
  {
    img: '/assets/battery.png',
    title: 'Battery, Starter & Alternator Repairs',
    desc: "Vehicle won't turn over? Electrical issues? Jay identifies and replaces batteries, starters, and alternators at your location — no towing required.",
  },
  {
    img: '/assets/tuneup.png',
    title: 'Tune-Ups & Preventive Care',
    desc: 'Maintain peak vehicle performance. Spark plugs, filters, belts, fluid changes, and comprehensive preventive maintenance delivered to your doorstep.',
  },
  {
    img: '/assets/transmission.png',
    title: 'Engine & Transmission Services',
    desc: 'From basic engine repairs to advanced transmission diagnostics — Jay delivers full-shop expertise right to wherever your vehicle is parked.',
  },
  {
    img: '/assets/more.png',
    title: 'Additional Services — At Your Door',
    desc: 'Cooling systems, exhaust work, sensors, diagnostics, oil changes, and everything else your vehicle demands. If a shop can do it, Jay handles it on-site.',
  },
]

// Why Choose Us features
export const WHY_MOBILE = [
  { icon: '🚗', title: 'Service At Your Door', desc: 'Your home, parking lot, or workplace' },
  { icon: '⏱️', title: 'Reduce Downtime', desc: 'Skip the tow truck and waiting area' },
  { icon: '💰', title: 'Fair Pricing', desc: 'Lower overhead means better value for you' },
  { icon: '🛠️', title: 'Shop-Grade Equipment', desc: 'Professional-level tools, brought to you' },
  { icon: '🎯', title: 'Precision Diagnostics', desc: 'Mark Forged certified diagnostic technology' },
  { icon: '🔒', title: 'Personal & Fleet', desc: 'Serving individual cars and business fleets' },
]

// Bookable services list
export const BOOKABLE_SERVICES = [
  'Brakes/Suspension',
  'Battery/Starter/Alternator',
  'Tune-Up/Maintenance',
  'Engine Work',
  'Transmission',
  'Diagnostics',
  'Fleet Service',
  'Other',
]

// Detailed services description
export const DETAILED_SERVICES = [
  {
    title: 'Brake & Suspension Services',
    body: 'Your braking system is the most vital safety feature on your vehicle — and it deserves attention from a certified professional. Jay Melvin Thomas delivers complete brake service at your location, covering everything from initial diagnostics to full component replacement and fluid bleeding. We also tackle comprehensive suspension work including shocks, struts, control arms, and steering parts.',
    items: [
      'Full brake pad replacement (all wheels)',
      'Rotor inspection and replacement',
      'Caliper diagnosis & swap',
      'Brake fluid flush & bleeding',
      'ABS system scan',
      'Shock & strut installation',
      'Control arm & bushing service',
      'Wheel bearing replacement',
      'Steering system evaluation',
    ],
    image: '/assets/brakes.png',
  },
  {
    title: 'Battery, Starter & Alternator Repairs',
    body: "Being stranded with a vehicle that won't start is incredibly frustrating — especially when you're far from home. Jay diagnoses and swaps out batteries, starters, and alternators on-site so you can get moving again without waiting for a tow. We test your complete charging system to pinpoint the actual cause, not just apply a temporary patch.",
    items: [
      'Battery load testing & swap',
      'Starter motor replacement',
      'Alternator swap',
      'Charging system evaluation',
      'Battery cable check & replacement',
      'No-start troubleshooting',
      'Parasitic draw testing',
    ],
    image: '/assets/battery.png',
  },
  {
    title: 'Tune-Ups & Preventive Care',
    body: 'Regular maintenance separates a reliable vehicle from an expensive breakdown waiting to happen. Mark Forged Certified Mobile Mechanic LLC provides thorough tune-up and maintenance services at your location — keeping your engine running clean, efficient, and powerful for years to come.',
    items: [
      'Spark plug installation',
      'Air & cabin filter swap',
      'Oil & filter service',
      'Fuel filter replacement',
      'Serpentine belt check & replacement',
      'Cooling system maintenance',
      'Throttle body service',
      'PCV valve swap',
      'Comprehensive maintenance checkup',
    ],
    image: '/assets/tuneup.png',
  },
  {
    title: 'Engine & Transmission Services',
    body: 'Whether it\'s misfires, oil leaks, transmission slipping, or clutch issues — Jay brings engine and transmission knowledge directly to your vehicle. In-depth on-site diagnostics using professional scan tools ensure we identify the root problem, not just the symptoms.',
    items: [
      'Engine scan (OBD-II diagnostic)',
      'Misfire troubleshooting & repair',
      'Valve cover gasket swap',
      'Intake manifold gasket service',
      'Timing belt/chain replacement',
      'Transmission fluid change',
      'Transmission evaluation',
      'Clutch assessment (manual)',
      'Cylinder head service',
    ],
    image: '/assets/transmission.png',
  },
  {
    title: 'Additional Services — At Your Door',
    body: 'A complete range of automotive repair services — all delivered mobile. If a traditional shop can handle it, Jay Melvin Thomas can do it wherever your vehicle sits.',
    items: [
      'Cooling system / radiator maintenance',
      'Exhaust system fixes',
      'O2 sensor replacement',
      'EVAP system troubleshooting',
      'Power window & door lock repair',
      'AC recharge & evaluation',
      'Pre-purchase vehicle inspection',
      'Fleet maintenance contracts',
      'On-location diagnostics for any warning light',
    ],
    image: '/assets/more.png',
  },
]

// Text testimonials
export const TEXT_TESTIMONIALS = [
  {
    name: 'Marcus W.',
    source: 'Google Review',
    quote: "Jay showed up at my place and handled the brakes the same day. I saved $200 compared to the shop quote and never had to leave home. This is hands-down the best way to get car work done.",
  },
  {
    name: 'Sarah T.',
    source: 'Facebook Review',
    quote: "Outstanding service! Our delivery van died on us. Jay arrived within the hour, found a bad starter, sourced the part, and had it installed. Absolutely no lost time for our company.",
  },
  {
    name: 'David L.',
    source: 'Yelp Review',
    quote: 'Can\'t recommend enough. Super professional, upfront pricing, and top-notch workmanship. Jay completed a full 100k service on my Accord in my driveway while I worked remotely.',
  },
]

// FAQ list
export const FAQS = [
  {
    q: 'What exactly is a mobile mechanic?',
    a: "A mobile mechanic is a certified auto technician who travels to wherever your vehicle is to perform repairs — rather than making you drive to a brick-and-mortar shop. Mark Forged Certified Mobile Mechanic LLC delivers the same professional-quality work you'd get from a reputable garage, brought straight to your home, office, parking lot, or fleet yard.",
  },
  {
    q: 'Which types of vehicles can you service?',
    a: "Mark Forged Certified Mobile Mechanic LLC works on most domestic and import cars, trucks, SUVs, and vans. We also service fleet vehicles. Get in touch with your vehicle's year, make, and model so we can confirm availability.",
  },
  {
    q: 'Do you hold any certifications?',
    a: 'Absolutely. Jay Melvin Thomas is ASE (Automotive Service Excellence) certified and holds JAyVORTEX Certified Mobile Automotive Specialist credentials — dual certifications representing professional-level mastery in both mobile and traditional automotive repair.',
  },
  {
    q: 'Which locations do you cover?',
    a: 'Mark Forged Certified Mobile Mechanic LLC operates as a traveling service and comes to client locations. Reach out at markforgedmobilemechanicllc@gmail.com or through social media to confirm availability in your area.',
  },
  {
    q: 'How can I schedule a service?',
    a: 'Use the booking form on our website, send an email to markforgedmobilemechanicllc@gmail.com, or contact us through Facebook, Twitter/X, or Instagram. We respond personally and quickly.',
  },
  {
    q: 'What happens if an on-site repair isn\'t possible?',
    a: 'In the uncommon situation where a repair needs specialized shop-only equipment, we will give you a straightforward assessment and point you in the right direction — instead of attempting a half-measure. Transparency is at the core of everything we do.',
  },
  {
    q: 'How do your prices compare to a traditional shop?',
    a: 'Mobile mechanic pricing is generally on par with shop rates — and frequently lower due to reduced overhead costs. On top of that, you save on towing fees and transportation time. We always provide clear quotes before starting any work.',
  },
  {
    q: 'Can you handle fleet vehicles?',
    a: 'Yes. Mark Forged Certified Mobile Mechanic LLC provides scheduled fleet maintenance and repair plans for businesses. Email markforgedmobilemechanicllc@gmail.com for fleet service details.',
  },
  {
    q: 'What if I\'m stuck with a breakdown?',
    a: 'Reach out as soon as possible by phone, email, or social media. We will evaluate the situation and get to your location as quickly as we can to perform the repair on-site. Minimizing your downtime is our specialty.',
  },
  {
    q: 'Which payment methods are accepted?',
    a: 'Contact us for current payment options including cash, digital platforms (Venmo, Zelle, Cash App), and card payments. All pricing is confirmed and agreed upon before any work begins.',
  },
]

// Portfolio gallery items
export const PORTFOLIO_GALLERY = [
  { src: '/assets/fb1.jpg', label: 'On-Location Service Visit', cat: 'Engine' },
  { src: '/assets/fb2.jpg', label: 'Mobile Repair Underway', cat: 'Engine' },
  { src: '/assets/fb3.jpg', label: 'Intake Manifold Work', cat: 'Engine' },
  { src: '/assets/fb5.jpg', label: 'Driveway Battery Swap', cat: 'Electrical' },
  { src: '/assets/fb6.jpg', label: 'G35 Engine Overhaul', cat: 'Engine' },
  { src: '/assets/fb7.jpg', label: 'Diagnostic Inspection', cat: 'Tune-Ups' },
  { src: '/assets/fb8.jpg', label: 'Suspension Assessment', cat: 'Brakes' },
  { src: '/assets/fb9.jpg', label: 'Field Repair Session', cat: 'Engine' },
  { src: '/assets/fb10.jpg', label: 'On-Site Diagnostics', cat: 'Tune-Ups' },
  { src: '/assets/work-engine.png', label: 'Part Replacement', cat: 'Transmission' },
  { src: '/assets/work-battery.png', label: 'Brake Overhaul', cat: 'Brakes' },
  { src: '/assets/work-g35.png', label: 'Worksite Service', cat: 'Engine' },
]

// Portfolio categories
export const PORTFOLIO_CATEGORIES = ['All', 'Brakes', 'Engine', 'Electrical', 'Tune-Ups', 'Transmission']

// Before & After comparison items
export const BEFORE_AFTER = [
  { label: 'Brake Overhaul — Client Driveway', before: '/assets/brake-before.png', after: '/assets/brake-after.png' },
  { label: 'Starter Swap — Parking Lot' },
  { label: 'Intake Work — Job Site' },
  { label: 'Battery & Cables — Home Visit' },
  { label: 'Suspension — Apartment Complex' },
  { label: 'Tune-Up — Office Lot' },
]

// Values list
export const VALUES = [
  { icon: '🔒', title: 'Transparent', desc: "Clear diagnostics. We explain the issue and the cost before we begin." },
  { icon: '⚡', title: 'Dependable', desc: 'We arrive when promised. Your schedule matters to us.' },
  { icon: '🛠️', title: 'Skilled', desc: 'Certified expertise across every major vehicle system.' },
  { icon: '🚗', title: 'Mobile-First', desc: 'Your location. Your timetable. Your convenience.' },
]

// Why Choose Us list
export const WHY_CHOOSE_US = [
  { icon: '🏆', title: 'ASE + JAyVORTEX Certified', desc: 'Dual credentials mean professional-grade skill on every job.' },
  { icon: '🚗', title: 'We Travel To You', desc: 'Home, office, parking lot, job site — wherever your vehicle is located.' },
  { icon: '💰', title: 'No Shop Rent = Better Value', desc: "We don't pay for a bay. Those savings get passed to you." },
  { icon: '⏱️', title: 'Cut Your Downtime', desc: 'No tow truck. No waiting area. Your vehicle gets repaired right where it is.' },
  { icon: '🔍', title: 'Accurate Diagnostics', desc: 'Mark Forged certified tools find the true cause, not just the surface symptom.' },
  { icon: '💬', title: 'Direct Communication', desc: 'You speak with us directly. No middleman, no dispatcher.' },
]
