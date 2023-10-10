// задача решена с использованием статьи https://habr.com/ru/articles/435084/
const functionsArray = [
	function(num) {
		return num*2;
	},
	function(num) {
		return num*4;
	},
	function(num) {
		return num*6;
	}
]

// для того чтобы использовать async await с циклом, нужно прибегнуть к for...of
async function functionCollection(arr) {
	// так как в for...of нет доступа к индексам массива, объявляем переменную-каунтер
	let counter = 0;
	for (let item of arr) {
		// записываем в константу результат выполнения функции
		const result = await item(counter);
		// выводим порядковый номер и результат
		console.log(`Индекс - ${counter}`);
		console.log(`Результат - ${result}`);
		// увеличиваем счетчик
		counter ++;
	}
}

functionCollection(functionsArray);