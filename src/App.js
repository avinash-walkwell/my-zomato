import React, { Component } from 'react';
import logo from './logo.svg';
import ShoppingList from './List.js'
import { Input } from 'antd';
import 'antd/dist/antd.css';
import './App.css';
import { Card, Col, Row } from 'antd';

const Search = Input.Search

class App extends Component {
  render() {
    return (
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
        {/* <div className="App-hero">
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
            <li>
              <img src={logo} />
              <h2>Lorm Ipsum</h2>
            </li>
            <li>
              <img src={logo} />
              <h2>Lorm Ipsum</h2>
            </li>
            <li>
              <img src={logo} />
              <h2>Lorm Ipsum</h2>
            </li>
            <li>
              <img src={logo} />
              <h2>Lorm Ipsum</h2>
            </li>
            <li>
              <img src={logo} />
              <h2>Lorm Ipsum</h2>
            </li>
            <li>
              <img src={logo} />
              <h2>Lorm Ipsum</h2>
            </li>
          </ul>
        </div> */}
        <div className="App-detail">
          <img src={logo} />
          <section>
            <h1>Product</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt tempor sapien. Sed fringilla, velit et tincidunt sagittis, lectus turpis mollis ligula, eu congue nisl justo quis erat. Vestibulum auctor nunc eget accumsan lobortis. Aliquam erat volutpat. Nunc non nibh dapibus, consequat mi a, tincidunt est. Fusce gravida quis est vitae tincidunt. Cras hendrerit</p>
            </section>
          </div>
      </div>
    );
  }
}

export default App;
