let http = require('http');
let fs = require("fs")

let server = http.createServer()
server.on("request", function (req, res) {
  let url = req.url
  if (url === '/') {
    fs.readFile('./resource/index.html', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end("文件读取失败!")
      } else {
        res.setHeader('Content-Type', 'text/html;charset=utf-8')
        res.end(data)
      }
    })
  }else if(url === '/girl'){
    fs.readFile('./resource/thumb-1920-1020806.jpg', function (err, data) {
      if (err) {
        res.setHeader('Content-Type', 'text/plain;charset=utf-8')
        res.end("文件读取失败!")
      } else {
        res.setHeader('Content-Type', 'image/jpeg;charset=utf-8')
        res.end(data)
      }
    }) 
  }
})
server.listen(3000, function () {
  console.log("server is running");

})