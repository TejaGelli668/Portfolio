# Teja Gelli — Portfolio

Personal portfolio site. Single-page React app with six scroll-linked sections:
hero, about, experience, skills, projects, and contact.

## Stack

- **Vite 5** + **React 18** + **TypeScript**
- **Tailwind CSS** — no component library; every element is authored here
- **React Router** — one route (`/`), plus a 404 fallback
- **Lucide** icons

Four runtime dependencies total: `react`, `react-dom`, `react-router-dom`, `lucide-react`.

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

> **Note:** editing `tailwind.config.ts` while the dev server is running will not
> reload the theme — new colours and keyframes silently resolve to nothing in the
> browser while working correctly in `npm run build`. Restart the dev server after
> any change to that file.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Vite dev server on port 3000 |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | ESLint over the repo |
| `npm run typecheck` | `tsc --noEmit` across both TS projects |

## Layout

```
public/
  Teja-Gelli-Resume-2026-08.pdf   # the served résumé
  og-image.png                    # 1200x630 social preview
src/
  App.tsx                  # router
  pages/Index.tsx          # composes the six sections
  pages/NotFound.tsx       # 404
  components/              # Hero, Summary, Experience, Skills, Projects, Contact, Navigation
  components/motion/       # Reveal (scroll choreography), CountUp (metric counters)
  hooks/use-spotlight.ts   # cursor-tracked card highlight
  index.css                # design tokens, gradient mesh, motion, reduced-motion
  assets/profileImage.jpg
```

## Design system

Dark ground (`#07070C`) under a fixed, slowly drifting three-colour gradient mesh, with a
masked grid for surface. Accents run violet `#7C5CFF` → cyan `#22D3EE` → pink `#F472B6`.
Type is **Sora** for display and **Manrope** for body, both from Google Fonts.

Motion is a requirement, not decoration:

- `Reveal` adds `.in` via IntersectionObserver, staggered by a `--d` delay, firing once
- `CountUp` animates metrics from zero on first view with an exponential ease-out
- `.grad-text`, `.ring-gradient`, `.spotlight`, and `.lift` carry the interaction language
- every one of these is disabled under `prefers-reduced-motion: reduce`

## Editing content

All copy lives inline in the section components — there is no CMS or data layer.

- **Metrics in the hero** — the `metrics` array in `src/components/Hero.tsx`
- **Jobs** — the `roles` array in `src/components/Experience.tsx`
- **Skills and education** — `src/components/Skills.tsx`
- **Projects** — the `workOrders` array in `src/components/Projects.tsx`
- **Contact details** — the `channels` array in `src/components/Contact.tsx`
- **Résumé** — replace `public/Teja-Gelli-Resume-2026-08.pdf` and update `src/lib/resume.ts`

`PRODUCT.md` records product truth: audience, positioning, what each claim is sourced
from, and which claims must not be made. Read it before changing any factual copy.

## Notes

- `og:image` and `twitter:image` in `index.html` are root-relative. Switch them to the full
  absolute URL once the site has a fixed domain, so link previews resolve everywhere.
- Project cards carry no screenshots. Any added later must be genuine captures of the
  running applications.
