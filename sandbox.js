// assigning variables
var character = null;
// character = 5; // invalid
character = 'hello';
// assigning args
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(7.5));
// arrays
var names = ['luigi', 'mario', 'yoshi'];
names.push('toad');
// names.push(3) // invalid
var numbers = [10, 20, 30, 5];
// numbers.push('ariane'); // invalid
var mixed = ['ariane', 5, 'stu'];
mixed.push(4); // valid
// explicit assignment, array
var notMixed = [];
// union types - req brackets for array, not for variables
var arr = [];
arr.push(5);
arr.push('mixed array using union type explicit declaration');
console.log(arr);
// functions
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
var greet;
greet = function (name) {
    name ? console.log("hello, " + name) : console.log('hello');
};
greet('Ariane');
greet();
// return type can be implicit, or explicitly declared. Useful in a larger function where you might want to tell other developers what type they should expect to be returned
var minus = function (a, b) {
    return a - b;
};
var result = minus(4, 5);
console.log(result);
