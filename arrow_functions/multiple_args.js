// n1, n2 is the arguments to the function 
// On the left-hand side of Arrow [=>] we define our arguments And then on the 
// right-hand side of the Arrow is the body of the function

var addn = (n1,n2) => n1+n2;

console.log(addn(3,4));

// traditional javascript way
function add_two_number(n1,n2) {
  return n1+n2;
}

console.log(add_two_number(3,4));