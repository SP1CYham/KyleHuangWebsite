import ComponentC from "./ComponentC";

export default function ComponentB() {
  return (
    <div style={{ border: "3px solid", margin: "5px" }}>
      <h1>Component B</h1>
      <ComponentC />
    </div>
  );
}
