// ----------------------------------------------------------------
let counter = 0
const apiCall = () => {
    counter++;
    console.log("api call", counter);
}
let debounceTimer;
const debounce = (callback, delay) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, delay);
}

input.addEventListener('keydown', () => debounce(apiCall, 1000));
let throttleTimer;
const throttle = (callback, delay) => {
    if (throttleTimer) return;
    throttleTimer = true;
    setTimeout(() => {
        callback();
        throttleTimer = false
    }, delay);
}
input.addEventListener('keydown', () => throttle(apiCall, 1000));
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

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunk = (arr, size) => {
    let chunkedArr = [];
    for (let i = 0; i < arr.length; i += size) {
        chunkedArr.push(arr.slice(i, i + size));
    }
    return chunkedArr;
}
// console.log(chunk(arr, 2)); // [[1,2],[3,4],[5,6],[7,8],[9,10]]
// console.log(chunk(arr, 3)); // [[1,2,3],[4,5,6],[7,8,9],[10]]

function removeAdjacent(str) {
    let res = [];
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== res[res.length - 1]) {
            res.push(str[i]);
        } else {
            res.pop();
        }
    }
    return res.join("");
}

console.log(removeAdjacent('aaaacddddcappp')); // 'cap'
console.log(removeAdjacent('aabbcc')); // '' (empty string)
console.log(removeAdjacent('aabbccdde')); // 'e'

// Function to find the longest substring without repeating characters
function longestUniqueSubstring(str) {
    let maxLength = 0;
    let start = 0;
    let seen = new Map();

    for (let end = 0; end < str.length; end++) {
        if (seen.has(str[end])) {
            start = Math.max(seen.get(str[end]) + 1, start);
        }
        seen.set(str[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}

console.log(longestUniqueSubstring("abcabcbb")); // 3 ('abc')
console.log(longestUniqueSubstring("bbbbb"));    // 1 ('b')
console.log(longestUniqueSubstring("pwwkew"));   // 3 ('wke')

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

console.log(isPalindrome("A man, a plan, a canal: Panama")); // true
console.log(isPalindrome("race a car")); // false

// Function to find the missing number in an array of 1 to n
function findMissingNumber(arr, n) {
    const expectedSum = (n * (n + 1)) / 2; //sum of all numbers
    const actualSum = arr.reduce((acc, num) => acc + num, 0);
    return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 6, 3, 7, 8], 8)); // 5

// Function to flatten a nested array
function flattenArray(arr) {
    return arr.reduce((flat, item) => {
        return flat.concat(Array.isArray(item) ? flattenArray(item) : item);
    }, []);
}

console.log(flattenArray([1, [2, [3, [4, 5]]], 6])); // [1, 2, 3, 4, 5, 6]

// Function to find the first non-repeating character in a string
function firstNonRepeatingChar(str) {
    const charCount = {};
    for (const char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return null;
}

console.log(firstNonRepeatingChar("swiss")); // 'w'
console.log(firstNonRepeatingChar("aabbcc")); // null

// Function to generate all permutations of a string
function permuteString(str) {
    if (str.length <= 1) return [str];
    const permutations = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        const remaining = str.slice(0, i) + str.slice(i + 1);
        for (const perm of permuteString(remaining)) {
            permutations.push(char + perm);
        }
    }
    return permutations;
}

console.log(permuteString("abc")); // ['abc', 'acb', 'bac', 'bca', 'cab', 'cba']

// Function to find the maximum profit from stock prices
function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }

    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // 5
console.log(maxProfit([7, 6, 4, 3, 1]));   // 0

// Function to check if two strings are anagrams
function areAnagrams(str1, str2) {
    const normalize = str => str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
}

console.log(areAnagrams("listen", "silent")); // true
console.log(areAnagrams("hello", "world"));   // false

// Function to generate Fibonacci sequence up to n terms
function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(generateFibonacci(5)); // [0, 1, 1, 2, 3]
console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

// Function to reverse words in a sentence
function reverseWords(sentence) {
    return sentence.split(' ').map(word => word.split('').reverse().join('')).join(' ');
}

