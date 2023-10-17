const URL = 'http://www.filltext.com/?rows=1000&fname=%7BfirstName%7D&lname=%7BlastName%7D&tel=%7Bphone%7Cformat%7D&address=%7BstreetAddress%7D&city=%7Bcity%7D&state=%7BusState%7Cabbr%7D&zip=%7Bzip%7D&pretty=true';
const table = document.querySelector('.table');
const tbody = table.querySelector('.table-body');
const buttons = table.querySelectorAll('.button');

// вводим глобальные переменные и счетчики
const paginationLimit = 50; // ограничение для пагинации
let currentPage = 1; // счетчик текущей страницы
let totalPages; // пустая переменная для будущего определения общего количества страниц
const pages = document.querySelector('.pages');
let info; // переменная для записи данных из api-запроса

const buttonPrev = document.querySelector('.button-prev');
const buttonNext = document.querySelector('.button-next');

// сам api-запрос
function getData() {
	return fetch(URL, {
		method: 'GET'
	})
		.then(data => {
			return data.json();
		})
		.catch(err => {
			console.log(err);
		})
}
// слушатель загрузки страницы
window.addEventListener('DOMContentLoaded', () => {
	getData().then(data => {
		// записываем полученную data
		info = data;
		// с помощью спрэд-оператора копируем и преробразовываем коллекцию Node в массив
		[...buttons].map(button => {
			// добавляем кнопкам в шапке таблицы слушатели
			button.addEventListener('click', (e) => {
				// сортируем в зависимости от текущего значения атрибута в кнопке
				if (e.target.getAttribute('data-direction') === 'descending') {
					sortData(info, e.target.id, 'descending');
					// меняем атрибут на противоположный
					e.target.setAttribute('data-direction', 'ascending');
				} else {
					sortData(info, e.target.id, 'ascending');
					e.target.setAttribute('data-direction', 'descending');
				}
			})
		});
		// считаем общее число страниц исходя из ограничения и размера данных
		totalPages = Math.ceil(data.length / paginationLimit);
		// вызываем функцию создания кнопок с номерами страниц
		createPaginationNumbers()
		// вызываем обработчик пагинации
		handlePagination();

		// кнопкам Previous и Next добавляем слушатели клика
		buttonPrev.addEventListener('click', () => {
			if (currentPage > 1) {
				// двигаем счетчик и вызываем обработчик пагинации
				currentPage--;
				handlePagination();
			}
		});

		buttonNext.addEventListener('click', () => {
			if (currentPage < totalPages) {
				currentPage++;
				handlePagination();
			}
		});
	})
})
// функция создания строки
function createRow(data) {
	// создаем ряд
	const row = document.createElement('tr');
	// достаем ключи
	const dataKeys = Object.keys(data);
	// для каждого ключа-столбца создаем ячейку таблицы
	dataKeys.map(key => {
		const cell = document.createElement('td');
		cell.setAttribute('data', key);
		cell.textContent = data[key];
		row.appendChild(cell);
	})
	// всталяем ряд в тело таблицы
	tbody.appendChild(row);
}
// функция заполнения таблицы
function fillTable(data) {
	data.map(row => {
		createRow(row);
	})
}
// функция сортировки
function sortData(data, id, direction = 'ascending') {
	// опустошаем тело таблицы
	tbody.innerHTML = '';
	// сама логика сортировки
	function sort() {
		// в зависимости от направления в кнопке
		if (direction === 'ascending') {
			// возвращаем отсортированные данные
			return [...data].sort(function (a, b) {
				// сравниваем элементы с id соотвествующим id нажатой кнопки
				if (a[id] < b[id]) {
					return -1;
				}
				if (a[id] > b[id]) {
					return 1;
				}
				return 0;
			})
		} else {
			return [...data].sort(function (a, b) {
				if (b[id] < a[id]) {
					return -1;
				}
				if (b[id] > a[id]) {
					return 1;
				}
				return 0;
			})
		}
	}
	// получаем и записываем отсортированные данные
	const sortedData = sort();
	info = sortedData;
	handlePagination();
}
// функция создания кнопок с номерами страниц
function createPaginationNumbers() {
	for (let i = 1; i <= totalPages; i++) {
		const pageNumber = document.createElement('button');
		pageNumber.classList.add('page-number');
		pageNumber.textContent = i;
		pageNumber.setAttribute('number', i);
		pages.appendChild(pageNumber);

		// обработка нажатия на кнопку
		pageNumber.addEventListener('click', (e) => {
			currentPage = e.target.getAttribute('number');
			handlePagination();
		})
	}
}
// обработчик пагинации
function handlePagination() {
	// определяем исходя из текущей страницы начальный и последний индексы нужной части всего массива данных
	const firstItem = (currentPage - 1) * paginationLimit;
	const lastItem = firstItem + paginationLimit;
	// вырезаем нужную часть и отображаем на странице
	const paginatedData = info.slice(firstItem, lastItem);
	tbody.innerHTML = '';
	fillTable(paginatedData);
}

