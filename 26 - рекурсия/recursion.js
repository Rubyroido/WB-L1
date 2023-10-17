// записываем верхний DOM-узел
const html = document.documentElement;

function recursion(element) {
	// выводим информацию о тэге
	console.log(element.tagName)
	// если у элемента есть внутренние элементы, 
	// вызываем для каждого дочернего элемента функцию
	if (element.hasChildNodes()) {
		element.childNodes.forEach(node => {
			recursion(node)
		})
	}
	// проблема функции в текстовых узлах
	// у них нет названий тэгов, поэтому функция часто выводит undefined
}

recursion(html)