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
