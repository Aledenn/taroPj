### taro小程序
安装依赖
```
npm install
```
编译运行
```
taro build --type weapp --watch //小程序
taro build --type h5 --watch  //h5
```

2.9 更改为redux版本
```
yarn add redux @tarojs/redux redux-logger redux-thunk
```
目录格式
  - src/
   - actions //保存actions 通过命令去调用reducer
   - constants //保存命令常量 可以考虑放入actions中
   - reducers // 相应acitons 去更新storev
   - store //保存状态的地方 一个应用只有一个  如果拆分数据处理逻辑 使用reducer组合 而不是创建多个store
