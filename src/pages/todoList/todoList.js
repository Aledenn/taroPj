import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './todoList.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: 'todoList',
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View>
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
      </View>
    )
  }
}

