let http = require('http')
let fs = require('fs')
let server = http.createServer()
server.on('request', function (req, res) {
  let url = req.url
  let www = 'J:/xjm-2020----learn/horse/node/app/www'
  fs.readFile('./template.html', function (err, data) {
    if (err) {
      return res.end("red fail")
    }
    fs.readdir(www, function (err, files) {
      if (err) {
        return res.end("can not find wwwDir");
      }
      let content = ''
      files.forEach(item => {
        content +=
          `<tr>
        <td data-value="apple/"><a class="icon dir" href="/D:/Movie/www/apple/">${item}/</a></td>
        <td class="detailsColumn" data-value="0"></td>
        <td class="detailsColumn" data-value="1509589967">2017/11/2 上午10:32:47</td>
        </tr>`
      })
      // 如何将www中的文件名和目录名替换到template中？
      // template转成字符串，在通过字符串的replace替换
      data = data.toString().replace('^_^', content)
      res.end(data)
    })
  })
})
server.listen(3000, function () {
  console.log("server is runing: http://127.0.0.1:3000/");
})