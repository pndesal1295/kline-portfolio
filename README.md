# Kline Olasiman Portfolio

My personal developer portfolio showcasing my projects, skills, experience, and background as an Information Technology student.

Built with **React**, **Vite**, **Tailwind CSS**, and **React Router**.

## Projects

The portfolio currently features:

- **DepEd Performance Management System**
  A team-developed performance management system built for a real DepEd client. Features offline-first functionality, role-based workflows, authentication, and data synchronization. Source code is confidential.

- **Raw Weather**
  A weather application that retrieves real-time weather data through an external API.

- **Trastok**
  An AI-powered web application that integrates a large language model API.

## Tech Stack

- React
- JavaScript
- Vite
- Tailwind CSS
- React Router

## Development

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Build

Create a production build:

```bash
npm run build
```

The generated files will be placed in the `dist` directory.

## Environment

Copy `.env.example` to `.env` if you need to configure deployment-specific settings.

```bash
cp .env.example .env
```

On Windows:

```powershell
Copy-Item .env.example .env
```

Available environment variables:

```env
VITE_ROUTER_MODE=hash
VITE_SITE_URL=
```

### `VITE_ROUTER_MODE`

Use:

```env
VITE_ROUTER_MODE=hash
```

for hash-based URLs such as:

```text
/#/projects
```

This is the default and works well with GitHub Pages without requiring server-side route configuration.

Use:

```env
VITE_ROUTER_MODE=browser
```

for clean URLs such as:

```text
/projects
```

This should only be used on hosts configured to redirect SPA routes back to `index.html`, such as Vercel, Netlify, or similar platforms.

### `VITE_SITE_URL`

Set this to the final deployed origin of the portfolio:

```env
VITE_SITE_URL=https://your-domain.com
```

When provided, the site uses it to generate absolute Open Graph and Twitter preview image URLs for better link previews.

## GitHub Pages

The project uses hash routing by default and keeps Vite's base path relative, allowing it to work on GitHub Pages without additional server-side routing configuration.

## Author

Kline Olasiman

[![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github)](https://github.com/pndesal1295)
[![Instagram](https://img.shields.io/badge/Instagram-E4405F?style=for-the-badge&logo=instagram&logoColor=white)](https://www.instagram.com/1295koo)
## Project Structure

```text
src/
├── app/                    # Router setup and app-level behavior
├── components/
│   ├── layout/             # Shared site shell: navigation, footer, layout
│   └── ui/                 # Reusable UI primitives
├── data/                   # Feature-specific static content/data
├── features/
│   ├── about/              # About section components
│   ├── home/               # Home/hero components
│   └── projects/           # Project listing and carousel components
├── pages/                  # Route-level page components
├── utils/                  # Shared helpers
├── index.css               # Global styles and Tailwind theme
└── main.jsx                # Application entry point
```

The codebase is organized by responsibility so route-level pages stay small, shared UI stays reusable, and feature-specific code remains grouped together.
