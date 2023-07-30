//complete this code
class Rectangle {
	constructor(width, height){
		this._width = width;
		this._height = height;
	}
	get width(){
		return this._width;
	}

	get height(){
		return this._height;
	}

	getArea(){
		return this._width * this._height;
	}
}

class Square extends Rectangle {
	constructor(side){
		super(side, side);
	}
	getPerimeter(){
		return 4 * this.width;
	}
}

const rectangle = new  Rectangle(5, 10);
console.log("Rectangle Area:", rectangle.getArea());
console.log("Rectangle Width:", rectangle.width);
console.log("Rectangle Height:", rectangle.height);

const square = new Square(6);
console.log("Square Area:", rectangle.getArea());
console.log("Square width:", square.width);
console.log("Square height:", square.getPerimeter());
// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
