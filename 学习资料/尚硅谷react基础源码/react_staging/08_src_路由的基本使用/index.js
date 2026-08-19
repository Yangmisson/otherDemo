//引入react核心库
import React from 'react'
//引入ReactDOM
import ReactDOM from 'react-dom'
//
import {BrowserRouter} from 'react-router-dom'
//引入App
import App from './App'

// HashRouter:路径中带#
// BrowserRouter:路径中不带#
ReactDOM.render(
	<BrowserRouter>
		<App/>
	</BrowserRouter>,
	document.getElementById('root')
)