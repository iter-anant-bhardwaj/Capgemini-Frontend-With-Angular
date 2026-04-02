function calculator(operator) {
    
    // returning another function
    return function(a, b) {
        if (operator === "+") return a + b;
        if (operator === "-") return a - b;
        if (operator === "*") return a * b;
        if (operator === "/") return a / b;
        return "Invalid Operator";
    };
}

// Creating functions dynamically
const add = calculator("+");
const subtract = calculator("-");
const multiply = calculator("*");
const divide = calculator("/");


console.log(add(10, 5));       
console.log(subtract(10, 5));  
console.log(multiply(10, 5));  
console.log(divide(10, 5));  
