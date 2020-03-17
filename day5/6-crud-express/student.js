let mongoose = require('mongoose')
let Schema = mongoose.Schema
// mongoose.connect("mongodb://localhost:27017")//默认开启27017
// 连接itcast数据库
mongoose.connect("mongodb://localhost/itcast", {
  useNewUrlParser: true
}, {
  useUnifiedTopology: true
}, function (err) {
  if (err) {
    return console.log("err", err);

  }
  console.log("success");
})
// 模型构造函数，就是集合students
let Student = mongoose.model('Student', new Schema({
  name: {
    type: String,
    required: true
  },
  gender: {
    type: String,
    enum: ["男", "女"], //限制了只能是男或者女
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  hobbies: {
    type: String,
    required: true
  },

}))

module.exports = Student