// 所有未处理的路径，都会返回xxx的
app.use(function(req,res) {
  res.send('xxx')
})
