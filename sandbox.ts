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
  // returns void type - complete lack of return value, different than undefined
}

greet('Ariane');
greet()

// return type can be implicit, or explicitly declared. Useful in a larger function where you might want to tell other developers what type they should expect to be returned

const minus = (a: number, b: number): number => {
  return a - b;
}

let result: number = minus(4, 5);

console.log(result);

// type aliases

type stringOrNum = string | number;
type objWithName = {name: string, uid: stringOrNum};

//  function signature: defines the structure of a function, ie: what args it takes, what type of data it returns

// this sig says: function takes no args, and returns void:  () => void

let sup: (a: string, b: string) => void;

// valid
sup = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`)
}

// invalid (name type can't be number)
// sup = (name: number, greeting: string) => {
//   console.log(`${name} says ${greeting}`)
// }

interface isPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: isPerson = {
  name: 'ariane',
  age: 28,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log('I spent', amount);
    return amount;
  }
}

console.log(me)