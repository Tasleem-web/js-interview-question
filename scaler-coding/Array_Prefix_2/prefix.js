
// function prefixSum(arr) {
//     let prefixSumArr = []
//     prefixSumArr.push(arr[0]);

//     for (let i = 1; i < arr.length; i++) {
//         prefixSumArr.push(prefixSumArr[i - 1] + arr[i]);
//     }

//     return prefixSumArr;
// }

// function equilibriumIndex(arr) {
//     let prefix = prefixSum(arr);
//     let count = 0;
//     let left = 0, right = 0;

//     for (let i = 0; i < arr.length; i++) {
//         if (i == 0) {
//             left = 0;
//         } else {
//             left = prefix[i - 1];
//         }

//         right = prefix[arr.length - 1] - prefix[i];

//         if (left == right) {
//             count++;
//         }
//     }
//     return count;
// }
// // var arr = [-3, 6, 2, 4, 5, 2, 8, -9, 3, 1];
// var arr = [3, -1, 2, -1, 1, 2, 1];
// console.log(equilibriumIndex(arr));

// function prefixEven(arr) {
//     let prefixEvenSum = [];
//     prefixEvenSum.push(arr[0]);

//     for (let i = 1; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             prefixEvenSum.push(prefixEvenSum[i - 1] + arr[i])
//         } else {
//             prefixEvenSum.push(prefixEvenSum[i - 1])
//         }
//     }

//     return prefixEvenSum;
// }

// function prefixOdd(arr) {
//     let prefixOddSum = [];
//     prefixOddSum.push(arr[0]);

//     for (let i = 1; i < arr.length; i++) {
//         if (i % 2 == 0) {
//             prefixOddSum.push(prefixOddSum[i - 1])
//         } else {
//             prefixOddSum.push(prefixOddSum[i - 1] + arr[i])
//         }
//     }

//     return prefixOddSum;
// }

// // var arr = [2, -1, 3, 1, 4, 3, 2, -1];
// var arr = [3, 4, -2, 8, 6, 2, 1, 3];
// // console.log(prefixEven(arr));
// // let pfOdd = prefixOdd(arr);
// let pfEven = prefixEven(arr);
// console.log(pfEven);
// let query = [3, 7];
// let sum = pfEven[6] - pfEven[1]
// console.log({sum});

// =====================================

// An Index is said to be special index, if after deleting it, Sum of all even index = sum of all odd index
// Count how many special index are there


function prefixEven(arr) {
    let prefixEvenSum = [];
    prefixEvenSum.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 == 0) {
            prefixEvenSum.push(prefixEvenSum[i - 1] + arr[i]);
        } else {
            prefixEvenSum.push(prefixEvenSum[i - 1]);
        }
    }
    return prefixEvenSum;
}

function prefixOdd(arr) {
    let prefixOddSum = [];
    prefixOddSum.push(arr[0]);

    for (let i = 1; i < arr.length; i++) {
        if (i % 2 == 0) {
            prefixOddSum.push(prefixOddSum[i - 1]);
        } else {
            prefixOddSum.push(prefixOddSum[i - 1] + arr[i]);
        }
    }
    return prefixOddSum;
}



// var arr = [4, 3, 2, 7, 6, -2];
var arr = [ 1, 2, 3, 7, 1, 2, 3 ]
let prefixEvenFun = prefixEven(arr);
console.log("prefixEven", prefixEvenFun);

let prefixOddFun = prefixOdd(arr);
console.log("prefixOdd", prefixOddFun);

function totalSpecialIndex(arr) {
    let count = 0;
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let totalEven = 0, totalOdd = 0;
        if (i == 0) {
            totalEven = prefixOddFun[n - 1];
            totalOdd = prefixEvenFun[n - 1]
        } else {
            totalEven = prefixEvenFun[i - 1] + prefixOddFun[n - 1] - prefixOddFun[i];
            totalOdd = prefixOddFun[i - 1] + prefixEvenFun[n - 1] - prefixEvenFun[i]
        }
        console.log("totalEven", totalEven, " totalOdd", totalOdd);

        if (totalEven == totalOdd) {
            count++;
        }
    }

    return count;
}

let totalSpecialIndexCount = totalSpecialIndex(arr);
console.log("totalSpecialIndexCount", totalSpecialIndexCount);











