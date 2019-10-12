import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM, GET_LIST ,GET_MY_LIST} from './actionTypes'
import axios from 'axios'
export const changeInputAction = (value) => ({
    type: CHANGE_INPUT,
    value
})

export const addItemAction = () => ({
    type: ADD_ITEM
})

export const deleteItemAction = (index) => ({
    type: DELETE_ITEM,
    index
})
export const getListAction = (data) => ({
    type: GET_LIST,
    data
})

export const getTodoList = () => {
    return (dispatch) => {
        axios.post('http://139.196.24.37:2000/rank/getRankTitle').then((res) => {
            console.log(res)
            if (res.data.flag) {
                let data = res.data.msg;
                const action = getListAction(data)
                dispatch(action)
            }
        })
    }
}

export const getMyListAction = ()=>({
    type:GET_MY_LIST
})

