main();

function main() {
	console.log(user);
	var user = { name: "xiaoyao" };

	// console.log(age);
	// let age = 33;

	sayHi();
	function sayHi() {
		console.log("hi");
	}
}

/**
 * 阶段1：创造执行上下文，创建一个全局上下文[global exe context]，设定一个作用域空间（全局、模块、块级、函数），从内层区域来说，code区域，stack区域，heap区域
 * 阶段2：执行global全局上下文，压栈的过程
 * 阶段3：创建函数实体的上下文，创建函数实体的上下文[main exe context]，let 和 var都会有变量提升hoisting，创建了函数级的作用域，函数内的提升只会在函数作用域内提升，不会到外部提升
 * 阶段4：执行main函数上下文，压栈的过程，变量的复制和变量的提升是不一样的，提升的只是变量的声明;提前访问的let声明的函数会报错，let的变量提升了，但是呗锁死在了一个暂时性死区[temporal dead zone]，在这个区域访问会报错；var的变量提升了，值是undefined，可以访问到
 */