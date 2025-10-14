# Mobile-first PWA

## Context and problem statement

This project is a web-based game that must deliver a seamless experience on
mobile devices, especially smartphones. Many users are expected to play on
their phones, so the application must be optimized for mobile usability,
performance, and accessibility. Additionally, the game should remain
functional even when the device is offline and be installable like a native
app.

## Decision and justification

The application will be developed as a mobile-first Progressive Web App (PWA).

This means the user interface and experience will be designed primarily for
mobile devices, with desktop support as a secondary concern. The PWA will
support installation to the home screen, offline play via service workers, and
provide a native-like experience. Mobile-first also means that asset size must
be minimized and assets must be highly cachable to ensure good application
performance, especially on slower or unreliable mobile networks. This approach
ensures accessibility, performance, and reliability for users regardless of
connectivity, and leverages modern web standards for broad device
compatibility.

## Other options considered

Other options considered:

- **Desktop-first web app**: Prioritizing desktop experience would not meet
  the needs of the primary mobile user base and could result in a suboptimal
  mobile experience.
- **Native mobile app (iOS/Android)**: Would provide the best native
  experience, but at the cost of increased development and maintenance effort,
  and reduced accessibility for users on other platforms.
- **Responsive web app without PWA features**: Would allow mobile access but
  would not support offline play or installability, which are key requirements
  for this project.

## Additional information

Related resources:

- [MDN: Progressive Web Apps
  (PWA)](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Google Developers: PWA](https://web.dev/progressive-web-apps/)
- [Google Developers: PWA Asset Caching](https://web.dev/offline-cookbook/)
- [Google Developers: PWA Installability](https://web.dev/install-criteria/)
- [Vite PWA Plugin](https://vite-pwa-org.netlify.app/)
- [Vite Documentation](https://vitejs.dev/)
