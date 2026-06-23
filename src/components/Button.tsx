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
  var [count, setCount] = useState(0);

  const handleClick = (e: BaseSyntheticEvent) => {
    setZero ? setCount(0) : setCount(count + add);
  };

  return (
    <>
      <button onClick={(e) => handleClick(e)}>{text}</button>
      <p>count is {count}</p>
    </>
  );
}
