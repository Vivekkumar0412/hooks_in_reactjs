import React,{useState} from "react";
import MainComp from "./MainComp";

export default function ChildComp(prop){
    return(
        <>
        <h1>{prop.userName} heelo </h1>
        <h1>hi thereee</h1>
    </>
    )
}