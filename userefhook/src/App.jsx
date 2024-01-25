import { useState, useEffect, useRef } from 'react'


function App() {
  const [name, setName] = useState("");
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   setCount(count + 1);
  // },[name])
  let count = useRef(0);
  console.log(count)
  useEffect(()=>{
    count.current = count.current + 1;
  })

  let inputEle = useRef();
  
  return(
    <>
    
      <input type="text" ref={inputEle} onChange={(e)=> setName(e.target.value)} />
      <h1>name : {name}</h1>
      <h1>Cureent count is : {count.current}</h1>
      <button  onClick={()=>{
        inputEle.current.style.width = "400px";
        inputEle.current.style.padding = "40px";
        inputEle.current.focus();
      }}>CLICK</button>
    </>
  )
}

export default App
