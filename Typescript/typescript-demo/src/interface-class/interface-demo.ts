/**
 * Interface vs Type
 */
type Stud = {
  name: string;
  age: number;
};

type StudAddr = {
  city: string;
  state: string;
};

// Hybrid Types
type StudBioData = Stud | StudAddr;

const studData: StudBioData = {
  age: 27,
  name: "Shubham",
};

interface Emp {
  name: string;
  age: number;
  getFullName(): string;
}

interface Emp {
  city: string;
  state?: string;
}

// Extending interface
interface EmpBioData extends Emp, Emp {}

const empData: EmpBioData = {
  age: 27,
  name: "Shubham",
  city: "Badlapur",
  state: "Maharashtra",
  getFullName: () => {
    return `${name}`;
  },
};
