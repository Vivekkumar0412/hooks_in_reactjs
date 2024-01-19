import React, { useState } from "react";
import ChildComp from "./ChildComp";
import Check from "./Check";
const name = "Vivek singh rajput"
export default function MainComp() {
//   const [name, setName] = useState("Vivek Singh Rajput");
  return (
    <>
        <Check userName = {name}/>
        <h1>main comp</h1>
        <ChildComp userName={name} />
    </>
  );
}
