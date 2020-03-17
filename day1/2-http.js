/**http核心模块（创建编写服务器）
 * 0、服务器
    对数据提供服务
    发请求，接受请求，处理请求，发送响应
 * 1、加载模块：let http = require('http')
 * 2、返回server实例：let server=http.createServer()
 * 3、注册requset事件：server.on('request',function(req,res){})
      * req:request,res:response
      * req.url 请求路径
      * res.write() 给客户端发送响应数据，可以使用多次
      * res.end() 结束响应（如果发送了响应数据，必须写）
      * !!!通常是直接使用res.end(响应内容)
      * 响应内容只能是二进制或者字符串
      * 响应内容类型：
            服务器默认发送的是utf-8(chcp 65001)的编码内容，浏览器默认按当前操作系统的默认编码的解析
            中文操作系统默认是gbk(chcp 963)
            res.setHeader('Content-type','text/plain;charset=utf-8')
            文本：text/plain,html：text/html,图片：image/jpeg(图片不需要指定编码，一般说的编码是指字符编码)
           帮助: https://www.oschina.net/ 
 * 4、绑定端口号，启动服务器：server.listen(port,function() {})
/**node中的JavaScript
 * 1、没有DOM，BOM 
 * 2、核心模块：文件操作fs,服务器构建http,路径操作path，操作系统信息os
 * 3、模块系统：
 * 
 * 
 * 
 * 
 */
/**模块化
 * 1、 require(一个方法)，
    * 对于核心模块：作用是加载模块
    * 对于文件模块：
      加载文件模块并执行里面的代码
      拿到被加载文件模块导出的接口对象
 * 2、在node中，模块有三种：
         1、具名的核心模块:如fs,http 【require('fs')】
         2、用户自己编写的文件模块:就是js文件  【require('url')】
 * 3、在node中，没有全局作用域，只有模块作用域 
 * 4、模块作用域：外部访问不到内部，内部也访问不到外部
 * 5、模块与模块通信：先require()加载模块，再exports导出需要使用的数据方法等。export默认是一个空对象
 */
/**ip地址和端口号
 * 1、计算机中只有一个物理网卡，而且同一个局域网中，网卡的地址必须是唯一的
 * 2、网卡是通过唯一的ip地址来进行定位的
 * 3、ip地址 用来定位 计算机
 * 4、端口号 用来定位 具体的应用程序
 * 5、端口号范围：0-65536
 */
/**markdown
 * 1 # 一级标题，## 二级标题，###三级标题
 * 2 -，* ，+ 就是列表
 * 3 **加粗内容**
 * 4 遵从GFM规则
 */
let http = require('http')
let server=http.createServer()
server.on('request',function(req,res){
  console.log("收到客户端请求");
  console.log("请求路径是"+req.url);
  // res.write("hello")
  // res.end()
  res.end("hello")
  
})
server.listen(3000,function() {
  console.log("服务器启动成功了http://127.0.0.1:3000/");
})

// http.createServer(function(req,res) {}).listen(port,function() {})
