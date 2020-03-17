let express = require('express')
let path = require('path')
let bodyParser= require('body-parser')
let router= require('./router')
let session= require("express-session")

let app = express()
// 开发public文件和node_modules文件
// app.use('/public/',express.static( './public/'))
app.use('/public/', express.static(path.join(__dirname, './public/')))
app.use('/node_modules/', express.static(path.join(__dirname, './node_modules/')))

// art-template
app.engine('html', require('express-art-template'))
app.set('views', path.join(__dirname, './views/')) //默认就是从./views目录中去找模板需要的
// body-parser 通过req.body来获取表单post的数据
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
// express-session
// + 添加 Session数据：req.session.key=value
// + 访问 Session数据：req.session.key
app.use(session({
  secret:'itcast',//加密字符串，在原有加密基础上和这个字符串拼接起来去加密。目的是增加安全性
  resave:false,
  saveUninitialized:true//无论是否使用Session,都给一把钥匙
}))


// app.get('/', function (req, res) {
//   res.render('index.html')
// })
app.use(router)

app.listen(3000, function () {
  console.log("server is running http://127.0.0.1:3000/");
})

