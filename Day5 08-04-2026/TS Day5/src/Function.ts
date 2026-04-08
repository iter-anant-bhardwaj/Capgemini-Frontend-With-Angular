function add1(a:number, b:number): number{
    return a+b;
}

//arrow
let add = (a:number, b:number):number => {
    return a+b;
}

// console.log(add(10,50));


function calculate(
    a:number,
    b:number,
    callback: (x:number, y:number) => number
): number {
    return callback(a,b);
}

console.log(calculate(10,50,add));
