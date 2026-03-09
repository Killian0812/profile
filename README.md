# Killian — Personal Portfolio

Personal portfolio website for me, showcasing projects, skills, and contact information.

**Live site:** https://killian0812.github.io/profile

## Tech Stack

- **React 19** — UI framework
- **Vite** — Build tool and dev server
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Scroll and hover animations
- **Three.js** — Interactive 3D starfield background

## Commands

```bash
npm start          # Dev server at http://localhost:3000
npm run build      # Production build to /dist
npm run preview    # Preview production build locally
npm run deploy     # Build + deploy to GitHub Pages
```

> Deployment requires a `GH_PAGES_TOKEN` secret (used by GitHub Actions on push to `master`).

## Project Structure

```
src/
  App.js              # Root component, assembles all sections
  index.js            # Entry point
  components/
    Space.jsx         # Three.js animated starfield (background layer)
    NavBar.jsx        # Fixed nav with smooth scroll and mobile hamburger
    Home.jsx          # Hero / intro section
    About.jsx         # Background and journey
    Project.jsx       # Portfolio cards with flip animation
    Skill.jsx         # Tech stack grid
    Contact.jsx       # Contact information
    SocialLinks.jsx   # Fixed sidebar social icons
  assets/             # Images used in components
public/               # Static files (HTML, favicon, CV PDF)
```
