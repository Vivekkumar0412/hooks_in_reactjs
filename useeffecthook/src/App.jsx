import { useState, useEffect } from 'react';

export default function App(){
  
  let [count, setCount ]= useState(10);
  // useEffect(()=>{
  //   document.title = `${count} new message`
  // });
  function chec(){
    document.title = `${count} new message`;
  }
  useEffect(chec,[]);
  // useEffect(()=>{
  //   setInterval(()=>{
  //     {setCount(count + 1)}
  //     // document.title = `${count} new message`;
  //   },1000)
  // })
  return(
    <>
      <h1>{count} is </h1>
      <button onClick = {()=>setCount(count + 1)}
      > ADD</button>
      <button onClick = {()=>setCount(count - 1)}
      > DEC</button>
    </>
  )
}
//  App;
