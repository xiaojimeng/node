# node
## node中的JavaScript
 - 1、没有DOM，BOM 
 - 2、核心模块：文件操作fs,服务器构建http,路径操作path，操作系统信息os
 - 3、模块系统：
 -
 - 
 - 
 - 
## 补充
 - return的作用
    1、方法返回值
    2、阻止代码继续往后执行 
 - jQuery中的each和foreach
    + 伪数组是对象
    + 对象的原型链中没有forEach
    + 对象的原型是object.prototype
    + jQuery不是专门用来遍历jquery元素的
      * 1、方便的遍历jquery对象
      * 2、在不兼容forEach的低版本浏览器中使用jQuery的each方法
    + jQuery的实例对象不能使用forEach方法，如果想用必须转为数组
    [].slice.call($('div')).forEach(function(item,index) {console.log(item)})
```javascript
Array.prototype.myslice=function() {
  let start=0
  let end = this.length
  if(arguments.length===1) {
    start=arguments[0]
  }else if(arguments.length===2) {
    start=arguments[0]
    end=arguments[2]
  }
  let tmp=[]
  for(let i=start;i<end;i++) {
    tmp.push(this[i])
  }
  return tmp
}
let fakeArr={0:'abc',1:"kris",2:"lisa",length:3};
let arr=[].myslice.call(fakeArr)
console.log(arr);
```
## http核心模块（创建编写服务器）
 - 0、服务器
    对数据提供服务
    发请求，接受请求，处理请求，发送响应
 - 1、加载模块：let http = require('http')
 - 2、返回server实例：let server=http.createServer()
 - 3、注册requset事件：server.on('request',function(req,res){})
      + req:request,res:response
      + req.url 请求路径
      + res.write() 给客户端发送响应数据，可以使用多次
      + res.end() 结束响应（如果发送了响应数据，必须写）
      + !!!通常是直接使用res.end(响应内容)
      + 响应内容只能是二进制或者字符串
      + 响应内容类型：
        * 服务器默认发送的是utf-8(chcp 65001)的编码内容，浏览器默认按当前操作系统的默认编码的解析
        * 中文操作系统默认是gbk(chcp 963)
        * res.setHeader('Content-type','text/plain;charset=utf-8')
        * 文本：text/plain,html：text/html,图片：image/jpeg(图片不需要指定编码，一般说的编码是指字码)
        * 帮助: https://www.oschina.net/ 
 * 4、绑定端口号，启动服务器：server.listen(port,function() {})
 ```javascript
let http = require('http')
let server=http.createServer()
 server.on('requset',function(req,res){
   if(req.url==='/') {
     res.end("我是首页")
   }
 })
 server.listen(3000,function() {console.log('server is running')})
  // http.createServer(function(req,res) {}).listen(port,function() {})
 ```
## fs模块(操作文件)
 - 执行node中的js文件：node xxx.js
 - 引入fs模块:let fs = require('fs')
 - 读取文件 
     + fs.readFile("url",function(err,data) {})
     + 成功：err ：null,  data：读取到的数据
     + 失败：err :错误对象 data  :undefined没有数据
     + 注意：读取到的是二进制数据
- 写文件
     + fs.writeFile("url","content",function(err) {})
     + 成功：文件写入成功，err:null
     + 失败：文件写入失败，err:错误对象
 - 读取文件目录
      fs.readdir('url', function (err, files) {})
## path路径操作
 - 引入模块 let path = require('path')
 - path.extname('url') 文件扩展名      
## os操作系统信息
 - 引入模块 let os = require('os')
 - cpu信息 os.cpus()
 - 内存信息 os.totalmem() 
## url模块
 - 引入模块 let url = require('url')
 - url.parse("url") 解析请求路径中的查询字符串
 - url.parse("url",true)   
