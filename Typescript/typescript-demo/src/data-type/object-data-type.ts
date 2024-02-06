//Array
const myArray: number[] = [1, 2, 3];
const myArray2: Array<number> = [1, 2, 3];
const names: Array<string> = ["Shubham", "Bruce", "Tony"];

console.log(name);
console.log(age);
console.log(is18Plus);

// shorthand syntax Array<Type> -> Type[]

// ReadonlyArray: The ReadonlyArray is a special type that describes arrays that shouldn’t be changed.
function doStuff(values: ReadonlyArray<string>) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  // values.push("hello!");
}

// shorthand syntax ReadonlyArray<Type> -> readonly Type[]

// Tuple
type StringNumberPair = [string, number];
type Either2dOr3d = [number, number, number?];

function doSomething(pair: [string, number]) {
  pair[0] = `${pair[0]} Juvekar`;
  const a = pair[0];

  const b = pair[1];

  console.log(a, b);
}

const c: StringNumberPair = ["Shubham", 27];

doSomething(c);

// Readonly Tuple
function doSomethingTuple(pair: readonly [string, number]) {
  // pair[0] = "hello!";
}

// Enums
//Numeric enums
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

//String enums
enum DirectionString {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}

//Heterogeneous enums
enum BooleanLikeHeterogeneousEnum {
  No = 0,
  Yes = "YES",
}

//Class
class Car {
  make: string;
  model: string;
  year: number;

  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  drive() {
    console.log(`Driving my ${this.year} ${this.make} ${this.model}`);
  }
}

//Interface

interface Person {
  name: string;
}

function greeted(person: Person) {
  return "Hello " + person.name;
}

/**
 * Object data types: Array,ReadonlyArray, Tuple, ReadonlyTuple, Enums, Class, Interface
 */
