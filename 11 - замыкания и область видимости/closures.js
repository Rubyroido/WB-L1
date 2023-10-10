
function closures() {
	// объявляем счетчик в локальной области 
	let counter = 0;
	// функция увеличения счетчика
	function increase() {
		counter++;
		console.log(counter);
	}
	// функция уменьшения счетчика
	function decrease() {
		counter--;
		console.log(counter);
	}
	// возвращаем обе внутренние функции 
	return {
		increase,
		decrease
	}
}
// вызываем функцию и записываем в переменную 
const counter = closures();
// функция closures отработала, но мы можем продолжить менять счетчик внутри нее
counter.increase();