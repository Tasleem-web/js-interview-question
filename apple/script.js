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

// let arr = [1, null, false, '1', 2, 3, 4, undefined];
// let result = arr.myReduce((acc, element) => acc + element, 0);

// console.log(result);

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

// let arr = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
// let result = arr.myFindIndx((item, index, arr) => index === 2);
// console.log(result);

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
    let newArr = [];

    const flatten = (arr, depth) => {
        if (depth < 1) {
            return arr;
        }
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                const flattened = flatten(arr[i], depth - 1) || [];
                flattened.forEach(item => newArr.push(item));
            } else {
                newArr.push(arr[i]);
            }
        }
    }

    flatten(this, depth);
    return newArr;
}

let arr = [1, 2, 3, [4, 5, [6]]];
let result = arr.myFlat(2);
console.log(result); // [1, 2, 3, 4, 5, 6]


