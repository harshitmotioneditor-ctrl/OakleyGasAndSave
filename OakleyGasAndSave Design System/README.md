# OakleyGasAndSave — Design System

A dark-mode glassmorphic design system for **OakleyGasAndSave**, a gas station & convenience store in Oakley, CA (near Highway 4). Built from the 5-page marketing site in the source repo.

- **Product type:** Single marketing website (5 pages)
- **Business:** Gas station + convenience store
- **Location voice:** Hyper-local (Oakley, Brentwood, Antioch, Highway 4, Main Street, Laurel Road)
- **Hours:** Open daily 5 AM – 11 PM
- **Tone:** Friendly-practical, neighborhood pit stop, speed + value + trust

---

## Sources

- **GitHub repo:** `harshitmotioneditor-ctrl/OakleyGasAndSave` — default branch `main`
- **Imported into:** `source/` (index.html, store.html, deals.html, fuel-services.html, contact.html, css/style.css, js/main.js, manifest.json)
- **Theme color (manifest):** `#f59e0b` on `#0d0f14`

There are no other products (no mobile app, no dashboard). This is a single-site brand.

---

## Index / Manifest

| File | What it is |
|---|---|
| `README.md` | This file — the brand guide |
| `colors_and_type.css` | All design tokens as CSS variables (`--ogs-*`) + semantic classes (`.ogs-display`, `.ogs-h1`, etc.) |
| `SKILL.md` | Agent-Skills-compatible entry point |
| `source/` | Original repo files (reference / source-of-truth) |
| `assets/` | Brand visual assets (logo marks, icon SVGs) |
| `preview/` | Small HTML cards that populate the Design System tab |
| `ui_kits/website/` | React JSX recreation of the marketing site — components + interactive `index.html` |

---

## Content Fundamentals

The copy on OakleyGasAndSave is **warm, practical, and hyper-local**. It talks *to* the driver pulling off Highway 4, not *at* a generic "customer."

### Voice & tone
- **Friendly, direct, second-person ("you").** "Pull in, fuel up, and grab what you need." "We've got you covered."
- **Neighborhood pit stop vibe.** Copy name-drops specific roads (Highway 4, Main Street, Laurel Road) and nearby towns (Antioch, Brentwood) to anchor locality.
- **Speed + value + trust** is the repeating message. "Fast fuel," "in-and-out in minutes," "prices you can count on."
- **Never salesy or hypey.** No exclamation marks in body copy, no all-caps, no corporate jargon.
- **Contractions on.** "We're here," "you're a commuter," "don't just take our word for it."

### Casing
- **Sentence case** for eyebrows rendered in CSS small-caps (`text-transform: uppercase` + `letter-spacing: 0.1em`) — in source the string is Title Case or Sentence case: "Loyalty Program", "Limited Time".
- **Title Case** for section titles: "Everything You Need, One Stop", "Today's Specials".
- **The `&` character is part of the brand**: "OakleyGas**&**Save" — the ampersand is amber (`.logo-ampersand`) while the rest is white. The `O` is also amber (`.logo-accent`).

### Section-title pattern
Most titles use a **highlighted word or phrase** in amber, created with `<span class="highlight">`:
- "Right Here in **Oakley**." (hero)
- "Earn Points. **Save Big.**"
- "Fuel Deals That **Add Up Fast**"
- "Summer Refresh **Deals**"

The highlight is a *single beat* of the sentence — the payoff word, not the whole title.

### Eyebrow → Title → Subtitle rhythm
Nearly every section follows this structure:

```
LOYALTY PROGRAM            ← .section-label (amber, uppercase, 12px)
Earn Points. Save Big.      ← .section-title (white, 32–40px, bold)
Every dollar you spend...   ← .section-subtitle (slate, 18px)
```

### Example copy snippets (lifted verbatim)
- Hero: *"Fast Fuel. Fresh Convenience. Right Here in Oakley."*
- Hero subtitle: *"Pull in, fuel up, and grab what you need — all in one quick stop. Speed, convenience, and value at the heart of Oakley, CA."*
- Deals teaser: *"Save on fuel and in-store favorites — updated regularly."*
- Testimonial: *"Best gas station in Oakley, hands down. Always clean, great prices, and the staff is super friendly."* — Maria S., Oakley, CA
- CTA banner: *"Ready to Stop By? We're open 5 AM to 11 PM, seven days a week."*

### Emoji policy
**Emoji are used** — but only as **quick-scan iconography** in fact strips and service cards (📍 🕔 📞 💳 ⛽ ☕ 🥤 🌭 🍬 🏧 🌬️ 🔥 🚗 🎰). They appear inside a colored tile, not inline in prose. **Never in body copy, headings, or CTAs.** In source code, inline SVG is used instead of emoji for nav and logo iconography. When recreating, **prefer inline SVG for structural icons** (nav, logo, form) and keep emoji **only** for the service/fact grids where they already appear.

