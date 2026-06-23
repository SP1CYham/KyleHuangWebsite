import Button from "./Button";
import { useState, type BaseSyntheticEvent } from "react";

export default function Counter() {
  const [counter, setCounter] = useState({ count1: 0, count2: 0 });

  const addCounter = () => {
    setCounter((c) => ({
      count1: c.count1 + 1,
      count2: c.count2 + 4,
    }));
  };
  const minusCounter = () => {
    setCounter((c) => ({ count1: c.count1 - 4, count2: c.count2 - 2 }));
  };
  const resetCounter = () => {
    setCounter({ count1: 0, count2: 0 });
  };

  return (
    <div>
      <p>
        count1: {counter.count1} <br /> count2: {counter.count2}
      </p>
      <br />
      <button onClick={() => addCounter()}>add!</button>
      <button onClick={() => resetCounter()}>reset!</button>
      <button onClick={() => minusCounter()}>minus!</button>
    </div>
  );
}