## 模块化
 - require(一个方法)，
    * 对于核心模块：作用是加载模块
    * 对于文件模块：
      加载文件模块并执行里面的代码
      拿到被加载文件模块导出的接口对象
 - 在node中，模块有三种：
        + 1、具名的核心模块:如fs,http 【require('fs')】
        + 2、用户自己编写的文件模块:就是js文件  【require('url')】
        + 3、第三方模块
 - 在node中，没有全局作用域，只有模块作用域 
 - 模块作用域：外部访问不到内部，内部也访问不到外部
 - 模块与模块通信：先require()加载模块，再exports导出需要使用的数据方法等。export默认是一个空对象
## 使用art-template
 - 浏览器中:
     1、<script src="node_modules/art-template/lib/template-web.js"></script>
     2、template('script的id标签',{})
 - node中
     1、安装：npm install art-template
     2、加载包:let template = require('art-template')
     3、template.render(模板字符串,{})
     注意：render方法里面接收的必须是要字符串
## 服务端渲染和客户端渲染的区别
 - 客户端最少两次请求，发起ajax在客户端使用模板引擎渲染
 - 客户端难道的就是服务端已经渲染好的
 - 客户端渲染不利于SEO搜索引擎优化
 - 服务端渲染是可以被爬虫爬取到的，客户端异步渲染很难被爬取到
 - 真正的网站是两种结合来做的 
## ip地址和端口号
 - 计算机中只有一个物理网卡，而且同一个局域网中，网卡的地址必须是唯一的
 - 网卡是通过唯一的ip地址来进行定位的
 - ip地址 用来定位 计算机
 - 端口号 用来定位 具体的应用程序
 - 端口号范围：0-65536
## markdown
 - # 一级标题，## 二级标题，###三级标题
 - -，* ，+ 就是列表
 - **加粗内容**
 - 遵从GFM规则
## 处理网站中的静态资源
 - 浏览器在解析html文件中，如果发现：link,script,img,iframe,video,audio等带有src或者href(link)属性标签的时候，浏览器会对这些资源发起新的请求
 - 统一请求静态资源,全部以public开头
## 以前表单是如何提交的
 - 表单中需要提交的表单控件元素，必须具有name属性 
 - 表单提交分为：
    + 默认的提交行为
    + 表单异步提交
 - action="url" ,method="post或get"   
## 如何通过服务器让客户端重定向
  - 方法一：
    + 状态码设置为302 临时重定向
      res.statusCode=302
      301：永久重定向  浏览器会记住，去过一次以后，下次直接去
      302：临时重定向  浏览器不会记住，告诉你往哪里去
    + 在响应头中通过Location 告诉客户端往哪重定向
        res.setHeader('Location','newUrl')
    +  res.end() 结束响应  
 - 方法二：
    + res.redirect('newUrl')
    + res.end() 结束响应 
## 什么是模块化？(day3)
 - 文件作用域
 - 通信规则
    + 加载require
    + 导出exports exports是一个空对象
 - 原理
    + 在node中，某个模块内部都有一个自己module对象
    + 该module对象中，有一个成员：exports(一个空对象)
    + 如果需要导出成员：module.exports.属性或方法=值 或 exports.属性或方法
    + exports=== module.exports   
    + 在require的时候，谁require，谁就得到module.exports
    + returen 的是module.exports
    + 当导出单个对象的时候
     不能exports=xxx
     module.exports=xxx
 - 真正使用的时候
  导出多个：exports.xxx=xx或moudle.exports={}
  导出单个：module.exports=xx    拿到的就是函数或字符串
## npm常用命令 (https://www.npmjs.com/)
 - npm --version
 - npm install --global npm  升级npm
 - npm init
 - npm init -y
 - npm install                一次把dependencies中的选项都安装
 - npm install 包名           只下载包
 - npm i --save 包名          下载并保存依赖
 - npm i -S 包名              下载并保存依赖
 - npm uninstall 包名         只删除包
 - npm uninstall 包名 --save  删除包和依赖
 - npm un 包名 --save         删除包和依赖
 - npm --help                   帮助
