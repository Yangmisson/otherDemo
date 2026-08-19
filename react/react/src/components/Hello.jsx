import React from 'react'
export default function Hello(props){
    //不论vue还是react,组件中的props是只读的
    console.log(props)
    return <div>1111{props.name}--{props.age}--</div>
}