### Punctuation
- **Em-dash (`—`) heavily** for pauses and appositive beats.
- **Decimal leading zeros** for counters: `01`, `02`, `03` via `counter(reason, decimal-leading-zero)`.

---

## Visual Foundations

### Aesthetic in one sentence
**Premium dark-mode glassmorphism with a single warm-amber accent** — think "modern app UI aesthetic applied to a gas station website," built around frosted-glass surfaces, subtle radial glows, and a confident `#f59e0b` highlight.

### Color
- **Near-black base**: `#0d0f14` (page) / `#141821` (secondary surfaces).
- **One accent, no others**: amber `#f59e0b`, with `#fbbf24` lighter and `#d97706` darker. This is the ONLY color that decorates — every button, highlight, icon tint, and glow uses it.
- **Three semantic accents**, strictly for state, never decoration: green `#22c55e` (Open Now), red `#ef4444` (Closed), blue `#3b82f6` (very subtle hero glow only).
- **Text uses slate**, not pure gray: `#f1f5f9` / `#94a3b8` / `#64748b`.

### Type
- **System font stack** — no custom webfont. `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, ...` Falls back cleanly across platforms and reads as "crisp and modern" without any license footprint.
- **Weights used:** 500 (nav links), 600 (body emphasis / labels), 700 (headings), 800 (logo, huge price numbers).
- **Monospace** is `'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono'` — present in tokens but rarely used on-page.
- **Scale jumps are generous** — `h1` leaps from 40px → 56px at `min-width: 768px`.

### Spacing
- **`rem`-based 8-step scale** (`xs`→`4xl` = 4/8/16/24/32/48/64/96px). Sections breathe with `padding: 4rem 0` default, `6rem` on `.section--lg`.
- **Max-width container: 1200px** (1320px at `1440+`). Gutter of `1.5rem` (1rem on small phones).

### Backgrounds
- **No imagery on the site currently** — `map-placeholder` is a dotted box, category-card is a glass tile with a top-to-bottom darken gradient ready to accept a photo.
- **The hero has two soft radial gradients** bleeding from the page: amber at 20%/50% and a whisper of blue at 80%/20%. Very low opacity, pointer-events: none. Creates "headlight glow" ambience without looking like a cheesy purple SaaS gradient.
- **CTA banner** uses a 135° linear gradient of amber + blue at low opacity over the secondary bg — same restrained glow vibe.
- **No textures, no patterns, no illustrations.** Clean, flat, dark.

