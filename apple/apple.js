
// ----------------------------------------------------------------
// let counter = 0
// const apiCall = () => {
//     counter++;
//     console.log("api call", counter);
// }
// let debounceTimer;
// const debounce = (callback, delay) => {
//     window.clearTimeout(debounceTimer);
//     debounceTimer = window.setTimeout(callback, delay);
// }

// input.addEventListener('keydown', () => debounce(apiCall, 1000));
// let throttleTimer;
// const throttle = (callback, delay) => {
//     if (throttleTimer) return;
//     throttleTimer = true;
//     setTimeout(() => {
//         callback();
//         throttleTimer = false
//     }, delay);
// }
// input.addEventListener('keydown', () => throttle(apiCall, 1000));
// --------------------------------------------------------

Object.prototype.clone = function () {
    let data = (this instanceof Array) ? [] : {};
    for (const i in this) {
        if (i != 'clone') {
            if (typeof this[i] && typeof this[i] == 'object') {
                data[i] = this[i].clone();
            } else {
                data[i] = this[i]
            }
        }
    }
    return data;
}
var obj = { name: "Tasleem", address: { street: 'abc', pin: 1234 } };
console.log("obj", obj);
var copiedObj = obj.clone();
console.log("copiedObj", copiedObj);
// -------------------------
// var arr = [1, [2, [3]]];
// console.log("arr", arr);
// var copiedArr = arr.clone();
// console.log("copiedArr", copiedArr);
// arr[3] = 4
// console.log("added arr", arr);
// console.log("copiedArr", copiedArr);


// String.prototype.capitalize = function () {
//     let str = String(this).split(" ");
//     let strArr = [];
//     for (let i = 0; i < str.length; i++) {
//         let firstChar = str[i].charAt(0);
//         if (firstChar.charCodeAt() >= 97 || firstChar.charCodeAt() <= 122) {
//             strArr.push(firstChar.toUpperCase() + str[i].slice(1, str[i].length));
//             // strArr.push(firstChar.toUpperCase() + str[i].substr(1, str[i].length - 1));
//         }
//     }
//     return strArr.join(' ')
// }

// String.prototype.capitalize = function () {
//     return this.charAt(0).toUpperCase() + this.slice(1);
// }


// console.log(('this is my world').capitalize());

// const firstDuplicate = arr => {
//     for (let i = 1; i <= arr.length; i++) {
//         if (arr.lastIndexOf(arr[i]) !== i) {
//             return i;
//         };
//     };
//     return -1;
// }

// // let str = "facebook";
// // console.log(firstDuplicate(str));

// function concatTwoArrayAndFindUniqueElement(arr1, arr2) {
//     let allArr = [...arr1, ...arr2];
//     return allArr.filter((item, index) => allArr.indexOf(item) == index);
// }

// // let myIceCream = ["chocolate", "vanilla", "pistachio"];
// // let yourIceCream = ["spumoni", "chocolate", "coconut"];
// // console.log(concatTwoArrayAndFindUniqueElement(myIceCream, yourIceCream));

// [3,4,5]=> [4*5, 3*5, 3*4] output [20, 15,12]
// function multiplyOthers(arr) {
//     let multiplyArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         let copiedEntireArray = [...arr];
//         copiedEntireArray.splice(i, 1);
//         multiplyArr.push(copiedEntireArray.reduce((acc, curr) => acc * curr, 1));
//     }
//     return multiplyArr
// }

// // let arr = [3, 4, 5];
// // console.log(multiplyOthers(arr));

// function* generate() {
//     yield 1;
//     yield 'test';
//     yield false;
// }

// // let gen = [10, 20, 30, 4, 5, 6, 7, 8, ...generate()];
// // console.log(gen);

// // async function* getUsersDetails() {
// //     yield await new Promise((resolve, reject) => {

// //     })
// // }


// // function functionA() {
// //     return new Promise((resolve, reject) => {
// //         console.log('functionA called');
// //         setTimeout(function () {
// //             console.log('functionA timeout called');
// //             // return 10;
// //             return resolve(10);
// //         }, 15000);
// //     });
// // }

// // function functionB(valueA) {
// //     return new Promise((resolve, reject) => {
// //         console.log('functionB called');
// //         setTimeout(function () {
// //             console.log('functionB timeout called = ' + valueA);
// //             return resolve(20 + valueA);
// //         }, 10000);

// //     });
// // }

// // function functionC(valueA, valueB) {
// //     return new Promise((resolve, reject) => {
// //         console.log('functionC called');
// //         setTimeout(function () {
// //             console.log('functionC timeout called = ' + valueA);
// //             return resolve(valueA + valueB);
// //         }, 10000);

// //     });
// // }

// // async function executeAsyncTask() {
// //     const valueA = await functionA();
// //     const valueB = await functionB(valueA);
// //     return functionC(valueA, valueB);
// // }
// // console.log('program started');
// // executeAsyncTask().then(function (response) {
// //     console.log('response called = ' + response);
// // });
// // console.log('program ended');


// // async function* fetchUsers() {
// //     const response = await fetch('https://jsonplaceholder.typicode.com/users');
// //     yield await response.json();
// // }

// // const it = fetchUsers();

// // it.next().then(({ value, done }) => {
// //     console.log(value);
// // });


// async function* fetchUsers() {
//     let urls = [
//         "https://api.github.com/users/1",
//         "https://api.github.com/users/2",
//         "https://api.github.com/users/3",
//     ]
//     let names = urls.map(_ => fetch(_));
//     const res = await Promise.all(names);
//     const data = await Promise.all(res.map(r => r.json()));
//     yield data;
// }

// const it = fetchUsers();
// it.next()
//     .then((res, done) => {
//         console.log(res.value);
//     })