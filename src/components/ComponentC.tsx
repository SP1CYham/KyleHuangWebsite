import ComponentD from "./ComponentD";

export default function ComponentC() {
  return (
    <div style={{ border: "3px solid", margin: "5px" }}>
      <h1>Component C</h1>
      <ComponentD />
    </div>
  );
}
