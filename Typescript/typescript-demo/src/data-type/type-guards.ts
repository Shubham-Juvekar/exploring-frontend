//Type guards are a way to narrow down the type of a variable. This is useful when you want to do something different
//depending on the type of a variable.

/**instanceof */

class Bird {
  fly() {
    console.log("Bird is flying...");
  }
  buildNest() {
    console.log("Bird is building nest...");
  }
}

const pet = new Bird();

if (pet instanceof Bird) {
  pet.fly();
} else {
  console.log("pet is not a bird");
}

/**typeof */
const keyboardName: any = "Red Gear";

typeof keyboardName; // 'string'

/**in */
type Fish = { swim: () => void };
type Plane = { fly: () => void };

function move(animal: Fish | Plane | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }

  return animal.fly();
}

/**Type predicates */

function getPet() {
  const fish: Fish = { swim: () => 1 + 1 };
  return fish;
}

//Example of type predicate
function isFish(pet: Fish | Bird): pet is Fish {
  return (pet as Fish).swim !== undefined;
}

function getFood(pet: Fish | Bird) {
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
}

/**
 * Equality
 */

function equalityExample(x: string | number, y: string | boolean) {
  if (x === y) {
    // ===,  !==, ==, !=, <, >, <=, >=
    // We can now call any 'string' method on 'x' or 'y'.
    x.toUpperCase();
    y.toLowerCase();
  } else {
    console.log(x);
    console.log(y);
  }
}

/**
 * Type guard: instanceof, typeof, in, type predicate, equality
 */
