// импортируем библиотеку
import moment from 'moment';
// создаем объект с фукнциями
const time = {
	// функция получения дня недели
	dayOfWeek() {
		return moment().format('dddd');
	},
	// функция получения текущей даты
	currentDate() {
		return moment().format('MMM Do YY');
	}
}

// экспортируем набор функций
export default time;