import React from "react";
import useCustomCount from "./customHook/useCount";
export default function Count(){
    const [count, Inc, Dec] = useCustomCount();
    return(
        <>
            <h1>{count}</h1>
            <button onClick={Inc }>INC</button>
            <button onClick={Dec}>DECCC</button>
        </>
    )
}