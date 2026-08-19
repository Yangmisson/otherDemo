import React,{useContext} from 'react';
import {ColorContext,UPDATE_COLOR,UPDATE_ADD,UPDATE_REDUCE} from './color'
function Buttons(){
    console.log(useContext(ColorContext))
    const { dispatch1 ,dispatch2} = useContext(ColorContext)
    return (
        <div>
            <button onClick={()=>{dispatch1({type:UPDATE_COLOR,color:"red"})}}>红色</button>
            <button onClick={()=>{dispatch1({type:UPDATE_COLOR,color:"green"})}}>绿色</button>
            <button onClick={()=>{dispatch2({type:UPDATE_ADD})}}>增加</button>
            <button onClick={()=>{dispatch2({type:UPDATE_REDUCE})}}>减少</button>
        </div>
    )
}
export default Buttons;