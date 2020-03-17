let express= require('express')
let router=require('./router')
let bodyParser = require('body-parser')
let app = express()


// 开放modules和public目录
app.use('/node_modules/',express.static('./node_modules'))
app.use('/public/',express.static('./public'))
// art-template配置
app.engine('html', require('express-art-template'))
// bodyParser配置
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// router(app)
// 把路由容器挂载到app服务中
app.use(router)
app.listen(3000,function() {
  console.log("app is running http://127.0.0.1:3000/");
})
// 存在bug,编辑第一个报错
