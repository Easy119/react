import {CHANGE_INPUT,  ADD_ITEM, DELETE_ITEM} from './actionType'
export const action_change_input = (val)=>{
    let action = {
        type: 'CHANGE_INPUT',
        value: val
    }
    return action
}
export const action_clickButton = ()=>{
    let action = {
        type: 'ADD_ITEM'
    }
    return action
}
