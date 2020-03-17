let fs =require('fs')
// 文件操作中的相对路径省略./
// 我们使用的所有文件操作的API都是异步的，就像ajax请求一样
fs.readFile('data/a.txt',function(err,data) {
  if(err) {
    return console.log('read fail');
    
  }
  console.log(data.toString());
})
//注意：/ 是相对当前磁盘的
fs.readFile('/data/a.txt',function(err,data) {
  if(err) {
    console.log(err);
    return console.log('read fail2');
  }
  console.log(data.toString());
})
fs.readFile('./data/a.txt',function(err,data) {
  if(err) {
    console.log(err);
    return console.log('read fail3');
  }
  console.log(data.toString());
})
// 在模块加载中的相对路径./必须写
require('./data/foo')