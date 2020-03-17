let fs = require('fs')
let Student = require('./student.js')
let express = require('express')
let router = express.Router()

router.get('/students', function (req, res) {
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
  new Student(req.body).save(err => {
    if (err) {
      return res.status(500).send('server error')
    }
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
    res.render('edit.html', {
      student
    })
  })
})
// 更新学生信息
router.post('/students/edit', function (req, res) {
  Student.update(req.body, function (err) {
    if (err) {
      return res.status(500).send('server error')
    }
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