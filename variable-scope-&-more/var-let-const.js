var width = 100;
console.log(width);
width = 101; // Update the value
console.log(width);
// NOTE: you can declare same variable again & again
// that one fix in ES
var width = 200; 
console.log(width);

//Scope
//1. Inside function scope 
function setWidth() {
var dataWidth = 1001;
  console.log(dataWidth);
}
setWidth();
// try to access function scope variable outside function 
//console.log(dataWidth);
// You will get error on above statement like
// Uncaught ReferenceError: dataWidth is not defined
// Because dataWidth is local variable of setWidth function
// If you declare var dataWidth outside of function, it will work

var amount = 100;
if (amount > 20) {
  var taxAmount = amount + (amount * 0.10);
  console.log(`You need to pay ${taxAmount} for stuffs.`);
} 
console.log(taxAmount); //Opss!!!
// var is a function scope, not block scope, that way you can
// access taxAmount outside if block. 
// that's the reason let come to the picture. 

var cost = 100;
if (cost > 20) {
  let totalCost = cost + (cost * 0.10);
  console.log(`You need to pay ${totalCost} for stuffs.`);
} 
// console.log(totalCost); // This will not work.
// If I uncomment above line, I will get error like 
// Uncaught ReferenceError: totalCost is not defined
// Because let is a block scope, not function scope.
var expenses = 100;
if (expenses > 20) {
  const totalExpenses = expenses + (expenses * 0.10);
  console.log(`You need to pay ${totalExpenses} for stuffs.`);
}
// console.log(totalExpenses); // This will not work.
// If I uncomment above line, I will get error like 
// Uncaught ReferenceError: totalExpenses is not defined
// Because const is a block scope, not function scope.
