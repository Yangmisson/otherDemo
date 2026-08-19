import React, { Component } from 'react';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        return (
           <div>
               <ul>
                   <li>报表1</li>
                   <li>报表2</li>
                   <li>报表3</li>
               </ul>
           </div>
        );
    }
    componentDidMount(){
        console.log(this.props.match)
    }
}

export default List;