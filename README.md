# Mark Forged Certified Mobile Mechanic LLC

🚗 **Certified Mobile Auto Repair Specialist** — ASE & MarkVORTEX Certified expertise, brought straight to your doorstep.

---

## 🛠️ About the Project

This repository contains the official Single Page Application (SPA) for **Mark Forged Certified Mobile Mechanic LLC**. The web application provides a modern, fast, and responsive interface designed to showcase professional mobile automotive repair services, highlight the benefits of on-site service, display a portfolio of completed work, and allow clients to book appointments directly.

### 🌟 Key Features
- **On-Location Scheduling**: An interactive, responsive appointment booking form.
- **Service Showcases**: Clear details on full-service offerings, including Brakes, Suspension, Battery, Starter, Alternator, Engine, and Transmission repairs.
- **Service Areas**: Geographic details showing where service is available.
- **Visual Portfolio**: Before & After sliders and a filtered gallery of completed automotive work.
- **ASE Certified Branding**: Clear representation of trust, transparent pricing, and direct communication.

---

## 💻 Tech Stack

The application is built using a modern, lightweight frontend stack:
- **Core Framework**: [React 18](https://react.dev/)
- **Build Tool**: [Vite](https://vite.dev/)
- **Routing**: [React Router DOM v6](https://reactrouter.com/)
- **Styling**: [Tailwind CSS v3](https://tailwindcss.com/) & [PostCSS](https://postcss.org/)
- **Icons**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

Follow these steps to run the project locally on your machine.

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) and `npm` installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/oracleteam29-eng/mark-forged.git
   cd mark-forged
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Development

To start the local development server:
```bash
npm run dev
```
Open your browser and navigate to the address shown in your terminal (typically `http://localhost:5173`).

### Production Build

To compile the application into static files for production deployment (creates the `/dist` directory):
```bash
npm run build
```

To preview the production build locally:
```bash
npm run preview
```

---

## 📂 Project Structure

```text
mark-forged/
├── public/              # Static assets (images, icons)
├── src/
│   ├── components/      # Reusable UI elements (Navbar, Footer, etc.)
│   ├── pages/           # Page components (Home, About, Services, Book, etc.)
│   ├── constants.js     # Centralized brand, service, and testimonial data
│   ├── App.jsx          # Main application component & routes
│   ├── index.css        # Tailwind and global styles
│   └── main.jsx         # Application entry point
├── package.json         # Project metadata and dependencies
├── tailwind.config.js   # Tailwind utility configuration
├── vite.config.js       # Vite bundler configuration
└── README.md            # This documentation file
```

---

## 🔒 License & Copyright

© 2025 Mark Forged Certified Mobile Mechanic LLC. All Rights Reserved.  
All content, design systems, and custom assets are trademarked and licensed under the respective owner.
