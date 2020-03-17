let http = require('http')
let fs = require('fs')
let template = require('art-template')
let server = http.createServer()

server.on('request', function (req, res) {
  let url = req.url
  let www = 'J:/xjm-2020----learn/horse/node/app/www'
  fs.readFile('./template-apache.html', function (err, data) {
    if (err) {
      return res.end("red fail")
    }
    fs.readdir(www, function (err, files) {
      if (err) {
        return res.end("can not find wwwDir");
      }
      let htmlStr = template.render(data.toString(), {
        files,
        title:"目录列表-模板引擎"
      })
      res.end(htmlStr)
    })
  })
})
server.listen(3000, function () {
  console.log("server is runing: http://127.0.0.1:3000/");
})