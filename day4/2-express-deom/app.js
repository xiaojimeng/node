let express = require('express')
let app = express()
// 静态资源（开发public目录下的所有资源）
// 当第一个参数省略；/文件路径
// app.use(express.static('./public/'))
// 有两个参数时；/public/文件路径
app.use('/public/', express.static('./public/'))
// 访问：/a/文件路径
// app.use('/a/',express.static('./public/'))

let comments = [{
    name: '张三',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三2',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三3',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三4',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  },
  {
    name: '张三5',
    message: '今天天气不错！',
    dateTime: '2015-10-16'
  }
]

// 配置使用art-template: 
// 1 使用：res.rend('xx.art',{模板数据})
// 2 注意：xx.art 就是html模板 (不能写路径，默认会去项目中的views目录找该模板文件)
// 3 如果想要修改默认的views目录为xxx目录：
//  app.set('xxx',render函数的默认路径)
// app.engine('art', require('express-art-template'));//art表示以.art结尾的文件
// res.render('404.art')
app.engine('html', require('express-art-template'))
app.get('/', function (req, res) {
  res.render('index.html', {
    comments
  })
})
app.get('/post', function (req, res) {
  res.render('post.html')
})
app.get('/pinglun', function (req, res) {
  console.log(req.query);
  let comment = req.query
  comment.dateTime = getDate();
  comments.unshift(comment)
  // 重定向
  // res.statusCode = 302
  // res.setHeader = ('Location', '/')
  res.redirect('/')
  res.end()
})
app.listen(3000, function () {
  console.log("app is running http://127.0.0.1:3000/");
})
// 获取当前时间
function getDate() {
  let now = new Date()
  let yy = now.getFullYear()
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
  let current = yy + "-" + mm + "-" + dd + "-" + hh + ":" + minu + ":" + ss

  return current
}