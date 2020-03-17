let express = require('express')
let User = require('./models/user')
let md5 = require('blueimp-md5')

let router = express.Router()

router.get('/', function (req, res) {
  console.log(req.session.user);
  res.render('index.html', {
    user: req.session.user
  })
})

router.get('/login', function (req, res) {
  res.render('login.html')
})

// 处理登录
router.post('/login', function (req, res) {
  // 1、获取表单数据
  let body = req.body
  // 2、查询用户密码是否输入正确
  User.findOne({
    email: body.email,
    password: md5(md5(body.password))
  }, (err, user) => {
    if (err) {
      return res.status(500).json({
        err_code: 500,
        message: err.message
      })
    }
    if (!user) {
      return res.status(500).json({
        err_code: 500,
        message: 'Email or password is invaild'
      })
    }

    // user存在，登录成功
    req.session.user = user
    res.status(200).json({
      err_code: 0,
      message: "ok"
    })
  })
  // 3、发送响应数据
})

router.get('/register', function (req, res) {
  res.render('register.html')
})

// 处理注册
router.post('/register', function (req, res) {
  //  1、获取表单数据（body-parser:req.body)
  let body = req.body
  //  2、操作数据库：用户存在不允许注册;不存在允许注册
  User.findOne({
    $or: [{
      email: body.email
    }, {
      nickname: body.nickname
    }]
  }, (err, data) => {
    if (err) {
      // return res.status(500).send('Server Err')
      // express提供了一个响应方法：json。会把对象转为字符串再发给浏览器
      return res.status(500).json({
        err_code: 500,
        message: "Internal Error"
      })
    }
    if (data) {
      return res.status(200).json({
        err_code: 1,
        message: "emial or nickname alread exists"
      })
      return res.send(`邮箱或昵称已经存在，请重试`)
    }
    // 创建用户,并保存
    body.password = md5(md5(body.password))
    new User(body).save((err, user) => {
      if (err) {
        return res.status(500).json({
          err_code: 0,
          message: "Internal Error"
        })
      }
      // 注册成功 使用session记录当前用户信息
      req.session.user = user
      res.status(200).json({
        err_code: 0,
        message: "ok"
      });
      // 服务端重定向针对异步请求是 无效的。在客户端进行重定向
    });
  });
})
// 退出
router.get('/logout', function (req, res) {
// 1、清除登录状态 
req.session.user=null
// 2、重定向登录页
res.redirect('/login')
})
module.exports = router

// router.post('/register', async function (req, res) {
//   var body = req.body
//   try {
//     if (await User.findOne({ email: body.email })) {
//       return res.status(200).json({
//         err_code: 1,
//         message: '邮箱已存在'
//       })
//     }
//     if (await User.findOne({ nickname: body.nickname })) {
//       return res.status(200).json({
//         err_code: 2,
//         message: '昵称已存在'
//       })
//     }
//     // 对密码进行 md5 重复加密
//     body.password = md5(md5(body.password))
//     // 创建用户，执行注册
//     await new User(body).save()
//     res.status(200).json({
//       err_code: 0,
//       message: 'OK'
//     })
//   } catch (err) {
//     res.status(500).json({
//       err_code: 500,
//       message: err.message
//     })
//   }
// })


// 处理注册-默认表单提交行为(同步的)
// router.post('/register', function (req, res) {
//   //  1、获取表单数据（body-parser:req.body)
//   let body = req.body
//   //  2、操作数据库：用户存在不允许注册;不存在允许注册
//   User.findOne({
//     $or: [{
//       email: body.email
//     }, {
//       nickname: body.nickname
//     }]
//   }, (err, data) => {
//     if (err) {
//       // return res.status(500).send('Server Err')
//       // express提供了一个响应方法：json。会把对象转为字符串再发给浏览器
//       return res.status(500).json({
//         err_code: 500,
//         message: "Internal Error"
//       })
//     }
//     if (data) {
//       // return res.status(200).json({
//       //   err_code: 1,
//       //   message: "emial or nickname alread exists"
//       // })
//       return res.send(`邮箱或昵称已经存在，请重试`)
//       return res.render('register.html',{err_message:"邮箱或密码已存在!",form:body})//默认表单提交行为用copy
//     }
//     // 创建用户,并保存
//     body.password = md5(md5(body.password))
//     new User(body).save((err, user) => {
//       if (err) {
//         return res.status(500).json({
//           err_code: 0,
//           message: "Internal Error"
//         })
//       }
//       res.status(200).json({
//         err_code: 0,
//         message: "ok"
//       });
//     });
//   });
// })