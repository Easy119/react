import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu } from 'element-react';
import 'element-theme-default';
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
    onOpen() {

    }

    onClose() {

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

                    <div className="mainDiv">
                        {/* <div className="leftNav">
                            <h3>易山川的作品集</h3>
                            <ul>{routerList}</ul>
                        </div>

                        <div className="rightMain">
                            {
                                this.state.routeConfig.map((item, index) => {
                                    return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
                                })
                            }
                          
                        </div> */}

                        {/* element-ui */}
                        <Layout.Row className="mainDiv">
                            <Layout.Col span={2}>
                                <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme='dark'>
                                    <Menu.SubMenu index="1" title={<span><i className="el-icon-message"></i>导航一</span>}>
                                        <Menu.ItemGroup title="分组一">
                                            <Menu.Item index="">选项1</Menu.Item>
                                            <Menu.Item index="1-2">选项2</Menu.Item>
                                        </Menu.ItemGroup>
                                        <Menu.ItemGroup title="分组2">
                                            <Menu.Item index="1-3">选项3</Menu.Item>
                                        </Menu.ItemGroup>
                                    </Menu.SubMenu>
                                    {
                                        this.state.routeConfig.map((item, index) => {
                                            return (
                                                <Menu.Item index={item.path + index} key={item.path + index}>
                                                    <i className="el-icon-setting"></i>
                                                    <Link to={item.path} exact={item.exact.toString()}>{item.title}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                    {/* <Menu.Item index="3"><i className="el-icon-setting"></i>导航三</Menu.Item> */}
                                </Menu>
                            </Layout.Col>
                            <Layout.Col span={22}>
                                {
                                    this.state.routeConfig.map((item, index) => {
                                        return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
                                    })
                                }
                            </Layout.Col>
                        </Layout.Row>
                    </div>
                </Router>
            </div>
        )
    }
}
