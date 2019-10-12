import React, { Component } from 'react'
import { Link } from 'react-router-dom'
export default class List extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                { cid: 123, title: '技术胖的个人博客-1' },
                { cid: 456, title: '技术胖的个人博客-2' },
                { cid: 789, title: '技术胖的个人博客-3' },
            ]
        }
    }
    componentWillMount() {
        console.log(this.props.match)
    }
    toDetai(id) {
        console.log(id)
    }
    render() {
        return (
            <div>
                <h1>参数:{this.props.match.params.id}</h1>
                <h2>List Page</h2>
            </div>
        )
    }
}
