let http = require('http')
let fs = require('fs')
let server = http.createServer()
server.on('request', function (req, res) {
  let url = req.url
  let www = 'J:/xjm-2020----learn/horse/node/app/www'
  let filePath = 'index.html'
  if (url !== '/') {
    filePath = url
  }
  fs.readFile(www + filePath, function (err, data) {
    if (err) {
      return res.end("red fail")
    }
    res.end(data)
  })
})
server.listen(3000, function () {
  console.log("服务器启动成功了http://127.0.0.1:3000/");
})