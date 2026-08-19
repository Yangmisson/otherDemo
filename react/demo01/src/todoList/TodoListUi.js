import React from 'react'
import 'antd/dist/antd.css'
import { Input,Button,List } from 'antd'
const TodoListUi = (props)=>{//无状态组件，效率要高于以前写的普通react组件,能使用时尽量使用。（最大特点是无任何逻辑只有UI）
    return(
        <div>
            <div>
                <Input
                    style={{width:'250px',margin:'10px'}}
                    placeholder={props.inputValue}
                    onChange={props.changeInputValue}
                    value={props.inputValue}
                />
                <Button onClick={props.addList} type="primary">增加</Button>
            </div>
            <div style={{margin:'10px',width:'300px'}}>
                <List
                    bordered
                    dataSource={props.List}
                    renderItem={(item,index)=>(<List.Item onClick={()=>{props.removeItem(index)}}>{item}</List.Item>)}
                ></List>
            </div>
        </div>
    )    
}
export default TodoListUi