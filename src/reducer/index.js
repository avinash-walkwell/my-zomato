
import { combineReducers } from 'redux'
import {cityReducer}  from './cityReducer'
import {cuisineReducer} from './cuisineReducer'

export default combineReducers({
  cityReducer,
  cuisineReducer
})