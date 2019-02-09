import { combineReducers } from 'redux';

import { ADD, DELETE } from '../constants/todos'

const INITAL_STATE = {
  todos: [
    { id: 0, text: '第一条todo' }
  ]
}

function todos(state = INITAL_STATE, action) {
  const todoNum = state.todos.length
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todos:state.todos.concat({
          id:todoNum,
          text:action.data
        })
      }
      // 我喜欢这种写法
      // return {
      //   ...state,
      //   todos:[...state.todos,{id:todoNum,text:action.data}]
      // }
    case DELETE:
      let newTodos = state.todos.filter(item=>{
        return item.id !== action.id
      })
      return {
        ...state,
        todos:newTodos
      }
    default:
      return state
  }
}

export default combineReducers({
  todos
})