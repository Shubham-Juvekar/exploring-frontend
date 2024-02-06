abstract class Shape {
  constructor(protected color: string) {}
  abstract calculateArea(): number;
  abstract displayArea: () => void;
  getShapeColor() {
    console.log(`Color of Shape is ${this.color}`);
  }
}

class Circle extends Shape {
  constructor(protected radius: number, protected color: string) {
    super(color);
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  displayArea = () => {
    console.log(this.calculateArea());
  };
}

const circle = new Circle(5, "black");

circle.displayArea();
