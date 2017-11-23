for(let i = 0; i < 10; i++) {
  console.log(i);
  setTimeout(function() {
    console.log('The number is ' + i);  // After second this will display like `The number is 10`
  }, 1000);
}
/*
So output like 
0
1
2
3
4
5
6
7
8
9
The number is 10
*/
// Now change the `var i` to `let i`. 
// Output will be, because let is block scope
/* 
  0
  1
  2
  3
  4
  5
  6
  7
  8
  9
  The number is 0
  The number is 1
  The number is 2
  The number is 3
  The number is 4
  The number is 5
  The number is 6
  The number is 7
  The number is 8
  The number is 9
*/