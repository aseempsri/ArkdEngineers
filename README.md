# ARKD Engineers - Angular

Angular 19 conversion of the ARKD 3D Experience landing page. Design, fonts, animations, and 3D background are preserved from the original React project.

## Setup

```bash
npm install
```

## Development

```bash
npm start
```

Runs at `http://localhost:4200`

## Build

```bash
npm run build
```

## Assets

- **Logo**: Place `arkd-logo.jpeg` in `src/assets/` for the navbar and footer. If the logo was copied from the React project, it should already be there.

## Tech Stack

- Angular 19
- Tailwind CSS
- Three.js (3D background)
- Lucide Angular (icons)
- Angular Animations

## Project Structure

- `src/app/components/` - Reusable components (Navbar, Hero, About, Services, Solutions, Contact, Footer, Scene3D)
- `src/app/pages/` - Route components (Index, NotFound)
- `src/app/directives/` - AnimateInView for scroll-triggered animations
