class Shape {
  constructor() {
    this.area = 0;
    this.perimetr = 0;
    this.type = "Shape";
  }
  getArea() {
    return Math.round(this.area);
  }

  getPerimeter() {
    return Math.round(this.perimeter);
  }
}

class Triangle extends Shape {
  constructor(base, height, side1, side2, side3) {
    super("triangle");
    this.side1 = side1;
    this.side2 = side2;
    this.side3 = side3;
    this.base = base;
    this.height = height;
    this.type = "Triangle";
    this.getArea();
    this.getPerimeter();
  }
  getArea() {
    this.area = (this.base * this.height) / 2;
    super.getArea();
  }

  getPerimeter() {
    this.perimeter = this.side1 + this.side2 + this.side3;
    super.getPerimeter();
  }
}

class Circle extends Shape {
  constructor(radius) {
    super("circle");
    this.radius = radius;
    this.type = "Circle";
    this.getArea();
    this.getPerimeter();
  }

  getArea() {
    this.radius = Math.PI * this.radius ** 2;
    super.getArea();
  }

  getPerimeter() {
    this.perimetr = 2 * Math.PI * this.radius;
    super.getPerimeter();
  }
}

class Rectangle extends Shape {
  constructor(width, height, area, perimeter) {
    super("Rectangle");
    this.area = area;
    this.perimetr = perimeter;
    this.width = width;
    this.height = height;
    this.type = "Rectangle";
    this.getArea();
    this.getPerimeter();
  }
  getArea() {
    this.area = this.width * this.height;
    super.getArea();
  }
  getPerimeter() {
    this.perimetr = 2 * (this.width + this.height);
    super.getPerimeter();
  }
}

const triangle = new Triangle(5, 8, 5, 8, 10);
console.log(triangle);

const circle = new Circle(5);
console.log(circle);

const rectangle = new Rectangle(8, 14);
console.log(rectangle);
