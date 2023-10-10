const test = '{"name":"John","age":30,"isStudent":false,"friends":["Alex","Mary"],"address":{"city":"New York","street":"123 Main St"}}';

// решение найденное на просторах интернета https://github.com/doocs/leetcode/tree/main/solution/2700-2799/2759.Convert%20JSON%20String%20to%20Object
// исходник был написан на TS, перевел в обычный JS и на этом пока все, не могу назвать это своим решением 
// также функция работает только для валидных JSON строк
function jsonParse(str) {
	// выводим в константу длину строки, для использования в качестве ограничителя в циклах
	const n = str.length;
	// создаем переменную-каунтер, для определения положения курсора в строке
	let i = 0;
	// функция обработки true
	const parseTrue = () => {
		// сдвигаем курсор
		i += 4;
		// возвращаем true
		return true;
	};

	// функция обработки false
	const parseFalse = () => {
		i += 5;
		return false;
	};

	// функция обработки null
	const parseNull = () => {
		i += 4;
		return null;
	};

	// функция обработки чисел
	const parseNumber = () => {
		// объявляем пустую строку, которую позже будем заполнять
		let s = '';
		// циклом идем по символам строки
		while (i < n) {
			// записываем текущий символ оригинальной строки
			const c = str[i];
			// прерываем, если доходим до скобки или запятой
			if (c === ',' || c === '}' || c === ']') {
				break;
			}
			// записываем символ в строку
			s += c;
			// двигаем курсор
			i++;
		}
		// возвращаем итогову строку с числом, преобразованную в число
		return Number(s);
	};

	// функция обработки массивов
	const parseArray = () => {
		// объявляем пустой массив
		const arr = [];
		// двигаем курсор
		i++;

		while (i < n) {
			const c = str[i];
			if (c === ']') {
				i++;
				break;
			}
			if (c === ',') {
				i++;
				continue;
			}
			const value = parseValue();
			arr.push(value);
		}
		return arr;
	};

	// функция обработки строки
	const parseString = () => {
		let s = '';
		i++;
		while (i < n) {
			const c = str[i];
			if (c === '"') {
				i++;
				break;
			}
			if (c === '\\') {
				i++;
				s += str[i];
			} else {
				s += c;
			}
			i++;
		}
		return s;
	};

	// функция обработки объектов
	const parseObject = () => {
		const obj = {};
		i++;
		while (i < n) {
			const c = str[i];
			if (c === '}') {
				i++;
				break;
			}
			if (c === ',') {
				i++;
				continue;
			}
			const key = parseString();
			i++;
			const value = parseValue();
			obj[key] = value;
		}
		return obj;
	};

	// общая функция обработки значения, 
	// которая вызывает другие методы в зависимости от условия, или рекурсивно вызывается в них сама
	const parseValue = () => {
		const c = str[i];
		if (c === '{') {
			return parseObject();
		}
		if (c === '[') {
			return parseArray();
		}
		if (c === '"') {
			return parseString();
		}
		if (c === 't') {
			return parseTrue();
		}
		if (c === 'f') {
			return parseFalse();
		}
		if (c === 'n') {
			return parseNull();
		}
		return parseNumber();
	};

	return parseValue();
}

console.log(jsonParse(test))