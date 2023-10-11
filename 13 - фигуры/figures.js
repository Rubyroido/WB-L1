// объяявляем родительский класс
class Shape {
	// я не придумал общие методы для дочерних классов, поэтому записал пустые
	calculatePerimeter() {
	}

	calculateArea() {
	}
}

// наследуем родительский класс 
class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}

	// переопределяем родительские методы
	calculatePerimeter() {
		const perimeter = (this.width + this.height) * 2;
		return perimeter;
	}
	calculateArea() {
		const area = (this.width * this.height);
		return area;
	}
}
// также с остальными подклассами
class Triangle extends Shape {
	constructor(sideA, sideB, sideC) {
		super();
		this.sideA = sideA;
		this.sideB = sideB;
		this.sideC = sideC;
	}

	calculatePerimeter() {
		const perimeter = this.sideA + this.sideB + this.sideC;
		return perimeter;
	}
	calculateArea() {
		// считаем по формуле Герона
		const semiPerimeter = (this.sideA + this.sideB + this.sideC)/2;
		const area = Math.sqrt(semiPerimeter*(semiPerimeter-this.sideA)*(semiPerimeter-this.sideB)*(semiPerimeter-this.sideC));
		return area;
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}

	calculatePerimeter() {
		const perimeter = 2 * Math.PI * this.radius;
		return perimeter;
	}

	calculateArea() {
		// возводим в квадрат, можно также было использовать метод Math.pow(..., 2)
		const area = Math.PI * (this.radius ** 2);
		return area;
	}
}
