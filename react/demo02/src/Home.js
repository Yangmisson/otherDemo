
import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Work1 from './Work/Work1'
import List from './Work/List'
import Person from './Work/Person'
import Add from './Work/Add'
import Example1 from './Work/Example1'
import Example2 from './Work/Example2'
import HooksDemo from './hooksDemo/HooksDemo'
function Home(){
    let routeConfig = [
        {path:'/',to:'/',title:'办公',exact:true,component:Work1},
        {path:'/List/:id',to:'/List/123',title:'报表',exact:false,component:List},
        {path:'/Person',to:'/Person',title:'个人中心11',exact:false,component:Person},
        {path:'/Add',to:'/Add',title:'点击按钮+1',exact:false,component:Add},
        {path:'/Example1',to:'/Example1',title:'Example1',exact:false,component:Example1},
        {path:'/Example2',to:'/Example2',title:'ReducerDemo',exact:false,component:Example2},
        {path:'/HooksDemo',to:'/HooksDemo',title:'HooksDemo',exact:false,component:HooksDemo}
    ]
    const flag = true
    return (
        <Router>
            {
                /*<ul>
                 <li><Link to="/">办公</Link></li>
                 <li><Link to="/List/1">报表</Link></li>
                 </ul>
                 <p>不传任何东西，路由是没办法匹配成功的</p>
                 <hr/>
                 /!*标签式重定向*!/
                 <Route path="/" exact component={Work1} />
                 <Route path="/List/:id" component={List} />
                 <Route path="/Person/" component={Person} />*/
            }
            <ul>
                {
                    routeConfig.map((item,index)=>{
                        return (
                            <li key={item.component}><Link to={item.to} >map{item.title}</Link></li>
                        )
                    })
                }
            </ul>
            <hr/>
            <p>路由</p>
            {
                routeConfig.map((item,index)=>{
                    return (
                        <Route path={item.path} exact={item.exact} key={item.component} component={item.component}/>
                    )
                })
            }
            <hr/>
            {
                /*与运算符 &&*/
                flag&&<Person/>
            }
            <hr/>
            {
                /*三目运算符*/
                flag===false?<Person/>:<List/>                
            }

        </Router>
    )
}
export default Home;















