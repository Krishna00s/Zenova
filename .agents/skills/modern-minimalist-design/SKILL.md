---
name: modern-minimalist-design
description: Master guide for modern minimalist web aesthetics, editorial typography hierarchy, color harmony, negative space balance, soft glassmorphism, and premium UI interactions for luxury digital agency platforms.
---

# Modern Minimalist Design Skill Guide

This skill governs the aesthetic principles, editorial typography rules, visual hierarchy, spacing discipline, and interaction design across the Zenova platform.

---

## 1. Core Aesthetic Principles

### The Editorial Atmosphere
Zenova is designed as a **paced editorial publication**, not a cluttered collection of stacked landing page widgets.
* **Silence & Whitespace**: Spacing is an active design element. Never overcrowd containers.
* **Calm Elegance**: Use soft contrast backgrounds (`#FAF9F6` and `#F3EEF8`) rather than harsh stark whites or dark neon clutter.
* **Restrained Palette**:
  * **Primary Background**: `Soft White` (`#FAF9F6`)
  * **Secondary Background**: `Warm Lavender` (`#F3EEF8`)
  * **Primary Brand Accent**: `Deep Violet` (`#3B1F52`)
  * **Muted Tone**: `Muted Lavender` (`#E2D7ED`)
  * **Text Primary**: `Near Black` (`#121113`)
  * **Text Muted**: `Slate Charcoal` (`#5C5862`)

---

## 2. Editorial Typography Rules

### Font Triad
1. **Headings & Accents**: `Cormorant Garamond` (Editorial Serif, italic accent styling for key words).
2. **Body & Interface**: `Plus Jakarta Sans` (Clean, highly legible geometric sans).
3. **Badges & Metrics**: `JetBrains Mono` (All-caps uppercase metadata tags).

### Headline Composition Technique
Always pair a bold sans/editorial statement with a **single line of Cormorant Garamond italic serif** in Deep Violet:
```tsx
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-editorial font-bold text-near-black leading-[1.08]">
  Ideas that Build Brands.{' '}
  <span className="italic font-normal text-deep-violet block">
    Systems that Drive Growth.
  </span>
</h1>
```

---

## 3. Spacing & Padding Discipline

### Padding Thresholds
* **Section Padding**: `py-20 md:py-28` (Never exceed `py-36` to avoid empty disconnects; never drop below `py-12`).
* **Container Width**: `max-w-7xl px-6 sm:px-12`
* **Card Gaps**: `gap-6` or `gap-8`
* **Text-to-Card Spacing**: `space-y-4` or `space-y-5`

---

## 4. Micro-Animations & Card Depth

### Interactive Card Lift Rule
All clickable cards must feature responsive, tactile hover micro-interactions:
```tsx
className="group bg-soft-white rounded-3xl p-6 border border-muted-lavender/60 shadow-xs hover:shadow-2xl hover:border-deep-violet/40 hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500"
```

### Image Depth Scale Rule
Images inside cards should subtly expand when the parent card is hovered:
```tsx
<img
  src={imageSrc}
  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
/>
```
