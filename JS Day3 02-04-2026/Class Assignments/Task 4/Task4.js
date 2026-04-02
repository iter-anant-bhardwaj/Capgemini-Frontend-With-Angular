// Higher Order Function (takes function as argument)
function calculatorHigherOrder(operation) {
  return function(a, b) {
    return operation(a, b);
  };
}

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

const addFn = calculatorHigherOrder(add);
const multiplyFn = calculatorHigherOrder(multiply);

console.log(addFn(10, 5));       // 15
console.log(multiplyFn(10, 5));  // 50