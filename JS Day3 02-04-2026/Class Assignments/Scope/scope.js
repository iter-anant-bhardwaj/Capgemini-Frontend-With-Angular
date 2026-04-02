// Global Scope
let a = 10;

function test() {
  console.log(a);
}

test();
console.log(a);


//Function Scope
function demo() {
  let x = 20;
  console.log(x);
}

demo();
// console.log(x); // Error

// Block Scope (let & const)

if (true) {
  let y = 30;
  const z = 40;
  console.log(y, z);
}

// console.log(y);  
// console.log(z); 


// Special Case: var (No Block Scope)
if (true) {
  var v = 50;
}

console.log(v); 