import React,{Component} from 'react'
import PropTypes from 'prop-types'
let date = new Date();
class Demo21Item extends Component{
    /*componentWillReceiveProps(){
        //也就是说这个组件第一次存在于Dom中，函数是不会被执行的;
        //如果已经存在于Dom中，函数才会被执行。
        console.log('child - componentWillReceiveProps')
    }*/
    shouldComponentUpdate(nextProps,nextState){//解决性能问题
        //函数会在组件更新之前，自动被执行
        //它要求返回一个布尔类型的结果，必须有返回值
        //返回true，就同意组件更新;返回false,就反对组件更新
        console.log('1-shouldComponentUpdate')
        if(nextProps.content!==this.props.content){
            return true
        }else{
            return false
        }
    }
    render(){
        console.log('child-render')
        return (
            <div>
                <p>{this.props.yyname}-----喜欢的产品：</p>
                <ul>
                    {
                        this.props.content.map((item,index)=>{
                            return (
                                <li onClick={this.handelClick.bind(this,index)} data={item+index} key={item+index}>{item}</li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
    handelClick(index){
        console.log('handelClick');
       this.props.deleteItem(index);
    }
}
Demo21Item.propTypes={
    content:PropTypes.array.isRequired,
    deleteItem:PropTypes.func
}
Demo21Item.defaultProps={
    yyname:date.getFullYear()
}
export default Demo21Item


