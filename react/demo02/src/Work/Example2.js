import React, { useReducer } from 'react';


//reducer其实就是一个函数，这个函数接收两个参数，一个是状态，一个用来控制业务逻辑的判断参数
function ReducerDemo(){
    const [count,dispatch] = useReducer((state,action)=>{
        switch(action){
            case 'add': return state+1
            case 'sub': return state-1
            default: return state
        }
    },15)//第二个参数是默认值
    return(
        <div>
            <h2>现在的分数是{count}</h2>
            <button onClick={()=>{dispatch('add')}}>add</button>
            <button onClick={()=>{dispatch('sub')}}>reduce</button>
        </div>
    )
}
export default ReducerDemo;