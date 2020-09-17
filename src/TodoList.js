import React, {Component} from 'react';
import 'antd/dist/antd.css';
import store from './store'
import TodoListUI from './TodoListUI'
import { getInputChangeAction, getAddItemAction, getDeleteItemAction, getInitList } from './store/actionCreator'

class TodoList extends Component {
  constructor(props) {
    super(props)
    console.log(store.getState())
    this.state = store.getState()
    store.subscribe(this.handleStoreChange)
  }

  componentDidMount() {
    // 方案1.redux-thunk：把异步请求统一封装到 action 中做处理
    // const action = getListAction()
    // store.dispatch(action) // 当给store dispatch一个函数时，这个函数会自动执行

    // 方案2：redux-saga：把异步放在单独文件中【推荐】
    const action = getInitList()
    store.dispatch(action)
  }

  render() {
    return <TodoListUI 
              inputValue={this.state.inputValue}
              list={this.state.list}
              handleInputChange={this.handleInputChange}
              handleBtnClick={this.handleBtnClick}
              handleItemDelete={this.handleItemDelete}
              />
  }

  // input框变化
  handleInputChange = (e) => {
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action)
  }

  // 点击提交
  handleBtnClick = () => {
    const action = getAddItemAction()
    store.dispatch(action)
  }

  // 删除item
  handleItemDelete = (index) => {
    const action = getDeleteItemAction(index)
    store.dispatch(action)
  }

  // store数据发生变化,更新组件数据
  handleStoreChange = () => {
    this.setState(store.getState())
  }

}

export default TodoList;
