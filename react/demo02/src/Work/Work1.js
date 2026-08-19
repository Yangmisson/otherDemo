import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Index
class Work1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {cid:123,title:'技术胖的个人博客-1'},
                {cid:456,title:'技术胖的个人博客-2'},
                {cid:789,title:'技术胖的个人博客-3'}
            ]
        }
        //this.props.history.push("/Person/");
    }
    render() {
        return (
            <div>
                {
                    /*标签式重定向*/
                    /*<Redirect to="/Person/" />*/
                }
                <ul>
                    <li>办公111</li>
                    <li>办公222</li>
                    <li>办公</li>
                    <li>办公5555</li>
                </ul>
                <input type="button" onClick={this.toPerson.bind(this)} value="个人中心"/>
                <ul>
                    {
                        this.state.list.map((item,index)=>{
                            return (
                                <li key={index+item}>
                                    <Link to={'/List/'+item.cid}> {item.title}</Link>
                                </li>
                            )
                        })
                    }
                </ul>

            </div>
        );
    }
    toPerson(){//编程式重定向
        this.props.history.push("/Person/");
    }
    componentDidMount(){
        console.log(this.props.match)
    }
}

export default Work1;