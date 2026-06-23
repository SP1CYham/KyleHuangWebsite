import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Card from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import Counter from "./components/Counter";
import Input from "./components/Input";
import ColorPicker from "./components/ColorPicker";
import UpdateArray from "./components/UpdateArray";
import CarComponent from "./components/CarComponent";

function App() {
  const fruits = [
    { id: 1, name: "banana", cal: 50 },
    { id: 2, name: "grape", cal: 100 },
    { id: 3, name: "apple", cal: 5 },
    { id: 4, name: "pear", cal: 200 },
  ];
  const veggies = [
    { id: 5, name: "brogo", cal: 50 },
    { id: 6, name: "brussel", cal: 100 },
    { id: 7, name: "eggplant", cal: 5 },
    { id: 8, name: "carrot", cal: 200 },
  ];

  return (
    <div>
      <Header></Header>

      <Button text="add 1" add={1}></Button>
      <hr />
      <br />

      <Counter />
      <hr />
      <br />

      <Input />
      <hr />
      <br />

      <UpdateArray />
      <hr />
      <br />

      <ColorPicker />
      <hr />
      <br />

      <CarComponent />
      <hr />
      <br />

      <Card name="kyle" />
      <Card name="john" />
      <Card name="sefe" desc="i code " />
      <Card name="sefe" desc="i code " render={true} />
      <hr />
      <br></br>

      <List items={fruits} category="fruits" />
      <List items={veggies} category="vegs" />
      <hr />
      <br />

      <Footer></Footer>
    </div>
  );
}

export default App;
