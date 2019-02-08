import Taro, { Component } from '@tarojs/taro'
import { View, Text, Input, Button } from '@tarojs/components'
import './todoList.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'todoList',
  }
  constructor(props) {
    super(props)
    this.state = {
      // 创建一个初始的 Todolist
      list: [
        'get up',
        'coding',
        'sleep',
      ],
      inputVal: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.addItem =this.addItem.bind(this)
    this.delItem = this.delItem.bind(this)
  }
  handleInput(e){
    this.setState({
      inputVal:e.target.value
    })
  }

  addItem(){
    let {inputVal} = this.state
    if(inputVal ==='')
      return
    let {list} = this.state
    this.setState({
      list:[...list,inputVal],
      inputVal:''
    })
  }

  delItem(index){
    console.log(index);
    let {list} = this.state
    list.splice(index,1)
    this.setState({
      list,
    })
  }
  componentWillMount() { }

  componentDidMount() { }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    let { list,inputVal } = this.state
    return (
      <View className='todoList'>
        <Input className='input' onInput={this.handleInput} value={inputVal}></Input>
        <Button className='addItem' onClick={this.addItem}>添加</Button>
        <Text className='title'>Todo List</Text>
        {
          list.map((item, index) => {
            return (<View key={index} className='listItem'>
              <Text>{index + 1}.{item}</Text>
              <Text className='del' onClick={()=>this.delItem(index)}>删除</Text>
            </View>)
          })
        }
      </View>)
  }
}

