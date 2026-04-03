let timeId = setTimeout(() => {
    console.log("Hello after 2 seconds");
}, 2000);

// clearTimeout(timeId);


let intervalId = setInterval(() => {
    console.log("Running every 1 second");
}, 1000);

// clearInterval(intervalId);