### Cards — the defining element
The site is built on **glass cards**:
- `background: rgba(255,255,255,0.06)` over the dark bg
- `backdrop-filter: blur(16px)` (with a solid fallback `rgba(20,24,33,0.95)` when blur isn't supported)
- `border: 1px solid rgba(255,255,255,0.08)`
- `border-radius: 1rem` (16px)
- `padding: 2rem`
- On hover: `transform: translateY(-4px)`, `box-shadow: 0 8px 32px rgba(0,0,0,0.5)`, border brightens to `rgba(255,255,255,0.15)`

### Borders
- Always hairline (1px) and always white-at-low-alpha (`rgba(255,255,255,0.08)` base, `0.15` hover). Never colored outside of status chips.

### Shadows
- **Three-tier scale**, all black at varying opacity — no colored drop shadows.
- **Plus one glow**: `--shadow-glow: 0 0 20px rgba(245,158,11,0.25)` — ONLY on `.btn-primary` and the active pill in the nav. This is the signature.

### Blur / transparency
- `backdrop-filter: blur(8|16|24px)` appears on **nav (scrolled state)**, **mobile nav overlay**, **all glass cards**, **mobile CTA bar**, and the **nav-links pill**. It's the main depth cue — content scrolls *behind* these surfaces.
- Fallback solid colors are provided for every glass surface via `@supports not (backdrop-filter)`.

### Corner radii
- Chips/input icons: 8px (`sm`)
- Buttons, inputs: 12px (`md`)
- **Cards: 16px (`lg`) — the default "OGS card shape"**
- CTA banner: 20px (`xl`)
- Pills, dots, nav-links container, icon buttons: 9999px (`full`)

### Motion
- **Easing: plain `ease`** (not cubic-bezier). Three durations: 150ms / 250ms / 400ms.
- **Hover: `translateY(-2px)` on buttons, `-4px` on cards.** Amber buttons also brighten their glow on hover.
- **Scroll-in pattern**: `opacity: 0; transform: translateY(24px)` → visible when `.is-visible` class added by IntersectionObserver. Stagger on child cards at 80ms intervals up to child 8.
- **`pulse` keyframe** used on status dots (2s ease-in-out infinite, 100% → 50% opacity).
- **Reduced-motion is fully respected** — all transitions collapse to 0.01ms and scroll animations show content immediately.

### Hover & press states
- **Buttons**: `-2px` lift + lighter accent on primary, glass brightens on secondary.
- **Cards**: `-4px` lift + lg shadow + brighter border.
- **Links inline in prose**: `--accent-light` → `--accent` on hover, no underline.
- **Nav pill (active)**: amber bg + amber glow shadow.
- **No dedicated press/active state** — transitions handle it via transforms returning.

### Layout
- **Sticky/fixed**: nav bar (top, full-width, glassy when scrolled), mobile CTA bar (bottom, glass, hides when footer is in view), mobile menu overlay.
- **Grid**: 2/3/4-column at breakpoints 768/1024. Services grid on home is 2→3→4 col.
- **Breakpoints**: 479 / 768 / 1024 / 1440.

### Figures and imagery (current state)
- The site ships with **zero photography** at the moment — placeholders are CSS-only (dotted map box, glass tiles). When imagery is added, treat it as a **warm, golden-hour, slightly-cool-shadowed photo** to match the amber/slate palette — never fully-saturated stock. Apply `filter: brightness(0.85) contrast(1.1) saturate(0.8)` as the map iframe already does.

### Protection gradient / capsule pattern
- Category cards use a **bottom-up protection gradient** (`linear-gradient(to top, rgba(13,15,20,0.9), transparent)`) to keep text legible over imagery. When photos are added, this is the standard technique.
- **Capsules** (pills) are used for: nav links container, active nav link, status bar, badges.

---

## Iconography

### System
- **Feather / Lucide-style stroke SVGs, inline in JS**, at either 14/16/22/28px. Stroke-width 2 (2.5 on smaller icons for visual weight), `stroke-linecap: round`, `stroke-linejoin: round`. `fill: none`. Color inherits via `currentColor`.
- Examples already in the codebase: a **stacked-layers "OGS" logomark** (three chevron-layers, like a sandwich), **phone handset**, **paper-airplane** (for Directions CTA), **hamburger** (custom 3-span DOM, not SVG).
- When you need more icons, **use Lucide from CDN** (`https://unpkg.com/lucide-static@latest/icons/<name>.svg`) — same visual vocabulary as the in-repo SVGs. Document any substitutions.

### Emoji
- **Used only in quick-fact strips and service-card tiles** (see `assets/icons/emoji-usage.md` for the full inventory). Kept inside tinted amber backgrounds (`rgba(245,158,11,0.1)`, 56×56 rounded-md tile) so they read as icons, not as text.
- **Never used in prose, headings, or CTAs.**

### Unicode glyphs as icons
- **Star glyph `★` (`&#9733;`)** for testimonial ratings — rendered amber at `--text-lg`.
- **Arrow glyphs** (`&rarr;`) inside "View Deal →" links.
- **Middle dots** (`&middot;`) as list separators in footer/status: "Open Now · Until 11:00 PM".

### Logo
- The wordmark is **plain sans-serif**: `OakleyGas&Save`, 800 weight, 18px.
- **`O` is amber** (`.logo-accent`), **`&` is amber-900-weight** (`.logo-ampersand`), everything else is `--text-primary`.
- Paired with the **stacked-layers SVG mark** on the left in the nav.
- A standalone logo specimen lives in `assets/logo.svg`.

### Icon sizes in use
| Context | Size |
|---|---|
| Nav-right phone/map icons | 14–16px |
| Logo mark | 22–28px (28 desktop, 22 tablet) |
| Form-select chevron | 12px |
| Service card tile | 56×56 tile containing ~24px glyph |
| Status dot | 8×8 |

---

## Design tokens quick reference

All tokens live in `colors_and_type.css` under the `--ogs-*` prefix. See that file for the full set. Short version:

- **Colors:** `--ogs-bg-primary/secondary`, `--ogs-accent/-light/-dark/-glow`, `--ogs-text-primary/secondary/muted/on-accent`, `--ogs-green/red/blue`, `--ogs-border-glass/-hover`.
- **Type scale:** `--ogs-text-xs` (12) → `-5xl` (56).
- **Space scale:** `--ogs-space-xs` (4) → `-4xl` (96).
- **Radii:** `-sm` (8) / `-md` (12) / `-lg` (16) / `-xl` (20) / `-full`.
- **Shadows:** `-sm` / `-md` / `-lg` / `-glow`.
- **Blur:** `-sm` (8) / `-md` (16) / `-lg` (24).
- **Motion:** `-fast` (150ms) / `-base` (250ms) / `-slow` (400ms), all plain `ease`.

---

## Caveats

- The **source site uses a system-font stack** — no custom webfont to ship. Nothing to flag as a Google Fonts substitution.
- **There is no real logo artwork** in the repo; the logo is rendered from inline text + an inline SVG mark. The `assets/logo.svg` in this system is a faithful recreation.
- **No photography or illustration** exists in the codebase. When imagery is introduced, follow the "warm, slightly desaturated" treatment noted above.
- **Phone / address are placeholders** in source (`(925) 000-0000`, `123 Main Street`). Treated as such throughout the system.
