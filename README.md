# Jabesi Portfolio

A high-performance, accessible developer portfolio demonstrating full-stack React expertise, thoughtful UX/accessibility practices, and scalable component architecture. Built with modern tooling (React 19, Vite 7) and deployed on Vercel with zero-friction CI/CD.

**What this shows:** client-side SPA patterns, performance-conscious animation, semantic HTML, responsive design, and attention to user accessibility (reduced-motion support, focus management, SEO).

## Design & implementation approach

This portfolio prioritizes **performance**, **accessibility**, and **user experience**:

- **Single-Page Navigation** using History API for fast, frameless transitions
- **Lazy-loaded animations** with Framer Motion to minimize repaints and respect user motion preferences
- **Component-driven architecture** for reusability and maintainability
- **SEO-ready** with dynamic meta tags, canonical URLs, and Open Graph support
- **Mobile-first responsive design** that scales from 320px to 4K
- **Semantic HTML** and focus management for screen reader users

## Key technical highlights

- **Performance:** Vite's optimized build pipeline, tree-shaking unused code, lazy CSS modules
- **Accessibility:** WCAG 2.1 compliance mindset, reduced-motion support, keyboard navigation, semantic landmarks
- **Code quality:** React best practices (hooks, event cleanup, state isolation), component composition patterns
- **Deployment:** Automated CI/CD via Vercel; zero manual deployment friction
- **Developer experience:** Hot Module Replacement for instant feedback loop, ESLint config for consistency
- **SEO:** Dynamic page titles, canonical URLs, OG metadata for social sharing

## Main pages

| Route | What it shows |
| --- | --- |
| `/` | Home page with hero and primary portfolio highlights |
| `/projects` | Project showcase and project cards |
| `/skills` | Skills and technology overview |
| `/about` | Personal profile and professional background |
| `/contact` | Contact section and outreach details |

## Core sections

- **Hero** - first-screen intro and personal branding
- **Projects** - selected builds, summaries, and links
- **Skills** - technical capabilities grouped for clarity
- **About** - background, focus areas, and strengths
- **Contact** - direct channels for collaboration or hiring

## Tech stack

- **React 19** – component-driven UI with hooks
- **Vite 7** – fast build tooling with excellent dev experience
- **Framer Motion** – GPU-accelerated animations respecting user preferences
- **React Icons** – lightweight icon library
- **CSS Modules** – scoped, maintainable styles by section
- **Vercel** – modern hosting with auto-deploy on every push