console.log(reverseWords("Hello World")); // "olleH dlroW"
console.log(reverseWords("JavaScript is fun")); // "tpircSavaJ si nuf"

// Function to count the frequency of characters in a string
function charFrequency(str) {
    const frequency = {};
    for (const char of str) {
        frequency[char] = (frequency[char] || 0) + 1;
    }
    return frequency;
}

console.log(charFrequency("hello")); // { h: 1, e: 1, l: 2, o: 1 }
console.log(charFrequency("aabbcc")); // { a: 2, b: 2, c: 2 }

// Function to find the intersection of two arrays
function arrayIntersection(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    return [...set1].filter(item => set2.has(item));
}

console.log(arrayIntersection([1, 2, 3], [2, 3, 4])); // [2, 3]
console.log(arrayIntersection([5, 6, 7], [7, 8, 9])); // [7]

// Function to calculate the power of a number
function power(base, exponent) {
    if (exponent === 0) return 1;
    if (exponent < 0) return 1 / power(base, -exponent);
    return base * power(base, exponent - 1);
}

console.log(power(2, 3)); // 8
console.log(power(5, -2)); // 0.04

// Function to check if a number is prime
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(10)); // false

// Function to find the GCD (Greatest Common Divisor) of two numbers
function gcd(a, b) {
    if (b === 0) return a;
    return gcd(b, a % b);
}

console.log(gcd(48, 18)); // 6
console.log(gcd(101, 103)); // 1

// Function to find the LCM (Least Common Multiple) of two numbers
function lcm(a, b) {
    return (a * b) / gcd(a, b);
}

console.log(lcm(4, 6)); // 12
console.log(lcm(7, 3)); // 21

// Function to count vowels in a string
function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    return [...str].filter(char => vowels.includes(char)).length;
}

console.log(countVowels("hello")); // 2
console.log(countVowels("world")); // 1

// Function to check if a number is a perfect square
function isPerfectSquare(num) {
    return Number.isInteger(Math.sqrt(num));
}

console.log(isPerfectSquare(16)); // true
console.log(isPerfectSquare(20)); // false

// Function to calculate factorial of a number
function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
console.log(factorial(0)); // 1

// Function to convert a string to title case
function toTitleCase(str) {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

console.log(toTitleCase("hello world")); // "Hello World"
console.log(toTitleCase("javaScript is awesome")); // "Javascript Is Awesome"

// Function to find the sum of digits of a number
function sumOfDigits(num) {
    return String(num)
        .split('')
        .reduce((sum, digit) => sum + Number(digit), 0);
}

console.log(sumOfDigits(123)); // 6
console.log(sumOfDigits(456)); // 15

// Function to check if a number is an Armstrong number
function isArmstrong(num) {
    const digits = String(num).split('');
    const power = digits.length;
    const sum = digits.reduce((acc, digit) => acc + Math.pow(Number(digit), power), 0);
    return sum === num;
}

console.log(isArmstrong(153)); // true
console.log(isArmstrong(123)); // false

// Function to find the maximum product of three numbers in an array
function maxProductOfThree(arr) {
    if (arr.length < 3) throw new Error("Array must have at least three numbers");
    arr.sort((a, b) => a - b);
    console.log(arr); // [ -10, -10, 2, 5 ]
    const n = arr.length;
    return Math.max(
        arr[0] * arr[1] * arr[n - 1], // Two smallest and the largest
        arr[n - 1] * arr[n - 2] * arr[n - 3] // Three largest
    );
}

console.log(maxProductOfThree([-10, -10, 5, 2])); // 500
console.log(maxProductOfThree([1, 10, 2, 6, 5, 3])); // 300

// Function to find the majority element in an array (appears more than n/2 times)
function majorityElement(arr) {
    let count = 0, candidate = null;
    for (const num of arr) {
        if (count === 0) {
            candidate = num;
        }
        count += (num === candidate) ? 1 : -1;
    }
    return arr.filter(num => num === candidate).length > arr.length / 2 ? candidate : null;
}

console.log(majorityElement([3, 3, 4, 2, 3, 3, 3])); // 3
console.log(majorityElement([1, 2, 3, 4])); // null

// Function to find the longest palindromic substring
function longestPalindrome(s) {
    let start = 0, maxLength = 0;

    const expandAroundCenter = (left, right) => {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return right - left - 1;
    };

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(i, i);
        const len2 = expandAroundCenter(i, i + 1);
        const len = Math.max(len1, len2);
        if (len > maxLength) {
            maxLength = len;
            start = i - Math.floor((len - 1) / 2);
        }
    }

    return s.substring(start, start + maxLength);
}

