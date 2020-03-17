function fun() {
  let data ="默认数据"
  setTimeout(() => {
    data='heool'
  }, 1000);
  return data
}
// 调用fun,得到内部的data
console.log(fun());
// 如果需要获取一个函数中的异步操作的结果，必须通过回调函数来获取
function fn(callback) {
  setTimeout(() => {
    let data='heol'
    callback(data)
  }, 1000);
}
fn(function(data){
  console.log(data);
})
