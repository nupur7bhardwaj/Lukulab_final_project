import { createContext, useState } from "react";
import React from "react";
export const NotificationContext = createContext({
    doneDisabled:true,
    setDoneDisabled: ()=>true
});

export const NotificationContextProvider = ({children})=>{
    const [doneDisabled, setDoneDisabled]=useState(true);
    const value = {doneDisabled,setDoneDisabled};
    return <NotificationContext.Provider value={value}>{children}</NotificationContext.Provider>
}

