// основано на решении, найденном на просторах интернета
// https://stackoverflow.com/questions/45760110/how-to-fill-javascript-localstorage-to-its-max-capacity-quickly
window.localStorage.clear();
// вынесем счетчики в глобанльую область видимости
let i;
let j;
let k;

// с помозью конструкции try...catch поочередно запускаем циклы
// добавляющие (и перезаписывающие) в локальное хранилище новые ключи (1,2,3)
// и значения от большего к меньшему
try {
	// сперва заполняем наибольшим значением
	for (i = 1; i <= 100000; i++) {
		// большой пустой массив, объединяем в строку из символов а
		window.localStorage.setItem('1', new Array(i * 100000).join('a'));
	}
} catch (err) {
	// когда не получается заполнить большим значением, добавляем новый ключ, и заполняем массивом поменьше
	// и т.д.
	try {
		for (j = 1; j <= 1000; j++) {
			window.localStorage.setItem('2', new Array(j * 1000).join('a'));
		}
	} catch (err) {
		try {
			for (k = 1; k <= 1000; k++) {
				window.localStorage.setItem('3', new Array(k).join('a'));
			}
		} catch (err) {
			// один символ в строке - 1 байт
			// считаем количество символов - байт
			const bytes = (i * 100000 + j * 1000 + k);
			// считаем количество мегабайт, округляем до тысячных
			const megaBytes = (bytes / 1048576).toFixed(3);
			console.log(`Вместимость хранилища: ${bytes} байт / ${megaBytes} мегабайт`);
		}
	}
}

// localStorage Я.Браузера - 5343881 байт / 5.096 мегабайт