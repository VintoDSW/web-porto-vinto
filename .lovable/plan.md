# Vinto Portfolio — Build Plan

A single-page (multi-section) premium portfolio with monochrome aesthetic, glassmorphism, dark/light toggle, and cinematic scroll animations. Built on the existing TanStack Start + Tailwind v4 + shadcn stack.

## Scope

One route (`/`) containing all sections, plus a sticky navbar and footer. Smooth scroll between sections via in-page anchors (acceptable here because it's a single landing page and the user explicitly asked for one). SEO metadata set in route `head()`.

Note: Stack is TanStack Start (not Next.js 15). All other requested tech — TypeScript, Tailwind, Framer Motion, responsive, SEO — applies directly. I'll install `framer-motion`. GSAP is unnecessary alongside Framer Motion; skipping to keep bundle lean unless you want it.

## Sections

1. **Navbar** — sticky, blur-on-scroll, active section highlight via IntersectionObserver, theme toggle, mobile sheet menu
2. **Hero** — full-viewport, animated monochrome gradient mesh background, headline reveal, two CTAs, floating profile image card
3. **About** — two-column (profile card left, bio + education/interests/goals right)
4. **Skills** — tabbed/grouped glass cards (Technical / Tools), animated progress bars
5. **Portfolio** — filterable project grid (All/Web/Mobile/UI-UX/AI), glass cards with image, stack chips, demo + GitHub buttons
6. **More Info** — info cards (Education, Certifications, Organizations, Achievements, Interests, Hobbies) + animated counter stats
7. **Contact** — form (name/email/message) + social links
8. **Footer** — logo, nav, copyright, back-to-top

## Design System

- **Palette**: pure monochrome. Light = white → soft gray surfaces, ink-black text. Dark = near-black → graphite surfaces, off-white text. Accent = high-contrast foreground only (no color).
- **Gradients**: subtle radial + linear mixes of black/white/gray for hero mesh, card sheens, and section dividers.
- **Glass**: `backdrop-blur-xl` + low-opacity surface + 1px hairline border (using Tailwind utilities, no hand-written `-webkit-backdrop-filter`).
- **Typography**: display = "Instrument Serif" or "Geist" for headlines; body = "Inter" / "Geist Sans". Loaded via `<link>` in `__root.tsx` head (not CSS `@import`).
- **Motion**: Framer Motion for fade-up, blur-reveal, stagger, hover lift, counter tween. `prefers-reduced-motion` respected.
- **Tokens**: add semantic tokens to `src/styles.css` under `@theme inline` — `--surface`, `--surface-elevated`, `--hairline`, `--ink`, `--ink-muted`, plus gradient variables.

## Theme Toggle

Class-based dark mode (already wired via `@custom-variant dark`). Toggle stored in `localStorage` under `vinto-theme`, applied on mount with no-flash inline script in root head. Smooth `transition-colors` on body.

## File Structure

```text
src/
  routes/
    __root.tsx           (add font links + no-flash theme script)
    index.tsx            (compose sections + SEO head)
  components/
    portfolio/
      Navbar.tsx
      Hero.tsx
      About.tsx
      Skills.tsx
      Portfolio.tsx
      MoreInfo.tsx
      Contact.tsx
      Footer.tsx
      ThemeToggle.tsx
      GlassCard.tsx
      SectionHeading.tsx
      AnimatedCounter.tsx
      GradientBackdrop.tsx
    hooks/
      useTheme.ts
      useActiveSection.ts
  styles.css             (extend tokens, add gradient + glass utilities via @utility)
```

## Data

Project/skill/info content hardcoded in typed const arrays inside each component (no backend). Profile image: generated placeholder portrait (monochrome, premium) saved to `src/assets/`.

## Technical Notes

- Install: `framer-motion`
- No backend / Lovable Cloud needed (contact form: client-side validation + `mailto:` fallback, or shows a toast — confirm preference below)
- All animations gated on `useReducedMotion`
- Images lazy-loaded, `loading="lazy"` + explicit width/height
- SEO: title, description, OG tags, single H1 in Hero, semantic `<section>` landmarks with `aria-label`

## Open Questions

1. **Contact form submission**: client-only (mailto/toast) or wire up Lovable Cloud + email? Default: client-only.
2. **Profile photo**: generate a stylized monochrome placeholder portrait, or leave a labelled avatar slot for you to drop a real photo into?
3. **Real links**: do you have actual URLs for the 4 projects, your GitHub, LinkedIn, email, Instagram? If not, I'll use `#` placeholders.

I'll proceed with the defaults above unless you say otherwise.
