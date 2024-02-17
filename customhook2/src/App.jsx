
import './App.css'
import useCustomCount from './customHook/useCount'

function App() {
  const  [count,Inc, Dec] = useCustomCount(10);
  return(
    <>
      <h1>{count}</h1>
      <button onClick={Inc}>Inc</button>
      <button onClick={Dec}>Decc</button>
    </>
  )
}

export default App
