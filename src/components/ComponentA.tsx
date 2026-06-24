import { useState, createContext } from "react";
import ComponentB from "./ComponentB";

export const UserContext = createContext("");

export default function ComponentA() {
  const [user, setUser] = useState("rtretwh");

  return (
    <div style={{ border: "3px solid", margin: "5px" }}>
      <h1>Component A</h1>
      <h3>{`your name is ${user}`}</h3>
      <UserContext.Provider value={user}>
        <ComponentB />
      </UserContext.Provider>
    </div>
  );
}
