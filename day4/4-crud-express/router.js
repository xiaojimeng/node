let fs = require('fs')
let Student = require('./student.js')

// module.exports=function(app) {
//   app.get('/students',function(req,res) {
//     fs.readFile('./data.json','utf8',function(err,data) {
//       if(err) {
//         return res.status(500).send('server error')
//       }
//       let students=JSON.parse(data).students
//       res.render('index.html',{
//         fruit:[ "苹果","樱桃","桃子"],students
//       })
//     })
//   })
// }
let express = require('express')
let router = express.Router()
router.get('/students', function (req, res) {
  // fs.readFile('./data.json', 'utf8', function (err, data) {
  //   if (err) {
  //     return res.status(500).send('server error')
  //   }
  //   let students = JSON.parse(data).students
  //   res.render('index.html', {
  //     fruit: ["苹果", "樱桃", "桃子"],
  //     students
  //   })
  // })
  Student.find(function (err, students) {
    if (err) {
      return res.status(500).send('server error')
    }
    res.render('index.html', {
      students
    })
  })
})
// 提交页面
router.get('/students/new', function (req, res) {
  res.render('new.html')
})

// 提交数据
router.post('/students/new', function (req, res) {
  // 1、获取表单数据
  // console.log(req.body);
  // 2、处理：把数据保存到data.json文件中
  // 读取-转为对象，push进去，对象转字符串，把字符串再次写入
  Student.save(req.body, function (err) {
    if (err) {
      return res.status(500).send('server error')
    }
    // 3、发送响应
    res.redirect('/students')
  })
})

// 更新页面
router.get('/students/edit', function (req, res) {
  let id = parseInt(req.query.id)
  Student.findById(id, function (err, student) {
    if (err) {
      return res.status(500).send('Server error.')
    }
    console.log(student);
    res.render('edit.html', {student})
  })
})
// 更新学生信息
router.post('/students/edit', function (req, res) {
  // 1、获取表单数据
  // console.log(req.body);
  // 2、更新
  Student.update(req.body, function (err) {
    if (err) {
      return res.status(500).send('server error')
    }
    // 3、发送响应
    res.redirect('/students')
  })
})
// 删除学生
router.get('/students/delete', function (req, res) {
  let id = parseInt(req.query.id)
  console.log(id);
  Student.delete(id, function (err) {
    if (err) {
      return res.status(500).send('server error')
    }
    res.redirect('/students')
  })

})
module.exports = router