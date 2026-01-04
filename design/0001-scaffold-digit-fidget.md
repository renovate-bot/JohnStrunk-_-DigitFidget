# Scaffold Digit Fidget PWA

Initialize the Digit Fidget project as a client-side PWA using Vite, React, and
TypeScript, including CI/CD for GitHub Pages.

## Description

This feature involves setting up the foundational infrastructure for the Digit
Fidget game. The application will be a static Single Page Application (SPA)
hosted on GitHub Pages, with no server-side backend. The setup includes
initializing the project with modern web development tools: Vite for building,
React for UI, and TypeScript for type safety.

The feature also encompasses configuring essential developer tooling to ensure
code quality and consistency, including Tailwind CSS for styling, ESLint for
linting, Prettier for formatting, Vitest for unit testing, and Playwright for
end-to-end testing. Additionally, the app will be configured as a Progressive
Web App (PWA) to allow installation and offline play. Finally, the existing
GitHub Actions workflows will be verified to ensure they correctly build, test,
and deploy the new application.

## Requirements

1. **Project Initialization:** The project must be initialized with Vite, using
   React 19+ and TypeScript 5+.
2. **Package Management:** `yarn` must be used for dependency management and
   script execution.
3. **Styling:** Tailwind CSS must be installed and configured for
   utility-first styling.
4. **Linting & Formatting:** ESLint and Prettier must be configured.
   `yarn lint` and `yarn format` scripts must be available and pass.
5. **Unit Testing:** Vitest and React Testing Library must be set up. A
   `yarn test` script must run unit tests.
6. **E2E Testing:** Playwright must be configured for end-to-end testing.
7. **PWA Support:** The application must be configured as a PWA with a valid
   web manifest and service worker (using `vite-plugin-pwa`) to support
   installation and offline usage.
8. **Build Artifacts:** `yarn build` must generate a production-ready build in
   the `dist/` directory.
9. **CI/CD Integration:** The existing `.github/workflows/deploy.yaml` and
   `.github/workflows/test.yaml` must successfully execute the project's build
   and test scripts.
10. **Landing Page:** The application must render a basic landing page (e.g.,
    title screen) to verify successful setup.

## Development tasks

- [x] Initialize the Vite project with React and TypeScript templates.
- [x] Install and configure Tailwind CSS, PostCSS, and Autoprefixer.
- [x] Configure ESLint and Prettier according to project standards.
- [x] Install and configure Vitest and React Testing Library; create a sample
      unit test.
- [x] Install and configure Playwright; create a sample E2E test.
- [x] Install `vite-plugin-pwa` and configure the web manifest and service
      worker.
- [x] Create a basic `App.tsx` component to serve as the landing page.
- [x] Update `package.json` to include standard scripts: `dev`, `build`,
      `preview`, `lint`, `format`, `test`.
- [x] Verify `tsconfig.json` and `vite.config.ts` settings.

## Test plan

- **Unit Tests:** Run `yarn test` to verify Vitest execution and the sample
  unit test.
- **Linting:** Run `yarn lint` to ensure no linting errors are present.
- **Build:** Run `yarn build` and verify that the `dist/` directory is created
  and contains static assets.
- **E2E Tests:** Run the Playwright test command (e.g., `npx playwright test`)
  to verify the landing page loads.
- **PWA Verification:** Build the app, serve it locally (e.g., `yarn preview`),
  and use browser dev tools (Lighthouse or Application tab) to verify the
  manifest is detected and the service worker is registered.
