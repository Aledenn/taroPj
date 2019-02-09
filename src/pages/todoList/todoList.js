import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import { connect } from '@tarojs/redux'
import './todoList.less'

import { add, del } from '../../actions/index.action'

class TodoList extends Component {

  config = {
    navigationBarTitleText: 'todoList',
  }
  constructor(props) {
    super(props)
    this.state = {
      inputVal: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem = this.addItem.bind(this)
    this.delItem = this.delItem.bind(this)
  }
  handleInput(e) {
    this.setState({
      inputVal: e.target.value
    })
  }

  addItem() {
    let { inputVal } = this.state
    // eslint-disable-next-line no-shadow
    let { add } = this.props
    if (inputVal === '')
      return

    add(inputVal)
    this.setState({
      inputVal: ''
    })
  }

  delItem(id) {
    // eslint-disable-next-line no-shadow
    let {del} = this.props
    del(id)
  }

  render() {
    let {  inputVal } = this.state
    let { todos} = this.props

    const todosJsx = todos.map(todo => {
      return (
        <View className='listItem' key={todo.id}>
          <Text>{todo.text}</Text>
          <Text className='del' onClick={() => this.delItem(todo.id)}>删除</Text>
        </View>
      )
    })
    return (
      <View className='todoList'>
        <Input className='input' onInput={this.handleInput} value={inputVal}></Input>
        <Button className='addItem' onClick={this.addItem}>添加</Button>
        <Text className='title'>Todo List</Text>
        {
          todosJsx
        }
      </View>)
  }
}
// connect() 接收四个参数，它们分别是 mapStateToProps，mapDispatchToProps，mergeProps和options。
// 常用前两个 一个是把store引入props中 另一个是把dispatch事件引入props中
export default connect(({ todos }) => ({
  todos: todos.todos
}), (dispatch) => ({
  add(data) {
    dispatch(add(data))
  },
  del(id) {
    dispatch(del(id))
  }
}))(TodoList)

