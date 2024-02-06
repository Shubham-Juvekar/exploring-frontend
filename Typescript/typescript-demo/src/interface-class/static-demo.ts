class MathOperation {
  //static variable
  static PI: number = Math.PI;

  //static methods
  public static add(num1: number, num2: number): number {
    return num1 + num2;
  }
  public static subtract(num1: number, num2: number): number {
    return num1 - num2;
  }
}

console.log(MathOperation.PI);
console.log(MathOperation.add(4, 6));
console.log(MathOperation.subtract(4, 6));