### npm被墙
 - https://developer.aliyun.com/mirror/NPM?from=tnpm
 - 方法一：安装cnpm: npm install -g cnpm --registry=https://registry.npm.taobao.org
 - 方法二：npm config set registry https://registry.npm.taobao.org 以后所有的npm install都会默认从淘宝服务器来下载
 - 如何查看是否设置成功：npm config list
## express感知
 - 1 安装：npm i -S express
 - 2 引包：let express = require('express')
 ```javascript
let express = require('express')
let app = express()
// 静态资源
// 当第一个参数省略；/文件路径
// app.use(express.static('./public/'))
// 访问：/public/文件路径
app.use('/public/',express.static('./public/'))
// 访问：/xxx/文件路径
// app.use('/xxx/',express.static('./public/'))

// 当服务器收到get请求/ 的时候，执行回调处理函数
app.get('/',function(req,res) {
  res.send('hello express')
})
// 请求/about，执行回调函数
app.get('/about',function(req,res) {
  res.send('我是about')
})
app.listen(3000,function() {
  console.log('app is running http://127.0.0.1:3000/');
})
 ```
## 模板标识符(day4)
 - / 是相对于当前磁盘
 - 文件操作中的相对路径省略./ ，我们使用的所有文件操作的API都是异步的，就像ajax请求一样
 - 在模块加载中的相对路径./必须写
## 修改往代码自动重启服务器
 - nodemon是一个基于node.js开发的第三方命令行工具
 - 1 安装：npm install --global nodemon
 - 2 使用：nodemon xx.js
###  查看3000端口是否被占用?
 - netstat -ano|findstr "3000" 
 - tasklist|findstr "占用的端口进程ID"
 - taskkill /f /t /im 进程名称
## express中使用art-template
  - http://aui.github.io/art-template/
  - 1 安装：
```javascript
  npm install --save art-template
  npm install --save express-art-template
```
  - 2 配置和使用
