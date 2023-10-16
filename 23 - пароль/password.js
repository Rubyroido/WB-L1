// регулярное выражение с набором необходимых символов
const regex = /(?=.[!@#$%^&-_])/;
const minLength = 5;

function analysePassword(password) {
	if (password.length < minLength) {
		return 'Ваш пароль слишком короткий'
	}
	// поиск в строке цифр от 0 до 9
	// метод возвращает индекс первого элемента подходящего под проверку
	// если не находит ничего возвращает -1, поэтому проверка - <0
	if (password.search(/[0-9]/) < 0) {
		return 'Ваш пароль должен содержать хотя бы одну цифру'
	}
	// сверяем с regex 
	if (!regex.test(password)) {
		return 'Ваш пароль должен содержать как минимум один специальный символ'
	}
	if (password.search(/[A-Z]/) < 0) {
		return 'Ваш пароль должен содержать как минимум одну букву верхнего регистра'
	}
	return 'У вас надежный пароль'
}

const check = analysePassword('aaaaaaAa1-!');

console.log(check)