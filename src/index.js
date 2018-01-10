import React from 'react';
// import ReactDOM from 'react-dom';
import { render } from 'react-dom'
import './index.css';
// import App from './App';
import store from './store/store'
import Root from './route/route'
import registerServiceWorker from './registerServiceWorker';

render(
<Root store={store}/>,
  document.getElementById('root'));
registerServiceWorker();
