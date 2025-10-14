


const rootElement = document.getElementById('root');
if (rootElement) {
  // Import dependencies inside the block to ensure they are available
  // and to avoid reference errors in strict linting environments
  const { StrictMode } = await import('react');
  const { createRoot } = await import('react-dom/client');
  const App = (await import('./App.tsx')).default;
  await import('./index.css');
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
