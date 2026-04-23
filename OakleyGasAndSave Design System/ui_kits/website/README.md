# OakleyGasAndSave — Website UI Kit

A React (JSX + Babel in-browser) recreation of the 5-page OakleyGasAndSave marketing site. Uses the **original stylesheet** from `source/css/style.css` unchanged — components just render the DOM the CSS expects.

## Structure

- `index.html` — boots React, loads all components, renders the full clickable app
- `Nav.jsx` — fixed-top nav with scroll glassification + mobile menu toggle
- `Shared.jsx` — `StatusPill`, `Section`, `SectionHeader`, `GlassCard`, `Button`, `IconTile`, `ServiceCard`, `Footer`
- `Home.jsx` — `HomePage` with hero, quick facts, services, reasons, deals teaser, testimonials, CTA banner
- `Pages.jsx` — `FuelPage`, `StorePage`, `DealsPage`, `ContactPage` (with working fake form)

## Interactive behaviour

- Clicking any nav link swaps the page; selection persists across reloads via `localStorage`.
- The hero `StatusPill` reads the real time and shows Open / Closed / Closing-soon.
- Contact form submit shows a "Message Sent!" state for 3s, then resets.
- Mobile hamburger opens the fullscreen overlay nav.
- Nav glassifies and shrinks on scroll ≥ 60px.

## Notes

- Kept intentionally small — component-shaped, not a clone of every subpage in source.
- `Deals`, `Store`, `Fuel`, `Contact` use the same vocabulary (section headers, promo cards, glass cards) as the source but at higher density to fit the kit.
- No new designs invented; all layouts lift from the source HTML pages.
