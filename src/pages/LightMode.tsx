import { useContext } from 'react';
import { DarkModeContext } from '../App';

export default function LightMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)!;

  return (
    <>
      <button onClick={toggleDarkMode} className="hover:bg-gray-300 active:bg-white">
        set dark/light {(!darkMode).toString()}
      </button>
      <br />
      <div className="border-2 border-gray-600 bg-white dark:bg-amber-400"> hi</div>

      <div className="sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl">
        test for screen size
      </div>
    </>
  );
}
