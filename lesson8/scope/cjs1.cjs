let a = 1;
function add(a, b) {
	return a + b;
}

console.log("hello");

module.exports = {
	a,
	add,
};
console.log("hello2");

(function d(require,exports) {
    let a = 1;
	function add(a, b) {
		return a + b;
	}

	console.log("hello");

	module.exports = {
		a,
		add,
	};
	console.log("hello2");
})()

