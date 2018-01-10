
import axios from 'axios';
export function getCuisines()  {
    let user_key= "1a18ee16ccce8cd93b0f63b8f29ccbc7"
  return function(dispatch) {
    payload:axios.get('https://developers.zomato.com/api/v2.1/cuisines?city_id=1',
    { headers: { 'user-key': user_key } })
    .then((response)=>{
        console.log(response,"...............response")
        dispatch({type: "GET_CUISINE_SUCCESS",payload: response.data})
    },
    (err)=>{
        dispatch({type: "GET_ERROR",payload: err})
    })
    }
}