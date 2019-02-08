import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Button,Navigator} from '@tarojs/components'
import './index.less'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页',
    textConfig:'config'
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
      <Navigator target='self' url='/pages/todoList/todoList'><Button>todoList</Button> </Navigator>
      </View>
    )
  }
}

