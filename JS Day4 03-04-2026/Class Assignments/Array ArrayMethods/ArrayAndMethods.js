// Create Array
let arr = [10, 20, 30, 40, 50];

console.log("Array:", arr);

//  Access Elements
console.log("First Element:", arr[0]);
console.log("Length:", arr.length);

//  Add Elements
arr.push(60);        // end
arr.unshift(5);      // start

console.log("After Adding:", arr);

// Remove Elements
arr.pop();           // remove last
arr.shift();         // remove first

console.log("After Removing:", arr);

// Traverse Array

// for loop
console.log("Using for loop:");
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// for...of (values)
console.log("Using for...of:");
for (let value of arr) {
    console.log(value);
}

// for...in (indexes)
console.log("Using for...in:");
for (let index in arr) {
    console.log(index, arr[index]);
}

// Basic Methods
let sliced = arr.slice(1, 3);
console.log("Slice:", sliced);

arr.splice(1, 1, 99); // replace
console.log("Splice:", arr);

// Map, Filter, Reduce
let doubled = arr.map(x => x * 2);
console.log("Map:", doubled);

let even = arr.filter(x => { return x % 2 === 0});
console.log("Filter:", even);

let sum = arr.reduce((acc, val) => acc + val, 0);
console.log("Reduce (sum):", sum);


let arr1 = [1,2,4,5,6];
let [a,b,,c] = arr1;
console.log(a,b,c);


let copyArr = [...arr];
console.log(copyArr);

