# Prem Kumar — Portfolio

A premium React portfolio with Three.js 3D animations, smooth scroll, and a deep purple design system.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🛠 Tech Stack

- **React 18** + Vite
- **Three.js** — 3D particle field with mouse parallax
- **Framer Motion** — spring-based animations
- **Lenis** — buttery smooth scrolling
- **react-type-animation** — typewriter hero effect
- **react-countup** — animated stat counters
- **lucide-react** — clean SVG icons

## 📁 Project Structure

```
src/
├── assets/
│   └── prem-photo.jpg
├── components/
│   ├── ParticleBackground.jsx  ← Three.js 3D scene
│   ├── Navbar.jsx
│   ├── Hero.jsx                ← Morphing photo frame + typewriter
│   ├── About.jsx               ← Stats + traits
│   ├── Services.jsx            ← 3D tilt service cards
│   ├── Skills.jsx              ← Animated skill bars
│   ├── Projects.jsx            ← Flip card projects
│   ├── Experience.jsx          ← Timeline
│   ├── Contact.jsx             ← Email form
│   └── Footer.jsx
├── App.jsx
├── App.css
├── index.css
└── main.jsx
```

## ✏️ Customisation

- **Personal info**: Edit each component's data arrays
- **Colors**: Change `--color-primary` in `src/index.css`
- **Photo**: Replace `src/assets/prem-photo.jpg`
- **Projects**: Edit the `projects` array in `Projects.jsx`
- **Links**: Update GitHub/LinkedIn/email in `Hero.jsx`, `Contact.jsx`, `Footer.jsx`

## 📧 Contact

- **Email**: prem606kumar@gmail.com
- **GitHub**: https://github.com/prem64815-creator
- **LinkedIn**: https://www.linkedin.com/in/prem-kumar-b4b3ba408/
