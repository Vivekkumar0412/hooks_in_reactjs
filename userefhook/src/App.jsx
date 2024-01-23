import { useState, useEffect, useRef } from 'react'


function App() {
  const [name, setName] = useState("");
  // const [count, setCount] = useState(0);
  // useEffect(()=>{
  //   setCount(count + 1);
  // },[name])
  let count = useRef(0);
  useEffect(()=>{
    count.current = count.current + 1;
  })
  return(
    <>
    <textarea name="" id="" cols="30" rows="10"></textarea>
      <input type="text" onChange={(e)=> setName(e.target.value)} />
      <h1>name : {name}</h1>
      <h1>Cureent count is : {count.current}</h1>
    </>
  )
}

export default App