console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd")); // "bb"

// Function to find the maximum sum of a subarray (Kadane's Algorithm)
function maxSubarraySum(arr) {
    let maxSum = -Infinity, currentSum = 0;
    for (const num of arr) {
        currentSum = Math.max(num, currentSum + num);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}

console.log(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6
console.log(maxSubarraySum([1, 2, 3, 4, 5])); // 15

// Function to find the smallest window in a string containing all characters of another string
function minWindowSubstring(s, t) {
    const map = {};
    for (const char of t) {
        map[char] = (map[char] || 0) + 1;
    }

    let left = 0, right = 0, count = t.length, minLen = Infinity, start = 0;

    while (right < s.length) {
        if (map[s[right]] > 0) count--;
        map[s[right]] = (map[s[right]] || 0) - 1;
        right++;

        while (count === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                start = left;
            }
            map[s[left]]++;
            if (map[s[left]] > 0) count++;
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(start, start + minLen);
}

console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // "BANC"
console.log(minWindowSubstring("a", "a")); // "a"

// Adding a method to reverse a string
String.prototype.reverse = function () {
    return this.split('').reverse().join('');
};

console.log("hello".reverse()); // "olleh"

// Adding a method to check if a string contains only digits
String.prototype.isNumeric = function () {
    return /^\d+$/.test(this);
};

console.log("12345".isNumeric()); // true
console.log("123a5".isNumeric()); // false

// Adding a method to count the number of words in a string
String.prototype.wordCount = function () {
    return this.trim().split(/\s+/).length;
};

console.log("Hello world!".wordCount()); // 2
console.log("This is a test string.".wordCount()); // 5

// Adding a method to check if a string starts with a vowel
String.prototype.startsWithVowel = function () {
    return /^[aeiouAEIOU]/.test(this);
};

console.log("apple".startsWithVowel()); // true
console.log("banana".startsWithVowel()); // false

// Adding a method to remove all whitespace from a string
String.prototype.removeWhitespace = function () {
    return this.replace(/\s+/g, '');
};

console.log("Hello World".removeWhitespace()); // "HelloWorld"
console.log("   JavaScript   ".removeWhitespace()); // "JavaScript"

// Adding a method to find the longest word in a string
String.prototype.longestWord = function () {
    return this.split(/\s+/).reduce((longest, word) => word.length > longest.length ? word : longest, "");
};

console.log("The quick brown fox jumps over the lazy dog".longestWord()); // "jumps"

// Adding a method to check if a string is a valid email
String.prototype.isValidEmail = function () {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(this);
};

console.log("test@example.com".isValidEmail()); // true
console.log("invalid-email".isValidEmail()); // false

// Adding a method to count the occurrences of a character in a string
String.prototype.charCount = function (char) {
    return [...this].filter(c => c === char).length;
};

console.log("hello world".charCount('l')); // 3
console.log("javascript".charCount('a')); // 2

// Adding a method to check if a string is a valid palindrome
String.prototype.isPalindrome = function () {
    const cleanedStr = this.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
};

console.log("A man, a plan, a canal: Panama".isPalindrome()); // true
console.log("hello".isPalindrome()); // false

// Adding a method to convert a string to camelCase
String.prototype.toCamelCase = function () {
    return this.toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, char) => char.toUpperCase());
};

console.log("hello world example".toCamelCase()); // "helloWorldExample"
console.log("convert_to_camel_case".toCamelCase()); // "convertToCamelCase"

// Adding a method to find all substrings of a string
String.prototype.allSubstrings = function () {
    const substrings = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            substrings.push(this.slice(i, j));
        }
    }
    return substrings;
};

console.log("abc".allSubstrings()); // ['a', 'ab', 'abc', 'b', 'bc', 'c']

