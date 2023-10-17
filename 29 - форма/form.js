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