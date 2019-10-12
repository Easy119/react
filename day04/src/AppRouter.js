import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './index.css'
import Index from './pages/Index'
import List from './pages/List'
import Home from './pages/Home'
import Video from "./pages/Video"
import Workplace from "./pages/Workplace"
export default class AppRouter extends Component {
    constructor() {
        super()
        this.state = {
            routeConfig: []
        }

    }
    componentWillMount() {
        this.setState({
            routeConfig: [
                { path: '/', title: '博客首页', exact: true, component: Index },
                { path: '/video/', title: '视频教程', exact: false, component: Video },
                { path: '/workplace/', title: '职场技能', exact: false, component: Workplace }
            ]
        })
    }
    render() {
        let routerList = this.state.routeConfig.map((item, index) => {
            return (
                <li>
                    <Link to={item.path} exact={item.exact}>{item.title}</Link>
                </li>
            )
        })
        return (
            <div>
                <Router>
                    {/* <ul>
                        <li><Link to='/'>首页</Link></li>
                        <li><Link to='/list/123'>列表</Link></li>
                    </ul>
                    <Route path='/' exact component={Index}></Route>
                    <Route path="/home/" component={Home} />
                    <Route path='/list/:id' exact component={List}></Route> */}
                    <div className="mainDiv">
                        <div className="leftNav">
                            <h3>一级导航</h3>
                            <ul>{routerList}
                                {/* <li><Link to="/">博客首页</Link> </li>
                                <li><Link to="/video/">视频教程</Link> </li>
                                <li><Link to="/workplace/">职场技能</Link> </li> */}
                            </ul>
                        </div>

                        <div className="rightMain">
                            {
                                this.state.routeConfig.map((item, index) => {
                                    return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
                                })
                            }
                            {/* <Route path="/" exact component={Index} />
                            <Route path="/video/" component={Video} />
                            <Route path="/workplace/" component={Workplace} /> */}
                        </div>
                    </div>
                </Router>
            </div>
        )
    }
}
