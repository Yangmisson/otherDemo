import React, { useState } from 'react';
function Add(){
    //useState是react自带的一个hook函数，它的作用是用来声明状态变量。声明、读取、使用（修改）
    const [ count , setCount ] = useState(11);
    const [ myname , setName ] = useState('yangellr');
    const [ love , setLove ] = useState('钱');
    return (
        <div>
            <p>点击后我是{count}</p>
            <p>我是：{myname}</p>
            <p>爱好：{love}</p>
            <input type='button' onClick={()=>setCount(count+1)} value='添加'/>
            <p>
                <input type="text" value={myname} onChange={(e)=>setName(e.target.value)}/>
            </p>
            <p>
                <input type="text"/>
                <input type='button' onClick={()=>setLove(count+1)} value='添加'/>
            </p>
        </div>
    )
}
 
export default Add;