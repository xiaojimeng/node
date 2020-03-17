let mongoose = require('mongoose')

// 连接数据库
// mongoose.connect('mongodb://localhost/test',{useMongoClient:true})
mongoose.connect('mongodb://localhost/test',{useUnifiedTopology:true,useNewUrlParser:true})
let Schema = mongoose.Schema
let userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  nickname:{
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  created_time: {
    type: Date,
    // 不要Date.now(),因为会立即调用，当new Model的时候 如果没有传入值，create_time属性会去调用Date.now方法
    default: Date.now
  },
  last_modified_time: {
    type: Date,
    default: Date.now
  },
  // 头像
  avatar: {
    type: String,
    default: 'public/img/avatar-default.png'
  },
  // 介绍
  bio: {
    type: String,
    default: ''
  },
  gender: {
    type: Number,
    enum: [-1, 0, 1], //只能是这三个里面的一个
    default: -1
  },
  birthday: {
    type: Date,
    default: ''
  },
  state:{
    type:Number,
   enum:[0,1,2],
  //  0没有权限设置，1不可以评论，2不可以登录
   default:0
  }
})

module.exports = mongoose.model('User', userSchema)

