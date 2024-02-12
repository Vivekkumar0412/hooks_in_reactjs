import React,{useCallback, useEffect, useState} from "react";
export default function Table({calculationTable}){
    // console.log(calculationTable)
    const [row, setRow] = useState([]);
    useEffect(()=>{
        console.log("useeffect is here")
        setRow(calculationTable());
    },[calculationTable])
    
    return row.map((key,index)=>{
       return <p key = {index}>{key}</p>
    })
}