/**
 * Mapped Types, Conditional Types, Literal Types, Template Literal Types, Recursive Types, Indexed Access Types
 */

//Mapped types
type MappedType<T> = {
  readonly [P in keyof T]?: T[P];
};

type Readonly1<T> = MappedType<T>;

// Internal of Pick utility type
type Pick1<V, K extends keyof V> = {
  [P in K]: V[P];
};

//Conditional types

interface Animal {
  live(): void;
}
interface Dog extends Animal {
  woof(): void;
}
type Example1 = Dog extends Animal ? number : string;

//Literal types
type Age = 42;

// let age: Age = 42; // ok
// let age: Age = 43; // error

//Template literal types
type Name = `Mr. ${string}`;

// let empName: Name = `Mr. Shubham`; //ok
// let empName2: Name = `mr. Shubham`; //error

//Recursive Types
type LinkedList<T> = {
  value: T;
  next: LinkedList<T> | null;
};

let list: LinkedList<number> = {
  value: 1,
  next: { value: 2, next: { value: 3, next: null } },
};

// Indexed Access Types
type Employee = { age: number; name: string; alive: boolean };
type EmpAge = Employee["age"];
