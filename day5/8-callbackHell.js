let fs = require('fs')
/* fs.readFile('./data/a.txt','utf8', function (err, data) {
  if (err) {
    // return console.log(err);
    throw err //抛出异常：阻止程序进行，把错误信息打印到控制台
  }
  console.log(data);
})
fs.readFile('./data/b.txt','utf8', function (err, data) {
  if (err) {
    throw err 
  }
  console.log(data);
})
fs.readFile('./data/c.txt','utf8', function (err, data) {
  if (err) {
    throw err 
  }
  console.log(data);
}) */
// 回调嵌套-非常不推荐
fs.readFile('./data/a.txt', 'utf8', function (err, data) {
  if (err) {
    throw err //抛出异常 (作用：阻止程序进行；把错误信息打印到控制台)
  }
  console.log(data);
  fs.readFile('./data/b.txt', 'utf8', function (err, data) {
    if (err) {
      throw err
    }
    console.log(data);
    fs.readFile('./data/c.txt', 'utf8', function (err, data) {
      if (err) {
        throw err
      }
      console.log(data);
    })
  })
})