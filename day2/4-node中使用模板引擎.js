/**使用art-template
 * 一、浏览器中:
     1、<script src="node_modules/art-template/lib/template-web.js"></script>
     2、template('script的id标签',{})
 * 二、node中
     1、安装：npm install art-template
     2、加载包:let template = require('art-template')
     3、template.render(模板字符串,{})
     注意：render方法里面接收的必须是要字符串

 *  */
/*
let tStr = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="node_modules/art-template/lib/template-web.js"></script>
</head>
<body>
 <p> 我是{{name}}</p>
 <p>我喜欢 ：{{each hobbies}} {{$value}} {{/each}}</p>
</body>
</html>`*/
let template = require('art-template')
let fs =require('fs')
let http = require('http')
fs.readFile('./tStr.html',function(err,data) {
  if(err) {
    return res.end("read fail")
  }
  data = data.toString()
  let ret = template.render(data, {
    name: "kris",
    hobbies: ["学习", "看动漫", "打游戏"]
  })
  console.log(ret);
})
