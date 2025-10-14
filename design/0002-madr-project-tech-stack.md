# Project tech stack

## Context and problem statement

The project requires a modern, efficient, and maintainable frontend stack to
enable rapid development, high performance, and a great developer experience.
The chosen technologies should support scalability, strong typing, fast
builds, and easy styling, while being widely adopted and well-supported by the
community.

## Decision and justification

The following tech stack was selected:

- **React**: A widely-used JavaScript library for building user interfaces,
  chosen for its component-based architecture, large ecosystem, and strong
  community support.
- **Vite**: A fast build tool and development server, selected for its instant
  hot module replacement (HMR), minimal configuration, and superior
  performance compared to older tools like Webpack.
- **TailwindCSS**: A utility-first CSS framework, chosen for its ability to
  rapidly build custom designs without leaving the HTML, and for promoting
  consistency and maintainability in styling.
- **shadcn/ui**: A collection of accessible, customizable, and prebuilt UI
  components for React, chosen to accelerate development, ensure design
  consistency, and provide a modern user experience. Integrates seamlessly
  with TailwindCSS.
- **TypeScript**: A statically-typed superset of JavaScript, selected to
  improve code quality, enable better tooling, and catch errors at compile
  time.
- **Yarn (Berry)**: A modern package manager, chosen for its speed,
  plug-and-play features, and improved dependency management over npm.
- **Vitest**: The primary testing library, chosen for its fast performance,
  native TypeScript support, and seamless integration with Vite. Vitest
  enables efficient unit and integration testing with a developer experience
  similar to Jest, but optimized for Vite-based projects.
- **Playwright**: Selected for end-to-end (e2e) testing of the application.
  Playwright provides reliable, fast, and cross-browser automation, enabling
  comprehensive testing of user flows and application behavior in real
  browsers. Its modern API and parallel execution capabilities make it
  well-suited for robust e2e testing.

This combination provides a robust, scalable, and developer-friendly
foundation for building modern web applications. The addition of shadcn/ui
further enhances productivity and UI consistency by offering a suite of
ready-to-use, accessible components that follow best practices for modern web
design.

## Other options considered

Other options considered:

- **Webpack**: Considered for bundling, but Vite was chosen for its faster
  development experience and simpler configuration.
- **npm**: Considered as the default package manager, but Yarn (Berry) was
  selected for its advanced features and performance.
- **Styled Components / CSS Modules**: Considered for styling, but TailwindCSS
  was preferred for its utility-first approach and rapid prototyping
  capabilities.
- **JavaScript (without TypeScript)**: Considered for simplicity, but
  TypeScript was chosen for its type safety and improved maintainability.

## Additional information

Related resources:

- [React documentation](https://react.dev/)
- [Vite documentation](https://vitejs.dev/)
- [TailwindCSS documentation](https://tailwindcss.com/)
- [shadcn/ui documentation](https://ui.shadcn.com/)
- [TypeScript documentation](https://www.typescriptlang.org/)
- [Yarn (Berry) documentation](https://yarnpkg.com/)
- [Vitest documentation](https://vitest.dev/)
- [Playwright documentation](https://playwright.dev/)
