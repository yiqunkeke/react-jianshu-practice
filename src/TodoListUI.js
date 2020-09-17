import React from 'react'
import { Input, Button, List } from 'antd';

// UI组件 【建议写成无状态组件，性能更高】
// 无状态组件： 只有 props，没有生命周期和render，不会耗费性能
const TodoListUI = (props) => {
    return (
        <div style={{marginTop: '10px', marginLeft: '10px'}}>
                <div>
                <Input 
                    placeholder="todo info" 
                    style={{width: '300px', marginRight: '10px'}} 
                    value={props.inputValue} 
                    onChange={props.handleInputChange}
                    />
                <Button type="primary" onClick={props.handleBtnClick}>提交</Button>
                </div>
                <List
                style={{marginTop: '10px', width: '300px'}}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => (
                    // <List.Item onClick={this.props.handleItemDelete.bind(this, index)}>
                    // 给父组件传递参数，必须写成闭包形式传参
                    <List.Item onClick={() => { props.handleItemDelete(index)}}>
                        {item}
                    </List.Item>
                )}
                />
            </div>
    )
}

// 有状态组件： 通过class 创建的组件，称为 有状态组件
// class TodoListUI extends Component {
//     constructor(props) {
//         super(props)
//     }

//     render() {
//         return (
//             <div style={{marginTop: '10px', marginLeft: '10px'}}>
//                 <div>
//                 <Input 
//                     placeholder="todo info" 
//                     style={{width: '300px', marginRight: '10px'}} 
//                     value={this.props.inputValue} 
//                     onChange={this.props.handleInputChange}
//                     />
//                 <Button type="primary" onClick={this.props.handleBtnClick}>提交</Button>
//                 </div>
//                 <List
//                 style={{marginTop: '10px', width: '300px'}}
//                 bordered
//                 dataSource={this.props.list}
//                 renderItem={(item, index) => (
//                     // <List.Item onClick={this.props.handleItemDelete.bind(this, index)}>
//                     // 给父组件传递参数，必须写成闭包形式传参
//                     <List.Item onClick={() => { this.props.handleItemDelete(index)}}>
//                         {item}
//                     </List.Item>
//                 )}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI
