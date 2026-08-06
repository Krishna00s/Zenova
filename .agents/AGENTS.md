# Zenova Agent System & Customizations

This workspace is configured with custom agent skills and operational rules for the Zenova platform.

---

## Workspace Skills Registry

The following skills are installed under `.agents/skills/`:

1. **`stitch-integration`** ([SKILL.md](file:///c:/Users/krish/OneDrive/Desktop/Zenova%20Enterprises/Zenova%20Enterprises/.agents/skills/stitch-integration/SKILL.md))
   - Directives for StitchMCP API server tools (`create_project`, `generate_screen_from_text`, `edit_screens`, `create_design_system`, `apply_design_system`).
2. **`modern-minimalist-design`** ([SKILL.md](file:///c:/Users/krish/OneDrive/Desktop/Zenova%20Enterprises/Zenova%20Enterprises/.agents/skills/modern-minimalist-design/SKILL.md))
   - Minimalist editorial design techniques, typography triad (`Cormorant Garamond` serif, `Plus Jakarta Sans` body, `JetBrains Mono` badges), color palette tokens (`#FAF9F6`, `#F3EEF8`, `#3B1F52`), and card depth hover rules.
3. **`responsive-multidevice-engineering`** ([SKILL.md](file:///c:/Users/krish/OneDrive/Desktop/Zenova%20Enterprises/Zenova%20Enterprises/.agents/skills/responsive-multidevice-engineering/SKILL.md))
   - Multi-device responsive engineering rules across Mobile (375px+), Tablet (768px+), Laptop/Desktop (1280px+), and 4K Displays (1920px+).
4. **`ai-image-creation-generation`** ([SKILL.md](file:///c:/Users/krish/OneDrive/Desktop/Zenova%20Enterprises/Zenova%20Enterprises/.agents/skills/ai-image-creation-generation/SKILL.md))
   - Advanced prompt formulas, Octane 3D render quality tags, studio lighting specifications, and high-res PNG image asset management for `generate_image`.
5. **`zenova-service-ecosystem`** ([SKILL.md](file:///c:/Users/krish/OneDrive/Desktop/Zenova%20Enterprises/Zenova%20Enterprises/.agents/skills/zenova-service-ecosystem/SKILL.md))
   - Complete domain specs, section-by-section design structures, image asset mapping tables, and conversion strategies for Web Development, Video Editing, Ad Creation & Distribution, Paid Promotions & Collaborations, and All-in-One Growth Solutions.

---

## Core Operational Directives

* **Design Target Rule**: Reference images `homepage_referenceImageV1.png` and `homepage_v2_reference.png` are the absolute design specifications for the platform.
* **Backend Architecture**: Supabase JS SDK abstraction via `src/api/` (`projects.ts`, `services.ts`, `auth.ts`, `contact.ts`). Do NOT introduce custom Node/Express servers.
* **Git Workflow**: Primary active branch `development`, release branch `main`.
* **Zero Build Error Rule**: Always run `npm run build` to verify 0 TypeScript/Vite bundling errors before finalizing work.