// Adding a method to check if a string is a valid URL
String.prototype.isValidURL = function () {
    const urlRegex = /^(https?:\/\/)?([\w-]+(\.[\w-]+)+)(\/[\w-]*)*(\?.*)?(#.*)?$/;
    return urlRegex.test(this);
};

console.log("https://example.com".isValidURL()); // true
console.log("invalid-url".isValidURL()); // false

// Adding a method to count the number of vowels in a string
String.prototype.vowelCount = function () {
    const vowels = 'aeiouAEIOU';
    return [...this].filter(char => vowels.includes(char)).length;
};

console.log("hello world".vowelCount()); // 3
console.log("javascript".vowelCount()); // 3

// Adding a method to find the shortest word in a string
String.prototype.shortestWord = function () {
    return this.split(/\s+/).reduce((shortest, word) => word.length < shortest.length ? word : shortest, this.split(/\s+/)[0]);
};

console.log("The quick brown fox jumps over the lazy dog".shortestWord()); // "The"

// Adding a method to check if a string contains balanced parentheses
String.prototype.isBalanced = function () {
    const stack = [];
    for (const char of this) {
        if (char === '(') stack.push(char);
        else if (char === ')') {
            if (stack.length === 0) return false;
            stack.pop();
        }
    }
    return stack.length === 0;
};

console.log("(a + b) * (c - d)".isBalanced()); // true
console.log("(a + b * (c - d)".isBalanced()); // false

// Adding a method to find the most frequent character in a string
String.prototype.mostFrequentChar = function () {
    const charCount = {};
    for (const char of this) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return Object.keys(charCount).reduce((a, b) => charCount[a] > charCount[b] ? a : b);
};

console.log("hello world".mostFrequentChar()); // 'l'
console.log("javascript".mostFrequentChar()); // 'a'

// Adding a method to check if a string is a valid hexadecimal number
String.prototype.isHexadecimal = function () {
    return /^[0-9a-fA-F]+$/.test(this);
};

console.log("1a3f".isHexadecimal()); // true
console.log("xyz".isHexadecimal()); // false

// Adding a method to reverse the words in a string
String.prototype.reverseWords = function () {
    return this.split(' ').reverse().join(' ');
};

console.log("hello world".reverseWords()); // "world hello"
console.log("JavaScript is fun".reverseWords()); // "fun is JavaScript"

// Adding a method to check if a string contains only unique characters
String.prototype.hasUniqueChars = function () {
    const charSet = new Set(this);
    return charSet.size === this.length;
};

console.log("abcdef".hasUniqueChars()); // true
console.log("hello".hasUniqueChars()); // false

// Adding a method to find the longest repeating substring in a string
String.prototype.longestRepeatingSubstring = function () {
    let longest = "";
    for (let i = 0; i < this.length; i++) {
        for (let j = i + 1; j <= this.length; j++) {
            const substr = this.slice(i, j);
            if (this.indexOf(substr, i + 1) !== -1 && substr.length > longest.length) {
                longest = substr;
            }
        }
    }
    return longest;
};

console.log("banana".longestRepeatingSubstring()); // "ana"
console.log("abcdef".longestRepeatingSubstring()); // ""

// ========================
// Adding a method to find the longest common prefix of an array of strings
String.prototype.longestCommonPrefix = function (arr) {
    if (arr.length === 0) return "";
    let prefix = this;
    for (const str of arr) {
        while (str.indexOf(prefix) !== 0) {
            prefix = prefix.slice(0, -1);
        }
    }
    return prefix;
};

console.log("flower".longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log("dog".longestCommonPrefix(["dog", "racecar", "car"])); // ""
console.log("abc".longestCommonPrefix(["abc", "abcd", "abcde"])); // "abc"


// Polyfill for Promise.all
Promise.myAll = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        let results = [];
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = value;
                    completedPromises++;
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                })
                .catch(reject);
        });

        if (promises.length === 0) {
            resolve(results);
        }
    });
};

// Example usage
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'foo');
});

Promise.myAll([promise1, promise2, promise3])
    .then(results => console.log(results)) // [3, 42, 'foo'] 
    .catch(error => console.error(error));

