import React, { Component } from 'react';
class Person extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <ul>
                    <li>员工编号：WW00049</li>
                    <li>姓名</li>
                    <li>性别</li>
                    <li>职位</li>
                    <li>手机</li>
                </ul>
            </div>
        );
    }
    componentDidMount(){

    }
}

export default Person;