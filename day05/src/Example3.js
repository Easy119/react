import React, { useState, useEffect,useContext,createContext} from 'react'
const CountContext = createContext();
function List() { // 
    const count = useContext(CountContext) // 子组件使用 useContext 
    useEffect(() => {
        console.log('useEffect=>老弟，你来了！List页面')
    })
    return <h2>List-Page--{count}</h2>;
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
            <CountContext.Provider value={count} >
                <List></List>
            </CountContext.Provider>
        </div>
    )
}
export default Example