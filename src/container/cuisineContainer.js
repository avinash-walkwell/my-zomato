
import { connect } from 'react-redux'
import Cuisine from '../component/cuisine'
import * as actions from '../action/cuisineAction'

const mapStateToProps = (state, ownProps) => {
  console.log(state.cuisineReducer,"getContainer")
  
  return {
    cuisine: state.cuisineReducer.cuisine.cuisines
  }
}


export default connect(
  mapStateToProps,
  actions
)(Cuisine)