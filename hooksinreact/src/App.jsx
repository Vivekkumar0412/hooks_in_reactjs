import { useState } from 'react'

let [details,setDetails] = useState({counter : 0, name: ""})
function App() {
  // let [counter, setCounter] = useState(0)
  // let [name, setName] = useState("")
  console.log(details)
  return (
    
    <>
      <input type="text" onChange={(e)=>setDetails((prev)=>({...prev, name : e.target.value}))} />
      <h1>{details.name} clicked the count is : {details.counter}</h1>
      <button onClick={()=> setDetails((prev)=>({...prev, counter : details.counter + 1 }))}>INC</button>
    </>
  )
}

export default App
