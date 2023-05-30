const reducer = (state,action)=>{ // action: {type:.. payload:..}
    switch(action.type){
        case "UPDATE_CART": return {...state,
            cart:action.payload,
            isLoading:true
        };
        case "AUTH_LOGIN": return {...state,token:action.payload,isLoading:true};
        case "SHOW_LOADING": return {...state,isLoading:true};
        case "HIDE_LOADING": return {...state,isLoading:false};
        default: return state;
    }
}
export default reducer;