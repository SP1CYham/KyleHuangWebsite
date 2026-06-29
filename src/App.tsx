import { useState, createContext } from "react";
import "./index.css";

import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

//pages
import Home from "./pages/Home";
import LightMode from "./pages/LightMode";
import NotFound from "./pages/NotFound";
import context from "react-bootstrap/esm/AccordionContext";

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

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const initial = true; //sorry not sorry light mode users
    document.documentElement.classList.toggle("dark", initial);
    return initial;
  });

  function toggleDarkMode() {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle("dark", next);
  }

  return (
    <>
      <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <div className="h-screen overflow-x-hidden">
          <Header />
          <main className="min-h-full">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/light-mode" element={<LightMode />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </DarkModeContext.Provider>
    </>
  );
}

export default App;
