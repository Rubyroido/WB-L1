// асинхронная фукнкция, ожидающая исполнение вложенной асинхронной функции
// написана с использованием async await
async function someFunction() {
	// ожидаем исполнение другой асинхронной функции
	await anotherFunction();

	// после ее выполнения запускается тело основной функции
	setTimeout(() => {
		console.log('готово');
	}, 1000)
}

async function anotherFunction() {
	return new Promise((resolve) => {
		setTimeout(() => {
			resolve('почти готово');
		}, 1000);
	}
	).then((console.log))
}

someFunction();