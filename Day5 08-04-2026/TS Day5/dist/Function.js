"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add1(a, b) {
    return a + b;
}
//arrow
let add = (a, b) => {
    return a + b;
};
// console.log(add(10,50));
function calculate(a, b, callback) {
    return callback(a, b);
}
console.log(calculate(10, 50, add));
