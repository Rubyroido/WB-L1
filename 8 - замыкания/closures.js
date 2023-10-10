const functionsArray = [
	function (num) {
		return num * 2;
	},
	function (num) {
		return num * 4;
	},
	function (num) {
		return num * 6;
	}
]

// создаем основную функцию, которая будет возвращать другую функцию
function makeNewFunction(functions) {
	// объявляем пустой массив для будущих результатов
	const results = [];

	// создаем функцию, которая циклично будет вызывать функции из массива
	function makeResult() {
		for (let i = 0; i < functions.length; i++) {
			const result = functions[i](i);
			// полученный результат записываем в массив результатов
			results.push(result);
			// на каждой итерации цикла выводим массив результатов
			console.log(results);
		}
	}
	// возвращаем функцию
	return makeResult();
}

makeNewFunction(functionsArray);