function parseCount(value) {
	if (isNaN(value)) {
		throw new Error("Невалидное значение");
	}
	return Number.parseFloat(value);
}

function validateCount(value) {
	try {
		return parseCount(value);
	} catch (error) {
		return error;
	}
}

class Triangle {
	constructor(a, b, c) {
		if (a + b <= c || a + c <= b || b + c <= a) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
		this._a = a;
		this._b = b;
		this._c = c;
	}

	get perimeter() {
		return (this._a + this._b + this._c);
	}

	get area() {
		const halfPerimeter = this.perimeter / 2;
		const result = Math.sqrt(halfPerimeter * (halfPerimeter - this._a) * (halfPerimeter - this._b) * (halfPerimeter - this._c));
		return +result.toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		return {
			get perimeter() {
				return "Ошибка! Треугольник не существует"
			},
			get area() {
				return "Ошибка! Треугольник не существует"
			}
		}
	}
}