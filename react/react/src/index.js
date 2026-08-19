import React, { Fragment } from 'react'
import ReactDom from 'react-dom'

/* const myp = React.createElement('p',{id:'p',data:'我是p'},'我是一个p')
const mydiv = React.createElement('div',{id:'div',data:'1542'},'我是一个div',myp)
ReactDom.render(mydiv,document.getElementById('app')) */


//启用jsx语法
//安装babel插件
//npm i babel-core babel-loader babel-plugin-transform-runtime -D
//npm i babel-preset-env babel-preset-stage-0 -D
//安装能够识别转换jsx语法的包
//npm i babel-preset-react -D
//添加.babelrc配置文件
// {
//     "presets":["env","stage-0","react"],
//     "plugins":["transform-runtime"]
// }

//当我们要在jsx区域写js表达式了，则需要把js代码写入{}中


// 第一种创建组件的方式
/* function Hello(props){
    //不论vue还是react,组件中的props是只读的
    console.log(props)
    return <div>1111{props.name}--{props.age}--</div>
} */


// 用构造函数创建出来的组件，叫做无状态组件
// 用class关键字创建出来的组件，叫做有状态组件
// 无状态组件 和 有状态组件之间的本质区别就是：有无state属性和有无生命周期
// 如果一个组件需要有自己的私有属性，则推荐使用class创建的有状态组件
// 如果一个组件不需要私有的属性，则推荐使用无状态组件
// 无状态组件由于没有生命周期函数和state，使用运行效率会比有状态组件稍微高些

import '@/assets/css/all.css'
import List from '@/components/List'


ReactDom.render(
    <Fragment>
        <List name={'list'} age={11}></List>
    </Fragment >,
    document.getElementById('app')
)















