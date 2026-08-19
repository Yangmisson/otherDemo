import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './Home'
import { Provider } from 'react-redux'
import store from './store/store'
const App = (
    <Provider store={store}>
        <Home />
    </Provider>
)
ReactDOM.render(App, document.getElementById('root'));
