// Generics function

function getFirstElement<T>(array: T[]): T {
  return array[0];
}

let numbers: Array<number> = [1, 2, 3];

getFirstElement(numbers); //1

const map = new Map<string, number>();
map.set("One", 1);
map.set("Two", 2);

//Generic Type

type ApiResponse<T extends object = { status: number }> = {
  data: T;
  isError: boolean;
};
