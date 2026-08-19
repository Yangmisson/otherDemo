import React,{Component} from 'react'
import store from '../reactReducer/index'
import { connect } from 'react-redux'
//import axios from 'axios'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            dataList:store.getState()
        }
        console.log(this.props)
    }
    render(){
        return(
            <div>
                <div>
                    <input
                        onChange={this.props.changeInputValue}
                        value={this.props.inputValue}/>
                    <button onClick={this.props.clickButton}>提交</button>
                </div>
                <ul>
                    {
                        this.props.list.map((item,index)=>{
                            return (<li key={index}>{item}</li>)
                        })
                    }
                </ul>
            </div>
        )
    }

    componentDidMount(){

    }
}
const  stateToProps  = (state)=>{
    return {
        inputValue: state.inputValue,
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
            let action = { type:'add_item'}
            dispatch(action)
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);