let fs = require('fs')
let path = require('path')

// node中：文件操作路径中，相对路径就是相对于执行node命令行所处的路径

/* 
fs.readFile('./a.txt',function(err,data) {
  if(err) {
    throw err
  }
    console.log(data.toString());
}) 
*/
/* fs.readFile('J:/xjm2020-learn/黑马-learn/node-3-8/day6/4-文件路径问题/a.txt', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data.toString());
}) */
fs.readFile(path.join(__dirname, './a.txt'), 'utf8', function (err, data) {
  if (err) {
    throw err
  }
  console.log(data.toString());
})