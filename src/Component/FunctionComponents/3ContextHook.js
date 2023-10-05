import React, { useContext } from "react";
import { PhoneContext, UserContext } from "../../App";

const ContextHook =()=>{
    const user = useContext(UserContext);
    const phone = useContext(PhoneContext);
return(
    <>
    <p>Context Hook</p>
    <p>{user}-{phone}</p>
    </>
);
}

export  default ContextHook;