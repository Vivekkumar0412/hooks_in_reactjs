import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


// function App() {
//   const [users, setUsers] = useState([]);
//   useEffect(()=>{
//     fetch("https://randomuser.me/api/")
//     .then((res)=>res.json())
//     .then((data)=> setUsers(data))
//   },[])
  
//   // console.log(users.results[0].name.first)
//   // console.log(users)
//   return(
//     <>    
//     {users.map((elem)=>{
//       <h1>{elem.results}</h1>
//     })}
//     </>

//   )
// }

// export default App
export default function App(){
  let [user, setUser] = useState();
  useEffect(()=>{
    fetch("https://randomuser.me/api/")
    .then((res)=> res.json())
    .then((data)=> setUser(data))
  },[]);
  setTimeout(()=>{
    console.log(user)
    console.log(user.results);
    console.log(user.results[0]);
    console.log(user.results[0].name);
    console.log(user.results[0].name.first);
    console.log(user.results[0].name.first);
    console.log(typeof(user))
  
  })
  return(
    
    <>
     { setTimeout(()=>{
        let nam = user.results[0].name;
         return(nam) 
      })}

      <h1>{nam}</h1>
      </>
  )
}