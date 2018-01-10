

 const cuisineReducer=(state = {
    cuisine:[]
    
}, action) => {

    switch (action.type) {
            case 'GET_CUISINE_SUCCESS':{
                console.log('reducer: GET_CUISINE_SUCCESS', action.payload)
                return{ cuisine:action.payload}
            }

            default:
            return state
        }
}

export {
    cuisineReducer
}