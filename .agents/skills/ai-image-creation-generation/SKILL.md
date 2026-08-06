---
name: ai-image-creation-generation
description: Prompt engineering guidelines, camera angles, color grading, lighting specifications, Octane render quality tags, and directory management for generating high-definition 3D renders and editorial photography using generate_image tool.
---

# AI Image Creation & Generation Skill Guide

This skill governs the creation, prompt styling, asset placement, and optimization of AI-generated visuals across Zenova.

---

## 1. Prompt Engineering Framework for Zenova Assets

Every image generated for Zenova must strictly adhere to the brand's visual identity:
* **Color Palette Tokens**: Soft White background, Warm Lavender atmospheric haze, Deep Violet accents, Muted Lavender highlights.
* **Lighting**: Studio soft lighting, natural sunlight with soft window shadows, ambient glow.
* **Aesthetic**: Octane render 8K for 3D art; authentic editorial documentary photography for human sections.

---

## 2. Standard Prompt Formulas

### 3D Render Assets (Products & Showcases)
```text
3D render of [SUBJECT], [PEDESTAL/ENVIRONMENT], surrounded by blooming purple lavender flowers, studio lighting, deep violet and soft lavender background, octane render 8k
```
* **Hero Asset**: `High-resolution 3D render of a lush purple lavender field at sunrise with soft morning light, featuring glossy metallic deep violet coins and brand seal emblems standing among flowers, calm minimalist architectural aesthetic, studio lighting, soft purple and warm white tones, octane render 8k`
* **3D Laptop Asset**: `3D render of a sleek modern metallic laptop open on a soft purple pedestal surrounded by delicate purple lavender flowers, displaying a dark modern web analytics application dashboard on screen, studio lighting, soft purple and warm white tones, octane render 8k`
* **3D Cinema Camera Asset**: `3D render of a high-end professional cinema video camera on a tripod amidst a bed of purple lavender flowers, studio lighting, deep violet and soft lavender background, octane render 8k`
* **3D Smartphone Asset**: `3D render of a modern smartphone resting in a bed of purple lavender flowers, displaying a colorful social media shopping app on screen, soft purple ambient lighting, octane render 8k`
* **3D Megaphone Asset**: `3D render of a metallic purple loudspeaker megaphone surrounded by floating 3D social media icons in a lavender field, studio lighting, octane render 8k`
* **3D Lavender Vase Asset**: `3D render of a purple tinted glass vase filled with blooming purple lavender stems, standing on a soft white pedestal, clean minimalist background, soft purple lighting, octane render 8k`

### Editorial Photography Assets (Process & Human Trust)
```text
Editorial photography of [HUMAN SUBJECT / ENVIRONMENT], [ACTION], soft natural window lighting, lavender ambient tone, calm mood, 8k
```
* **Understand Step**: `Editorial photography of a developer working thoughtfully on a laptop at a warm wooden desk, soft natural lighting, purple tinted shadows, calm mood, 8k`
* **Plan Step**: `Editorial photography close-up of a designer's hand holding a pen sketching wireframe layouts on paper in a notebook, soft natural lighting, lavender ambient tone, calm mood, 8k`
* **Create Step**: `Editorial photography of a computer monitor displaying a clean modern purple UI interface design in a minimalist workspace, soft lighting, 8k`
* **Launch Step**: `Editorial photography of a female developer reviewing a website interface on a monitor in a quiet modern studio office, natural window light, purple shadows, calm atmosphere, 8k`
* **Evolve Step**: `Editorial architectural photography of a lush green indoor plant casting soft dramatic sun shadows on a warm white and lavender wall, calm aesthetic, 8k`

---

## 3. Directory Management Protocol

All generated images must be copied directly from artifacts output path to `/public/media/`:
```powershell
Copy-Item -Path '<ARTIFACT_PATH>' -Destination 'c:\Users\krish\OneDrive\Desktop\Zenova Enterprises\Zenova Enterprises\public\media\<ASSET_NAME>.jpg' -Force
```
Then referenced in components as `/media/<ASSET_NAME>.jpg`.
