
import axios from 'axios';

export function getCities()  {
    let user_key= "1a18ee16ccce8cd93b0f63b8f29ccbc7"
  return function(dispatch) {
    payload:axios.get('https://developers.zomato.com/api/v2.1/cities?lat=28.7041&lon=77.1025',
    { headers: { 'user-key': user_key } })
    .then((response)=>{
        console.log(response,"...............response")
        dispatch({type: "GET_CITY_SUCCESS",payload: response.data})
    },
    (err)=>{
        dispatch({type: "GET_ERROR",payload: err})
    })
    }
}
