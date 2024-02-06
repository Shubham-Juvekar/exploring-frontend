// Class name convention is Upper camel case (Pascal case)
class Person {
  // Shorthand property (Declaring variable in constructor parameter) (No need of variable assignment)
  constructor(
    public name: string,
    protected _age: number,
    protected hobbies: string[]
  ) {}

  personObject(): this {
    return this;
  }

  //getters and setters
  public set age(age: number) {
    this._age = age;
  }
  public get age(): number {
    return this._age;
  }

  introduce(): string {
    return `Hi, My name is ${this.name} and age is ${
      this._age
    }. I love ${this.hobbies.join(",")}`;
  }
}

class Warrior extends Person {
  constructor(
    name: string,
    _age: number,
    hobbies: string[],
    public weapon: string
  ) {
    super(name, _age, hobbies);
  }

  introduce(): string {
    return `Hi, My name is ${this.name} and age is ${
      this._age
    }. I love ${this.hobbies.join(",")} and my weapon is ${this.weapon}`;
  }
}

const person1 = new Person("Shubham", 27, ["Coding", "Listening music"]);
const warrior1 = new Warrior(
  "Tony",
  56,
  ["Builing Suits", "Leading Avengers"],
  "Iron Legion"
);

console.log(warrior1.age);
