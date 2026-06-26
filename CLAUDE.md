# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal GitHub Pages site built with Vue 3 + TypeScript + Tailwind CSS v4, bundled with Vite. Deployed via GitHub Actions.

## Development

```bash
pnpm dev        # Start Vite dev server
pnpm build      # Type-check + build for production (output to dist/)
pnpm preview    # Preview production build locally
```

## Architecture

- `src/main.ts` — App entry: `createApp(App).use(router).mount('#app')`
- `src/App.vue` — Root component with `<router-view>`
- `src/router/index.ts` — Vue Router with hash mode (`createWebHashHistory`)
- `src/views/` — Page-level components (HomePage, AppGallery, disc-test/, sushiro/)
- `src/components/` — Reusable UI components
- `src/composables/` — Stateful composition logic (useDiscTest, useSushiroCounter)
- `src/types/` — TypeScript interfaces
- `src/data/` — Static typed data modules
- `src/styles/main.css` — Tailwind CSS v4 imports + custom theme + @font-face
- `public/` — Static assets copied to dist root (favicon, fonts, 404.html)

## Conventions

- Composition API with `<script setup lang="ts">`
- Tailwind utility classes for layout/spacing; scoped `<style>` for component-specific styling
- Pages that need shared state use a composable in `src/composables/`
- New pages: create view in `src/views/`, add route in `src/router/index.ts`

## Deployment

Push to `master`. GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys to GitHub Pages automatically. Repo Settings > Pages must use "GitHub Actions" as source.
