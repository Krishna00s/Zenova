# Zenova Platform Architecture

Version: 0.1.0 (Frozen Architecture)
Last Updated: July 2026

---

## 1. Architectural Vision & Core Design Principles

Zenova is an enterprise digital platform designed for long-term growth, high maintainability, and calm editorial aesthetics. The platform's architecture is guided by four non-negotiable principles:

1. **Domain-Driven Modular Isolation**: Features and service verticals must own their components, data layer, galleries, and animations inside localized domains rather than scattering code across generic directories.
2. **API Abstraction Layer (`src/api/`)**: Pages and UI components never call Supabase or database SDKs directly. All data-fetching, mutation, authentication, and contact submission calls are mediated through clean API service wrappers.
3. **Configuration-Driven Design Tokens**: Styling choices—specifically typography, color palettes, spacing rhythm, and animation presets—are abstracted into central token layers so brand shifts require changing single configuration variables without touching individual components.
4. **Decoupled Architecture**: Presentation, business logic, API endpoints, motion primitives, and data models (Supabase CMS schema interfaces) are completely decoupled.

---

## 2. Directory & Folder Topology

The folder structure is organized around domain boundaries and scalable growth:

```text
Zenova Enterprises/
├── docs/
│   ├── Architecture.md           <-- System Blueprint & Modular Principles (FROZEN v0.1.0)
│   ├── Start_here.md             <-- Rebranding & Editorial Identity
│   ├── Design_Language.md        <-- Calm Emotion & Visual Specs
│   ├── How_We_Think.md           <-- Story-First Content Chaptering
│   ├── Platform_Architecture.md  <-- Ecosystem Blueprint (Public + Private)
│   ├── TECH_STACK.md             <-- Selected Frameworks & Rationale
│   └── Build_Log.md              <-- Project Memory & Milestones
│
├── design/
│   └── references/               <-- Visual Target References & Inspirations
│       ├── homepage/
│       ├── web-development/
│       ├── video-editing/
│       ├── ad-creation/
│       ├── paid-promotions/
│       └── future/
│
├── public/                       <-- Static Assets (Publicly Served)
│   ├── projects/                 <-- Project thumbnails & case study media
│   ├── services/                 <-- Service-specific artwork & previews
│   ├── logos/                    <-- Client brand mark SVGs & vectors
│   ├── media/                    <-- Background videos & general imagery
│   └── icons/                    <-- Favicons & custom UI icons
│
└── src/
    ├── api/                      <-- Central API Abstraction Layer (Decoupled from DB)
    │   ├── projects.ts           <-- Fetch, filter, and search projects & case studies
    │   ├── services.ts           <-- Retrieve service metadata & showcase details
    │   ├── auth.ts               <-- User authentication, session guards, RBAC roles
    │   └── contact.ts            <-- Submit lead inquiries & booking requests
    │
    ├── animations/               <-- Centralized Motion Architecture (GSAP)
    │   ├── fade.ts               <-- Staggered & simple opacity transitions
    │   ├── reveal.ts             <-- Heading masks & text split reveals
    │   ├── parallax.ts           <-- Scroll-driven depth parallax triggers
    │   ├── scroll.ts             <-- Lenis & ScrollTrigger observer defaults
    │   └── timeline.ts           <-- Reusable complex sequence builders
    │
    ├── assets/                   <-- Internal bundled assets (SVG, vector marks)
    │
    ├── components/               <-- Shared Base UI Components
    │   ├── ui/                   <-- Reusable UI primitives (Button, Badge, etc.)
    │   ├── layout/               <-- Container, Section, Grid layouts
    │   └── navigation/           <-- Floating Navbar, Footer, Mobile Drawer
    │
    ├── constants/                <-- Global System Constants
    │   ├── routes.ts             <-- Type-safe route definitions
    │   └── theme.ts              <-- Color palettes, breakpoint tokens
    │
    ├── context/                  <-- System & Theme Context Providers
    │
    ├── hooks/                    <-- Shared Custom React Hooks
    │   ├── useScroll.ts
    │   └── useGSAP.ts
    │
    ├── lib/                      <-- Core Libraries & External Wrappers
    │   ├── cn.ts                 <-- Class merging utility (clsx + tailwind-merge)
    │   ├── imageLoader.ts        <-- Image optimization & responsive srcset helper
    │   └── supabase.ts           <-- Lazy Supabase database & auth client
    │
    ├── pages/                    <-- Application Views & Service Domains
    │   ├── LandingPage.tsx       <-- Main Editorial Entry Point
    │   ├── AboutPage.tsx         <-- Philosophy & Story View
    │   ├── WorkPage.tsx          <-- Searchable Project Archive
    │   ├── ContactPage.tsx       <-- Booking & Lead Capture Experience
    │   ├── LoginPage.tsx         <-- Authenticated Portal Access
    │   ├── NotFoundPage.tsx      <-- 404 Route Catch
    │   │
    │   └── services/             <-- Domain-Isolated Service Hubs
    │       ├── WebDevelopment/   <-- Modular Service Hub
    │       │   ├── index.tsx
    │       │   ├── components/
    │       │   ├── data/
    │       │   ├── animations/
    │       │   └── gallery/
    │       ├── VideoEditing/
    │       │   ├── index.tsx
    │       │   ├── components/
    │       │   ├── data/
    │       │   ├── animations/
    │       │   └── gallery/
    │       ├── AdCreation/
    │       │   ├── index.tsx
    │       │   ├── components/
    │       │   ├── data/
    │       │   ├── animations/
    │       │   └── gallery/
    │       └── PaidPromotions/
    │           ├── index.tsx
    │           ├── components/
    │           ├── data/
    │           ├── animations/
    │           └── gallery/
    │
    ├── styles/
    │   └── globals.css           <-- CSS Variables, Font Families, Tailwind Layering
    │
    ├── types/                    <-- CMS Data Models & Contracts
    │   ├── cms.ts                <-- Project, Service, Category, Media, User, Message
    │   └── navigation.ts         <-- Route & Menu Item definitions
    │
    └── utils/                    <-- Pure Utility Helpers
```

