import React, { useState,useEffect ,createContext,useContext} from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

const CountContext = createContext();
function Example1(){
    
    // 用useEffect函数来代替生命周期函数
    //useState返回一对值：当前状态和更新状态的函数。
    const [count,setCount] = useState(0)
    useEffect(()=>{
        console.log(`useEffect=>You clicked ${count} times`)
        return ()=>{
            console.log(`Example1--走了`)
        }
    },[count])
    //只有在count发生变化的时候才会执行这个effect;
    //为空表示只有Example1这个组件被销毁被解绑的时候才执行effect;
    //如果数组中有多个项目，只要有一个的比较值是不相同的，React也会执行这个effect。
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <Router>
                <ul>
                    <li><Link to="/ExpIndex">Index</Link></li>
                    <li><Link to="/ExpList">List</Link></li>
                </ul>
                <Route path='/ExpIndex' exact component={ExpIndex}/>
                <Route path='/ExpList' component={ExpList}/>                
            </Router>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )    
}

function Counter(){

    let count = useContext(CountContext)
    console.log(useContext(CountContext))
    return <h2>{count}</h2>
}

function ExpIndex(){
    /*
     React首次渲染和之后的每次渲染都会调用一遍useEffect函数，
     而之前我们要用两个生命周期函数分别表示首次渲染(componentDidMonut)和
     更新导致的重新渲染(componentDidUpdate)。

     useEffect中定义的函数的执行不会阻碍浏览器更新视图，也就是说这些函数是异步执行的，
     而componentDidMonut和componentDidUpdate中的代码都是同步执行的。个人认为这个有好处也
     有坏处吧，比如我们要根据页面的大小，然后绘制当前弹出窗口的大小，如果时异步的就不好操作了。
     */
    useEffect(()=>{
        console.log(`useEffect=>ExpIndex来了`)
        return ()=>{
            console.log(`ExpIndex--走了`)
        }
    },[])
    return <h2>yang</h2>       
}
function ExpList(){
    useEffect(()=>{
        console.log(`useEffect=>ExpList来了`)
        return ()=>{
            console.log(`ExpList--走了`)
        }
    },[])
    return <h2>List</h2>       
}
 
export default Example1;