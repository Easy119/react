import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
function Index() {
    useEffect(() => {
        console.log('useEffect=>老弟你来了！Index页面')
        return () => {
            console.log('老弟，你走了!Index页面')
        }
    },[])
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
        return () =>{
            console.log(`You clicked ${count} times`)
        }
    },[count])
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