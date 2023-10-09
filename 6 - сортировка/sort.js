let users = [
	{ name: 'John', age: 25 },
	{ name: 'Alice', age: 30 },
	{ name: 'Bob', age: 20 },
	{ name: 'Bake', age: 20 },
	{ name: 'Blob', age: 20 },
	{ name: 'Michael', age: 25 }
];

function sort(arr) {
	// для сортировки массива такого вида используем встроенный метод Array.sort()
	// она будет сравнивать объекты друг с другом
	arr.sort((a, b) => {
		// сперва сравниваем объекты по полю age
		if (a.age > b.age) {
			return 1;
		}
		if (a.age < b.age) {
			return -1;
		}
		// затем по полю name
		if (a.name > b.name) {
			return 1;
		}
		if (a.name < b.name) {
			return -1;
		}
	})

	// возвращаем массив после сортировки
	return arr;
}

console.log(sort(users));