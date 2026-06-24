import { useContext } from "react";
import { UserContext } from "./ComponentA";

export default function ComponentD() {
  const user = useContext(UserContext);

  return (
    <div style={{ border: "3px solid", margin: "5px" }}>
      <h1>Component D</h1>
      <h3>goodbye {user}</h3>
    </div>
  );
}
