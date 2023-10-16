const token = '9e649a029e649a029e649a02ed9d716a4299e649e649a02fb4cf09883f4e87e381ec2e8'; // сервисный токен приложения в вк
const group = '-20629724'; // id паблика
const apiV = 5.154; // версия api

const postsContainer = document.querySelector('.container');
const postTemplate = document.querySelector('.template');
const MAX_CACHE_SIZE = 100; // ограничение для хранения в 50 постов
// подлключения VK open api
VK.init({
	apiId: 51769408
});
// функция получения постов
function getPosts(offset) {
	// метод wall.get вызванный с помощью open api
	VK.Api.call('wall.get', {
		access_token: token,
		owner_id: group,
		count: 5,
		offset: offset,
		v: apiV
	}, (res) => {
		res.response.items.forEach(post => {
			// каждый пост добавляем в карточку, которую рендерим на страницу, и сохраняем в localStorage
			createPost(post);
			cachePost(post);
			countMemory();
		});
		// получаем текущее значение offset из LocalStorage
		let cachedOffset = parseInt(window.localStorage.getItem('offset'));
		// увеличиваем на размер count-а, чтобы функция не повторяла карточки
		cachedOffset += 5;
		// обновляем localStorage
		window.localStorage.setItem('offset', `${cachedOffset}`);
	})
}
// функция создания карточки поста, с помощью template тега
function createPost(data) {
	const post = postTemplate.content.querySelector('.post').cloneNode(true);

	const imagesContainer = post.querySelector('.images');
	const textContainer = post.querySelector('.text');
	const images = [];

	if (data.attachments.length !== 0) {
		data.attachments.forEach(img => {
			if (img.type === 'photo') {
				const imgUrl = img.photo.sizes[2].url;
				images.push(imgUrl);
			}
		})

		images.forEach(img => {
			const image = document.createElement('img');
			image.src = img;
			imagesContainer.appendChild(image);
		})
	}

	textContainer.textContent = data.text;

	postsContainer.appendChild(post);
}
// функция сохранения поста в localStorage
function cachePost(post) {
	// если страница открыта не в первый раз
	if (localStorage.getItem('posts')) {
		// получаем сохраненные посты
		let cachedPosts = JSON.parse(localStorage.getItem('posts'));
		// если колчество постов больше ограничения
		if (cachedPosts.length >= MAX_CACHE_SIZE) {
			// удаляем первый элемент
			cachedPosts.shift();
		}
		// добавляем новый пост
		cachedPosts.push(post);
		localStorage.setItem('posts', (JSON.stringify(cachedPosts)));
	} else {
		// если страница открыта впервые, то создаем пустой массив, добавляем в него пост, сохраняем массив в LocalStorage
		const posts = [];
		posts.push(post);
		localStorage.setItem('posts', JSON.stringify(posts));
	}
}
// фукнция отрисовки сохраненных постов
function getCachedPosts() {
	const cachedPosts = JSON.parse(window.localStorage.getItem('posts'));
	cachedPosts.forEach(post => {
		createPost(post);
	})
}
// слушатель загрузки страницы
window.addEventListener('DOMContentLoaded', () => {
	// если страница открыта не впервые
	if (localStorage.getItem('posts')) {
		// загружаем сохраненные посты
		getCachedPosts()
	} else {
		// иначе, создаем 0 оффсет, чтобы его потом переписать
		window.localStorage.setItem('offset', '0');
		// вызываем первую загрузку
		getPosts(0)
	}
})
// слушатель скролла
postsContainer.addEventListener('scroll', () => {
	if (postsContainer.scrollTop + postsContainer.clientHeight >= postsContainer.scrollHeight) {
		// получаем текущее значения offset и вызываем с ним функцию получения постов
		const offset = parseInt(window.localStorage.getItem('offset'));
		getPosts(offset);
	}
});

// примерный расчет занимаемой памяти
function countMemory() {
	let i = 0;
	let totalSize = 0;
	while (i < window.localStorage.length) {
		const key = window.localStorage.key(i);
		const value = window.localStorage.getItem(key);
		const dataSize = value.length;
		totalSize += dataSize;
		i++
	}
	console.log(`${(totalSize/1048576).toFixed(2)} мб / 5 мб`)
}
