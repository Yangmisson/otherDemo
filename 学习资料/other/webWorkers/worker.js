function fibonacci(n) {
  return n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2); //递归调用
}
// this.onmessage = function (data) {
//   console.log(data.data);
//   postMessage(fibonacci(data.data));
// };
this.addEventListener('message',function(data){
    this.postMessage(fibonacci(data.data));
})