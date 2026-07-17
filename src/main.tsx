import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';

import { OverlayProvider } from './components/ImagOverlay.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <HashRouter>
      <OverlayProvider>
        <App />
      </OverlayProvider>
    </HashRouter>
  </StrictMode>,
);