---

## 3. Key Architectural Decisions & Rationale

### A. Central API Abstraction Layer (`src/api/`)
To protect page components from direct database dependencies:
- Page components invoke functions from `src/api/` (`getProjects()`, `getServiceBySlug()`, `signIn()`, `submitContactForm()`).
- The `src/api/` wrappers interact with Supabase (or fallback mock datasets during development) and return typed contracts matching `src/types/cms.ts`.
- This ensures zero UI changes when database schemas or backend providers evolve.

### B. Centralized Typography Abstraction
Font families are mapped to CSS custom variables (`--font-editorial`, `--font-sans`, `--font-mono`) in `src/styles/globals.css`. Swapping a font family only requires altering the single variable reference or Google Font import.

### C. Domain-Isolated Service Architecture
Each service (`WebDevelopment`, `VideoEditing`, `AdCreation`, `PaidPromotions`) functions as a micro-application owning its specific interactive components, showcase galleries, custom data models, and specialized GSAP timelines.

### D. Motion Architecture (`src/animations/`)
Reusable motion primitives (`fade`, `reveal`, `parallax`, `scroll`, `timeline`) are extracted into pure functional helpers. React components register ref targets and invoke motion helpers cleanly inside `useGSAP` hooks.

### E. Image Optimization Helper (`src/lib/imageLoader.ts`)
Standard contract for computing optimal image dimensions, generating responsive `srcSet` attributes, providing fallback placeholders during load states, and mapping static asset paths from `/public/`.

### F. Database-Ready CMS Data Models (`src/types/cms.ts`)
Strict TypeScript interfaces for `User`, `Profile`, `Service`, `Project`, `Category`, `MediaAsset`, `Message`, and `ContactSubmission` defined prior to database table creation.

---

## 4. Git & Release Workflow

1. **Active Working Branch**: `development`
2. **Production Branch**: `main`
3. **Commit Standards**: Conventional, semantic commit messages (e.g., `chore: initialize Zenova platform architecture`).
4. **Milestone Target**: `v0.1.0` -> `v0.2.0` -> `v0.3.0`.
