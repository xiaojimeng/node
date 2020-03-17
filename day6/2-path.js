let path= require('path')
console.log(path.basename('J:/node-3-8/day6/2-path.js'));
console.log(path.basename('J:/node-3-8/day6/2-path.js','.js'));
console.log(path.dirname('J:/node-3-8/day6/2-path.js'));
console.log(path.extname('J:/node-3-8/day6/2-path.js'));
console.log(path.isAbsolute('J:/node-3-8/day6/2-path.js'));
console.log(path.isAbsolute('./blog-demo/'));
console.log(path.isAbsolute('/day1/'));
console.log(path.parse('J:/node-3-8/day6/2-path.js'));
console.log(path.join('J:/a/','b'));
console.log(path.join('J:/a/','b','c','d'));

