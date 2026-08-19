import React,{Component} from 'react'
import store from '../store/index'
//import axios from 'axios'
import { changeInputAction , addListAction , removeItemAction,getList} from '../store/actionCreators'
import TodoListUi from './TodoListUi'
class TodoList extends Component{
    constructor(props){
        super(props);
        this.state={
            todoListData: store.getState()
        }
        this.changeInputValue = this.changeInputValue.bind(this)
        this.addList = this.addList.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.storeChange = this.storeChange.bind(this)  //转变this指向
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    render(){
        return(
            <TodoListUi
                inputValue={this.state.todoListData.inputValue}
                changeInputValue={this.changeInputValue}
                addList={this.addList}
                removeItem={this.removeItem}
                List={this.state.todoListData.List}
            />
        )
    }
    changeInputValue(e){
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange(){
        this.setState({
            todoListData:store.getState()
        })
    }
    addList(e){
        const action = addListAction(e.target.value)
        store.dispatch(action)
    }
    removeItem(index){
        const action = removeItemAction(index)
        store.dispatch(action)
    }
    componentDidMount(){
        const action = getList();
        store.dispatch(action)
        /*axios.get('https://www.easy-mock.com/mock/5d5f8bf51a72581d40cef391/example/todolist',{
            params: {},
            timeout:10000
        }).then((res)=>{
            console.log(res.data.data)
            if(res.data.code_status===200){
                console.log(res.data.data.list)
                const action = axiosListAction(res.data.data.list)
                store.dispatch(action)
            }else {
                console.log('请求失败')
            }
        }).catch((error)=>{
            console.log(error)
        })*/
    }
}
export default TodoList