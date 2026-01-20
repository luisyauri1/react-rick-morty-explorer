# Rick & Morty Explorer (React + TypeScript + Vite)

SPA para explorar personajes de Rick & Morty con una interfaz inspirada en la Ciudadela. Versión en inglés disponible en `README.md`.

## Stack
- React 18 + TypeScript sobre Vite.
- SCSS modular con tokens compartidos (`src/styles/_variables.scss`, `_mixins.scss`).
- Atomic Design (átomos, moléculas, organismos) con layouts por página.
- i18next con locales ES/EN/ZH (`src/i18n.ts`, `src/locales/*`).
- Vitest + Testing Library para pruebas unitarias.

## Funcionalidades
- Catálogo de personajes con búsqueda y filtros en vivo (estatus, género, especie).
- UI consistente: átomos (Button, Select, Container), organismos (`Header`, `PageHero`, `Footer`).
- Footer temático con estado de conexión, enlaces localizados y grid responsivo.
- Temas claro/oscuro via variables CSS; focos accesibles y gradientes sutiles.
- Localización completa para navegación, hero, filtros y footer.

## Scripts
- `npm run dev` — servidor de desarrollo con HMR.
- `npm run build` — build de producción.
- `npm run preview` — servir el build generado.
- `npm test` — ejecutar pruebas unitarias (Vitest).

## Estructura
```
src/
  components/
    atoms/       // Button, Select, Container, etc.
    molecules/   // Navigation, SearchBar, HeaderActions, etc.
    organisms/   // Header, PageHero, Footer
  pages/
    Characters/  // Página, layout y tarjetas de personaje
  styles/        // Tokens de diseño y mixins
  locales/       // es.json, en.json, zh.json
  i18n.ts        // Configuración de i18next
```

## Pruebas
- Cobertura de piezas clave: Header, Navigation, Footer, CharacterCard, filtros y hooks de datos.
- Mock de i18n para asegurar textos traducidos en pruebas (`src/test/mocks/i18n.ts`).

## Inicio rápido
1) `npm install`  
2) `npm run dev` y abre `http://localhost:5173`.  
3) Prueba búsqueda y filtros en Characters; cambia idioma/tema en el header.  
4) Revisa el footer para contenido localizado y estado de conexión.  

## Licencia
Distribuido bajo la Licencia MIT. Ver `LICENSE` para más detalles.
