import React, { Fragment } from 'react'
import Item from '@/components/Item'
// 不论是class还是function创建的组件，它们的props都是只读的
class List extends React.Component {
    constructor(props) {
        // 由于List组件，继承了React.Component这个父类，所以，自定义的构造器中，必须调用super()
        // 只有调用了super()才能使用this关键字
        super(props)
        this.state = {
            value: '请输入',
            list: [
                { id: 1, user: '张三', txt: '全都是泡沫...' },
                { id: 2, user: '李四', txt: '雨一直下...' },
                { id: 3, user: '王五', txt: '我是一只来自前年的白...' },
                { id: 4, user: '刘麻子', txt: '多少人曾在你生命中...' },
                { id: 5, user: '田七', txt: '宁静的夏天...' }
            ]
        }
    }
    render() {
        console.log(this.props)
        return (
            <Fragment>
                <p><input type="text" ref="txt" onChange={(e)=>{this.change(e)}} value={this.state.value}/></p>
                <p><input onClick={() => this.add(222)} type="button" value="添加" /></p>
                <p>{this.state.value}</p>
                {
                    this.state.list.map((item) => {
                        return (
                            <Item key={item.id} {...item}></Item>
                        )

                    })
                }
            </Fragment>
        )
    }
    change(e){
        // console.log('变化了')
        console.log(e.target.value)//1
        console.log(this.refs.txt.value)//2
        this.setState({
            value:e.target.value
        })
    }
    add(data) {
        console.log(data)

        //#region 注释

        //#endregion

        // 注意：setState方法的执行是异步的
        // 如想立即拿到最新的值，需要使用this.setState({},callback)
        this.setState({
            value: this.state.value + 1
        }, function () {
            console.log(this.state.value)
        })

    }
}

export default List





