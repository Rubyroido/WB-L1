// находим форму
const form = document.querySelector('.form');
// добавляем ей слушатель сабмита
form.addEventListener('submit', (e) => {
    // отменяем перезагрузку страницы
    e.preventDefault();
    // находим поля формы
    const inputs = Array.from(form.querySelectorAll('.input'));
    // достаем значения полей
    const values = inputs.map(input => {
        return input.value;
    })
    // выводим на экран
    alert(`${values[0]}, ${values[1]}`)
})

// существует также другой способ получения данных из полей формы
// это FormData. Позволяет получить значения всех полей, независимо от их количества
// const formData = new FormData(form);

// for (let [key,value] of formData) {
//     alert(`${key} - ${value}`)
// }
