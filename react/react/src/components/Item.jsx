import React, { Fragment } from 'react'
// import item from '@/assets/css/item.css'
// console.log(item)
function Item(props) {
    return <section className="section">
        <h3>{props.user}</h3>
        <p><span className="span">{props.txt}</span></p>
    </section>
}

export default Item




