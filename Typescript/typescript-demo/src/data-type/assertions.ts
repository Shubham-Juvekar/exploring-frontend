// Asserstion
type One = string;
type Two = string | number;
type Three = "hello";

// convert to more or less specific with 'as' keyword
let aa: One = "hello";
let bb = aa as Two; // less specific
let cc = aa as Three; // more specific

// using angle-bracket<> syntax (doesn't work in .tsx file)
let dd = <One>"world";
let ee = <string | number>"world";

//10 as string
10 as unknown as string; //(force assertion or double assertion)

// Non-null assertion
let nameForAssertion: string | null = null;

// we use the non-null assertion operator to tell the compiler that name will never be null
let nameLength = nameForAssertion!.length;

// const asserstion
// Type '"hello"'  no going from "hello" to string
let x = "hello" as const;
// Type 'readonly [10, 20]'
let y = [10, 20] as const;
// Type '{ readonly text: "hello" }'
let z = { text: "hello" } as const;

/**
 * Assestion: as keyword, <> syntax
 */
