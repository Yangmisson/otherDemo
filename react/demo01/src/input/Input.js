import React,{Component} from 'react'
class Input extends Component{
    constructor(props){
        super(props)
        this.state={
            userInfo:{
                userName:'',
                sex:'',
                age:'25'
            },
            arrData:[1,2,5]
        }
        /*this.userChange = this.userChange.bind(this)
        this.changeAge = this.changeAge.bind(this)*/
        this.consoleData = this.consoleData.bind(this)
    }
    render(){
        return(
            <div style={{border:'1px solid #f00'}}>
                <ul>
                    <li>
                        <label htmlFor="userName">请输入姓名：</label>
                        <input name="userName"
                            value={this.state.userInfo.userName}
                            onChange={this.handelChange.bind(this,'userName')} type="text"/>
                    </li>
                    <li>
                        <p>性别：</p>
                        <div data-flex="box:mean cross:center" >
                            <p><input onChange={this.handelChange.bind(this,'sex')} type="radio" name="sex" id="boy"/><label htmlFor="boy">男</label></p>
                            <p><input onChange={this.handelChange.bind(this,'sex')} type="radio" name="sex" id="girl"/><label htmlFor="girl">女</label></p>
                        </div>
                    </li>
                    <li>
                        <p>年龄：</p>
                        <select value={this.state.userInfo.age} name="age"
                                onChange={this.handelChange.bind(this,'age')} id="age">
                            <option value="21" >21</option>
                            <option value="23">23</option>
                            <option value="25">25</option>
                            <option value="27">27</option>
                        </select>
                    </li>
                    <li><button onClick={this.consoleData}>打印数据</button></li>
                </ul>
            </div>
        )
    }
    handelChange(name,e){
        let userInfo = this.state.userInfo
        userInfo[name]=name==="sex"?e.target.id:e.target.value;
        this.setState({
            ...this.userInfo,userInfo,
            arrData:[...this.state.arrData,e.target.value]
        },()=>{
            console.log(userInfo)
            console.log(this.state.arrData)
        })
    }
    consoleData(){
        console.log(this.state.userInfo)
    }

    
}
export default Input