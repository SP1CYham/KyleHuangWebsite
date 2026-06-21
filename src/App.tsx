import { useState } from "react";
import "./index.css";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Card from "./components/Card";
import List from "./components/List";

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
      <Card name="kyle" />
      <Card name="john" />
      <Card name="sefe" desc="i code " />
      <Card name="sefe" desc="i code " render={true} />

      <br></br>

      <List items={fruits} category="fruits" />
      <List items={veggies} category="vegs" />
      <Footer></Footer>
    </div>
  );
}

export default App;
