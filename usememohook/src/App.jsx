import { useState, useEffect, useRef, useMemo } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);
  let divRef = useRef();
  let cal = useMemo(()=>{
    return ExpensiveFunction(count)

  },[count])
  useEffect(() => {
    if (toggle) {
      divRef.current.style.backgroundColor = "Black";
      divRef.current.style.color = "white";
    }else{
      divRef.current.style.color = "black";
      divRef.current.style.backgroundColor = "white";

    }
  }, [toggle]);

  return (
    <>
      <div ref={divRef}>
        <input
          type="number"
          onChange={(e) => {
            setCount(e.target.value);
          }}
        />
        <h1>Current Count : {count}</h1>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
        >
          {" "}
          Toggle
        </button>
      </div>
    </>
  );
}
function ExpensiveFunction(count){
  console.log("loop")
  for(let i = 1; i<= 1000000000; i++){};
  return count;
}
export default App;
