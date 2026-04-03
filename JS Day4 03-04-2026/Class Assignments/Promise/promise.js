// const myPromise = new Promise((resolve, reject) => {
//     let success = false;

//     if (success) {
//         resolve("Operation successful");
//     } else {
//         reject("Operation failed");
//     }
// });
// myPromise
//     .then(result => {
//         console.log(result); // if resolved
//     })
//     .catch(error => {
//         console.log(error); // if rejected
//     });





// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Data received");
//         }, 2000);
//     });
// }

// fetchData()
//     .then(data => console.log(data))
//     .catch(err => console.log(err));








// async function getData(){
//     let data = await fetch('https://api.escuelajs.co/api/v1/products')
//     let d = await data.json()
//     console.log(d);
// }

// getData();




async function fetchData(){
    let data = await fetch ('https://api.escuelajs.co/api/v1/products')
    let d = await data.json();
    return d;
}

async function getData(){
    let result = await fetchData();
    console.log(result);
}

getData();