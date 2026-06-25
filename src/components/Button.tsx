import { useState } from "react";
import type { BaseSyntheticEvent } from "react";

interface ButtonSettings {
  text: string;
  add?: number;
  setZero?: boolean;
}

export default function Button({
  text = "",
  add = 0,
  setZero = false,
}: ButtonSettings) {
  const [count, setCount] = useState(0);

  const handleClick = (e: BaseSyntheticEvent) => {
    setZero ? setCount(0) : setCount(count + add);
  };

  return (
    <>
      <button
        className="mx-auto flex max-w-sm items-center transition duration-50 ease-in hover:scale-110
         hover:bg-cyan-900 ring-3 active:bg-cyan-300 active:ring-0 active:shadow-cyan-300 ring-cyan-950 gap-x-4 
         rounded-xl 
         bg-white p-6 shadow-cyan-300 shadow-xl/30 text-white outline
          outline-black/5 dark:bg-slate-800 dark:-outline-offset-1 dark:outline-white/10"
        onClick={(e) => handleClick(e)}
      >
        {text}
      </button>
      <p>count is {count}</p>
    </>
  );
}
