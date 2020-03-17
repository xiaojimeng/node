// fs核心模块
let fs = require('fs')
/**fs模块(操作文件)
 * 0、执行node中的js文件：node xxx.js
 * 1、引入fs模块:let fs = require('fs')
 * 2、读取文件 
      fs.readFile("url",function(err,data) {})
      成功：err ：null,  data：读取到的数据
      失败：err :错误对象 data  :undefined没有数据
      注意：读取到的是二进制数据
 * 3、写文件
      fs.writeFile("url","content",function(err) {})
      成功：文件写入成功，err:null
      失败：文件写入失败，err:错误对象
  * 4、读取文件目录
      fs.readdir('url', function (err, files) {})
 */


// 读取文件 
fs.readFile('./data/hello.txt', function (err, data) {
  if (err) {
    console.log("读取文件失败！");
  } else {
    console.log(data.toString()); // 读取到的是二进制数据
  }
})
// 写文件
fs.writeFile("./data/你好>.txt", "欢迎学习node", function (err) {
  if (err) {
    console.log("文件写入失败!");
    console.log(err);
  } else {
    console.log("文件写入成功!");
    console.log(err);
  }
})
// 读取文件目录
fs.readdir('J:/xjm-2020----learn/horse/node/app/www', function (err, files) {
  if (err) {
    return console.log("目录不存在");
  }
  console.log(files);
})