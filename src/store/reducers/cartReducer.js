const cartReducer = (state=[],action) => {
    switch(action.type) {
        case "addItem":
            var exist = state.find(obj => {
                if(obj !== null){
                    return obj.name === action.payload.name
                }}
                )
            var filteredState = state.filter(obj => obj!==null);
            if(!exist){
                console.log("cartReducer: !exist")
                return [...filteredState, action.payload]
            }else{
                const newState = filteredState.map(obj => {
                    if(obj !== null && obj.name === action.payload.name){
                        console.log("obj.type.quantity :"+obj.quantity)
                        return {...obj, quantity:obj.quantity+action.payload.quantity}
                    }
                    return obj;
                })
                return newState;
            }
            
            // return [...state,action.payload];
        case "reduceItem":
            console.log("cartReducer reducing Item for : ")
            console.log(action.payload.name)
            var exist = state.find(obj => {
                if(obj !== null){
                    return obj.name === action.payload.name
                }}
                )
            //remove null from state array
            var filteredState = state.filter(obj => obj!==null);
            if(!exist){
                console.log("cartReducer: !exist")
            }else{
                const newState = filteredState.map(obj => {
                    if(obj !== null && obj.name === action.payload.name && obj.quantity>1){
                        console.log("obj.type.quantity :"+obj.quantity)
                        return {...obj, quantity:obj.quantity-1}
                    }else if(obj !== null && obj.quantity===1 && obj.name === action.payload.name){
                        
                        return null
                    }
                    return obj;
                })
                return newState;
            }
            return state.filter();
        case "deleteItem":
            console.log("cartReducer deleting Item for : ")
            console.log(action.payload.name)
            var filteredState = state.filter(obj => obj!==null);
            var newState = filteredState.map(obj => {
                console.log(obj)
                if(obj.name === action.payload.name){
                    console.log("entered :"+obj.name)
                    return null;
                }
                return obj;
            })
            // var newState = [...state];
            // newState.splice(action.payload.id, 1, null)
            console.log("newState")
            console.log(newState)
            return newState;
        default:
            return state;
    }
}
export default cartReducer;