let http = require('http')
let fs = require('fs')
let url = require('url')
let template = require('art-template')
let comments = [{
    name: 'kris',
    message: 'ddd',
    dateTime: '2020-01-2'
  },
  {
    name: 'Lisa',
    message: 'ddffd',
    dateTime: '2020-01-2'
  },
  {
    name: '张三',
    message: '哒哒哒哒哒哒寻',
    dateTime: '2020-01-2'
  },
  {
    name: '婉儿',
    message: '3333',
    dateTime: '2020-01-2'
  },
  {
    name: '王五',
    message: '333',
    dateTime: '2020-01-2'
  },
  {
    name: '李四',
    message: '333浮动',
    dateTime: '2020-01-2'
  },

]
http.createServer(function (req, res) {
  // let url = req.url
  let parseObj = url.parse(req.url, true)
  let pathname = parseObj.pathname //该路径不包含？之后的内容
  if (pathname === '/') {
    fs.readFile('./view/index.html', function (err, data) {
      if (err) {
        return res.end("read fail index")
      }
      let htmlStr = template.render(data.toString(), {
        comments
      }) //template.render()只能是字符串
      res.end(htmlStr)
    })
  }
  // 统一请求静态资源,全部以public开头
  else if (pathname.indexOf('/public/') === 0) {
    fs.readFile('.' + pathname, function (err, data) {
      if (err) {
        return res.end("read fail public")
      }
      res.end(data)
    })
  }
  //  post
  else if (pathname === '/post') {
    fs.readFile('./view/post.html', function (err, data) {
      if (err) {
        return res.end("read fail index")
      }
      res.end(data)
    })
  } else if (pathname === '/pinglun') {
    // 提交表单数据，更新渲染列表
    // res.end(JSON.stringify(parseObj.query))
    let comment = parseObj.query
    comment.dateTime = getDate();
    console.log(comment);
    comments.push(comment)
    // 重定向到首页
    res.statusCode=302
    res.setHeader('Location','/')
    res.end()
  }
  // 其他
  else {
    fs.readFile('./view/404.html', function (err, data) {
      if (err) {
        return res.end("read fail 404")
      }
      res.end(data)
    })
  }
}).listen(3000, function () {
  console.log("server is runing: http://127.0.0.1:3000/");
})
// 获取当前时间
function getDate() {
  let now = new Date()
  let yy = now.getFullYear()
  // let mm = now.getMonth() + 1 < 10 ? "0" + (now.getMonth() + 1) : now.getMonth() + 1
  let mm = now.getMonth() + 1
  let dd = now.getDate()
  let arr = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六", ]
  let day = now.getDay()
  let hh = now.getHours(); //得到小时
  let minu = now.getMinutes(); //得到分钟
  let ss = now.getSeconds(); //得到秒
  let MS = now.getMilliseconds(); //获取毫秒
  if (mm < 10) mm = "0" + mm
  if (hh < 10) hh = "0" + hh
  if (minu < 10) minu = "0" + minu
  if (ss < 10) ss = "0" + ss
  // let current = yy + "年" + mm + "月" + dd + "日" + arr[day] + hh + "时" + minu + "分" + ss + "秒"
  let current = yy + "-" + mm + "-" + dd + "-"   + hh + ":" + minu + ":" + ss 

  return current
}