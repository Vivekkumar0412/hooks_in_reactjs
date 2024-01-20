import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isNum, setIsNum] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [password, setPassword] = useState("")
  // function passWordGenerator() {}
  useEffect(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "1234567890";
    let char = "~!@#$%^&*()_+{}:";
    console.log("rune");
    if(isChar){
      str+= char;
    };

    if(isNum){
      str+= num;
    };

    for(let i = 1; i<= count; i++){
      let c = str.charAt(Math.random() * str.length + 1);
      pass+= c;
    };
    setPassword(pass)
    console.log(pass);
  },[count, isChar, isNum]);
  return (
    <>
      <div className="main-div">
        <div><input type="text" className="t" value={password}/></div>
        <div className="btn-div">
          <input 
            type="range"
            min="10"
            max="59"
            onChange={(e) => {
              setCount(e.target.value);
            }}
          />
          <label>{count}</label>
          <input type="checkbox" defaultChecked = {isNum}  onChange={()=>{setIsNum((prev)=>  ! prev)}} />
          <label>Number</label>
          <input type="checkbox" defaultChecked= {isChar} onChange={()=>setIsChar((prev)=> ! prev)}/>
          <label>Character</label>
        </div>
      </div>
    </>
  );
}

export default App;
