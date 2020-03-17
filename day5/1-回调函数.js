/*
ctrl+D ：选中不对齐的,选中内容一样的
ctrl+shift+鼠标左右
ctrl+键盘左或右：鼠标移动到不对齐一边
 */
  function add(x, y) {
    console.log(1);
    setTimeout(() => {
      return x + y
    })
    console.log(3);//到这里执行就结束了，不会等到定时器。返回undefined
  }
  console.log(add(2, 3));

  function add2(x, y) {
    let res
    console.log(11);
    setTimeout(() => {
      res= x + y
    },1000)
    console.log(33);
    return res
  }
  console.log(add2(2, 3));


  let ret
  function add3(x, y) {
    console.log(111);
    setTimeout(() => {
      console.log(333);
      ret= x + y
    },1000)
  }
  add3(3,4)
setTimeout(() => {
  console.log(ret);
}, 2000);
// 凡是需要 得到一个函数内部异步操作的结果：定时器，readFile，writeFile,readdir,ajax 必须通过回调函数
function fn(x,y,callback) {
  console.log("fnfnfnfnfn");
  setTimeout(() => {
    let res= x+y
    callback(res)
  }, 1000);
  console.log("fn");
}
fn(10,20,function(res) {
  console.log(res);
})