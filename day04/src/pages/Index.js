import React, { Component } from 'react'
import {Link,Redirect} from 'react-router-dom'
export default class Index extends Component {
    constructor(props) {
        super(props)
        // this.props.history.push("/home/");  
        this.state = {
            list: [
                { cid: 123, title: '技术胖的个人博客-1' },
                { cid: 456, title: '技术胖的个人博客-2' },
                { cid: 789, title: '技术胖的个人博客-3' },
            ]
        }
    }
    render() {
        let list = this.state.list.map((item, index) => {
            return (
                // <li key={item.cid} onClick={this.toDetai.bind(this, item.cid)}><Link to={'/list/'+item.cid}>{item.title}</Link>{item.title}</li>
                <li key={item.cid} ><Link to={'/list/' + item.cid}>{item.title}</Link></li>
            )
        })
        return (
            <div>
                {/* <Redirect to="/home/" /> */}
                <ul>{list}</ul>
            </div>
        )
    }
}
