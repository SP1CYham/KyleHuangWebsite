import { useState, type BaseSyntheticEvent } from "react";

export default function Input() {
  const [name, setName] = useState("asdsa");
  const [num, setNum] = useState(0);
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");

  function handleNameChange(e: BaseSyntheticEvent) {
    setName(e.target.value);
  }
  function handleNumChange(e: BaseSyntheticEvent) {
    setNum(e.target.value);
  }
  function handlePaymentChange(e: BaseSyntheticEvent) {
    setPayment(e.target.value);
  }
  function handleShipping(e: BaseSyntheticEvent) {
    setShipping(e.target.value);
  }

  return (
    <div>
      <input value={name} onChange={handleNameChange}></input>
      <p>Name: {name}</p>

      <br />

      <input value={num} onChange={handleNumChange}></input>
      <p>Age: {num * 2}</p>

      <br />

      <select value={payment} onChange={handlePaymentChange}>
        <option value="">Select an option..</option>
        <option value="Visa">Visa</option>
        <option value="Mastercard">Mastercard</option>
        <option value="Giftcard">Giftcard</option>
      </select>
      <p>Payment type: {payment}</p>

      <br />

      <label htmlFor="">
        <input
          type="radio"
          value="Delivery"
          checked={shipping == "Delivery"}
          onChange={handleShipping}
        ></input>
        Delivery
      </label>
      <br />
      <label htmlFor="">
        <input
          type="radio"
          value="Pick up"
          checked={shipping == "Pick up"}
          onChange={handleShipping}
        ></input>
        Pick up
      </label>
      <p>Delivery type: {shipping}</p>
    </div>
  );
}
