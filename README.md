# Jayant Web & AI Systems — Creative Technology & AI Engineering Studio

> High-performance digital products, custom AI agentic workflows, automation pipelines, and modern web experiences engineered for ambitious businesses.

**Live Benchmark Standard:** [Clay.global](https://clay.global/)  
**Primary Repository:** [https://github.com/JayantOlhyan/jayant-systems-2](https://github.com/JayantOlhyan/jayant-systems-2)

---

## 🚀 Overview

Jayant Web & AI Systems is a specialized creative technology and AI engineering practice led by Jayant Olhyan. The platform combines cutting-edge generative AI, full-stack software architecture, and high-craft motion design (GSAP & Lenis) to deliver intelligent digital systems with zero unnecessary complexity.

---

## 🛠️ Technology Stack

- **Framework:** [Next.js 16 (App Router)](https://nextjs.org/)
- **Core Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/) with Vanilla CSS design tokens
- **Smooth Scroll:** [Lenis](https://lenis.darkroom.engineering/)
- **Motion & Scroll Triggers:** [GSAP 3.15](https://gsap.com/) & ScrollTrigger
- **Icons & UI Primitives:** Lucide React & `@base-ui/react`
- **Language:** TypeScript 5

---

## 📐 Architecture & Key Components

```
src/
├── app/
│   ├── globals.css                # Centralized color tokens, typography clamp scale, spacing system
│   ├── layout.tsx                 # Core app layout, SEO JSON-LD schema, Lenis SmoothScrollProvider
│   ├── page.tsx                   # Studio Homepage assembly
│   ├── about/                     # Solo founder narrative, credentials, development principles
│   ├── services/                  # Capabilities matrix (AI Systems, Automation, Products, Experiences)
│   ├── portfolio/                 # Immersive project showcase grid & case study modals
│   ├── pricing/                   # Investment models & enterprise engagement plans
│   ├── contact/                   # High-conversion consultation & project proposal forms
│   └── sitemap.ts                 # Dynamic sitemap index mapping 87 prerendered static routes
├── components/
│   ├── SmoothScrollProvider.tsx   # Lenis + GSAP ScrollTrigger ticker synchronization
│   ├── CustomCursor.tsx           # Pointer-fine desktop custom cursor with dynamic hover states
│   ├── Magnetic.tsx               # Proximity-based magnetic attractor physics wrapper
│   ├── Navbar.tsx                 # Auto-hiding header with circular overlay mobile navigation
│   ├── Footer.tsx                 # Editorial studio footer end-cap
│   ├── animations/                # Reusable GSAP motion primitives
│   │   ├── AnimatedHeading.tsx    # ScrollTrigger line/word mask reveal component
│   │   └── MaskedImage.tsx        # Clip-path reveal & image parallax component
│   └── sections/                  # Homepage editorial sections
│       ├── Hero.tsx               # Studio positioning statement & call to action
│       ├── HeroVisual.tsx         # Interactive system visualizer graph
│       ├── PortfolioSection.tsx   # Scroll-linked full-bleed project showcases
│       ├── Capabilities.tsx       # Interactive 4-pane system capabilities accordion
│       ├── Philosophy.tsx         # Connected nodes operational architecture
│       ├── Founder.tsx            # Founder profile (Jayant Olhyan) & verifiable academic records
│       ├── FAQ.tsx                # Client logistics accordions
│       └── CTA.tsx                # Conversional footer CTA banner
└── data/
    ├── projects.ts                # Structured project metadata, case study details, & metrics
    └── content.ts                 # Studio capabilities, FAQs, and engagement packages
```

---

## 💻 Local Development Setup

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/JayantOlhyan/jayant-systems-2.git
   cd jayant-systems-2
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3001](http://localhost:3001) in your browser.

4. **Build Production Bundle:**
   ```bash
   npm run build
   ```

5. **Start Production Server:**
   ```bash
   npm run start
   ```

---

## 🔒 Security & Environment Credentials

- All public contact triggers utilize pre-qualified URL parameters (`https://cal.com/jayant-web-and-ai-systems/strategy-call` & WhatsApp Cloud templates).
- No API keys or secrets are stored in client-side bundles. Environment variables must be placed in `.env.local`.

---

## 📄 License & Ownership

© 2026 Jayant Web & AI Systems. All rights reserved. Founded and operated by **Jayant Olhyan**.
