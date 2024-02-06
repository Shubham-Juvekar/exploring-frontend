// Parameter type annotation
function greeting(name: string) {
  console.log("Hello, " + name.toUpperCase() + "!!");
}

// Return Type Annotations
function getFavoriteNumber(): number {
  return 26;
}

//union types
let myName: string | null | undefined = "Batman";

const data: (string | number)[] = [1, "2"];

const formatFunction = (value: number | boolean | string) => {
  if (typeof value === "number") {
    //type narrowing
    return `$ ${value}.00`;
  } else if (typeof value === "boolean") {
    //type narrowing
    return value === true ? "YES" : "NO";
  } else if (typeof value === "string") {
    return value.toLowerCase();
  }
  return;
};

// Intersection types
type User = {
  name: string;
  age: number;
};

type MyLocation = {
  city: string;
  country: string;
};

const myUser: User = { name: "Shubham", age: 27 };
const myLoc: MyLocation = { city: "Badlpaur", country: "India" };

function createUserProfile(user: User, myLoc: MyLocation): User & MyLocation {
  return { ...user, ...myLoc };
}

const combineuserLocation: User & MyLocation = createUserProfile(myUser, myLoc);

// keyof operator
type UserKeys = keyof User;

const nameKey: UserKeys = "name";

// Type inference: TS automatically determine the data type of variable
let projectName = "Age of Ultron";

// Type Compactibility

interface Point {
  x: number;
  y: number;
}

let p1: Point = { x: 10, y: 20 };
let p2: { x: number; y: number } = p1;

console.log(p2.x);
