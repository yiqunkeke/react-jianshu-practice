import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_LIST_ACTION} from './actionTypes'

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
