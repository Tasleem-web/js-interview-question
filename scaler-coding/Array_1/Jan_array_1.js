// 1Q) Givin N array elements , count the no. of elements having at least 1 greater then itself.

// function greaterThenItSelfAtLeaseOne(arr) {

//     let max = arr[0];
//     for (let i = 1; i < arr.length; i++) {
//         if (max < arr[i]) {
//             max = arr[i];
//         }
//     }
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] == max) {
//             count++;
//         }
//     }

//     return arr.length - count;
// }

// var arr = [-3, -2, 6, 8, 4, 8, 5];
// var arr2 = [2, 3, 10, 7, 3, 2, 10, 8]
// console.log(greaterThenItSelfAtLeaseOne(arr2));

// ============================================================

// 2Q) Given N array elements, check if there exist a pairs i,j such that 'arr[i] + arr[j] == k' and 'i !=j'
//  Note: i and j are indexes values, k is given sum

// function additionOfTwoIndexedValuesLowerTriangle(arr, k) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = i + 1; j < arr.length; j++) {

//             if (arr[i] + arr[j] == k) {
//                 return true;
//             }
//         }
//     }
//     return false;
// }

// function additionOfTwoIndexedValuesUpperTriangle(arr, k) {

//     for (let i = arr.length; i >= 0; i--) {
//         for (let j = i - 1; j >= 0; j--) {
//             if (arr[i] + arr[j] == k) {
//                 return true;
//             }
//         }
//     }
//     return false
// }

// // var arr = [3, -2, 1, 4, 3, 6, 8];
// // var k = 10

// var arr = [2, 4, -3, 7];
// var k = 5

// // console.log(additionOfTwoIndexedValuesLowerTriangle(arr, k));
// console.log(additionOfTwoIndexedValuesUpperTriangle(arr, k));

// ============================================================

// 3Q) Given an array, Reverse entire arr[], Expected SC[O(1)] space complexity should be constant.

// function customReverseEntireArray(arr) {

//     let i = 0, j = arr.length - 1;
//     while (i <= j) {
//         arr = swap(arr, i, j);
//         i++; j--;
//     }

//     return arr;
// }

// function swap(arr, start, end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     return arr;
// }

// var arr = [-1, 4, 7, 6, -2, 7, 8, 10];

// console.log(customReverseEntireArray(arr));

// ============================================================

// 4Q) Given N array elements & [si, ei] reverse array from [si, ei] not si<=ei.

// function reversePart(arr, start, end) {
//     let i = start, j = end;
//     while (i <= j) {
//         arr = swap(arr, i, j);
//         i++;
//         j--;
//     }

//     return arr;
// }

// function swap(arr, start, end) {
//     [arr[start], arr[end]] = [arr[end], arr[start]];
//     return arr;
// }

// var arr = [-3, 4, 2, 8, 7, 9, 6, 2, 10];
// console.log(reversePart(arr, 3, 7));

// ============================================================
// 5Q) Given N array elements, Rotate array from last to first by k times SC:O(1)

// function rotateElementLeftToRight(arr, k, n) {
//     // incase k >=n then assign reminder value to k
//     if (k >= n) k = k % n
//     reversePart(arr, 0, n - 1); // [8,9,6 ,4,1,-2,3]
//     reversePart(arr, 0, k - 1); // [6,9,8 ,4,1,-2,3]
//     reversePart(arr, k, n - 1); // [6,9,8 ,3,-2,1,4]

//     return arr;
// }

// // var arr = [3, -2, 1, 4, 6, 9, 8];
// // var arr = [4, 1, 6, 9, 2, 14, 7, 8, 3];
// var arr = [0, 1, 2, 3, 4, 5];
// var k = 7;
// console.log("Actual Array", arr);
// console.log("Modified Array", rotateElementLeftToRight(arr, k, arr.length));

// ============================================================

// function littlePhony(A, B) {
//     if (A.indexOf(B) > -1) {
//         let arr = [];
//         for (let i = 0; i < A.length; i++) {
//             if (B >= A[i]) {
//                 arr.push(A[i]);
//             }
//         }

//         if (arr.length) {
//             return A.length - arr.length
//         }
//     }
//     return -1;
// }

// var arr = [23, 47, 8, 49, 47, 32, 48, 4, 36, 11, 8, 13, 2, 10, 18, 39, 31, 45, 9, 30];
// var B = 5;
// console.log(littlePhony(arr, B));




