export const addItem = (item) =>{
    return (dispatch) => {
        dispatch(
            {
                type:'addItem',
                payload:item
            }
        )
    }
}
export const reduceItem = (item) =>{
    return (dispatch) => {
        dispatch(
            {
                type:'reduceItem',
                payload:item
            }
        )
    }
}

export const deleteItem = (item) =>{
    return (dispatch) => {
        dispatch(
            {
                type:'deleteItem',
                payload:item
            }
        )
    }
}