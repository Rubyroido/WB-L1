// решение основано на https://learn.javascript.ru/js-animation
const block = document.querySelector('.block')

let start = Date.now(); // запомнить время начала

let timer = setInterval(function() {
  // сколько времени прошло с начала анимации?
  let timePassed = Date.now() - start;

  if (timePassed >= 3000) {
    clearInterval(timer); // закончить анимацию через 3 секунды
    return;
  }

  // отрисовать анимацию на момент timePassed, прошедший с начала анимации
  draw(timePassed);

}, 10); // Значение интревала определяет количество кадров анимации

// в то время как timePassed идёт от 0 до 3000
// left изменяет значение от 0px до 1500px
// крутится на 720 градусов в течение 2.5 секунд
function draw(timePassed) {
  block.style.left = timePassed / 2 + 'px';
	block.style.rotate = `720deg`;
	block.style.transition = 'linear rotate 2.5s';
}