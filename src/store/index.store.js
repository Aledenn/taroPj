import {createStore,applyMiddleware} from 'redux'

// 引入需要的中间件
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger';

import rootReducer from '../reducers/index.reducer'

const middlewares = [
    thunkMiddleware,
    createLogger()
]

export default function configStore(){
    const store = createStore(rootReducer,applyMiddleware(...middlewares))
    return store
}