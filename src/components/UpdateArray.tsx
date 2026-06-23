import { useState } from "react";

export default function UpdateArray() {
  const [foods, setFoods] = useState(["apple", "orage", "e"]);
  const [inputValue, setInputValue] = useState("");

  function handleAddFood() {
    if (inputValue.trim() == null) return;
    setFoods((f) => [...f, inputValue]);
    setInputValue("");
  }
  function handleRemoveFood(index: number) {
    if (inputValue.trim() == null) return;
    setFoods(foods.filter((_, i) => i !== index));
  }
  function handleRemoveFoodText() {
    if (inputValue.trim() == null) return;

    var index = -1;
    for (let i = 0; i < foods.length; i++) {
      if (inputValue == foods[i]) {
        index = i;
        continue;
      }
    }

    if (index !== -1) setFoods(foods.filter((_, i) => i !== index));
    setInputValue("");
  }

  return (
    <>
      <h2>list of food: </h2>
      <ul>
        {foods.map((food, index) => (
          <li
            key={index}
            onClick={() => handleRemoveFood(index)}
            style={{ cursor: "pointer" }}
          >
            {food}
          </li>
        ))}
      </ul>

      <input
        type="text"
        id="foodInput"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value);
        }}
        placeholder="enter food name"
      />
      <button onClick={handleAddFood}>add food</button>
      <button onClick={handleRemoveFoodText}>remove food</button>
    </>
  );
}
