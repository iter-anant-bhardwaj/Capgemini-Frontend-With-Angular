// Factory function : 

function factory(name, age){
    return{
        name : name,
        age : age
    }
}
// let fact = factory("Anant",22);
// console.log(fact);






let person = {
    name: "Anant",
    age: 21,
    isStudent: true,
    address : {
        city : "Jaipur",
        state : "Rajasthan"
    },
    printDetails : function(){
        console.log(`${this.name}`);
    },
    getAge(){
        console.log(`${this.age}`);
    }
};

// console.log(person);
// console.log(person["age"]); 
// person.printDetails();
// person.getAge();
// delete person.isStudent;

// for (let key in person) {
//     console.log(key, person[key]);
// }

// keys
// console.log(Object.keys(person));

// values
// console.log(Object.values(person));

// entries
// console.log(Object.entries(person));

//freeze
// console.log(Object.freeze(person));
// Object.isFrozen();

//seal
// Object.seal(person);
// Object.isSealed();

// destructuring
// let person1 = {name: "Anant", age: 21};
// let {name, age} = person;
// console.log(name, age);



//call apply bind
function greet(city, country) {
    console.log(this.name + " from " + city + ", " + country);
}

let person2 = { name: "Anant" };

greet.call(person, "Jaipur", "India");
// Anant from Jaipur, India

greet.apply(person, ["Jaipur", "India"]);

let newFunc = greet.bind(person, "Jaipur", "India");

newFunc(); // Anant from Jaipur, India


// let copyobj = {...person};
// console.log(copyobj);






//Rest Parameter
function demo(a,...args) {  //rest parameter should always be the last one in the parameter
    console.log(a);
    console.log(args);
}

demo(1, 2, 3);

//modules
//named expoet
export const add = (a, b) => a + b;

//default Export - Only one default export per file and use the same name while importing
export default function greet(name) {
    return "Hello " + name;
}


