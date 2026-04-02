// VAR HOISTING
console.log(a); // undefined (hoisted, initialized with undefined)
var a = 10;


// LET HOISTING
// console.log(b); //  ReferenceError (Temporal Dead Zone)
let b = 20;


// CONST HOISTING
// console.log(c); //  ReferenceError (Temporal Dead Zone)
const c = 30;


// FUNCTION TO SHOW ALL TOGETHER
function testHoisting() {

  console.log(x); // undefined
  var x = 100;

  // console.log(y); //  ReferenceError
  let y = 200;

  // console.log(z); //  ReferenceError
  const z = 300;

}

testHoisting();