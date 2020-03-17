
let http = require('http')
let server=http.createServer()
server.on('request',function(req,res){
  console.log("收到客户端请求");
  console.log("端口号是",req.socket.remotePort,"请求地址是",req.socket.remoteAddress);
  let url = req.url
  if(url === '/') {
    let list = [
      {title:"phoneX",price:9999},
      {title:"phoneX1",price:8999},
      {title:"phoneX2",price:7999},
    ]
    // res.end("index")
    res.end(JSON.stringify(list))//响应内容只能是二进制或字符串
  }else if(url === "/login") {
    res.end("login")
  }else{
    res.end("其他")
  }
})
server.listen(3000,function() {
  console.log("服务器启动成功了http://127.0.0.1:3000/");
  // 192.168.1.101:3000/
  
})
