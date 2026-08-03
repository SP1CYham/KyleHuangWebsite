import { useState, createContext, createRef, lazy, Suspense, useRef, useEffect } from 'react';
import './index.css';

import { Howler } from 'howler';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import NoiseGrad from './components/NoiseGrad';

//pages
import Home from './pages/Home';

const Coding = lazy(() => import('./pages/Coding'));
const Art = lazy(() => import('./pages/Art'));
const About = lazy(() => import('./pages/About'));
const LightMode = lazy(() => import('./pages/LightMode'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Resume = lazy(() => import('./pages/Resume'));

interface ContextTypes {
  darkMode: boolean;
  toggleDarkMode: () => void;
  machine: boolean;
  toggleMachine: () => void;
  muted: boolean;
  toggleMute: () => void;
  screenWidth: number;
  mobile: boolean;
  triggerWidth: () => void;
  registerFn: (fn: () => void) => void;
  triggerFn: () => void;
}

export const AppContext = createContext<ContextTypes | null>(null);

/*
function getInitialDarkMode(): boolean {
  const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
  if (prefersLight) return false;

  const initial = getInitialDarkMode();
  document.documentElement.classList.toggle('light', !initial);

  return true;
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
    document.documentElement.classList.toggle('light', !next);
  }

  const [machine, setMachine] = useState(false);
  function toggleMachine() {
    setMachine(!machine);
  }

  // global mute: covers howler.js sounds here; native players read `muted` from context
  const [muted, setMuted] = useState(false);
  function toggleMute() {
    setMuted((m) => !m);
  }
  useEffect(() => {
    Howler.mute(muted);
  }, [muted]);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [mobile, setMobile] = useState(window.innerWidth > 768 ? false : true);
  function triggerWidth() {
    const next = window.innerWidth;
    setScreenWidth(next);
    setMobile(next > 768 ? false : true);
  }
  useEffect(() => {
    const handleResize = () => {
      triggerWidth();
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const fnRef = useRef<(() => void) | null>(null);

  function registerFn(fn: () => void) {
    fnRef.current = fn;
  }

  function triggerFn() {
    fnRef.current?.();
  }

  return (
    <>
      <AppContext.Provider
        value={{
          darkMode,
          toggleDarkMode,
          machine,
          toggleMachine,
          muted,
          toggleMute,
          screenWidth,
          mobile,
          triggerWidth,
          registerFn,
          triggerFn,
        }}
      >
        <Suspense fallback={<div>loading...</div>}>
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
                    <Route path="/about" element={<About />} />
                    <Route path="/light-mode" element={<LightMode />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </main>
              </NoiseGrad>
            </NoiseGrad>
            <Footer />
          </div>
        </Suspense>
      </AppContext.Provider>
    </>
  );
}

export default App;
