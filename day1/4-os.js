/**os操作系统信息
 * 1、引入模块 let os = require('os')
 * 2、cpu信息 os.cpus()
 * 3、内存信息 os.totalmem()
 * 
 */
let os = require('os')
// 获取cpu信息
console.log(os.cpus());
console.log(os.totalmem());