```javascript
// 配置使用art-template: 
// 1 使用：res.rend('xx.art',{模板数据})
// 2 注意：xx.art 就是html模板 (不能写路径，默认会去项目中的views目录找该模板文件)
// 3 如果想要修改默认的views目录为xxx目录：
    //  app.set('xxx',render函数的默认路径)
// app.engine('art', require('express-art-template'));//art表示以.art结尾的文件
// res.render('404.art')
let express= require('express')
let app = express()
app.use('/public/',express.static('./public'))
app.engine('html', require('express-art-template'))
app.get('/',function(req,res) {
  res.render('index.html')
})
app.listen(3000,function() {
  console.log("app is running http://127.0.0.1:3000/");
})
```
## express配置表单post
```javascript
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
  comment.dateTime = '2020-3-9';
  comments.unshift(comment)
  res.redirect('/')
})
app.listen(3000, function () {
  console.log("app is running http://127.0.0.1:3000/");
})

```
## 在express中获取post请求体数据？（req.body)
- 1 http://expressjs.com/en/starter/static-files.html
- 2 resources -> Middleware(http://expressjs.com/en/resources/middleware.html) -> body-parser(http://- expressjs.com/en/resources/middleware/body-parser.html)
- 3 安装： npm install body-parser
- 4 引包：let bodyParser = require('body-parser')
- 5 配置
```javascript
let express = require('express')
let bodyParser = require('body-parser')
let app = express()
// 只要多次这个配置，则在req请求对象上就会多次一个属性：body
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
```
### express获取表单get中的请求参数：req.query
## express中如何吧app.get部分闹到router.js文件中？
  - 方法一：
     + 在router.js中
      module.exports=function(app){app.get('/xx/',function(req,res){xx})}
     + app.js中：
      let router= require('./router.js')
      router(app)
  - 方法二（推荐）：
   + router.js文件中
    let express = require('express')
    let router = express.Router()
    router.get('/xxx', function (req, res) {})
    module.exports=router
  + app.js中
    let router=require('./router')
    app.use(router)

## 回调函数(day5)
 <!-- 
  ctrl+D ：选中不对齐的,选中内容一样的
  ctrl+shift+鼠标左右
  ctrl+键盘左或右：鼠标移动到不对齐一边 -->
### 异步操作总结：
1 回调函数
2 定时器
3 事件监听
4 promise
5 async await
### JavaScript天生不支持模块化
- require,exports是node.js才有的
- CommonJS,AMD,CMD,UMD,,EcmaScript 6 Module官方规范都是为了解决JavaScript模块化问题
#### 所有未处理的路径，都会响应xxx
```javascript
app.use(function(req,res) {
  res.send('xxx')
})
```
## MongoDB安装
 - 0 教程：https://www.runoob.com/mongodb/mongodb-window-install.html
 - 1 下载：https://www.mongodb.com/download-center/community
 - 2 用户变量：path中添加 J:\SoftWareInstall\MongoDB\bin
 - 3 查看版本：mongod --version
## 开启关闭MongoDB数据库 
  - 1 启动：mongod 
```
* mongodb默认使用执行mongodb命令所处磁盘目录下的/data/db 作为自己的数据存储目录
* 所以在第一次执行该命令前先收到创建一个 /data/db
* 如果想要修改默认的数据存储目录： mongod --dbpath=数据存储目录路径
mongod 
```
  - 停止: ctrl+c
## 连接和退出数据库
- 连接 ：再开启一个命令窗口 -> mongo   (该命令默认连接本机的MongoDB服务)
- 退出：在连接状态 -> exit
## mongoDB基本命令
 - show dbs                          查看显示所有数据库
 - db                                查看当前操作的数据库
 - use 数据库名称                     切换到指定数据库（没有会新建）
 - db.students.insertOne({"name":"jack"})    插入数据 (插入students)
 - show collections                  查看数据库中的数据
 - db.students.find()                查看students里面的所有数据
## 在node中如何操作MongoDB数据
 - https://github.com/mongodb/node-mongodb-native
 - 使用第三方包mongoose (http://www.mongoosejs.net/)
 - 1 安装：npm i mongoose
 - 2 引包：let mongoose = require('mongoose')
 - 3 连接数据库
```javascript
// 设计schema发布module
let mongoose = require('mongoose')
let Schema = mongoose.Schema
// 1、连接数据库
// 指定连接的数据库不需要存在，当插入第一条数据的时候会被自动创建
mongoose.connect('mongodb://localhost/test'})
// mongoose.connect('mongodb://localhost/test',{useMongoClient:true})

// 2、设计集合结构（表结构）
// 约束的目的是为了保证数据的完整性，不要有脏数据
let userSchema = new Schema({
  username: 
    type: String,
    required: true //表示必须有这个数据
  },
  password: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true //表示必须有这个数据
  }
});
// 3、将文档结构发布为模型
// mongoose.model方法用来把一个架构发布为model
// 第一个参数，必须首字母大写的单数形式，mongoose会自动生成 小写复数 的集合名称
// 第二个参数：架构Schema
// 返回值：模型构造函数
let User = mongoose.model('User', userSchema)

// 4、使用构造函数对集合中的数据进行操作
let xjm = new User({
  username: "xjm",
  password: '12345',
  email: "xjm.com"
})
/* ###### 增加数据  ###### */
// xjm.save((err, ret) => {
//   if (err) {
//     return console.log("保存失败");
//   }
//   console.log("保存成功");
//   console.log(ret);
// })

/* ###### 查询数据  ###### */
/* ###### 查询全部数据 */
User.find((err, ret) => {
  if (err) {
    return console.log("查询失败");
  }
  console.log("查询成功");
  console.log(ret);
})
/* ######按条件查询所有 */
// User.find({username:'zs'},(err, ret) => {
//   if (err) {
//     return console.log("查询zs失败");
//   }
//   console.log("查询zs成功");
//   console.log(ret);
// })
/* ######按条件查询一个 */
// User.findOne({username:'zs'},(err, ret) => {
//   if (err) {
//     return console.log("查询zs失败");
//   }
//   console.log("查询zs成功");
//   console.log(ret);
// })
/* ######查询第一个 */
// User.findOne((err, ret) => {
//   if (err) {
//     return console.log("查询one失败");
//   }
//   console.log("查询one成功");
//   console.log(ret);
// })

/* ###### 删除数据 ######*/
/* ##### 根据条件删除所有*/
// User.remove({username:'xjm'},(err, ret) => {
//   if (err) {
//     return console.log("删除失败");
//   }
//   console.log("删除成功");
//   console.log(ret);
// })
/* ###### 根据条件删除一个*/
// User.findOneAndRemove({username:'xjm'},(err, ret) => {
//   if (err) {
//     return console.log("删除失败");
//   }
//   console.log("删除成功");
//   console.log(ret);
// })
/* ###### 根据id删除一个*/
// User.findByIdAndRemove("5e6796c24b7a312ef8669f50",(err, ret) => {
//   if (err) {
//     return console.log("删除失败");
//   }
//   console.log("删除成功");
//   console.log(ret);
// })

/* ###### 更新数据 ######*/
/* ###### 根据指定条件更新所有 */
// User.update({name:"xjm"}, {
//   password: "88888"
// }, (err, ret) => {
//   if (err) {
//     return console.log("更新失败");
//   }
//   console.log("更新成功");
// })
/* ###### 根据id更新一个 */
// User.findByIdAndUpdate('5e679da0d6ec08285cee6c06', {
//   password: "88888"
// }, (err, ret) => {
//   if (err) {
//     return console.log("更新失败");
//   }
//   console.log("更新成功");
// })

/* ###### 根据指定条件更新一个 */
// User.findOneAndUpdate({name:"xjm"}, {
//   password: "88888"
// }, (err, ret) => {
//   if (err) {
//     return console.log("更新失败");
//   }
//   console.log("更新成功");
// })
```
## MongoDB数据库的基本概念
 - 数据库 ：可以有多个
 - 集合（表）：可以有多个
 - 文档（表记录）：可以有多个
## 在浏览器看xx.json文件
- npm i --global json-server
- json-server --watch xx.json
## Node中的其他成员(day6)
- 在每个模块出来，require,exports，还有
- __dirname 动态获取当前文件模块所属目录的绝对路径
- __filename 动态获取当前文件的绝对路径
### node中：文件操作(fs)中的路径
 - 相对路径就是相对于执行node命令行所处的路径
 - 解决：path.join(__dirname,'文件名')
### node中有很多第三方模板引擎：art-template,ejs,jade(pug),handlebars,nunjucks 
## blog-demo路由设计
  | 路径 |      方法| get参数|post参数|               是否需要登录| 备注
   /get                                                            渲染首页
   /register    get                                                渲染注册
   /register    post         email,nickname,password               处理注册
   /login       get                                                渲染登录
   /login       post         email,password                        处理登录
   /logout      get                                                处理退出请求
    
## 
- 安装 npm i -S body-parser
-  配置
```javascript
let express= require('express')
let bodyParser= require('body-parser')
let app =   express()
// 通过req.body来获取表单post的数据
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())
```
## 使用MD5 （加密）
 - 安装 npm i blueimp-md5
 - let md5= require('blueimp-md5')
- 使用 md5(要加密的内容)
## 表单提交
- 表单具有默认提交行为，默认都是同步的
- 表单同步提交之后，无论服务器响应的是什么，都会直接把响应的结果覆盖掉当前页面
## 服务端重定向针对异步请求是 无效的
## express-session
- 安装 npm i -S express-session
- 引入 let session= require("express-session")
- 配置
 ```javascript

 ```
 
- 使用:通过req.session来访问和设置Session成员
  + 添加 Session数据：req.session.key=value
  + 访问 Session数据：req.session.key
 ```javascript

 ```
## 
## 
## 
## 
## (day7)
