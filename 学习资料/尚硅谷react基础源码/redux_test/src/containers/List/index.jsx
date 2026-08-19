import React, { Component } from 'react';
import { connect } from 'react-redux'
import { addList } from '../../redux/actions/list'
class List extends Component {
  add = () => {
    this.props.addList(this.inputNode.value)
    this.inputNode.value = ''
  }
  render() {
    return (
      <div>
        <p>count:{this.props.count}</p>
        <ul>
          {
            this.props.list.map((item, index) => {
              return <li key={index}>{item}</li>
            })
          }
        </ul>
        <input ref={c => this.inputNode = c} type="text" />
        <button onClick={this.add}>添加</button>
      </div>
    );
  }
}

export default connect(
  state => ({
    count: state.count,
    list: state.list
  }),
  { addList }
)(List)