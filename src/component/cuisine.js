

import React, { Component } from 'react'
// import Home from './headers/cuisineHeader'
import { BrowserRouter as Link, Redirect } from 'react-router-dom'
import Home from './home'
export default class Cuisine extends Component{
    constructor(){
        super()
        this.state={}

    }

    componentDidMount(props)
  {
    this.props.getCuisines();
  }

    render(){
            if(this.props.cuisine){
                return(
                  <div className="container">
                    <h3 className="header"><b>Welcome</b></h3>
                    <div>  <Home/> </div>
                    <div className="col-xs-3 col-xs-offset-4" style={{marginTop:'-28px'}}>
                    <input className="form-control text-center" type = "text" value={this.state.search} onChange={this.handleSearch} placeholder="Search" name = "search"/>  <br/>
                   </div>
                   <br/>
                      <div className="panel-group">
                        <div className="panel panel-primary">
                        <div className="panel-heading">User Info <span className="pull-right" style={{marginTop:'-7px'}}></span></div>
                        <div className="panel-body">
                          <table className="table table-striped">
                            <thead>
                              <tr><th>index</th>
                              <th> Country name</th>
                              {/* <th style={{paddingLeft:'45px'}}>Action</th> */}
                              </tr>
                              </thead>
                              <tbody>
                              { this.props.cuisine.map((user,index)=> 
                              <tr key={index}>
                                  <td>{user.cuisine.cuisine_id}</td>
                                  <td>{user.cuisine.cuisine_name}</td>
                                    </tr> 
                                  )}
                                  </tbody>
                          </table>
                        </div>
                      </div>
                    </div> 
                    
                  </div>  
                  
                )
               }
               else{
                 return (
                   <h2 className="text-center">No Data</h2>
                 )
               }
    }
}