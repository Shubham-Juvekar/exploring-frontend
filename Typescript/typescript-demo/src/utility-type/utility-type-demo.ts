/**
 * Utility type: Partial, Required, Readonly, Record, Pick, Omit, Exclude, Extract,
 *  NonNullable, Parameters, ReturnType, InstanceType, Awaited
 */

//Partail
interface Assignment {
  studentId: number;
  title: string;
  grade: number;
  verified?: boolean;
}

const updateAssignment = (
  assignment: Assignment,
  updateRecord: Partial<Assignment>
): Assignment => {
  return { ...assignment, ...updateRecord };
};

const studentAssignment: Assignment = {
  studentId: 1,
  title: "Project Flying Cars",
  grade: 65,
};

console.log(updateAssignment(studentAssignment, { grade: 95 }));

//Required and Readonly

const recordAssignment = (assignment: Required<Assignment>): Assignment => {
  return assignment;
};

recordAssignment({ ...studentAssignment, ...{ verified: true } });

const assignmentVerified: Readonly<Assignment> = {
  ...studentAssignment,
  ...{ verified: true },
};

//Readonly variable cannot be changed.
// assignmentVerified.grade = 89;

//Record
const hexColorMap: Record<string, string> = {
  red: "FF0000",
  green: "00FF00",
  blue: "0000FF",
};

type Avengers = "Ironman" | "Doctor_Strange";

interface Weapon {
  power: boolean;
  powerType: "Magical" | "Intelligence";
}

const avengerAssemble: Record<Avengers, Weapon> = {
  Ironman: { power: true, powerType: "Intelligence" },
  Doctor_Strange: { power: true, powerType: "Magical" },
};

// Pick and Omit
type assignmentTitle = Pick<Assignment, "studentId" | "title">;

type assignmentGrade = Omit<Assignment, "title" | "verified">;

//Exclude
type T0 = Exclude<"a" | "b" | "c", "a" | "b">;

type Shapes =
  | { kind: "circle"; radius: number }
  | { kind: "square"; x: number }
  | { kind: "triangle"; x: number; y: number };

type NonCircle = Exclude<Shape, { kind: "circle" }>;

//Extract
type T1 = Extract<"a" | "b" | "c", "a" | "b">;

//NonNullable
type NonNullableType = NonNullable<string[] | number | undefined | null>;

//Parameters
function f1(a: number, b: string): void {
  console.log(a, b);
}

type fType = Parameters<typeof f1>;

type T00 = Parameters<() => string>;

type T10 = Parameters<(s: string) => void>;

class C {
  constructor(a: number, b: string) {}
}
type T3 = ConstructorParameters<typeof C>;

//ReturnType
declare function f1(): { a: number; b: string };
type T01 = ReturnType<() => string>;

type T11 = ReturnType<(s: string) => void>;

type T4 = ReturnType<typeof f1>;

//InstanceType
type T20 = InstanceType<typeof C>;

type T21 = C;

//Awaited
type A = Awaited<Promise<string>>;

type B = Awaited<boolean | Promise<Promise<number>>>;
