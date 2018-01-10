
import React,{Component} from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from 'react-router-dom'
import City from '../container/cityContainer'
// import NotFound from './component/notFoundPage'
import Cuisine from '../container/cuisineContainer'

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
    <div>
    <Switch>
         
          <Route path="/cuisine" component={Cuisine}/>
          <Route path="/" component={City} />
          {/* <Route path="*" component={NotFound}/> */}
     </Switch>
    </div>
    </Router>
  </Provider>

)

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root