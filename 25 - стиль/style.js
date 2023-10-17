const body = document.querySelector('.body');
const text = 'Hello world!';

function createElement() {
	// создаем элемент
	const paragraph = document.createElement('p');
	// наполняем
	paragraph.textContent = text;
	// устанавливаем стили
	// согласно https://doka.guide/js/element-style/
	// есть три способа установить стили через JS:
	paragraph.style.cssText = 'text-decoration: underline'; // 1-й - el.style.cssText
	paragraph.setAttribute('style', 'font-size:140px'); // 2-й - el.setAttribute
	paragraph.style.color = 'blue'; // 3-й - el.style.[propertyName]
	// 1-й и 2-й способы позволяют задать несколько свойств одной строкой
	// однако в зависимости от положения в коде, они могут отменять другие стили
	// в данной функции setAttribute заменяет cssText, но не заменяет style.color

	body.appendChild(paragraph)
}

createElement()