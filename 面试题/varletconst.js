/**
 * 1. 作用域上的区别：gloab 、function 、block 、mudule
 * 2. 他们都能进行变量提升，但是初始化的值是不同的，var提升之后，系统本身会给一个undefined，let不会给他任何值
 * 3. 是否可以重新赋值 var 可以重复声明，let、const不可以
 */
// var shadowing = "hello";
// function shadowingFn() {
// 	console.log("variable shadowing:", shadowing);
//     var shadowing;
//     shadowing = "world";
// }
// shadowingFn();

// var shadowing = "hello";
// function shadowingFn() {
// 	console.log("variable shadowing:", shadowing);
// }
// shadowingFn();

// var shadowing = "hello";
// function shadowingFn() {
// 	console.log("variable shadowing:", shadowing);
// 	shadowing = "world";
// }
// shadowingFn();

// var shadowing = "hello";
// function shadowingFn() {
// 	console.log("variable shadowing:", shadowing);
// 	let shadowing = "world";
// }
// shadowingFn();
const obj = {
    name:"张三"
}
//作业：如何让obj.name也不能修改