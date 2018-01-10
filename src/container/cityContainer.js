
import { connect } from 'react-redux'
import City from '../component/city'
import * as actions from '../action/cityAction'

const mapStateToProps = (state, ownProps) => {
  console.log(state.cityReducer,"getContainer")
  return {
    city: state.cityReducer.city.location_suggestions
  }
}


export default connect(
  mapStateToProps,
  actions
)(City)