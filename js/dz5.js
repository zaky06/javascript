'use strict';
function getTovar(count) {
	if (5 <= count && count <= 20) {
		return count + " товаров"
	} else if (count % 10 === 1) {
		return count + " товар";
	} else if (count % 10 === 2 || count % 10 === 3 || count % 10 === 4) {
		return count + " товара";
	} else {
		return count + " товаров";
	}
}
console.log(getTovar(22));


function Range(a, b, c = 1) {
	let arr = [];
	for (a; a <= b; a += c) {
		arr.push(a);
	}
	return arr;
}
console.log(Range(1, 10, 2));
