function outer() {
    let a = 10;

    function inner() {
        console.log(a);
    }

    return inner;
}
debugger
const fn = outer();
fn(); 