// Implementation of Native JavaScript Methods (forEach, Map, Filter, Reduce, Every, Some)
// https://gist.github.com/alexhawkins/28aaf610a3e76d8b8264
// https://gist.github.com/jjant/37fb29edec20f52240915b3816147cfa
// https://blog.logrocket.com/javascript-array-methods/
// https://www.techiedelight.com/recursively-flatten-nested-array-javascript/
// https://www.digitalocean.com/community/tutorials/how-to-implement-javascript-array-methods-from-scratch#introduction
// https://www.interviewkickstart.com/interview-questions/ui-developer-interview-questions
// https://www.javascripttutorial.net/es-next/javascript-async-generators/
// https://www.vitoshacademy.com/javascript-make-custom-functions-with-prototype/
Array.prototype.myForEachLoop = function (callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
}


// var arr = ['biggy smalls', 'bif tannin', 'boo radley', 'hans gruber'];
// arr.myForEachLoop((item, index, arr) => console.log(item));


Array.prototype.myMap = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        newArr.push(callback(this[i], i, this));
    }
    return newArr;
}

// let arr = [1, 4, 9];
// let result = arr.myMap(item => item * 2);
// // let result = arr.myMap(item => Math.sqrt(item));
// console.log(result);

Array.prototype.mySome = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return true;
        }
    }
    return false;
}
// let arr = [1, 2, 3, 4, 5];
// let result = arr.mySome(item => item > 4);
// console.log(result);



Array.prototype.myFilter = function (callback) {
    let newArr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            newArr.push(this[i])
        }
    }
    return newArr;
}

// let arr = [1, 2, 3, 4, 5];
// let arr = [
//     { name: 'test1', age: 20 },
//     { name: 'test2', age: 23 },
//     { name: 'test3', age: 15 },
//     { name: 'test4', age: 18 },
// ];
// let result = arr.myFilter(item => item.age >= 18);
// console.log(result);

Array.prototype.myReduce = function (callback, accumulator) {
    for (let i = 0; i < this.length; i++) {
        if (this[i]) {
            accumulator = callback(accumulator, this[i])
        }
    }
    return accumulator;
}

let arr = [1, null, false, '1', 2, 3, 4, undefined];
let result = arr.myReduce((acc, element) => acc + element, 0);

console.log(result);

// Bubble sort
Array.prototype.mySort = function (callback) {
    let newArr = [...this];
    let count = 0;
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr.length; j++) {
            if (callback(newArr[j], newArr[j + 1]) > 0) {
                const temp = newArr[j + 1];
                newArr[j + 1] = newArr[j];
                newArr[j] = temp;
            }
            count++;
        }
        count++;
    }
    // console.log({ count });
    return newArr;
}


// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let result = arr.mySort((curr, next) => curr - next);
// console.log(result);

Array.prototype.myFindIndx = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            return i;
        }
    }
    return -1;
}

let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
let result = arr.myFindIndx((item, index, arr) => index === 2);
console.log(result);

Array.prototype.myEvery = function (callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i], i, this)) {
            return false;
        }
    }
    return true;
}

// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let result = arr.myEvery((item, index, arr) => item > 0);
// console.log(result);

Array.prototype.myFlat = function (depth = 1) {
    let arr = [];
    for (let i = 0; i < this.length; i++) {
        if (Array.isArray(this[i])) {
            if (i === depth - 1) {
                arr = [...arr, ...myFlat(this[i])];
                return arr;
            } else {
                arr = [...arr, ...myFlat(this[i])];
            }
        } else {
            arr.push(this[i])
        }
    }
    return arr;
}

let arr = [1, 2, 3, [4, 5, [6]]];
let result = arr.myFlat(2);
console.log(result);

// Custom bind function
Function.prototype.myBind = function (context, ...args) {
    const func = this;
    return function (...innerArgs) {
        return func.apply(context, [...args, ...innerArgs]);
    }
}

