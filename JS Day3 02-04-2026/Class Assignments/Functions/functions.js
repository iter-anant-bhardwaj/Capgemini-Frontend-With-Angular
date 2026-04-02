// 1. Function Declaration
function greet() {
  console.log("Hello");
}
greet();

// 2. Function with Parameters & Return
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));

// 3. Function Expression
const sayHi = function() {
  console.log("Hi");
};
sayHi();

// 4. Arrow Function
const multiply = (a, b) => a * b;
console.log(multiply(4, 5));

// 5. Default Parameters
function welcome(name = "Guest") {
  console.log("Welcome " + name);
}
welcome();
welcome("anant");

// 6. Anonymous Function
setTimeout(function() {
    console.log("Hello from Anonymous Function");
}, 1000);

// 7. Callback Function
function processUser(name, callback) {
    console.log("Processing " + name);
    callback();
}

function done() {
    console.log("Done!");
}
processUser("Anant", done);

// 6. IIFE (Immediately Invoked Function Expression)
(function() {
    console.log("Hello from IIFE");
})();

// 7. Higher-Order Function
function operate(a, b, operation) {
    return operation(a, b);
}

//8. Closure function
function outer() {
    let a = 10;

    function inner() {
        console.log(a); // remembers 'a'
    }

    return inner;
}
debugger
const fn = outer();
fn(); // 10