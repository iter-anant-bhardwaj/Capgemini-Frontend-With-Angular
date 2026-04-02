
let name = "Anant";
console.log("String:", name, typeof name);

let age = 21;
let price = 99.99;
console.log("Number:", age, price, typeof age);

let bigNum = 123456789012345678901234567890n;
console.log("BigInt:", bigNum, typeof bigNum);

let isStudent = true;
let hasJob = false;
console.log("Boolean:", isStudent, hasJob, typeof isStudent);

let address;
console.log("Undefined:", address, typeof address);

let data = null;
console.log("Null:", data, typeof data);

let id = Symbol("id");
let id2 = Symbol("id");
console.log("Symbol:", id, id2, id === id2);

let person = {
    name: "Anant",
    age: 21,
    hobbies: ["Coding", "Gaming"]
};
console.log("Object:", person, typeof person);

let arr = [1, 2, 3, 4, 5];
console.log("Array:", arr, typeof arr);
