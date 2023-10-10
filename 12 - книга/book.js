const book = {
	name: 'По ком звонит колокол',
	author: 'Эрнест Хемингуэй',
	year: 1940,
	// метод изменения имени
	changeName(name) {
		// через this обращаемся к свойству текущего объекта и записываем аргумнт функции
		this.name = name;
	},
	changeAuthor(author) {
		this.author = author;
	},
	changeYear(year) {
		this.year = year;
	},
	showBook() {
		console.log(`${this.name}, ${this.author}, ${this.year}`);
	}
}

book.changeName('Книга')
book.showBook();