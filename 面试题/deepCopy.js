// let a = 10;
// let b = a;
// b = 20;
// console.log(a, b);
// const c = {};
// const c1 = {
// 	name: "张三",
// };
// const c2 = c1; //直接赋值
// c2.name = "李四";
// console.log(c1.name);
//引用类型变量存储的是指针，真实存储地点在堆空间，基本类型存储的是实际的数据，存储在栈中
/**
 * 浅拷贝
 * 方法：...
 * 会创建一个新对象
 */
// const obj1 = {
// 	name: "fancy",
// 	city: {
// 		area: 2,
// 	},
// };

// const obj2 = { ...obj1 };
// obj2.name = "fanding";
// obj2.city.area = 3;
// console.log(obj1, obj2);

/**
 * 深拷贝
 * 新的api：structuredClone,无法克隆函数
 */

// const obj3 = structuredClone(obj1);
// obj3.name = "fanding";
// obj3.city.area = 4;
// console.log(obj1);
// console.log(obj3);

// function deepClon(obj) {
// 	let newObj = Array.isArray(obj) ? [] : {};
// 	if (typeof obj === null || typeof obj !== "object") return obj;
// 	for (let key in obj) {
// 		if (obj[key] === obj) continue;
// 		if (obj.hasOwnProperty(key)) {
// 			newObj[key] = deepClon(obj[key]);
// 		}
// 	}
// 	return newObj;
// }
//实现一个deepCopy
//其他类型如何处理，数组、函数
//深拷贝中如何解决循环引用的问题，属性引用自身，导致栈溢出

// (() => {
// 	let a = 1;
// 	function b() {
// 		let c = a;
// 		console.log(c);
// 	}
// 	b();
// })();

//作用域链，词法作用域，闭包的能力及使用场景

function fun1() {
	console.log(fun2Value);
}

function fun2() {
	let fun2Value = "hello world!";
	fun1();
}
fun2();

//词法作用域：作用域是在代码写下来的位置向外去寻找的，而不是他执行的位置
//作用域链：当在当前作用域找不到使用的变量的时候，会逐层往外层作用域去寻找，直到全局，如果全局还找不到就是not defined
//闭包：内部作用域引用了外部作用域的东西，构成了一种带走了当时定义的词法作用域，要用变量去干活，闭包不一定会造成内存泄漏（立即执行）
		// 闭包的作用：数据私有化

// function fun2() {
// 	let fun2Value = "hello world!";
// 	function fun1() {
// 		console.log(fun2Value);
// 	}
// 	return fun1;
// }

// fun2()();
// const res = fun2();

// function make() {
// 	let n = 0;
// 	return () => ++n;
// }
// const c1 = make();
// const c2 = make();

// c1() 1
// c2() 1
// c1() 2
// c1() 3

function counter() {
	let count = 0;
	function get() {
		return count;
	}
	function add() {
		count++;
	}
	return {
		get,
		add
	}
}

let op = counter();
//课后作业：curring，weakmap（循环引用问题）