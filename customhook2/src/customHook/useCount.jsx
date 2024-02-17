import {useState} from "react";
function useCustomCount(val = 0){
    const [count, setCount] = useState(val)
    function Inc(){
      setCount(count + 1)
    }
    function Dec(){
      setCount(count - 1)
    }
    return[count,Inc, Dec]
}

export default useCustomCount;