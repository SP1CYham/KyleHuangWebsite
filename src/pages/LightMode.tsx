import { useContext } from "react";
import { DarkModeContext } from "../App";

export default function LightMode() {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext)!;

  return (
    <>
      <button
        onClick={toggleDarkMode}
        className="active:bg-white hover:bg-gray-300"
      >
        set dark/light {(!darkMode).toString()}
      </button>
      <br />
      <div className="bg-white border-2 border-gray-600 dark:bg-amber-400">
        {" "}
        hi
      </div>
    </>
  );
}
