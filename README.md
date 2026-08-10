# Zenova Enterprises

> Building digital experiences for businesses that have something meaningful to say.

Zenova Enterprises is a digital services platform focused on helping businesses turn their ideas, identity, and goals into meaningful digital experiences.

We work across web development, video editing, advertising, and paid promotions — combining technology, creativity, and strategy to help businesses build, communicate, and grow.

---

## About Zenova

Behind every business is someone building something meaningful.

We help bring that story to life digitally.

Zenova was built around a simple idea:

**Working together should feel simple.**

Instead of treating every project like another template or transaction, we focus on understanding what a business is trying to achieve and building the right digital experience around it.

Our work currently spans four core areas:

- **Web Development** — Modern, responsive websites and digital experiences.
- **Video Editing** — Visual storytelling, promotional content, and brand-focused video.
- **Ad Creation** — Creative advertising designed around a brand's message and audience.
- **Paid Promotions** — Campaign support, influencer collaborations, and digital promotion.

---

## What We're Building

Zenova is more than a portfolio website.

The platform is being developed into a complete system where the public website, project showcase, internal administration, client communication, and content management can eventually work together.

### Current platform

- Editorial marketing website
- Service pages
- Project showcase
- Work portfolio
- Contact system
- Responsive design across devices
- Centralized design system
- GSAP-powered interactions and motion
- Structured frontend architecture

### Planned platform

- Secure authentication
- Admin dashboard
- Project management
- Media management
- Client management
- Dynamic project publishing
- Contact submission management
- Client portal
- Transactional email
- Role-based access control
- PostgreSQL database
- Secure file storage

---

## Technology

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- GSAP
- Lucide React

### Backend

The backend is being built around a Supabase-native architecture:

- PostgreSQL
- Supabase Auth
- Supabase Storage
- Row Level Security
- Supabase Edge Functions

### Infrastructure

The project is designed around free-tier infrastructure during its initial development.

The architecture intentionally avoids unnecessary dependencies so that Zenova can grow without requiring a complete rewrite when infrastructure needs eventually increase.

---

## Architecture

Zenova follows a modular architecture designed to keep the presentation layer independent from backend implementation details.

```text
                        Zenova
                          │
             ┌────────────┴────────────┐
             │                         │
        Public Website             Admin Platform
             │                         │
             └────────────┬────────────┘
                          │
                    API / Data Layer
                          │
                       Supabase
             ┌────────────┼────────────┐
             │            │            │
         PostgreSQL      Auth       Storage
             │
             └────────────┬────────────┘
                          │
                    Edge Functions
                          │
                   External Services
```

Zenova Enterprises is currently in active development.
The frontend platform is complete and the project is transitioning into its backend implementation phase.
The next major milestone is establishing the secure backend foundation and gradually connecting the existing frontend to dynamic data.


**Philosophy**:

Zenova isn't being built to be another agency website.
It's being built as a platform around a simple belief:
Behind every business is someone building something meaningful.
We want the technology, design, and process around that person to feel clear, thoughtful, and human.

**License**:

This repository contains proprietary work belonging to Zenova Enterprises.
Unless explicitly stated otherwise, the source code, design system, branding, imagery, and other project assets may not be copied, redistributed, or commercially reused without permission.

**Zenova Enterprises**
Web • Content • Growth                   
