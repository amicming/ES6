const key = 'abc123';
let points = 50;
let winner = false;

points = 60;
console.log(points); // You can update let variable value

// below code generate an error like
// Uncaught TypeError: Assignment to constant variable.
// You can not update const variable value
// key = 'abc1234';
// console.log(key);


if (points > 20) {
  console.log("it ran")
  let winner = true;
}
console.log(winner);
// If block executed even those you will get value of `winner` is `false`
// because let is a block scope variable.

const person = {
  name: 'Amit',
  age: 21
}
// You will get an error on below statement
// console.log(person = {name: 'Vasistha'});
// You can change attribute value but not entire person object
// Example 
console.log(person);
person.age = 22;
console.log(person); // Here you can see, the age value will be change.

// If you want not even change the attribuate value, you can use `freeze()` method
// but that not part of the ES6. You can use like `Object.freeze()`
// Example 
const amit = Object.freeze(person);
console.log(amit);
amit.age = 30;
console.log(amit.age); // You can see the value of the age is `22`, not `30`
console.log(amit); // Here name: 'Amit', age: 22
// Means freeze does not allowed the change the value.