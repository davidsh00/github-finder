const AlertReducer=(state,action)=>{
    switch(action.type){
        case "SET_ALERT":
            return{
                msg:action.payload.alertMsg,
                type:action.payload.alertType
            }
        case "CLEAR_ALERT":
            return{
                msg:'',
                type:""
            }
        default:
            return state
    }

}
export default AlertReducer