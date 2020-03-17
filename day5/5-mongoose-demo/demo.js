const mongoose = require('mongoose');
// 连接mongoDB数据库
mongoose.connect('mongodb://localhost/test');
// 创建一个模型，MongoDB是动态的
const Cat = mongoose.model('Cat', {
  name: String
});
/* 
// 实例化一个Cat
const kitty = new Cat({ name: 'Zildjian' });
// 持久化保存kitty实例
kitty.save().then(() => console.log('meow'));
 */

for (let i = 0; i < 20; i++) {
  const kitty = new Cat({
    name: 'Zildjian'+i
  });
  kitty.save().then(() => console.log('meow'));
}