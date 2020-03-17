let http= require('http')
let url= require('url')
let server= http.createServer()
server.on('requset',function(req,res) {
let urlObj= url.parse(req.url,true)
req.query=urlObj.query
})
server.listen(3000,function() {
  console.log("server is running 3000");
})