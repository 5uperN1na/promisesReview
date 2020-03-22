//Promises

/*
getWordOfTheDay()
    .then((word) => {
        console.log(`The word of the day is ${word}.`);
    }, (err) => {
        console.log(err);
    });

    */

//Promise chaining

new Promise(function (resolve, reject) {

    setTimeout(() => resolve(1), 1000); // (*)

}).then(function (result) { // (**)

    alert(result); // 1
    return result * 2;

}).then(function (result) { // (***)

    alert(result); // 2
    return result * 2;

}).then(function (result) {

    alert(result); // 4
    return result * 2;

});

//Creating a Promise

let promise = new Promise(function (resolve, reject) {
    // do something asynchronous which eventually calls either:
    //   resolve(someValue); // fulfilled
    // or
    //   reject("failure reason"); // rejected
});

let p = Promise.resolve("Hello all!");
let q = Promise.resolve(new Error("oh no"));

p.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});

q.then((message) => {
    console.log(message);
}).catch((err) => {
    console.log(err);
});