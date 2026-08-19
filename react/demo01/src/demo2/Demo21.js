/* eslint-disable */
import React,{Component,Fragment} from 'react'
import Demo21Item from './Demo21Item'
import Css3 from './../css3/Css3'
import InputForm from './../input/Input'
import '../static/css/all.css'
import axios from 'axios'
class Demo21 extends Component{
    //生命周期：在某一时刻，可以自动执行的函数
    constructor(props){//构造函数，super调用父级（Component）方法
        super(props)
        this.state={
            inputValue:'测试',
            list:['iPad','华为','小米']
        }
        this.addList = this.addList.bind(this)
        this.inputChange = this.inputChange.bind(this)
    }
    /* componentWillMount(){
        console.log('componentWillMount---组件将要挂载到页面的时刻')
    }
    componentDidMount(){
        console.log('componentDidMount---组件挂载完成的时刻')
    }
    shouldComponentUpdate(){
        console.log('1-shouldComponentUpdate')
        return true
    }
    componentWillUpdate(){
        console.log('2-componentWillUpdate')
    }*/
    /*componentWillReceiveProps(){
        console.log('child - componentWillReceiveProps')
    }*/
    componentDidMount(){
        axios.get('https://www.easy-mock.com/mock/5d5f8bf51a72581d40cef391/example/get',{
                params: {
                    'uid': 'BF1000039'
                },
            timeout:10000
        }).then((res)=>{
            console.log(res)
            if(res.data.code_status==200){
                console.log(res.data.data.username)
            }else {
                console.log('请求失败')
            }
        }).catch((error)=>{
            console.log(error)
        })

    }
    render(){//渲染，生命周期函数
        console.log('3-render---组件挂载中')
        return (
            <Fragment>
                { /*注释*/}
                <ul className="add" flex="box:first cross:center">
                    <li><input
                        onChange={this.inputChange}
                        value={this.state.inputValue}
                        ref={(input)=>{this.input2=input}}
                        type="text"/></li>
                    <li><input onClick={this.addList} type="button" value="新增产品"/></li>
                </ul>
                <ul ref={(ul)=>{this.ulLi=ul}}>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li
                                    onClick={this.removeList.bind(this,index)}
                                    dangerouslySetInnerHTML={{__html:index+1+'、'+item}}
                                    data={item+index} key={item+index}
                                ></li>
                            )
                        })
                    }
                </ul>
                {/*条件渲染*/}
                <div>
                    {true&&<p>hello world！</p>}
                    {false&&<p>你好！</p>}
                </div>
                <Demo21Item content={this.state.list} deleteItem={this.deleteItem.bind(this)}/>
                <InputForm/>
                <Css3/>
            </Fragment>
        );
    }
    /*inputChange(e){
        console.log(this);
        console.log(e.target.value);
        this.setState({
            inputValue:e.target.value
        })
    }*/
    inputChange(){
        this.setState({
            inputValue:this.input2.value
        })
    }
    addList(){
        //setState是异步方法
        this.setState({
            list:[...this.state.list,this.state.inputValue]
        },()=>{
            console.log(this.state.list.length)
            console.log(this.ulLi.querySelectorAll('li').length)
        })
    }
    removeList(index){//不能直接操作 this.state.list.splice(index,1)
        let list = this.state.list;
        list.splice(index,1);
        this.setState({
            list:list
        })
    }
    deleteItem(index){
        let list = this.state.list
        list.splice(index,1)
        this.setState({
            list:list
        })

    }
}
export default Demo21