Function.prototype.myApply = function (context, args) {
    context = context || globalThis;
    const fnSymbol = Symbol();
    context[fnSymbol] = this;
    const result = context[fnSymbol](...args);
    delete context[fnSymbol];
    return result;
}

// Async Generator Function Polyfill
function asyncGeneratorPolyfill(genFunc) {
    return function (...args) {
        const genObject = genFunc(...args);
        return new Promise((resolve, reject) => {
            function step(nextF) {
                let next;
                try {
                    next = nextF();
                } catch (e) {
                    return reject(e);
                }
                if (next.done) {
                    return resolve(next.value);
                }
                Promise.resolve(next.value).then(v => {
                    step(() => genObject.next(v));
                }).catch(e => {
                    step(() => genObject.throw(e));
                });
            }
            step(() => genObject.next(undefined));
        });
    };
}
// Example usage of asyncGeneratorPolyfill
// const asyncGenFunc = asyncGeneratorPolyfill(function* () {
//     const data1 = yield fetch('https://jsonplaceholder.typicode.com/posts/1').then(res => res.json());
//     console.log('Data 1:', data1);
//     const data2 = yield fetch('https://jsonplaceholder.typicode.com/posts/2').then(res => res.json());
//     console.log('Data 2:', data2);
//     return 'All data fetched';
// });
// asyncGenFunc().then(result => console.log(result)).catch(err => console.error(err));



// Example usage of myBind
// function greet(greeting, punctuation) {
//     return `${greeting}, ${this.name}${punctuation}`;
// }
// const person = { name: 'Alice' };
// const boundGreet = greet.myBind(person, 'Hello');
// console.log(boundGreet('!')); // Output: "Hello, Alice!"

// polyfill  all
Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        let results = [];
        let pending = promises.length;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    pending--;
                    if (pending === 0) {
                        resolve(results);
                    }
                })
                .catch(reason => {
                    reject(reason);
                });
        });
    });
}

// let p1 = Promise.resolve('Success 1');
// let p2 = Promise.resolve('Success 2');
// let p3 = Promise.resolve('Success 3');

// Promise.myAll([p1, p2, p3])
//     .then(results => console.log('All Results:', results))
//     .catch(error => console.log('Error:', error));

// promise any polyfill 
Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        let rejections = [];
        let pending = promises.length;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    resolve(value);
                }).catch(error => {
                    rejections[index] = error;
                    pending--;
                    if (pending === 0) {
                        reject(new AggregateError(rejections, 'All promises were rejected'));
                    }
                });
        });
    });
}

// let p1 = Promise.reject('Error 1');
// let p2 = Promise.reject('Error 2');
// let p3 = Promise.resolve('Success 3');

// Promise.myAny([p1, p2, p3])
//     .then(value => console.log('Resolved with value:', value))
//     .catch(error => console.log('Rejected with errors:', error.errors)); 


// polyfill race 
Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        promises.forEach(promise => {
            Promise.resolve(promise)
                .then(value => resolve(value))
                .catch(error => reject(error));
        });
    });
}

// let p1 = new Promise((resolve, reject) => setTimeout(reject, 500, 'Error 1'));
// let p2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Success 2'));
// let p3 = new Promise((resolve, reject) => setTimeout(resolve, 200, 'Success 3'));
// Promise.myRace([p1, p2, p3])
//     .then(value => console.log('Resolved with value:', value))
//     .catch(error => console.log('Rejected with error:', error));

// polyfill allSettled
Promise.myAllSettled = function (promises) {
    return new Promise((resolve) => {
        let results = [];
        let pending = promises.length;
        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = { status: 'fulfilled', value: value };
                })
                .catch(reason => {
                    results[index] = { status: 'rejected', reason: reason };
                })
                .finally(() => {
                    pending--;
                    if (pending === 0) {
                        resolve(results);
                    }
                });
        });
    });
}

// let p1 = Promise.resolve('Success 1');
// let p2 = Promise.reject('Error 2');
// let p3 = Promise.resolve('Success 3');

// Promise.myAllSettled([p1, p2, p3])
//     .then(results => console.log('All Settled Results:', results));