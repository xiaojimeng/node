let foo = 'bar'
function add(x,y) {
  return x+y
}
let a ='a'
// exports.add=add
// exports是一个对象
/*
  在node中，某个模块内部都有一个自己module对象
  该module对象中，有一个成员：exports(一个空对象)
  如果需要对位导出成员：module.exports.属性或方法=值
  在require的时候，谁require，谁就得到module.exports
  exports=== module.exports
*/
console.log(exports=== module.exports);
// module.exports.add=add


// module.exports={foo:'bar'}
// exports=module.exports
// export.foo='hello'  导出的是foo='hello'



/* exports.foo='hello'
// {foo:'hello',a=123}
module.exports.a=123
// export !==module.exports return的是module.exports
 export={a:456}
// {foo:'ha',a=123}
 module.exports.foo='ha'
 exports.c=456
//  此时已经是同一个指向了
 exports=module.exports
 // {foo:'ha',a=789}
 exports.a=789
//  前面的都无效了，此时导出function
 module.exports=function() {
   console.log("heool")
 }
*/
module.exports={
  add,a
}

