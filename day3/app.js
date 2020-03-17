let express = require('express')
let app = express()
// 对于静态资源
// 只要这样，就可以通过/public/xx的方式访问public目录中的所有资源
app.use('/public/',express.static('./public/'))

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