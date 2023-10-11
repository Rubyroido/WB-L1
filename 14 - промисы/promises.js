const URL = 'https://fikiwiki.com/uploads/posts/2022-02/1644974192_30-fikiwiki-com-p-yezhiki-krasivie-kartinki-33.jpg';

// функция, возвращающая промис, которая принимает на вход URL картинки
function getPicture(url) {
	// возвращаем промис
	return new Promise((resolve, reject) => {
		// создаем новый элемент <img>
		const image = new Image();
		// записываем в свойство src нового элемента, адрес получаемый в качестве аргумента
		image.src = url;
		// используя события onload и onerror, отслеживаем загрузку изображения
		image.onload = () => {
			// при успешной загрузке возвращаем resolve с картинкой
			resolve(image);
		}
		// при возникновении ошибки возращаем ошибку
		image.onerror = (err) => {
			reject(err);
		}
	})
}

// находим блок, в который будем вставлять изображение
const container = document.querySelector('.container');
// вызываем функцию
getPicture(URL)
	// в случае успеха, вставляем картинку в найденный блок и выводим сообщение об удачной загрузке
	.then((image) => {
		container.appendChild(image);
		alert('Изображение загружено');
	})
	// при неудаче, выводим сообщение об ошибке
	.catch((err) => {
		alert(`Произошла ошибка - ${err}`);
	})