import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import XiaojiejieItem from "./XiaojiejieItem"
import Boss from './Boss'
import axios from "axios"
class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: '',
            list: ['基础按摩', '精油推背']
        }
    }
    componentWillMount() {
        axios.post('https://web-api.juejin.im/v3/web/wbbr/bgeda').then((res) => {
            console.log(res)
        }).catch((error) => {
            console.log('error', error)
        })
    }
    inputChange = (e) => {
        this.setState({
            inputValue: this.input.value
        })
    }
    addList = () => {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }
    deleteItem(index) {
        const list = this.state.list;
        list.splice(index, 1)
        this.setState({ list })
    }
    render() {

        return (
            <div>
                <div>
                    <Boss></Boss>
                    <label htmlFor="jspang">加入服务：</label>
                    <input value={this.state.inputValue} onChange={this.inputChange} id="jspang" ref={(input) => { this.input = input }} />
                    <button onClick={this.addList}> 增加服务 </button></div>
                <ul>
                    <TransitionGroup>
                        {
                            this.state.list.map((item, index) => {
                                return (
                                    <CSSTransition
                                        timeout={1000}
                                        classNames='boss-text'
                                        unmountOnExit
                                        appear={true}
                                        key={index + item}
                                    >

                                        <XiaojiejieItem
                                            key={index + item}
                                            content={item}
                                            index={index}
                                            deleteItem={this.deleteItem.bind(this)}
                                        />
                                    </CSSTransition>)
                            })
                        }
                    </TransitionGroup>
                </ul>
            </div>
        )
    }
}
export default Xiaojiejie