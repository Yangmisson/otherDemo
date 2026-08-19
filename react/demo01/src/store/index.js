import { createStore ,applyMiddleware,compose} from 'redux'  // 引入createStore方法
import reducer from './reducer'
import thunk from 'redux-thunk'
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose
const enhancer = composeEnhancer(applyMiddleware(thunk))
const store = createStore(reducer,enhancer
    //applyMiddleware(thunk),
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)// 创建数据存储仓库
export default store //暴露出去



