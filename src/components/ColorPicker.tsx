import { useState, type BaseSyntheticEvent } from "react";

export default function ColorPicker() {
  const [color, setColor] = useState("#ffffff");

  function handleColorChange(e: BaseSyntheticEvent) {
    setColor(e.target.value);
  }

  return (
    <div className="color-picker-container">
      <h1>color picker</h1>
      <div className="color-picker-display">
        <p>Selected color: {color.toUpperCase()}</p>
        <input
          type="color"
          value={color}
          onChange={handleColorChange}
          style={{ minWidth: "200px", minHeight: "100px" }}
        ></input>
      </div>
    </div>
  );
}
