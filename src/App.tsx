import { useState, createContext, createRef } from 'react';
import './index.css';

import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import NoiseGrad from './components/NoiseGrad';

//pages
import Home from './pages/Home';
import Coding from './pages/Coding';
import Art from './pages/Art';
import LightMode from './pages/LightMode';
import NotFound from './pages/NotFound';

interface ContextTypes {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export const DarkModeContext = createContext<ContextTypes | null>(null);

/*
function getInitialDarkMode(): boolean {
  const prefersLight = window.matchMedia(
    "(prefers-color-scheme: light)",
  ).matches;
  if (prefersLight) return false;
  return true; //dark by default if dark or no preference
}
*/

export const scrollContainerRef = createRef<HTMLDivElement>();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const initial = true; //sorry not sorry light mode users
    document.documentElement.classList.toggle('dark', initial);
    return initial;
  });

  function toggleDarkMode() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
  }

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div className="h-screen overflow-x-hidden" ref={scrollContainerRef}>
          <Header />
          <NoiseGrad
            direction="to left"
            color="var(--color-shadow)"
            xtraOpacity={0}
            baseFrequency={2}
            percent={80}
          >
            <NoiseGrad
              direction="to right"
              color="var(--color-shadow)"
              xtraOpacity={0}
              baseFrequency={2}
              percent={80}
            >
              <main className="min-h-full">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/coding" element={<Coding />} />
                  <Route path="/art" element={<Art />} />
                  <Route path="/light-mode" element={<LightMode />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </NoiseGrad>
          </NoiseGrad>
          <Footer />
        </div>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
