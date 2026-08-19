console.log('-----------')

const Store = (function () {
  let instance = null;
  function StoreFun(params) {
    if (!instance) {
      this.state = params.state
      this.mutations = params.mutations
      instance = this;
    }
    return instance;
  }
  StoreFun.prototype.commit = function (enentName, value) {
    this.mutations[enentName](instance.state, value)
  };
  return StoreFun;
})();

const store = new Store({
  state: {
    count: 1
  },
  mutations: {
    increment(state, n) {
      state.count += n
    }
  }
});
console.log(store.state.count) // 1
store.commit('increment', 2)
console.log(store.state.count) // 3

// const Single = function () {
//   let instance = null

//   function SingleCons(name) {
//     this.name = name
//     instance = this
//   }
//   SingleCons.prototype.log = function () {
//     console.log(`你好, ${this.name}`);
//   };

//   return function (name) {
//     if (!instance) {
//       new SingleCons(name)
//     }
//     console.log(instance)
//     return instance
//   }
// }()

// const Single1 = Single('张三');
// const Single2 = Single('李四');
// console.log(Single1 === Single2); // 输出 "true"
// Single1.log(); // 输出 "你好, 张三"