import React from 'react';
import ReactDOM from 'react-dom';
//import Demo21 from './demo2/Demo21';
//import TodoList from './todoList/TodoList';
import TodoList from './reactReducerDemo/TodoList';
import { Provider } from 'react-redux'
import store from './reactReducer'
//import '../src/static/css/commom.css';
//import '../src/static/css/all.css';
//import '../src/static/css/data-flex.css';
//提供器
const App = (
    <Provider store={store}>
        <TodoList/>
    </Provider>
)

ReactDOM.render( App ,document.getElementById('root'));
