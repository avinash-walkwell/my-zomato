import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
=======
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
>>>>>>> cfe7b60ade00d56efd78c19cf5178bef41cb9406
registerServiceWorker();
