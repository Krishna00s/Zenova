---
name: responsive-multidevice-engineering
description: Engineering guidelines for multi-device responsiveness across Mobile (375px+), Tablet (768px+), Laptop/Desktop (1280px+), and 4K Displays (1920px+). Includes layout grid strategies, fluid typography, touch target standards, and zero overflow validation.
---

# Responsive Multi-Device Engineering Skill Guide

This skill ensures every component, page, and image layout functions flawlessly across every device screen size without visual breakages, text truncation, or horizontal scroll overflow.

---

## 1. Responsive Device Breakpoints

Zenova uses Tailwind CSS v4's mobile-first breakpoint ladder:

| Breakpoint | Target Screen Width | Target Devices | Grid Strategy |
| :--- | :--- | :--- | :--- |
| `base` | `< 640px` | Mobile (375px - 639px) | 1 Column Layout (`grid-cols-1`) |
| `sm` | `640px+` | Large Mobile / Small Tablet | 2 Column Grid (`sm:grid-cols-2`) |
| `md` | `768px+` | Tablets / iPad Portrait | 2-3 Column Grid (`md:grid-cols-3`) |
| `lg` | `1024px+` | Laptops / iPad Landscape | Asymmetric 12-Column Grid (`lg:grid-cols-12`) |
| `xl` | `1280px+` | Desktop Monitors | Max-width container (`max-w-7xl mx-auto`) |
| `2xl` | `1536px+` | 4K Displays & TVs | Ultra-wide padded container |

---

## 2. Layout Grid Adaptation Rules

### Asymmetric Hero & Feature Split
For Hero, Feature Showcases, and Contact sections:
```tsx
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
  {/* Narrative Left */}
  <div className="lg:col-span-6 space-y-5">
    {/* Content */}
  </div>
  {/* Visual Right */}
  <div className="lg:col-span-6 relative">
    {/* Media Asset */}
  </div>
</div>
```

### 4-Card Capability & Feature Grids
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
  {/* 4 Cards collapse gracefully from 4 cols -> 2 cols -> 1 col */}
</div>
```

---

## 3. Touch Target & Mobile Usability Standards

1. **Touch Targets**: All buttons, links, and form elements must have a minimum touch area of `44px x 44px` on mobile devices.
2. **Mobile Menu**: Floating pill navbar must collapse into a backdrop-blurred glassmorphic drawer on screens `< 768px`.
3. **Typography Scaling**:
   * Hero Headlines: `text-4xl sm:text-5xl lg:text-6xl`
   * Section Titles: `text-3xl sm:text-4xl lg:text-5xl`
   * Body Copy: `text-xs sm:text-sm md:text-base`
4. **Zero Horizontal Overflow**: All root containers must enforce `overflow-hidden` or `max-w-full` to prevent horizontal scrollable bleed.
