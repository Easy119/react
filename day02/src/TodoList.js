import React, { Component } from 'react';
import 'antd/dist/antd.css'
import store from "./store"
import axios from 'axios'
import {getMyListAction, getTodoList,changeInputAction, addItemAction, deleteItemAction, getListAction } from './store/actionCreators'
import TodoListUI from './TodoListUI';
class TodoList extends Component {
    constructor() {
        super()
        this.state = store.getState()
        store.subscribe(this.storeChange) //订阅Redux的状态
    }
    componentDidMount(){
        const action = getTodoList()
        console.log(action)
        store.dispatch(action)
        
    }
    changeInputValue = (e) => {
        const action = changeInputAction(e.target.value)
        store.dispatch(action)
    }
    storeChange = () => {
        this.setState(store.getState())
    }
    addList = () => {
        const action = addItemAction();
        store.dispatch(action)
    }
    deleteItem(index) {
        const action = deleteItemAction(index)
        store.dispatch(action)
    }
    render() {
        return (
            <div>
                <TodoListUI
                    inputValue={this.state.inputValue}
                    list={this.state.list}
                    changeInputValue={this.changeInputValue}
                    addList={this.addList}
                    deleteItem={this.deleteItem}
                ></TodoListUI>
            </div>
        );
    }
}
export default TodoList;