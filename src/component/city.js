import React from 'react'
import logo from '../logo.svg';
import '../App.css';
import 'antd/dist/antd.css';
import {Input} from 'antd'
import { BrowserRouter as Link, Redirect } from 'react-router-dom'
 import SweetAlert from 'react-bootstrap-sweetalert';
 import {MenuItem, DropdownButton, Modal, Button,
  OverlayTrigger, Pagination } from 'react-bootstrap';

  const Search = Input.Search
class City extends React.Component{

  constructor(props){
    super(props)
    this.state={
     isactive:false
    };
    this.getCuisine = this.getCuisine.bind(this)
  }

  getCuisine(){
    this.setState({isactive:true})
}

  componentDidMount(props)
  {
    this.props.getCities();
  }
  componentWillReceiveProps(props){
   
  }
 
  render()
  {
    if(this.state.isactive){
      return(
        <Redirect to ="/cuisine"/>
      )
    }
    if(this.props.city){
  return(
    // <div className="container">
    //   <h3 className="header"><b>Welcome</b></h3>
    //   <div className="col-xs-3 col-xs-offset-4" style={{marginTop:'-28px'}}>
    //   <input className="form-control text-center" type = "text" value={this.state.search} onChange={this.handleSearch} placeholder="Search" name = "search"/>  <br/>
    //  </div>
    //  <br/>
    //     <div className="panel-group">
    //       <div className="panel panel-primary">
    //       <div className="panel-heading">User Info <span className="pull-right" style={{marginTop:'-7px'}}></span></div>
    //       <div className="panel-body">
    //         <table className="table table-striped">
    //           <thead>
    //             <tr><th>index</th>
    //             <th>Country name</th>
    //             <th>Name</th>
    //             <th>Name</th>
    //             {/* <th style={{paddingLeft:'45px'}}>Action</th> */}
    //             </tr>
    //             </thead>
    //             <tbody>
    //             { this.props.city.map((user,index)=> 
    //             <tr key={index}>
    //                 <td>{user.id}</td>
    //                 <td><a style={{cursor:'pointer'}} onClick={this.getCuisine}>{user.country_name}</a></td>
    //                 <td>{user.name}</td>
    //                 <td>{user.name}</td>
    //                   </tr> 
    //                 )}
    //                 </tbody>
    //         </table>
    //       </div>
    //     </div>
    //   </div> 
      
    // </div>  


    <div className="App-container">
    <div className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <nav>
        <ul>
          <li>
            Home
          </li>
          <li>
            Categories
          </li>
          <li>
            Order Now
          </li>
          </ul>
        </nav>
    </div>
    <div className="App-hero">
      <h1>Zomato</h1>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        style={{ width: 400 }} />
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt tempor sapien. Sed fringilla, velit et tincidunt sagittis, lectus turpis mollis ligula, eu congue nisl justo quis erat. Vestibulum auctor nunc eget accumsan lobortis. Aliquam erat volutpat. Nunc non nibh dapibus, consequat mi a, tincidunt est. Fusce gravida quis est vitae tincidunt. Cras hendrerit</p>
    </div>
    <div className="App-section">
      <h1>Cities</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt tempor sapien. Sed fringilla, velit et tincidunt sagittis, lectus turpis mollis ligula, eu congue nisl justo quis erat. Vestibulum auctor nunc eget accumsan lobortis. Aliquam erat volutpat. Nunc non nibh dapibus, consequat mi a, tincidunt est. Fusce gravida quis est vitae tincidunt. Cras hendrerit</p>
      <ul>
          {this.props.city.map((user,index)=>
        <li key={index}>
          <img src={logo} />
          <h2><a style={{cursor:'pointer'}} onClick={this.getCuisine}>{user.name}</a></h2>
        </li>
      )}
      </ul>
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


export default City
