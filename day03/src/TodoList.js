import React from 'react'
import { connect } from 'react-redux'
import { action_change_input,action_clickButton } from "./store/actionCreater"
// class TodoList extends Component {
//     constructor() {
//         super()
//     }
//     handleInputer = (e) => {
//         let val = e.target.value;
//         this.props.inputChange(val)
//     }
//     addList = () => {
//         this.props.addStateList()
//     }
//     deleteItem = (index) => {
//         this.props.deteleStateItem(index)
//     }
//     render() {
//         let { inputValue, list } = this.props;
//         return (
//             <div>
//                 <div>
//                     <input value={inputValue} onChange={this.handleInputer} />
//                     <button onClick={this.addList}>提交</button>
//                 </div>
//                 <ul>
//                     {
//                         list.map((item, index) => {
//                             return (<li key={item + index} onClick={() => { this.deleteItem(index) }}>{item}</li>)
//                         })
//                     }
//                 </ul>
//             </div>
//         )
//     }
// }
const TodoList = (props) => {
    let { inputValue, inputChange, clickButton, list } = props; // 粘贴过来后，此处要进行修改
    return (
        <div>
            <div>
                <input value={inputValue} onChange={inputChange} />
                <button onClick={clickButton}>提交</button>
            </div>
            <ul>
                {
                    list.map((item, index) => {
                        return (<li key={index}>{item}</li>)
                    })
                }
            </ul>
        </div>
    );
}
const stateToProps = (state) => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const DispatchToProps = (dispatch) => {
    return {
        inputChange(e) {
            let action = action_change_input(e.target.value)
            dispatch(action)
        },
        clickButton() {
            let action = action_clickButton()
            console.log(action)
            dispatch(action)
        },
        deteleStateItem(index) {
            let action = {
                type: 'delete_item',
                value: index
            }
            console.log(action)
            dispatch(action)
        }
    }
}
export default connect(stateToProps, DispatchToProps)(TodoList)
