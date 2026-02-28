---
name: portfolio-astro-gh-pages
description: Build and maintain a backend-engineer portfolio website in Astro with a clean dark theme and GitHub Pages deployment. Use when asked to create or update a single-page portfolio with top navigation (home, projects, contact), project highlights, sample-style contact form, active-section navbar state, downloadable resume PDF, and concise on-site content while keeping full details in resume.
---

# Portfolio Astro GH Pages

## Overview

Build a static portfolio quickly with a strong visual baseline and low maintenance overhead. Prefer Astro + TypeScript with component-scoped CSS for speed, polish, and easy GitHub Pages deployment.

## Recommended Stack

Use this default stack unless the user explicitly requests otherwise.

- Framework: Astro
- Styling: component-scoped CSS
- Language: TypeScript
- Icons: inline SVG + Simple Icons CDN for skills/logo row
- Content source: typed local data file in `src/data/profile.ts`

## Build Workflow

Follow this sequence.

1. Scaffold Astro project.
2. Create a single-page structure with sections:
   - `Hero`
   - `Projects`
   - `Contact`
3. Add top nav with `Home`, `Projects`, and `Contact` only.
4. Implement active nav state while scrolling.
5. Add `Download Resume` CTA in hero linking to `/resume.pdf`.
6. Keep on-site content concise; leave full details in resume PDF.
7. Make project cards visually strong (badges, spacing, hierarchy), but do not add skill chips inside project cards unless requested.
8. Implement sample-style contact section:
   - Left: short invite text + location/email
   - Right: contact form (`Name`, `Email`, `Message`) with Formspree-style async submit behavior
9. Place resume file at `public/resume.pdf`.
10. Store editable content in `src/data/profile.ts`.
11. Add SEO metadata and OpenGraph tags.
12. Configure GitHub Pages deployment using GitHub Actions.
13. Verify local build before finalizing.

## Content Rules

Prefer concise content for backend hiring context.

- Lead with measurable impact where possible.
- Keep project descriptions to problem, solution, stack, and outcome.
- Avoid dumping all resume details on the site.
- Keep direct contact paths (email, GitHub, LinkedIn).

## Visual Direction

Use a confident, technical style inspired by modern Astro portfolios but toned for backend branding.

- Dark palette (`#101010` base, muted light text, violet accent).
- Strong typography and spacing.
- Minimal, meaningful animation.
- Ensure icons are clearly visible on dark backgrounds.
- Ensure responsive behavior from mobile through desktop.

## GitHub Pages Requirements

For repository `<repo>`:

- Set `site` in `astro.config.*` to `https://<username>.github.io`.
- Set `base`:
  - `"/"` for user-site repo (`<username>.github.io`)
  - `"/<repo>"` for project repo
- Add workflow file at `.github/workflows/deploy.yml` to build and deploy `dist`.
- Ensure repository Pages source is `GitHub Actions`.

## Reference Files

Read [references/portfolio-content-template.md](references/portfolio-content-template.md) for concise section drafting.

## Done Criteria

1. `npm run build` succeeds.
2. `Home`, `Projects`, and `Contact` sections are complete and non-placeholder.
3. `/resume.pdf` downloads correctly.
4. Nav anchors and active highlight work correctly.
5. Deployment workflow exists and runs on push to `main`.
