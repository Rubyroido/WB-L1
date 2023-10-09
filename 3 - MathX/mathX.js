// создаем объект MathX, который будет содержать необходимые методы
const MathX = {
	// обозначаем стартовый массив ряда Фибоначчи
	fib: [0, 1],

	// метод вычисления n-го числа из ряда Фибоначчи
	getNthOfFibonacci(n) {
		// чтобы не писать везде this.fib, запишем в переменную
		let fibonacci = this.fib;
		// если n < 2, то возвращаем 0 или 1
		if (n < fibonacci.length) {
			return fibonacci[n];
		}

		// цикл от 2 до n
		for (let i = fibonacci.length; i <= n; i++) {
			// расчитываем последующие значения ряда Фибоначчи
			fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
		}

		// возвращаяем искомое
		return fibonacci[n];
	},

	// метод расчета всех чисел ряда Фибоначчи до n-го 
	getAllToNthOfFibonacci(n) {
		// объявляем пустой массив
		let result = [];

		// записываем все числа Фибоначчи до n-ой с помощью цикла и предыдущего метода
		for (let i = 0; i < n; i++) {
			result.push(this.getNthOfFibonacci(i))
		}

		// возвращаем искомое
		return result;
	},

	// метод для определения простого числа
	isPrime(num) {
		// создаем каунтер-делитель, т.к. простое число должно делиться на 1, приравниваем его 2
		let divisor = 2;

		// ограничиваем цикл до Num-1
		while (num > divisor) {
			// если у num есть какие-либо делители, возвращаем false и останавливаем цикл
			if (num % divisor === 0) {
				return false;
			} else {
				// иначе проверяем следующий
				divisor++;
			}
		}
		// если делителей нет, то возвращаем true
		return true;
	},

	// метод расчета n-го числа из ряда простых
	getNthOfPrimes(n) {
		// создаем пустой массив, в котоырй будем записывать простые числа
		let Primes = [];
		// ряд простых чисел начинается с 2, поэтому создаем каунтер для проверки и приравниваем 2-ум
		let candidate = 2;
		// циклом записываем в массив простые числа, пока длина массива не превышает n
		while (Primes.length <= n) {
			// с помощью метода выше, проверяем является ли число простым
			if (this.isPrime(candidate)) {
				// записываем в массив, если да
				Primes.push(candidate);
			}
			// проверяем следующее
			candidate++;
		}
		// возвращаем искомое
		return Primes[n - 1];
	},

	// метод расчета всех простых чисел до n-го
	getAllToNthOfPrimes(n) {
		// по аналогии с getAllToNthOfFibonacci
		let result = [];
		for (let i = 1; i < n; i++) {
			result.push(this.getNthOfPrimes(i))
		}
		return result;
	}
}
