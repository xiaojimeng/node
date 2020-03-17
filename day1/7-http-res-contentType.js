let http = require('http')
let server = http.createServer()
server.on("request", function (req, res) {
  // 服务器默认发送的是utf-8(chcp 65001)的编码内容，浏览器默认按当前操作系统的默认编码的解析
  // 中文操作系统默认是gbk(chcp 963)
  let url = req.url
  if (url === '/plain') {
    res.setHeader('Content-type', 'text/plain;charset=utf-8')
    res.end("哈哈哈")
  } else if (url === '/html') {
    res.setHeader('Content-type','text/html;charset=utf-8')
    res.end("<h1>hello html 欢迎学习node</h1>")
  }
})
server.listen(3000, function () {
  console.log("server is running");

})