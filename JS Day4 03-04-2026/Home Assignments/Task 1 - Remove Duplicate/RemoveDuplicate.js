//For string
let str = "this is is a class test test";

let result = [...new Set(str.split(" "))].join(" ");

console.log(result);

//For array
let arr = [10, 20, 20, 30, 40, 40];

let arr1 = [...new Set(arr)];

console.log(arr1);