async function async1() {
	console.log("async1 start");
	await async2(); //会立刻执行，因为await后面就是执行结果,执行到这里，async1会挂起，但不会结束，一直等到所有的同步代码结束之后再去执行
	console.log("async1 end"); //由于上面无返回值，次步为异步，放到微任务队列（micro tasks）里面
}

async function async2() {
	console.log("async2");
}

console.log("script start");

setTimeout(function () {
	console.log("setTimeout"); // 异步任务，宏任务
}, 0); //时序漂移

async1();

new Promise(function (resolve) {
	console.log("promise1");
	resolve();
}).then(function () {
	console.log("promise2"); //异步任务的微任务
});

// console.log("script end");
// script start
// async1 start
// async1 end
// promise1
// script end
// setTimeout
// async2
// promise2

//answer
// script start
// async1 start
// async2
// promise1
// script end
// async1 end
// promise2
// setTimeout

// // 宏任务举例
// (setInterval, setTimeout, I / O, UI渲染);
// // 微任务举例
// (promise, promise.then, mutationObserver, process.nextTick);

/**
 * 作业
 */
// async function async1() {
// 	console.log("async1 start");
// 	await async2();
// 	await async3();
// 	console.log("async1 end");
// }

// async function async2() {
// 	console.log("async2");
// }

// async function async3() {
// 	console.log("async3");
// }

// console.log("script start");

// setTimeout(function () {
// 	console.log("setTimeout");
// }, 0);

// async1();

// new Promise(function (resolve) {
// 	console.log("promise1");
// 	resolve();
// }).then(function () {
// 	console.log("promise2");
// });

// console.log("script end");

// script start
// async1 start
// async2
// promise1
// script end
// async3
// promise2
// async1 end
// setTimeout

