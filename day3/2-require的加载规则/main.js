require('./a')
let b = require('./b')//不会执行了，,因为a已经加载执行了。只是为了拿里面的数据
console.log(b);

