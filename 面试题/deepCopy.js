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
const obj1 = {
	name: "fancy",
	city: {
		area: 2,
	},
};

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
//     if(obj===null||typeof obj !== "object")
//     let newObj = {}

// }
//实现一个deepCopy
//其他类型如何处理，数组、函数
//深拷贝中如何解决循环引用的问题，属性引用自身，导致栈溢出

(() => {
	let a = 1;
	function b() {
		let c = a;
		console.log(c);
	}
	b();
})();

//作用域链，词法作用域，闭包的能力及使用场景
