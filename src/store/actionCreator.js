import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION, GET_INIT_LIST} from './actionTypes'
import axios from 'axios'

// actionCreator 必须是一个纯函数
// 在这个文件中，统一生成和管理action【方便维护】
export const getInputChangeAction = (value) => {
    return {
        type: CHANGE_INPUT_VALUE,
        value
    }
}

export const getAddItemAction = () => {
    return {
        type: ADD_TODO_ITEM
    }
}

export const getDeleteItemAction = (index) => {
    return {
        type: DELETE_TODO_ITEM,
        index
    }
}

export const getInitListAction = (data) => {
    return {
        type: INIT_LIST_ACTION,
        data
    }
}

// 使用 redux-thunk中间件，使得 actionCreator 可以返回一个函数，而非对象
// 通常,我们把异步请求统一放在Action中管理
export const getListAction = () => {
    return (dispatch) => {
        axios.get('./list.json')
        .then((res) => {
            const data = res.data.list
            // console.log(data)
            const action = getInitListAction(data)
            dispatch(action)
        })
        .catch(() => {
        console.log('fail')
        })
    }
}

export const getInitList = () => {
    return {
        type: GET_INIT_LIST
    }
}