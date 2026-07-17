import { useContext } from 'react';
import { DarkModeContext } from '../App';

export default function LightMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)!;

  return (
    <>
      <button onClick={toggleDarkMode} className="hover:bg-gray-300 active:bg-white">
        set dark/light to {(!darkMode).toString()}
      </button>
      <br />
      <br />
      <p className="h-screen">this page is in progress!</p>
    </>
  );
}
