import thunk from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import promise from 'redux-promise-middleware';
import reducer from './../reducer';

const middleWare = applyMiddleware(promise(),thunk);
export default createStore(reducer,middleWare)