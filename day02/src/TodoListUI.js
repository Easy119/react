import React from 'react'
import 'antd/dist/antd.css'
import { Input, Button, List } from 'antd'
const TodoListUI = (props) => {
    return (
        <div>
            <div>
                <Input placeholder={props.inputValue} style={{ width: '250px' }} onChange={props.changeInputValue} value={props.inputValue} />
                <Button type="primary" onClick={props.addList}>增加</Button>
            </div>
            <div style={{ margin: '10px', width: '300px' }}>
                <List
                    bordered
                    dataSource={props.list}
                    // renderItem = {(item,index) =>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
                    renderItem={(item, index) => (<List.Item onClick={() => { props.deleteItem(index) }}>{item.title}</List.Item>)}
                >
                </List>
            </div>
        </div>
    )
}
export default TodoListUI
// export default class TodoListUI extends Component {
//     deleteItem(index){
//         this.props.deleteItem(index)
//     }
//     render() {
//         return (
//             <div>
//                  <div>
//                     <Input placeholder={this.props.inputValue} style={{width:'250px'}} onChange={this.props.changeInputValue} value={this.props.inputValue} />
//                     <Button type="primary" onClick={this.props.addList}>增加</Button>
//                 </div>
//                 <div style={{margin:'10px',width:'300px'}}>
//                     <List
//                         bordered
//                         dataSource = {this.props.list}
//                         // renderItem = {(item,index) =>(<List.Item onClick={this.deleteItem.bind(this,index)}>{item}</List.Item>)}
//                         renderItem = {(item,index) =>(<List.Item onClick={()=>{this.props.deleteItem(index)}}>{item}</List.Item>)}
//                     >
//                     </List>
//                 </div> 
//             </div>
//         )
//     }
// }
