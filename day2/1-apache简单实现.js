let http = require('http')
let fs = require('fs')
let server = http.createServer()
server.on('request', function (req, res) {
  let url = req.url
  let www = 'J:/xjm-2020----learn/horse/node/app/www'
  if (url === '/a.txt') {
    fs.readFile(www+'/a.txt', function (err, data) {
      // if (err) {
      //   res.end("read fail")
      // } else {
      //   res.end(data)
      // }
      /** return的作用
       *  1、方法返回值
       *  2、阻止代码继续往后执行
       */
      if (err) {
        return res.end("read fail a.txt")
      }
      res.setHeader('Content-type', 'text/plain;charset=utf-8')
      res.end(data)
    })

  } else if (url === '/index.html') {
    fs.readFile(www+'/index.html', function (err, data) {
      if (err) {
        return res.end("read fail index")
      }
      res.setHeader('Content-type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } else if (url === '/login.html') {
    fs.readFile(www+'/apple/login.html', function (err, data) {
      if (err) {
        return res.end("read fail login")
      }
      res.setHeader('Content-type', 'text/html;charset=utf-8')
      res.end(data)
    })
  } 
  else if (url === '/img/a.jpg') {
    fs.readFile(www+'/img/a.jpg', function (err, data) {
      if (err) {
        return res.end("read fail login")
      }
      res.setHeader('Content-type', 'image/jpeg;charset=utf-8')
      res.end(data)
    })
  } else {
    res.end("404 not found")
  }
})
server.listen(3000, function () {
  console.log("服务器启动成功了http://127.0.0.1:3000/");
})