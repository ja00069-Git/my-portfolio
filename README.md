# Jabesi Portfolio

Modern portfolio built with React and Vite, focused on backend architecture, scalable systems, and full-stack project showcases.

## Stack

- React 19
- Vite 7
- Framer Motion
- React Icons
- CSS modules by section/component

## Features

- Multi-page style navigation with History API routes
- Animated hero, section reveals, and interactive project card tilt
- Filterable skills section with animated transitions
- Responsive layout and accessible focus styles
- Reduced-motion support for motion-sensitive users

## Project Structure

- src/components: reusable UI blocks
- src/pages: route-level page wrappers
- src/components_css: section and component styles
- src/data: content datasets

## Getting Started

1. Install dependencies:

   npm install

2. Start development server:

   npm run dev

3. Build for production:

   npm run build

4. Preview production build:

   npm run preview

## Customization

- Update personal/project content in src/components and src/data
- Update theme tokens in src/index.css
- Update page metadata in index.html

## Performance Notes

- Pointer-driven effects use Framer Motion values and springs to reduce rerender overhead
- Images use lazy loading where applicable
- Reduced-motion preferences are respected globally

## Deployment

Build output is generated in dist and can be deployed to any static host such as Vercel, Netlify, or GitHub Pages.

### GitHub Pages (Automated)

This project includes a workflow at `.github/workflows/deploy.yml` that deploys on each push to `main`.

1. Initialize and commit locally:

   git init
   git branch -M main
   git add .
   git commit -m "Initial portfolio setup"

2. Create an empty GitHub repository and connect it:

   git remote add origin https://github.com/<your-username>/<your-repo>.git
   git push -u origin main

3. In GitHub, open Settings > Pages and ensure Source is set to GitHub Actions.

4. Push to `main` to trigger deployment. Your site will publish automatically when the workflow succeeds.

The workflow automatically sets the correct Vite base path for both:
- `<username>.github.io` (root path `/`)
- project repositories (path `/<repo>/`)
