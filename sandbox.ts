// assigning variables
let character: string = null;
// character = 5; // invalid
character = 'hello';

// assigning args
const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(7.5));

// arrays

let names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3) // invalid

let numbers = [10, 20, 30, 5];
// numbers.push('ariane'); // invalid

let mixed = ['ariane', 5, 'stu'];
mixed.push(4); // valid

// explicit assignment, array
let notMixed: number[] = [];

// union types - req brackets for array, not for variables
let arr: (string | number)[] = [];
arr.push(5);
arr.push('mixed array using union type explicit declaration');

console.log(arr)

// functions

const add = (a: number, b: number) => {
  return a + b;
}

console.log(add(1, 2))

let greet: Function;
greet = (name?: string) => {
  name ? console.log(`hello, ${name}`) : console.log('hello');
}

greet('Ariane');
greet()

// return type can be implicit, or explicitly declared. Useful in a larger function where you might want to tell other developers what type they should expect to be returned

const minus = (a: number, b: number): number => {
  return a - b;
}

let result: number = minus(4, 5);

console.log(result);