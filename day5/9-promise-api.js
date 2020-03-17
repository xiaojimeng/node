let fs = require('fs')

// Promise是一个构造函数
let a = new Promise((res, rej) => {
  fs.readFile('./data/a.txt', function (err, data) {
    if (err) {
     return rej(err)
    }
    res(data.toString())
  })
})
let b = new Promise((res, rej) => {
  fs.readFile('./data/b.txt', function (err, data) {
    if (err) {
     return rej(err)
    }
    res(data.toString())
  })
})
let c = new Promise((res, rej) => {
  fs.readFile('./data/c.txt', function (err, data) {
    if (err) {
     return rej(err)
    }
    res(data.toString())
  })
})
// then方法中接收的是res函数;catch中接受的就是rej函数
// a.then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log("读取失败",err);
// })

a.then(data => {
  console.log(data);
  // 当前函数中return的结果，可以在后面的then中的function接收到
  return b
}).then(data => {
  console.log(data);
  return c
}).then(data => {console.log(data);
}).catch(err => {
  console.log("读取失败",err);
})