import { useState, type BaseSyntheticEvent } from "react";

const car = {
  year: 2026,
  make: "Honda",
  model: "Civic",
};

export default function CarComponent() {
  const [cars, setCars] = useState([car]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  function handleAddCar() {
    const newCar = {
      year: carYear,
      make: carMake,
      model: carModel,
    };

    setCars((c) => [...c, newCar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }
  function handleRemoveCar(index: number) {
    setCars(cars.filter((_, i) => i !== index));
  }
  function handleYearChange(e: BaseSyntheticEvent) {
    setCarYear(e.target.value);
  }
  function handleMakeChange(e: BaseSyntheticEvent) {
    setCarMake(e.target.value);
  }
  function handleModelChange(e: BaseSyntheticEvent) {
    setCarModel(e.target.value);
  }

  return (
    <div>
      <h2>list of car components:</h2>
      <ul>
        {cars.map((car, index) => (
          <li key={index} onClick={() => handleRemoveCar(index)}>
            {car.year}, {car.make}, {car.model}
          </li>
        ))}
      </ul>

      <input type="number" value={carYear} onChange={handleYearChange}></input>
      <input
        type="text"
        value={carMake}
        onChange={handleMakeChange}
        placeholder="enter car make"
      ></input>
      <input
        type="text"
        value={carModel}
        onChange={handleModelChange}
        placeholder="enter car model"
      ></input>
      <button onClick={handleAddCar}>add car</button>
    </div>
  );
}
