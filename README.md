# 🌿 Earth Botanical Portfolio with Apple Liquid Glass

An ultra-premium, earth-themed portfolio designed in HTML, CSS, and vanilla JavaScript inspired by **whypriyanshu.in**, featuring an organic dark forest aesthetic, lush emerald greenery, bioluminescent spore canvas, and a custom **Apple Glass round cursor**.

---

## ✨ Key Highlights & Features

### 1. 🍃 Earth & Botanical Theme
- **Obsidian Forest Palette**: Rich dark base tones (`#030805`, `#06140b`) with vibrant emerald (`#10b981`), mint (`#34d399`), and luminous leaf accents (`#6ee7b7`).
- **Ambient Spore Canvas**: Interactive particle canvas with floating fireflies and botanical spores that gently drift and react to mouse movement.
- **Cinematic Forest Video**: Atmospheric background video loop with dark gradient overlay.
- **Generative Forest Ambiance (Web Audio API)**: Click the 🌿 sound button in the navbar to toggle real-time procedural forest breeze & foliage rustling generated directly in the browser with zero external audio files.

### 2. 🔍 Apple Glass Round Cursor
- **Default State**: A crisp, round white dot (`#ffffff`) with a soft emerald glow that tracks your mouse with smooth spring-lerp physics.
- **Over Text (`h1, h2, h3, h4, p, span, li, blockquote`)**: The cursor smoothly expands and transforms from solid white into a **transparent Apple Glass lens** (`backdrop-filter: blur(14px)`, `rgba(255, 255, 255, 0.08)`, specular light reflection arc, and white glass rim border).
- **Over Non-Text**: Smoothly morphs back into the solid white circle.
- **Touch Devices**: Automatically disables on touchscreens for native mobile ergonomics.

### 3. 👤 Dynamic Name & Target Position Customizer
- Click the **"Edit Info"** pill in the top navbar or mobile menu to open the real-time customizer modal.
- Type any name and target position, or pick from ready presets:
  - `Aryan Singh` — *Creative Video Editor & Visual Storyteller*
  - `PЯIYANSHU` — *High-Retention Video Editor | Ideora Founder*
  - `Aryan Singh` — *Creative Developer & UI Engineer*
  - `Aryan Singh` — *Cinematic Post-Production & Colorist*
- Persists instantly in your browser via `localStorage` and updates every section across the page.

### 4. 🗂 Complete Section Architecture (Modeled after whypriyanshu.in)
1. **Floating Glass Navbar**: Live availability status badge ("Available"), quick links, audio toggle, customizer, and booking CTA.
2. **Hero Section**: Huge typography (`Scroll-Stopping Edits.`), nature badge, dual glass buttons (`Explore Work`, `See Testimonials`).
3. **Verified Stats Strip**: Animated counters (100M+ Impressions, 50M+ Reach, 4+ Years, 150+ Videos Delivered).
4. **About The Creator**: Editorial manifesto cards with glowing glass borders.
5. **The Workflow**: 4-phase methodology (Storyboarding, Dynamic Pacing, Color & Sound, Delivery & Scale).
6. **Core Offerings**: Long Form Content, Short Form Mastery, Motion Graphics & Visual Effects.
7. **Selected Works (4K Showcase)**: Filterable grid (All, Long Form, Verticals, Motion) with interactive play modal.
8. **Verticals (9:16 Reels)**: Smartphone-aspect cards with view counters and previews.
9. **Tool Stack**: Liquid-glass tiles (Premiere Pro, After Effects, DaVinci Resolve, Photoshop & Sound).
10. **Algorithm Strategy & Retention Engine**: Retention rate benchmarks and journey overview.
11. **Client Reviews (Infinite Marquee)**: Smooth continuous review slider with 5-star ratings.
12. **IDEORA Community Sanctuary**: Creator collective spotlight with Discord CTA.
13. **FAQ Accordion**: Interactive questions & answers with smooth expand/collapse.
14. **Discovery Call Booking**: Calendly meeting scheduler card with strategy perks.
15. **Footer**: Social handles (Instagram, Discord, Email), live availability pill, back-to-top button.

---

## 🚀 How to Run

Simply open `index.html` in any web browser:
```bash
open index.html
```
Or serve locally via Python:
```bash
python3 -m http.server 8080
# then open http://localhost:8080 in your browser
```

---

## 🛠 Customizing Your Details Permanently

You can either:
1. Use the in-page **"Edit Info"** button (saved in your browser).
2. Or directly edit the text in `index.html`:
   - Name: Search for `Aryan Singh` or `hero-display-name`
   - Role: Search for `Creative Video Editor & Visual Storyteller`
   - Email: Search for `priyanshux4@gmail.com`
   - Calendly: Search for `https://calendly.com/priiyaansshuu/30min`
   - Instagram / Discord links in the footer and community sections.

