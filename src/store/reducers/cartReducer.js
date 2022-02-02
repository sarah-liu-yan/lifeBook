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
                    }else if(obj !== null && obj.quantity===1){
                        
                        return null
                    }
                    return obj;
                })
                return newState;
            }
            return state.filter();
        default:
            return state;
    }
}
export default cartReducer;