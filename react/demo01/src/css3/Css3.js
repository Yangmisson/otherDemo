import React,{Component} from 'react'
class Css3 extends Component{
    constructor(props){
        super(props);
        this.state={
            isShow:true
        }
        this.toToggle = this.toToggle.bind(this)
    }
    render(){
        return(
            <div>
                <div className={this.state.isShow?'show':'hide'}>测试测试</div>
                <div><button onClick={this.toToggle}>点击</button></div>
            </div>
        )
    }
    toToggle(){
        this.setState({
            isShow:this.state.isShow?false:true
        })
    }
}
export default Css3