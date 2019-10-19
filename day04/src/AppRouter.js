import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from 'element-react';
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
                { path: '/', title: '博客首页', exact: true, component: Index, icon: 'menu' },
                { path: '/video/', title: '视频教程', exact: false, component: Video, icon: 'message' },
                { path: '/workplace/', title: '职场技能', exact: false, component: Workplace, icon: 'document' }
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
                            <Layout.Col span={4}>
                                <h3 className='logo'>易山川的作品集</h3>
                                <Menu defaultActive="2" className="el-menu-vertical-demo" onOpen={this.onOpen.bind(this)} onClose={this.onClose.bind(this)} theme='dark'>
                                    {
                                        this.state.routeConfig.map((item, index) => {
                                            return (
                                                <Menu.Item index={item.path + index} key={item.path + index}>
                                                    <i className={'el-icon-' + item.icon}></i>
                                                    <Link to={item.path} exact={item.exact.toString()}>{item.title}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </Menu>
                            </Layout.Col>
                            <Layout.Col span={20}>
                                <div className='Breadcrumb'>
                                    <Breadcrumb separator="/">
                                        <Breadcrumb.Item>首页</Breadcrumb.Item>
                                        <Breadcrumb.Item>活动管理</Breadcrumb.Item>
                                        <Breadcrumb.Item>活动列表</Breadcrumb.Item>
                                        <Breadcrumb.Item>活动详情</Breadcrumb.Item>
                                    </Breadcrumb></div>
                                <div className='routerView'>
                                    <ul className='secondRouter'>
                                        {
                                            this.state.routeConfig.map((item, index) => {
                                                return (<Route key={index} exact={item.exact} path={item.path} component={item.component} />)
                                            })
                                        }
                                    </ul>
                                </div>
                            </Layout.Col>
                        </Layout.Row>
                    </div>
                </Router>
            </div>
        )
    }
}
