// n is the argument
// And in this arrow function in particular, there's an implicit return here.
// So the value of n squared is returned back as the result of this function call. 
var sqr = n => n*n;

var sqr_result = sqr(3);

console.log(sqr_result);

// traditional javascript way
function square(n) {
  return n*n;
}
console.log(square(3));