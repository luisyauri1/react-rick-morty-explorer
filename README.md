# Rick & Morty Explorer (React + TypeScript + Vite)

SPA to explore Rick & Morty characters with a Citadel-inspired UI. Spanish README available in `README.es.md`.

## Stack
- React 18 + TypeScript on Vite.
- SCSS modules with shared tokens (`src/styles/_variables.scss`, `_mixins.scss`).
- Atomic Design (atoms, molecules, organisms) with page-level layouts.
- i18next with ES/EN/ZH locales (`src/i18n.ts`, `src/locales/*`).
- Vitest + Testing Library for unit tests.

## Features
- Character catalog with live search and filters (status, gender, species).
- Consistent UI: atoms (Button, Select, Container), organisms (`Header`, `PageHero`, `Footer`).
- Themed footer with connection status, localized links, and responsive grid.
- Light/dark themes via CSS variables; accessible focus states and subtle gradients.
- Full localization for navigation, hero, filters, and footer.

## Scripts
- `npm run dev` — dev server with HMR.
- `npm run build` — production build.
- `npm run preview` — serve the build output.
- `npm test` — run unit tests (Vitest).

## Structure
```
src/
  components/
    atoms/       // Button, Select, Container, etc.
    molecules/   // Navigation, SearchBar, HeaderActions, etc.
    organisms/   // Header, PageHero, Footer
  pages/
    Characters/  // Page, layout, and character cards
  styles/        // Design tokens and mixins
  locales/       // es.json, en.json, zh.json
  i18n.ts        // i18next configuration
```

## Testing
- Coverage for key UI pieces: Header, Navigation, Footer, CharacterCard, filters, and data hooks.
- i18n mocks ensure translated text in tests (`src/test/mocks/i18n.ts`).

## Quick start
1) `npm install`  
2) `npm run dev` and open `http://localhost:5173`.  
3) Try search and filters on Characters; switch language/theme in the header.  
4) Check the footer for localized content and connection status.  

## License
Distributed under the MIT License. See `LICENSE` for details.
