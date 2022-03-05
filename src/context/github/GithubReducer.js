const GithubReducer=(state,action)=>{
    switch(action.type){
        case 'GET_USERS':
            return{
                ...state,
                users:action.payload,
                loading:false
            }

        case 'SET_LOADING':
            return {
                ...state,
                loading:true
            };
        case 'CLEAR_USERS':
            return {
                ...state,
                users:[],
            }
        case 'GET_USER_AND_REPOS':
            return{
            ...state,
            user:action.payload.dataUser,
            repos:action.payload.dataRepos,
            loading:false
            }
        default:
            return state
    }
}
export default GithubReducer;