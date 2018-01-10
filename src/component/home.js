
import React, { PropTypes } from 'react'
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
export default class Home extends React.Component{
  
    render(){
        return(
            <Link className="btn btn-success" to="/">Home</Link>
         
        )
    }
}