const input = document.querySelector('.input');
const variants = document.querySelector('.list');
const key = '99f59097-746c-442a-9c19-c6416450e7bf';

function geocode(adress) {
	// используя api яндекс карт, вызываем фукнцию геокодирования, передавая в нее значение input-a
	ymaps.geocode(adress)
		// при успехе возвращаем объект geoObjects
		.then(res => {
			// очищаем список вариантов
			console.log('вызов')
			variants.innerHTML = '';
			// с помощью встроенного метода each, обращаемся к каждому элементу 
			res.geoObjects.each((item) => {
				// для каждого элемента вызываем функцию создания html-строки
				addVariant(item.getAddressLine());
			})
		})
		.catch(err => console.log(err));
}

function addVariant(item) {
	const variant = document.createElement('li');
	variant.innerHTML = `<span>${item}</span>`;
	variants.appendChild(variant);
	variant.addEventListener('click', () => {
		input.value = `${item}`;
		variants.innerHTML = '';
	})
}

// функция дебаунса из доки
// не сообразил как объединить с функцией троттлинга
function debounce(callback, timeout) {
	return function perform(...args) {
		let previousCall = this.lastCall;
		this.lastCall = Date.now();
		if (previousCall && this.lastCall - previousCall <= timeout) {
			clearTimeout(this.lastCallTimer)
		}
		this.lastCallTimer = setTimeout(() => callback(...args), timeout)
	}
}

const debounced = debounce(geocode,500);

input.addEventListener('input', (e) => {
	if (!e.target.value) {
		variants.innerHTML = '';
		return;
	}
	debounced(e.target.value)
})