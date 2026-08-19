import React ,{Fragment} from 'react'
import ReactDom from 'react-dom'

import Hello from '@/components/Hello'

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
let a = 15;
let flag = false;
let str = `15*2=${a * 2}`;
const h = <h1>我是h1</h1>
const arr = ['北京', '上海', '广州', '成都'];
const arr2 = [
    <h1 key={1}>我是h1</h1>,
    <h2 key={2}>我是h2</h2>
]
const dog = {
    name: '泥土',
    age: 6,
    gender: '雄'
}

// 第一种创建组件的方式
/* function Hello(props){
    //不论vue还是react,组件中的props是只读的
    console.log(props)
    return <div>1111{props.name}--{props.age}--</div>
} */

const mydiv =
    <Fragment>
        <ul>
            <li>{str}</li>
            <li className="li2" title={a}>li2</li>
            <li>{flag ? '真' : <span>2222</span>}</li>
            <li>{h}</li>
        </ul>
        {
            arr.map(element => <p key={element}>{element}</p>)
        }
        {arr2}
        {/* 注释 */}
        {
            // 这是注释
            // class => className
            // label的for => htmlFor
        }
        {/* <Hello name={dog.name} age={dog.age}></Hello> */}
        <Hello {...dog}></Hello>
    </Fragment>


// 用构造函数创建出来的组件，叫做无状态组件
// 用class关键字创建出来的组件，叫做有状态组件
// 无状态组件 和 有状态组件之间的本质区别就是：有无state属性和有无生命周期
// 如果一个组件需要有自己的私有属性，则推荐使用class创建的有状态组件
// 如果一个组件不需要私有的属性，则推荐使用无状态组件
// 无状态组件由于没有生命周期函数和state，使用运行效率会比有状态组件稍微高些


// 不论是class还是function创建的组件，它们的props都是只读的
class List extends React.Component {
    constructor(props){
        // 由于List组件，继承了React.Component这个父类，所以，自定义的构造器中，必须调用super()
        // 只有调用了super()才能使用this关键字
        super(props)
        this.state = {
            msg:'大家好'
        }
    }
    render() {
        console.log(this.props)
        this.state.msg = '我是 Yang'
        return (            
            <Fragment>
                <p>Hello! {this.state.msg}</p>
                <p>{this.props.name}---{this.props.age}---{this.props.gender}</p>
            </Fragment>
        )
    }
}
ReactDom.render(
    <Fragment>
        <a>链接</a>
        {mydiv}
        <List {...dog}></List>
    </Fragment>,
    document.getElementById('app')
)















