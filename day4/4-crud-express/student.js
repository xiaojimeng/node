let fs = require('fs')
let dataPath = './data.json'
// 获取所有学生列表
exports.find = function (callback) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) {
      callback(err)
    }
    callback(null, JSON.parse(data).students)
  })
}
// 添加保存学生
exports.save = function (student, callback) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) {
      callback(err)
    }
    let students = JSON.parse(data).students
    let id = parseInt(students[students.length - 1].id)
    student.id =id  + 1 //处理id 保证唯一
    students.push(student)
    let newData = JSON.stringify({
      students
    })
    fs.writeFile(dataPath, newData, function (err) {
      if (err) {
        callback(err)
      }
      callback()
    })
  })
}
// 更新学生
exports.update = function (student, callback) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) {
      callback(err)
    }
    let students = JSON.parse(data).students
    // find找到符合条件的，并返回
    let st = students.find((item) => {
      return item.id = student.id
    })
    console.log(st);
    // 把修改值赋值给被修改的那个数据
    for (let key in student) {
      st[key] = student[key]
    }
    let newData = JSON.stringify({
      students
    })
    console.log(newData);
    
    fs.writeFile(dataPath, newData, function (err) {
      if (err) {
        callback(err)
      }
      callback()
    })
  })
}
// 删除学生
exports.delete = function (id, callback) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) {
      callback(err)
    }
    let students = JSON.parse(data).students
    // findIndex根据条件查找元素的下标
    let deleteId = students.findIndex(item => {
      return item.id === id
    })
    students.splice(deleteId,1)//删除被点击的学生
    let newData=JSON.stringify({students})//把对象转为字符串，重新写入文件中
    fs.writeFile(dataPath, newData, function (err) {
      if (err) {
        callback(err)
      }
      callback()
    })
  })

}
exports.findById = function (id, callback) {
  fs.readFile(dataPath, 'utf8', function (err, data) {
    if (err) {
      callback(err)
    }
    let students = JSON.parse(data).students
    let st = students.find(item => {
      return item.id === parseInt(id)
    })
    callback(null, st)
  })

}