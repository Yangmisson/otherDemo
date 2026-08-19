import React,{ Component } from 'react'
import { connect } from 'react-redux'  //引入连接器
import store from './store/index'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            listData:store.getState()
        }
    }
    render(){
        let {inputValue ,changeInputValue,clickButton,list} = this.props;//解构赋值
        return(
            <div>
                <ul className="boxInput" data-flex="box:last cross:center">
                    <li>
                        <input
                            className="input"
                            onChange={changeInputValue}
                            value={inputValue}
                        />
                    </li>
                    <li>
                        <input
                            className="btn"
                            onClick={clickButton.bind(this)}
                            type="button" value="提交"/>
                    </li>
                </ul>
                <ul className="listBox">
                    {
                        list.map((item,index)=>{
                            return(
                                <li key={index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
    componentDidMount(){

    }
}
const stateToProps = (state)=>{
    return {
        inputValue : state.inputValue,
        list:state.list
    }
}
const dispatchToProps = (dispatch)=>{
    return{
        changeInputValue(e){
            const inputValue = e.target.value
            let action = {
                type:'change_input',
                value:inputValue
            }
            dispatch(action)//派发
        },
        clickButton(){
            console.log(this.props.inputValue)
            if(!this.props.inputValue){
                alert('请先输入内容!')
            }else {
                let action = { type:'add_item'}
                dispatch(action)
            }
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);