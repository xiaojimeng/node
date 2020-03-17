console.log("我是b");
require("./c.js.js")
let f = "bbbbb"
console.log(f);

function add(x, y) {
  return x + y
}
// 导出add
console.log(exports);
exports.foo = "我是b里面的 hello"
exports.add=function(x,y) {
  return x+y
};
