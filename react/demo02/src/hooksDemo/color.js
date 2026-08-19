import React, { createContext ,useReducer} from 'react';

export const ColorContext = createContext()
export const UPDATE_COLOR = 'UPDATE_COLOR'
export const UPDATE_ADD = 'UPDATE_ADD'
export const UPDATE_REDUCE = 'UPDATE_REDUCE'
const reducer = (state,action)=>{
    switch (action.type){
        case UPDATE_COLOR:
            return action.color;
        case UPDATE_ADD:
            console.log(state)
            console.log(action)
            return state+1;
        case UPDATE_REDUCE:
            console.log(state)
            console.log(action)
            return state-1;
        default:
            return state
    }
}

export const Color = props=>{
    const [color,dispatch1] = useReducer(reducer,'pink')
    const [count,dispatch2] = useReducer(reducer,12)
    return (
        <ColorContext.Provider value={{color,dispatch1,count,dispatch2}}>
            {props.children}
        </ColorContext.Provider>
    )
}