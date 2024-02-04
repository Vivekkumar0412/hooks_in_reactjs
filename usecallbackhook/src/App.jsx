import { useState, useMemo, useCallback } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Table from "./Components/Table";

function App() {
  const [count, setCount] = useState(0);
  const [dark, setDark] = useState(false);
  // let fun = useMemo(()=>{
  //  return expensiveFun(count)
  // },[count])
  // console.log(`fun value is here   ${fun}`);
  const calculationTable = useMemo(() => {
    // console.log("calculation table here")
    return [count * 1, count * 2, count * 3, count * 4, count * 5];
  }, [count]);
  // const calculationTable = ()=>{

  // }
  const cssStyle = {
    backgroundColor: dark ? "Black" : "white",
    color: dark ? "white" : "black",
  };
  const inpStyle = {
    padding: dark ? "40px" : "10px",
  };

  return (
    <>
      <div style={cssStyle}>
        <input
          type="number"
          style={inpStyle}
          onChange={(e) => {
            setCount(e.target.valueAsNumber);
          }}
          value={count}
        />
        <h1>Hi Vivek here {count}</h1>
      <Table calculationTable={calculationTable} />
      <button
        onClick={() => {
          setDark(!dark);
        }}
      >
        Click
      </button>
      </div>
      
    </>
  );
}
// function expensiveFun(count){
//   console.log("Expesive function running");
//   for(let i = 1; i<= 1000000000; i++){}
//   return count;
// }
export default App;
