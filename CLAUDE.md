# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Personal portfolio website for Nguyen Manh Cuong, built with React and featuring a Three.js interactive starfield background. Deployed to GitHub Pages at `http://Killian0812.github.io/profile`.

## Commands

```bash
npm start       # Dev server at http://localhost:3000
npm run build   # Production build to /build
npm test        # Run tests
npm run deploy  # Build + deploy to GitHub Pages (requires GH_PAGES_TOKEN)
```

## Architecture

**Entry:** `src/index.js` → renders `src/App.js`

**App layout** (all sections on a single scrollable page):
- `Space.jsx` — Three.js animated starfield background (mouse-tracking, runs behind all content)
- `NavBar.jsx` — Fixed nav with mobile hamburger menu; uses `react-scroll` for smooth section jumps
- `Home.jsx` — Hero/intro section
- `About.jsx` — Background/journey
- `Project.jsx` — Portfolio projects with card flip animations (`react-card-flip`)
- `Skill.jsx` — Tech stack grid
- `Contact.jsx` — Contact info
- `SocialLinks.jsx` — Fixed sidebar social icons

**Styling:** Tailwind CSS via PostCSS. Config in `tailwind.config.js`.

**Animations:** Framer Motion (`whileInView` for scroll reveals, hover effects). Three.js handles the background 3D scene independently.

**Static assets:** `public/` for HTML/favicon/CV PDF; `src/assets/` for images used in components.

**Deployment:** GitHub Actions (`.github/workflows/deploy.yml`) auto-deploys to `gh-pages` branch on push to `master` using `GH_PAGES_TOKEN` secret.
