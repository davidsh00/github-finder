import { createContext,useReducer,useState } from "react";
import AlertReducer from "./AlertReducer";
const AlertContext=createContext()
export const AlertProvider=({children})=>{
    const initialState={msg:'',type:'info'}
    const[state,dispatch]=useReducer(AlertReducer,initialState)

    const setAlert=(alertMsg,alertType)=>{
        dispatch({type:'SET_ALERT',payload:{alertMsg,alertType}})
        setTimeout(() => {
            dispatch({type:'CLEAR_ALERT'})
        }, 3000);
    }
    

    return<AlertContext.Provider value={{alert:state,setAlert}}>{children}</AlertContext.Provider>
}
export default AlertContext