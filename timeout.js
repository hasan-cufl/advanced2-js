
function doSomething(){
    console.log(3333);
}

// console.log(2222);
// setTimeout(doSomething);  // 1: If there is no time-limit then it works after all other functionality.
// console.log(4444);
// console.log(5555);

console.log(2222);
// setTimeout(doSomething, 2000);  // system 2

// setTimeout(function(){  //system 3: normal function
//     console.log("Lazy and waiting")
// }, 2000);

setTimeout(() => {  // system 4: arrow function
    console.log("See you later.")
}, 3000)


// setInterval
// setInterval(function(){  //normal function
//     console.log("Doing it again.");
// }, 2000)
setInterval(() => {  //arrow function
    console.log("Again and again.")
}, 2000);
console.log(4444);
console.log(5555);

