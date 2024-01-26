import React, { useContext } from "react";
import { LoginContext } from "./MainComponent";

export default function Child() {
  const val = useContext(LoginContext);
  console.log(val);
  return <h1>CJILD COMPONENT IS HERE</h1>;
}
