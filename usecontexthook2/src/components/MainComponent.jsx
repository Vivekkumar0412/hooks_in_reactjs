import React,{createContext} from "react";
import Child from "./ChildComponent";
export const LoginContext = createContext();
export default function Mainn(){
    return(
        
            <LoginContext.provider vaue = {true}>  
             <Child/>
            </LoginContext.provider>
        
    )
}