// 装饰器模式能够很好的对已有功能进行拓展，不会更改原有的代码，也不会对其他的业务产生影响，
// 方便我们在较小的改动下对功能进行拓展
// axios的拦截器原理就是装饰器模式

// 动态地给一个对象添加额外的职责。在前端开发中，可以使用装饰者模式来动态修改组件的行为和样式。

// 需要注意的是，装饰者模式可以嵌套使用，也就是说，我们可以通过多个装饰函数来依次为一个组件添加多个不同的功能。同时，
// 装饰者模式也可以用于对已有的组件进行扩展，使得我们可以在不改变原有代码的情况下，给组件添加新的行为和样式。

console.log('-----------')
Function.prototype.before = function (Fn) {
  let _this = this
  return function () {
    // 先进行前置函数调用
    Fn.apply(this, arguments)
    // 执行原来的函数
    return _this.apply(this, arguments)
  }
}
Function.prototype.after = function (Fn) {
  let _this = this
  return function () {
    let result = _this.apply(this, arguments)
    Fn.apply(this, arguments)
    return result
  }
}

function ajax(url, method, params) {
  console.log('ajax:', url, method, params)
}
let ajax1 = ajax.before(function (url, method, params) {
  console.log('before:', url, method, params)
  params.token = 'YYY'
})
ajax1('./api', 'get', {
  year: '2022'
})
ajax('./api', 'get', {
  year: '2023',
  // token: 'xxx'
})