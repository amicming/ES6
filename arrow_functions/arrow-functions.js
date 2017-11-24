// Arrow function, has three main benefits,
// 1. They are much concise, than regular function 
// 2. They have implicit returns, which allows us to write these nifty one-liners.
// While explicit return means you write return name;
// 3. It doesn't rebind the value of this when you use a arrow function inside of 
// another function when we do anykind of click handler
const names = ['amit', 'vasistha', 'darshan'];
// Now add `pandya` after each elemnt of `name` array
const fullNames = names.map(function(name) {
  return `${name} pandya`;
});
console.log(fullNames);

// Now convert above code with Arrow Function 

const fullNameWithArrow = names.map((name) => {
  return `${name} pandya`
});

console.log(fullNameWithArrow);

// Now, In above code, we have only one parameter called name, so no need to do with 
// parenthesis means (name), it should work fine with name =>

const fullNameWithArrowNoParenthesis = names.map(name => {
  return `${name} pandya`
});

console.log(fullNameWithArrowNoParenthesis);

// In implicit return, no need to write `return` keyword
// also we need to remove curly brackets. A very first curly bracket after =>

const fullNameImplicitReturn = names.map(name => `${name} pandya`);
console.log(fullNameImplicitReturn);

// If no argument(s), we need to pass empty parenthesis, example of ()

const emptyFullNames = names.map(() => 'cool pandya');
console.log(emptyFullNames);

// One important point is Arrow function are always anonymous functions. 
// Now compare with name function, name function is 
// function sayMyName(name) {
//   console.log(`Hello ${name}`);
// }
// if I make arrow function, I can not make function name, check previous code, none // of them have name, expect `fullNames` variable function
// BUt,
// you can placed with variable, example of 
const sayMyName = (name) => {console.log(`Hello ${name}!`)}; // more specific example of anonymous functions
sayMyName('amit');