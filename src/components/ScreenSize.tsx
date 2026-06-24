import { useState, useEffect } from "react";

export default function ScreenSize() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  function handleResize() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    console.log("event listener added!");
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("event listener removed!");
    };
  }, []);

  return (
    <>
      <p>
        screen width: {width} <br /> screen height: {height}
      </p>
    </>
  );
}
