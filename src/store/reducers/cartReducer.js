const cartReducer = (state=[],action) => {
    switch(action.type) {
        case "addItem":
            return [...state, action.payload];
        case "deleteItem":
            return state.filter();
        default:
            return state;
    }
}
export default cartReducer;