// Polyfill for Promise.any
Promise.myAny = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        let errors = [];
        let rejectedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(resolve)
                .catch(error => {
                    errors[index] = error;
                    rejectedPromises++;
                    if (rejectedPromises === promises.length) {
                        reject(new AggregateError(errors, "All promises were rejected"));
                    }
                });
        });

        if (promises.length === 0) {
            reject(new AggregateError([], "All promises were rejected"));
        }
    });
};

// Polyfill for Promise.race
Promise.myRace = function (promises) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            return reject(new TypeError("Argument must be an array"));
        }

        promises.forEach(promise => {
            Promise.resolve(promise).then(resolve).catch(reject);
        });
    });
};

// Polyfill for Promise.allSettled
Promise.myAllSettled = function (promises) {
    return new Promise((resolve) => {
        if (!Array.isArray(promises)) {
            throw new TypeError("Argument must be an array");
        }

        let results = [];
        let completedPromises = 0;

        promises.forEach((promise, index) => {
            Promise.resolve(promise)
                .then(value => {
                    results[index] = { status: "fulfilled", value };
                })
                .catch(reason => {
                    results[index] = { status: "rejected", reason };
                })
                .finally(() => {
                    completedPromises++;
                    if (completedPromises === promises.length) {
                        resolve(results);
                    }
                });
        });

        if (promises.length === 0) {
            resolve(results);
        }
    });
};

// Example usage
const promise1 = Promise.resolve(3);
const promise2 = Promise.reject("Error");
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, "foo"));

Promise.myAny([promise1, promise2, promise3])
    .then(result => console.log("myAny:", result)) // 3
    .catch(error => console.error("myAny:", error));

Promise.myRace([promise1, promise3])
    .then(result => console.log("myRace:", result)) // 3
    .catch(error => console.error("myRace:", error));

Promise.myAllSettled([promise1, promise2, promise3])
    .then(results => console.log("myAllSettled:", results));
// [
//   { status: "fulfilled", value: 3 },
//   { status: "rejected", reason: "Error" },
//   { status: "fulfilled", value: "foo" }
// ]

// Problem: Implement a function to solve the "N-Queens Problem"
// Explanation: Place N queens on an NxN chessboard such that no two queens threaten each other.
// Implementation:
function solveNQueens(n) {
    const board = Array.from({ length: n }, () => Array(n).fill('.'));
    const results = [];

    const isSafe = (row, col) => {
        for (let i = 0; i < row; i++) {
            if (board[i][col] === 'Q') return false;
        }
        for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    };

    const backtrack = (row) => {
        if (row === n) {
            results.push(board.map(row => row.join('')));
            return;
        }
        for (let col = 0; col < n; col++) {
            if (isSafe(row, col)) {
                board[row][col] = 'Q';
                backtrack(row + 1);
                board[row][col] = '.';
            }
        }
    };

    backtrack(0);
    return results;
}

console.log(solveNQueens(4));
// Output: [
//   [".Q..", "...Q", "Q...", "..Q."],
//   ["..Q.", "Q...", "...Q", ".Q.."]
// ]

// Problem: Find the maximum area of water that can be contained
// Explanation: Given an array of heights, find two lines that together with the x-axis form a container, such that the container contains the most water.
// Implementation:
function maxArea(heights) {
    let left = 0, right = heights.length - 1, maxArea = 0;

    while (left < right) {
        const width = right - left;
        const height = Math.min(heights[left], heights[right]);
        maxArea = Math.max(maxArea, width * height);

        if (heights[left] < heights[right]) {
            left++;
        } else {
            right--;
        }
    }

    return maxArea;
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // Output: 49

// Problem: Implement a Trie (Prefix Tree)
// Explanation: A Trie is a tree-like data structure used for efficient retrieval of strings, often used in autocomplete systems.
// Implementation:
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }

    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEndOfWord = true;
    }

    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return node.isEndOfWord;
    }

    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) return false;
            node = node.children[char];
        }
        return true;
    }
}

const trie = new Trie();
trie.insert("apple");
console.log(trie.search("apple")); // true
console.log(trie.search("app")); // false
console.log(trie.startsWith("app")); // true
trie.insert("app");
console.log(trie.search("app")); // true