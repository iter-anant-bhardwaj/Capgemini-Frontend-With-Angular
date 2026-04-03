//modules

// default export-> only one default export allowed per module
//named export-> multiple named exports allowed per module

export function func(){
    console.log("This is a function from first.js");
}

export default function defaultFunc(){
    console.log("This is the default function from first.js");
}

// import { func } from "./first.js";
// import defaultFunc from "./first.js";