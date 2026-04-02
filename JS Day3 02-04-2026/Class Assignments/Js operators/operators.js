// Values
let a = 10;
let b = 5;

// 1. Arithmetic Operators
console.log("Arithmetic:");
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
console.log(a ** b);

// 2. Assignment Operators
let x = 10;
console.log("\nAssignment:");
x += 5;
x -= 2;
x *= 2;
x /= 2;
x %= 3;
x **= 2;
console.log(x);

// 3. Comparison Operators
console.log("\nComparison:");
console.log(10 == "10");
console.log(10 === "10");
console.log(10 != 5);
console.log(10 !== "10");
console.log(10 > 5);
console.log(10 < 5);
console.log(10 >= 10);
console.log(5 <= 10);

// 4. Logical Operators
console.log("\nLogical:");
console.log(true && false);
console.log(true || false);
console.log(!true);

// 5. Bitwise Operators
console.log("\nBitwise:");
console.log(5 & 1);  
console.log(5 | 1);  
console.log(5 ^ 1); 
console.log(~5);    
console.log(5 << 1);
console.log(5 >> 1);

// 6. Increment / Decrement
let i = 5;
console.log("\nIncrement/Decrement:");
console.log(i++);
console.log(++i);
console.log(i--);
console.log(--i);

// 7. Ternary Operator
let age = 20;
console.log("\nTernary:");
console.log(age >= 18 ? "Adult" : "Minor");

// 8. Type Operators
console.log("\nType:");
console.log(typeof a);
console.log(a instanceof Number);
