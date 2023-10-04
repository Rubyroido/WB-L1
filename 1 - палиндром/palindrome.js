function checkPalindrome(string) {
	// преобразовываем оригинальную строку в пригодный для сравнения вид:
	// избавляемся от верхнего регистра, и убираем пробелы и отступы
	const originalString = string.toLowerCase().replace(/\s/g, '');

	// теперь подготовленную строку переворачиваем с помощью метода массива - reverse()
	// поэтому originalString с помощью split преобразовываем в массив, а затем объединяем массив обратно в строку
	const reverseString = originalString.split("").reverse().join("");

	// в итоге возвращаем сравнение полученного
	return (originalString === reverseString);
}

console.log(checkPalindrome('аргентина манит негра'))