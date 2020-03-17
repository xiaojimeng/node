let express = require('express')
let bodyParser = require('body-parser')
let app = express()
// 静态资源（开发public目录下的所有资源）
// 当第一个参数省略；/文件路径
app.use('/public/', express.static('./public/'))
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
//art表示以.art结尾的文件;html表示以.html文件结尾
// app.engine('art', require('express-art-template'));
// res.render('404.art')
app.engine('html', require('express-art-template'))
// 配置body-parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function (req, res) {
  res.render('index.html', {
    comments
  })
})
app.get('/post', function (req, res) {
  res.render('post.html')
})
/*app.get('/pinglun', function (req, res) {
  // req.query只能拿get请求参数
   let comment = req.query
   comment.dateTime = getDate();
   comments.unshift(comment)
   res.redirect('/')
 })
*/
// 当以post请求 /post 的时候执行指定的处理函数
// 通过不同的请求方法，同一路径可以使用多次
app.post('/post', function (req, res) {
  /*在express中获取post请求体数据？
  (http://expressjs.com/en/resources/middleware/body-parser.html)
  1 安装： npm install body-parser
  2 引包：let bodyParser = require('body-parser')
  3 配置 // 只要多次这个配置，则在req请求对象上就会多次一个属性：body
      app.use(bodyParser.urlencoded({ extended: false }))
      app.use(bodyParser.json())
  */
  let comment = req.body//通过req.body 获取请求参数
  comment.dateTime = getDate();
  comments.unshift(comment)
  res.redirect('/')
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