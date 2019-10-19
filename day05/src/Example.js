import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
// export default class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count: 0 }
//     }
//     addCount = ()=>{
//         this.setState({count:this.state.count+1})
//     }
//     render() {
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount}>Chlick me</button>
//             </div>
//         )
//     }
// }
function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟你来了！Index页面')
        return () => {
            console.log('老弟，你走了!Index页面')
        }
    })
    return <h2>JSPang.com</h2>;
}

function List() {
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List-Page</h2>;
}
function Example() {
    const [count, setCout] = useState(1);
    useEffect(() => {
        console.log(`useEffect=>You clicked ${count} times`)
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => { setCout(count + 1) }}>Chlick me</button>
            <Router>
                <ul>
                    <li> <Link to="/">首页</Link> </li>
                    <li><Link to="/list/">列表</Link> </li>
                </ul>
                <Route path="/" exact component={Index} />
                <Route path="/list/" component={List} />
            </Router>
        </div>
    )
}
export default Example