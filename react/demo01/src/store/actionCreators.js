import {CHANGE_INPUT,ADD_LIST,REMOVE_ITEM,AXIOS_LIST} from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value)=>({type:CHANGE_INPUT,value})
export const addListAction = (value)=>({type:ADD_LIST,value})
export const removeItemAction = (index)=>({type:REMOVE_ITEM,index})
export const axiosListAction = (arr)=>({type:AXIOS_LIST,arr})

export const getList = ()=>{
    return (dispatch)=>{
        axios.get('https://www.easy-mock.com/mock/5d5f8bf51a72581d40cef391/example/todolist',{
            params: {},
            timeout:10000
        }).then((res)=>{
            console.log(res.data.data)
            if(res.data.code_status===200){
                console.log(res.data.data.list)
                const action = axiosListAction(res.data.data.list)
                dispatch(action)
                console.log('请求成功')
            }else {
                console.log('请求失败')
            }
        }).catch((error)=>{
            console.log(error)
        })
    }
}