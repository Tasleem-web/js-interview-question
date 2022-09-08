// const memoize = (callback) => {
//     const cache = {};
//     return (...args) => {
//         let convertToString = JSON.stringify(args);
//         const result = cache[convertToString] || callback(...args);
//         cache[convertToString] = result;
//         return result
//     }
// }

// const add = (x, y) => (x + y);
// const memoizeAdd = memoize(add);
// console.log(memoizeAdd(20, 20));


// let flatten = (arr) => arr.reduce((acc, cur) => acc.concat((Array.isArray(cur) ? flatten(cur) : cur)), []);

// var data = [1, 2, [3, 4, [5, 6, 7, [8]]]];
// console.log(flatten(data));

// function sum() {
//     let count = 0;
//     for (let i = 0; i < arguments.length; i++) {
//         count = count + arguments[i]
//     }
//     let newSum = sum.bind(count);
//     newSum.result = count;
//     return newSum;
// }
// console.log(sum(1)(2)(3, 4)(10).result);

// function flat(arr) {
//     let ar = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] instanceof Array) {
//             ar = [...ar, ...flat(arr[i])];
//         } else {
//             ar.push(arr[i])
//         }
//     }
//     return ar;
// }

// var data = [1, 2, [3, 4, [5, 6, 7, [8]]]];
// console.log(flat(data));


function promise(params) {
    let promise = new Promise(function (resolve, reject) {
        let x = 11;
        if (x == 10) {
            resolve('Equal')
        } else {
            reject('Not Equal')
        }
    });
    promise.then((value) => {
        console.log(value);
    }, (err) => {
        console.log(err);
    })
}
promise()
function reverseStr(str) {
    let newStr = '';
    str = String(str);
    for (let index = str.length - 1; index >= 0; index--) {
        newStr = newStr + str[index];
    }
    return newStr;
}

// console.log(reverseStr('ABC'));


// console.log(reverseStr(12345));

// function closest(arr) {
//     let closedIndex = 0;
//     let diff = Number.MAX_VALUE;
//     for (let i = 0; i < arr.length; i++) {
//         let abs = arr[i] > 0 ? arr[i] : -(arr[i]);
//         if (abs < diff) {
//             diff = abs;
//             closedIndex = i
//         } else if (abs == diff && arr[i] > 0 && arr[closedIndex] < 0) {
//             closedIndex = i;
//         }
//     }
//     return arr[closedIndex]
// }


// let arr = [1, 2, 4, 5, 6, 6, 8, 9];
// let arr2 = [10, -5, 5, 2, 7, -4, 28, 65, 95, 85, 12, 45];
// console.log(closest(arr2));

// callback function
// function greeting(name) {
//     console.log(`Hello ${name}`);
// }

// function processCallback(callback) {
//     let name = "Tasleem";
//     callback(name)
// }

// processCallback(greeting);

// function multiply() {
//     var count = 1;
//     for (let index = 0; index < arguments.length; index++) {
//         count = count * arguments[index]
//     }

//     const newMultiply = multiply.bind(this, count);
//     newMultiply.finalCount = count;
//     return newMultiply
// }
// // console.log(multiply(1, 2).finalCount)
// console.log(multiply(1, 2)(3, 2).finalCount)


// function sum() {
//     var count = 0;    // use previous result
//     for (let i = 0; i < arguments.length; i++) {
//         count += arguments[i];
//     }
//     const newSum = sum.bind(this, count);
//     newSum.result = count;
//     return newSum;
// }

// console.log(sum(1, 2).result)
// console.log(sum(1, 2)(3, 4, 5).result)

// function LootItems() {
//     var items = ["HealingPotion", "Gold"];

// for (var i = 0; i < items.length; i++) {
//     ((index) => {
//         setTimeout(function () {
//             console.log("Looted the following Item: => " + items[index])
//         }, index * 1000);
//     })(i);
// }

// for (var i = 0; i < items.length; i++) {
//     function closure(index) {
//         setTimeout(function () {
//             console.log("Looted the following Item: => " + items[index])
//         }, index * 1000);
//     }
//     closure(i);
// }
// }
// LootItems();
// var animal = "lion";
// var favoriteAnimal = function () {
//     console.log("Original favourite animal: " + this.animal);
//     var animal = "giraffe";
//     console.log("New favourite animal: " + animal);
// };
// favoriteAnimal()

// let sum = a => b => b ? sum(a * b) : a;

// let sum = function (a) {
//     return function (b) {
//         if (b) {
//             return sum(a + b);
//         }
//         return a;
//     }
// }

// console.log(sum(1)(2)(3)(4)());
// function sum(a) {
//     return function (b) {
//         return a * b;
//     }
// }

// console.log(sum(2)(2));

// function onsubmit(event) {
//     event.preventDefault();

//     event.stopProgogation()
//     let fname = document.getElementById('fname').value;
//     console.log(fname);
// }

// function myFunction() {
//     var at = document.getElementById("email").value.indexOf("@");
//     var age = document.getElementById("age").value;
//     var fname = document.getElementById("fname").value;
//     submitOK = "true";

//     if (fname.length > 10) {
//         alert("The name may have no more than 10 characters");
//         submitOK = "false";
//     }

//     if (isNaN(age) || age < 1 || age > 100) {
//         alert("The age must be a number between 1 and 100");
//         submitOK = "false";
//     }

//     if (at == -1) {
//         alert("Not a valid e-mail!");
//         submitOK = "false";
//     }

//     if (submitOK == "false") {
//         return false;
//     }
// }

// function closest1(arr) {
//     let closestIndex = 0;
//     let diff = Number.MAX_VALUE;
//     for (let i = 0; i < arr.length - 1; i++) {
//         let abs = arr[i] > 0 ? arr[i] : -arr[i];
//         if (abs < diff) {
//             diff = abs;
//             closestIndex = i
//         } else if (abs == diff && arr[i] > 0 && arr[closestIndex] < 0) {
//             closestIndex = i
//         }

//     }
//     console.log(arr[closestIndex]);
// }

// let arr = [1, 2, 4, 5, 6, 6, 8, 9];
// let arr2 = [10, -5, 5, 2, 7, -4, 28, 65, 95, 85, 12, 45];
// closest1(arr)