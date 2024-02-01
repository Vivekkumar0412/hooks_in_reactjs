import { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(false);
  let elem = useRef();
  // useEffect(() => {
  //   if (elem.current != null) {
  //     setCount((prev) => !prev);
  //     let dimention = elem.current.getBoundingClientRect();
  //     console.log(dimention);
  //   }
  // }, [count]);

  useLayoutEffect(() => {
    if (elem.current != null) {
      let dimentions = elem.current.getBoundingClientRect();
      console.log(dimentions);
      elem.current.style.padding = `${dimentions.height}px`
    }
  }, [count]);
  return (
    <>
      <button onClick={() => setCount((prev) => !prev)}>Toggle</button>
      {count && <h1 ref={elem}>Vivek is here</h1>}
    </>
  );
}

export default App;
