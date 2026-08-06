---
name: stitch-integration
description: Complete workflow guide for interacting with StitchMCP server, generating AI screen designs, creating and applying design systems, editing screens, and mapping Stitch outputs into Zenova's React + Tailwind v4 + GSAP production architecture.
---

# Stitch Integration Skill Guide

This skill provides step-by-step instructions for leveraging the Stitch MCP server to design, iterate, and apply design systems and screen mockups directly within the Zenova platform.

---

## 1. Available StitchMCP Tools & Signatures

StitchMCP is available via the `call_mcp_tool` tool runner under `ServerName: "StitchMCP"`.

| Tool Name | Purpose | Key Arguments |
| :--- | :--- | :--- |
| `create_project` | Initialize a new Stitch project | `{ "title": "Zenova Web Platform" }` |
| `get_project` | Retrieve project details | `{ "project_id": "proj_..." }` |
| `list_projects` | List active projects | `{}` |
| `generate_screen_from_text` | Generate a new UI screen mockup from text prompt | `{ "project_id": "...", "prompt": "Minimalist editorial landing page..." }` |
| `get_screen` | Fetch screen schema & layout | `{ "screen_id": "screen_..." }` |
| `edit_screens` | Edit existing screens with text instructions | `{ "screen_ids": ["..."], "prompt": "Increase padding and update color tokens..." }` |
| `generate_variants` | Generate alternative design variants | `{ "screen_id": "...", "prompt": "Create 3 dark mode variants..." }` |
| `create_design_system` | Define a brand design system | `{ "name": "Zenova Editorial", "colors": {...}, "typography": {...} }` |
| `upload_design_md` | Upload a Markdown design specification | `{ "project_id": "...", "design_md": "..." }` |
| `apply_design_system` | Apply a design system to a project | `{ "project_id": "...", "design_system_id": "..." }` |

---

## 2. Standard Workflow for Designing Zenova UI Screens

### Step 1: Create or Load Project
```json
{
  "ServerName": "StitchMCP",
  "ToolName": "create_project",
  "Arguments": {
    "title": "Zenova Platform V2"
  }
}
```

### Step 2: Define & Apply Zenova Editorial Design System
Use Zenova's core design tokens:
* **Background**: Soft White (`#FAF9F6`) & Warm Lavender (`#F3EEF8`)
* **Primary Accent**: Deep Violet (`#3B1F52`)
* **Supporting**: Muted Lavender (`#E2D7ED`)
* **Text**: Near Black (`#121113`)
* **Fonts**: `Cormorant Garamond` (Editorial Serif), `Plus Jakarta Sans` (Clean Body), `JetBrains Mono` (Technical Badges)

```json
{
  "ServerName": "StitchMCP",
  "ToolName": "create_design_system",
  "Arguments": {
    "name": "Zenova Editorial Identity",
    "colors": {
      "primary_background": "#FAF9F6",
      "secondary_background": "#F3EEF8",
      "accent_primary": "#3B1F52",
      "accent_muted": "#E2D7ED",
      "text_main": "#121113"
    },
    "typography": {
      "heading_font": "Cormorant Garamond",
      "body_font": "Plus Jakarta Sans",
      "mono_font": "JetBrains Mono"
    }
  }
}
```

### Step 3: Generate Screen Mockups
```json
{
  "ServerName": "StitchMCP",
  "ToolName": "generate_screen_from_text",
  "Arguments": {
    "project_id": "<PROJECT_ID>",
    "prompt": "Minimalist editorial service page for Web Development featuring a 3D laptop hero render, section checklists, metric cards, and glassmorphic lead capture form."
  }
}
```

### Step 4: Translate Stitch Layouts to Production React Code
1. Inspect Stitch layout JSON output.
2. Map UI primitives to `src/components/ui/Container.tsx`, `Section.tsx`, `Button.tsx`, `Badge.tsx`.
3. Apply Tailwind CSS v4 design tokens (`bg-soft-white`, `bg-warm-lavender`, `text-deep-violet`, `font-editorial`).
4. Attach GSAP motion reveals from `src/animations/`.

---

## 3. Best Practices
* **No Inline Code Overrides**: Always map Stitch colors directly to CSS variables defined in `src/styles/globals.css`.
* **Responsive Verification**: Ensure all generated screens adhere to Zenova's 4-tier breakpoint system (`sm: 640px`, `md: 768px`, `lg: 1024px`, `xl: 1280px`).
