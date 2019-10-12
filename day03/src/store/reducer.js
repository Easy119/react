
import {CHANGE_INPUT,  ADD_ITEM, DELETE_ITEM} from './actionType'

const defalutState = {
    inputValue : 'jspang',
    list :['徐鑫鑫']
}

export default (state = defalutState,action) =>{
    if(action.type == 'CHANGE_INPUT'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState
    } else if (action.type == 'ADD_ITEM'){
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if (action.type =='delete_item'){
        let newState = JSON.parse(JSON.stringify(state))
        let index = action.value;
        newState.list.splice(index,1)
        return newState
    }
    return state
}