/*TypeScript also has a special type, any, that you can use whenever you don’t want a particular
 value to cause typechecking errors.*/

// let obj: any = { x: 0 };
// None of the following lines of code will throw compiler errors.
// Using `any` disables all further type checking, and it is assumed
// you know the environment better than TypeScript.
// obj.foo();
// obj();
// obj.bar = 100;
// obj = "hello";

//(noImplicitAny) When you don’t specify a type, and TypeScript can’t infer it from context, the compiler will typically default to any.
const alphabets = "alphabets";

//js object
const obj: { x: number; y: number } = { x: 8, y: 5 };

/**
 * The special type object refers to any value that isn’t a primitive. this is different from the empty object type { }, and also different from the global type Object.
 *  It’s very likely you will never use Object.
 */

// unknown
function f1(a: unknown) {
  //('a' is of type 'unknown')
  // a.b();
  // if (typeof a === 'string') {
  //     a.toLowerCase();
  // }
}

// never
function fail(msg: string): never {
  throw new Error(msg);
}

function fn(x: string | number) {
  if (typeof x === "string") {
    // do something
  } else if (typeof x === "number") {
    // do something else
  } else {
    x; // has type 'never'!
  }
}

/**
 *  Other data types: any, object, unknown, never
 */
