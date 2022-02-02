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