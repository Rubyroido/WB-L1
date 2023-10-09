// кусок json-а вырвал из примера MDN
const json = [
	{
		"name": "Molecule Man",
		"age": 29,
		"secretIdentity": "Dan Jukes",
		"powers": [
			"Radiation resistance",
			"Turning tiny",
			"Radiation blast"]
	},
	{
		"name": "Madame Uppercut",
		"age": 39,
		"secretIdentity": "Jane Wilson",
		"powers": [
			"Million tonne punch",
			"Damage resistance",
			"Superhuman reflexes"
		]
	},
	{
		"name": "Eternal Flame",
		"age": 1000000,
		"secretIdentity": "Unknown",
		"powers": [
			"Immortality",
			"Heat Immunity",
			"Inferno",
			"Teleportation",
			"Interdimensional travel"
		]
	}
];

// преобразовываю в строку для задачи
const stringFromJson = JSON.stringify(json);

// односвязный список - это список узлов, в котором каждый элемент, кроме последнего, хранит информацию о следующем
// по сути это последовательно вложенные объекты формата {data, next},
// где data - это информация объкта, а next - это следующий объект {data, next}
function jsonToLinkedList(json) {
	// Преобразуем JSON в объект
	const obj = JSON.parse(json);

	// Создаем первый узел связного списка
	const mainNode = {
		data: obj[0],
		next: null
	};

	// Проходим по остальным объектам и создаем узлы связного списка
	// создаем каунтер, в который для первой итерации цикла запишем наш главный узел
	let currentNode = mainNode;
	// циклом пройдем по всем элементам JSON-списка, кроме первого, который уже записан в mainNode
	for (let i = 1; i < obj.length; i++) {
		// создаем новый узел
		const newNode = {
			// записываем данные объекта текущей итерации
			data: obj[i],
			// создаем пустое поле объекта, в которое на следующей итерации запишем новый объект 
			// (если итерация последняя, то поле останется null)
			next: null
		};
		// записываем в каунтер созданный узел (на первой итерации, в mainNode.next = newNode)
		currentNode.next = newNode;
		// обновляем каунтер
		currentNode = newNode;
	}

	// возвращаем список
	return mainNode;
}

console.log(jsonToLinkedList(stringFromJson));
