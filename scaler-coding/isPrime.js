// https://www.mathsisfun.com/algebra/logarithms.html
// https://www.mathsisfun.com/square-root.html

// A prime number is a number that should have 2 factors [1, itself].
function checkIsPrime(num) {
    let isPrime = true;
    if (num < 2) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
    return isPrime;
}


let num = 4;
// 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, and 97.
console.log(checkIsPrime(num));


// function armStrongNumber(num) {
//     let sum = 0;
//     num = String(num).split("");
//     for (let i = 0; i < num.length; i++) {
//         sum = sum + (num[i] ** 3)
//     }
//     return sum;
// }

// // let num = 153;
// let num = 371;
// console.log(armStrongNumber(num));