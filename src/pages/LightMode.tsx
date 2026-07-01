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
    </>
  );
}
