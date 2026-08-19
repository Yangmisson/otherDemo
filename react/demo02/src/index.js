import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'flex.css/dist/data-flex.css'
import Home from './Home'
import { Provider } from 'react-redux'
import store from './store/index'
ReactDOM.render(<Home />, document.getElementById('root'));

