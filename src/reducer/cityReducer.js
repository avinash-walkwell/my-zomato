
 const cityReducer=(state = {
    city:[]
    
}, action) => {

    switch (action.type) {
            case 'GET_CITY_SUCCESS':{
                console.log('reducer: GET_CITY_SUCCESS', action.payload)
                return{ city:action.payload}
            }

            default:
            return state
        }
}

export {
    cityReducer
}