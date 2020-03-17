// 设计schema发布module
let mongoose = require('mongoose')
let Schema = mongoose.Schema
// 1、连接数据库
// 指定连接的数据库不需要存在，当插入第一条数据的时候会被自动创建
mongoose.connect('mongodb://localhost/test')
// 2、设计集合结构（表结构）
// 约束的目的是为了保证数据的完整性，不要有脏数据
let userSchema = new Schema({
  username: {
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
  username: "admin",
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
/* ###### 查询所有 */
// User.find((err, ret) => {
//   if (err) {
//     return console.log("查询失败");
//   }
//   console.log("查询成功");
//   console.log(ret);
// })
User.find().then(data => {
  console.log(data);
})
User.findOne({
  username: 'admin'
}).then(user => {
  if (user) {
    // 用户已存在，不能注册
    console.log("用户已存在");
  } else {
    // 用户不不存在，可以注册
    return new User({
      username: "admin",
      password: '123456',
      email: "admin.com"
    }).save()
  }
}).then(ret => {

})
/* 按条件查询所有 */
// User.find(conditions,(err, ret) => { })
/* 按条件查询一个 */
// User.findOne(conditions,(err, ret) => { })
/* 询第一个 */
// User.findOne((err, ret) => { })

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