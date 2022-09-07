
// ------------------------------------------------------
// function* generate() {
//     yield 1;
//     yield 'test';
//     yield false;
// }

// let gen = [10, 20, 30, 4, 5, 6, 7, 8, ...generate()];
// console.log(gen);
// ------------------------------------------------------
// [3,4,5]=> [4*5, 3*5, 3*4] output [20, 15,12]
// function multiplyByOthers(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let copiedArr = [...arr];
//         copiedArr.splice(i, 1);
//         newArr.push(copiedArr.reduce((acc, curr) => acc * curr, 1));
//     }

//     console.log(newArr);
// }
// var arr = [3, 4, 5]
// multiplyByOthers(arr);
// ------------------------------------------------------
// const firstDuplicate = arr => {
//     for (let i = 1; i <= arr.length; i++) {
//         if (arr.lastIndexOf(arr[i]) !== i) {
//             return i;
//         };
//     };
//     return -1;
// }

// let str = "facebook";
// console.log(firstDuplicate(str));
// ------------------------------------------------------
// var items = [1, 2, 3, 4];
// // for (let i = 0; i < items.length; i++) {
// for (var i = 0; i < items.length; i++) {
//     // ((index) => {
//     //     setTimeout(function () {
//     //         console.log("Looted the following Item: => " + items[index] + " " + index * 1000)
//     //     }, index * 1000);
//     // })(i)

//     function closure(index) {
//         setTimeout(function () {
//             console.log("Looted the following Item: => " + items[index] + " " + index * 1000)
//         }, index * 1000);
//     }
//     closure(i)
// }
// ------------------------------------------------------
// function add(...args) {
//     let a = args.reduce((a, b) => a + b, 0);
//     return function sum(...args) {
//         let b = args.reduce((a, b) => a + b, 0);
//         if (b) {
//             return add(a + b)
//         }
//         return a;
//     }
// }
// console.log(add(1)(2)(3, 4, 5)(10)());
// ------------------------------------------------------
// const flatten = (arr) => arr.reduce((acc, curr) => acc.concat((curr instanceof Array) ? flatten(curr) : curr), []);
// function flatten(arr) {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] instanceof Array) {
//             newArr = [...newArr, ...flatten(arr[i])];
//         } else {
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }

// var arr = [1, [2, [3, [4]]]];
// console.log(flatten(arr));
// --------------------------------------------------
// const memoize = (callback) => {
//     let cache = {};
//     return function (...args) {
//         let cachedString = JSON.stringify(args);
//         if (!cache[cachedString]) {
//             cache[cachedString] = callback(...args);
//         }
//         return cache[cachedString];

//         // let result = cache[cachedString] || callback(...args);
//         // cache[cachedString] = result;
//         // return result;
//     }
// }

// function add(a, b) {
//     for (let i = 0; i < 100000; i++) {}
//     return a + b
// }

// console.time();
// var mo = memoize(add);
// console.log(mo(10, 20));
// console.timeEnd();
// -----------------------------------------------
// function bubbleSort(arr) {
//     let len = arr.length;
//     for (let i = 0; i < len; i++) {
//         for (let j = 0; j < len; j++) {
//             if (arr[j].length > (arr[j + 1] && arr[j + 1].length)) {
//                 let temp = arr[j];
//                 arr[j] = arr[j + 1];
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr;
// }

// var arr = ['one', 'second', 'three', 'fourdemo'];
// // var sortedArr = bubbleSort(arr);
// var sortedArr = arr.sort((a, b) => a.length - b.length);
// console.log("sortedArr => ", sortedArr.at(-2));
// ---------------------------------------
// let debounceTimer;
// const apiCall = () => {
//     console.log('api call');
// }

// const debounce = (callback, delay) => {
//     window.clearTimeout(debounceTimer);
//     debounceTimer = window.setTimeout(callback, delay);
// }

// input.addEventListener('keydown', () => debounce(apiCall, 1000));

// let counter = 0;
// const apiCall = () => {
//     counter++;
//     console.log('api call', counter);
// }

// let throttlingTimer;
// const throttle = (callback, delay) => {
//     if (throttlingTimer) return;
//     throttlingTimer = true;
//     setTimeout(() => {
//         callback();
//         throttlingTimer = false;
//     }, delay);

// }
// input.addEventListener('keydown', () => throttle(apiCall, 1000));