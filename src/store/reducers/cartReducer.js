const cartReducer = (state=[],action) => {
    switch(action.type) {
        case "add":
            return state.push(action.payload);
        case "delete":
            return state.filter();
        default:
            return state;
    }
}
export default cartReducer;