const defaultState={
    inputValue:'请输入...',
    List:[
        '早八点开晨会reducer',
        '早九点沟通',
        '晚七点进度汇报'
    ]
}
//state: 指的是原始仓库里的状态。
//action: 指的是action新传递的状态。
import {CHANGE_INPUT,ADD_LIST,REMOVE_ITEM,AXIOS_LIST} from './actionTypes'
export  default (state=defaultState,action)=>{
    console.log(state,action)
    //reducer里只能接收state，不能改变state
    if(action.type===CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }else if(action.type===ADD_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.List.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }else if(action.type===REMOVE_ITEM){
        let newState = JSON.parse(JSON.stringify(state))
        newState.List.splice(action.index,1)
        return newState
    }else if(action.type===AXIOS_LIST){
        let newState = JSON.parse(JSON.stringify(state))
        newState.List = newState.List.concat(action.arr)
        return newState
    }
    return state
}
