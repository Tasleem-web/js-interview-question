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

/**
 * Problem: Implement a Least Recently Used (LRU) Cache
 * Explanation: Design a data structure that supports get and put operations in O(1) time.
 */
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return - 1;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    put(key, value) {
        if (this.cache.has(key)) {
            this.cache.delete(key);
        }
        this.cache.set(key, value);
        if (this.cache.size > this.capacity) {
            const firstKey = this.cache.keys().next().value;
            this.cache.delete(firstKey);
        }
    }

}

// Example usage:
const lru = new LRUCache(2);
lru.put(1, 1);
lru.put(2, 2);
console.log(lru.get(1)); // 1
lru.put(3, 3); // evicts key 2
console.log(lru.get(2)); // -1
lru.put(4, 4); // evicts key 1
console.log(lru.get(1)); // -1
console.log(lru.get(3)); // 3
console.log(lru.get(4)); // 4

class LRUCache {
    constructor(limit = 10) {
        this.cache = new Map();
        this.limit = limit;
    }

    // get
    get(key) {
        if (!this.cache.has(key)) return null;
        const value = this.cache.get(key);
        this.cache.delete(key);
        this.cache.set(key, value);
        return value;
    }

    // set
    set(key, value) {
        if (this.cache.size >= this.limit) {
            const oldestKey = this.cache.keys().next().value;
            console.log(oldestKey)
            this.cache.delete(oldestKey);
        }
        this.cache.set(key, value);
    }

    has(key) {
        if (!key) return null;
        return this.cache.get(key) ? true : false;
    }
}

function customkeyGenerator(args) {
    return args.map(arg => typeof arg === 'object' ? JSON.stringify(arg) : arg).join('-');
}

const memoizeWithLRUCache = (fn, limit) => {
    const cache = new LRUCache(limit);
    return (...args) => {
        const key = customkeyGenerator(args);
        if (cache.has(key)) {
            console.log('From Cache...');
            return cache.get(key);
        } else {
            console.log('Computing...');
            const result = fn(...args);
            cache.set(key, result);
            return result;
        }
    }
}

const slowFunction = (num) => {
    for (let index = 0; index < 1e6; index++) { }
    return num * 2
}

const memoizedFunction = memoizeWithLRUCache(slowFunction, 5)
console.log(memoizedFunction(5));
console.log(memoizedFunction(5));

/**
 * Problem: Find all subsets (the power set) of a given array
 * Explanation: Return all possible subsets of the array (including the empty set and the set itself).
 */
function subsets(nums) {
    const result = [];
    const backtrack = (path, start) => {
        result.push([...path]);
        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]);
            backtrack(path, i + 1);
            path.pop();
        }
    };
    backtrack([], 0);
    return result;
}

// Example usage:
console.log(subsets([1, 2, 3]));
// Output: [[], [1], [1,2], [1,2,3], [1,3], [2], [2,3], [3]]

/**
 * Problem: Merge Intervals
 * Explanation: Given an array of intervals, merge all overlapping intervals.
 */
function mergeIntervals(intervals) {
    if (!intervals.length) return [];
    intervals.sort((a, b) => a[0] - b[0]);
    const merged = [intervals[0]];
    for (let i = 1; i < intervals.length; i++) {
        const prev = merged[merged.length - 1];
        const curr = intervals[i];
        if (curr[0] <= prev[1]) {
            prev[1] = Math.max(prev[1], curr[1]);
        } else {
            merged.push(curr);
        }
    }
    return merged;
}

// Example usage:
console.log(mergeIntervals([[1, 3], [2, 6], [8, 10], [15, 18]]));
// Output: [[1,6],[8,10],[15,18]]

/**
 * Problem: Find the minimum in a rotated sorted array
 * Explanation: Given a rotated sorted array, find the minimum element.
 */
function findMin(nums) {
    let left = 0, right = nums.length - 1;
    while (left < right) {
        const mid = Math.floor((left + right) / 2);
        if (nums[mid] > nums[right]) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }
    return nums[left];
}

// Example usage:
console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0

/**
 * Problem: Implement a Binary Search Tree (BST) with insert and search
 */
class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    insert(val) {
        const insertNode = (node, val) => {
            if (!node) return new TreeNode(val);
            if (val < node.val) node.left = insertNode(node.left, val);
            else node.right = insertNode(node.right, val);
            return node;
        };
        this.root = insertNode(this.root, val);
    }

    search(val) {
        let node = this.root;
        while (node) {
            if (val === node.val) return true;
            node = val < node.val ? node.left : node.right;
        }
        return false;
    }
}

// Example usage:
const bst = new BST();
bst.insert(5);
bst.insert(3);
bst.insert(7);
console.log(bst.search(3)); // true
console.log(bst.search(8)); // false

/**
 * Problem: Retry a Promise-returning function up to N times if it fails.
 * Solution:
 */
function retryPromise(fn, retries = 3, delay = 100) {
    return new Promise((resolve, reject) => {
        function attempt(count) {
            fn()
                .then(resolve)
                .catch(err => {
                    if (count <= 0) return reject(err);
                    setTimeout(() => attempt(count - 1), delay);
                });
        }
        attempt(retries);
    });
}

// Example usage:
let count = 0;
function unreliable() {
    return new Promise((resolve, reject) => {
        count++;
        if (count < 3) reject("fail");
        else resolve("success");
    });
}
retryPromise(unreliable, 5, 50).then(console.log).catch(console.error); // "success"

/**
 * Problem: Sequentially run an array of promise-returning functions.
 * Solution:
 */
function runSequentially(fns) {
    return fns.reduce(
        (prev, fn) => prev.then(res => fn().then(r => [...res, r])),
        Promise.resolve([])
    );
}

// Example usage:
const p1 = () => Promise.resolve(1);
const p2 = () => new Promise(res => setTimeout(() => res(2), 100));
const p3 = () => Promise.resolve(3);
runSequentially([p1, p2, p3]).then(console.log); // [1, 2, 3]

/**
 * Problem: Timeout a promise if it takes too long.
 * Solution:
 */
function promiseTimeout(promise, ms) {
    return Promise.race([
        promise,
        new Promise((_, reject) => setTimeout(() => reject(new Error("Timeout")), ms))
    ]);
}

// Example usage:
promiseTimeout(new Promise(res => setTimeout(() => res("done"), 100)), 200)
    .then(console.log); // "done"
promiseTimeout(new Promise(res => setTimeout(() => res("done"), 200)), 100)
    .catch(console.error); // Error: Timeout

/**
 * Problem: Limit concurrency of promise-returning functions.
 * Solution:
 */
function promisePool(tasks, limit) {
    let i = 0;
    const results = [];
    const run = () => {
        if (i >= tasks.length) return Promise.resolve();
        const idx = i++;
        return tasks[idx]().then(res => {
            results[idx] = res;
            return run();
        });
    };
    return Promise.all(Array.from({ length: Math.min(limit, tasks.length) }, run)).then(() => results);
}

// Example usage:
const tasks = [
    () => Promise.resolve(1),
    () => new Promise(res => setTimeout(() => res(2), 100)),
    () => Promise.resolve(3)
];
promisePool(tasks, 2).then(console.log); // [1,2,3]


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

// Array chunks
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

// 
function maxDigitSumLessThan(num) {
    let maxSum = 0;
    let result = num - 1;

    for (let i = num - 1; i > 0; i--) {
        let sum = i.toString().split('').reduce((acc, digit) => acc + parseInt(digit), 0);
        if (sum > maxSum) {
            maxSum = sum;
            result = i;
        }
    }

    return result;
}

// Example usage:
let number = 899;
let result = maxDigitSumLessThan(number);
console.log(`The largest number less than ${number} with the maximum digit sum is ${result}`);


///
const route = {
    '/': () => document.body.innerHTML = '<h1>Home</h1>',
    'about': () => document.body.innerHTML = '<h1>About</h1>',
    'contact': () => document.body.innerHTML = '<h1>Contact</h1>',
}


function router() {
    const path = location.hash.replace('#', '') || '/';
    if (route[path]) route[path]();
    else document.body.innerHTML = '<h1>404 - Not found</h1>'
}

// window.addEventListener('hashchange', router);
window.addEventListener('load', router);

///
const callApi = () => console.log('API called');

let debounceTimer;
const debounce = (callback, delay) => {
    window.clearTimeout(debounceTimer);
    debounceTimer = window.setTimeout(callback, delay);
}


// <input id="input" />
input.addEventListener("keydown", debounce(callApi, 3000));

///
function areAnagrams(str1, str2) {
    return str1.length === str2.length ? str1.split("").sort().join("") === str2.split("").sort().join("") : false;
}

console.log(areAnagrams("listen", "silent")); // Output: true
console.log(areAnagrams("hello", "world"));   // Output: false

//
class TimeTolive {
    constructor(ttl) {
        this.ttl = ttl;
        this.cache = new Map();
    }

    //set
    set(key, value) {
        const now = Date.now();
        const expiry = now + this.ttl;
        this.cache.set(key, { value, expiry });
    }

    //get
    get(key) {
        const now = Date.now();
        const cachedItem = this.cache.get(key);

        if (cachedItem && cachedItem.expiry > now) {
            return cachedItem.value;
        } else {
            this.cache.delete(key);
            return null
        }
    }

    delete(key) {
        this.cache.delete(key);
    }
}


const cache = new TimeTolive(5000); // TTL of 5 seconds
cache.set('foo', 'bar');
console.log(cache.get('foo')); // Output: 'bar'
setTimeout(() => console.log(cache.get('foo')), 6000); // Output: null (expired)

// ITransition

class TTLCache {
  constructor() {
    this.map = new Map();
  }

  set(key: string, value: any, ttlMs: number) {
    const now = new Date().getTime();
    console.log(now + ttlms);
    this.map.add(key, { value, now });
  }

  get(key: string) {
    const currentTime = new Date().getTime();
    if (this.map.has(key) && map.get(key).now > currentTime) {
    }
  }

  delete(key: string) {
    // if (map.has(key)) return map.get(key);
    // else{
    map.delete(key);
    // }
  }
}

let cache = new TTLCache();

cache.set("user:123", { name: "Alice" }, 5000); // live 5 seconds
cache.get("user:123"); // → { name: "Alice" }
setTimeout(() => cache.get("user:123"), 6000); // → undefined (expired)


//
if (!String.prototype.capitalize) {
    String.prototype.capitalize = function () {
        // 1. solutions
        // return this.replace(/(\b\w)/g, (match) => match.toUpperCase())

        // 2.solutions
        return this.split(' ').map(word => word.charAt(0).toUpperCase() + slice(1)).join(" ");

    }
}
console.log("this is epam system".capitalize());

// composition function

const add = x => x + 1;
const multiply = x => x * 2;
const subtract = x => x - 3;

function composition(...fns) {
    return function final(initialValue) {
        let result = initialValue;
        for (const fn of fns) {
            result = fn(result)
        }
        return result;
    }
}
const result = composition(add, multiply, subtract)(2);
console.log(result);

//
function deepCopy(obj, map = new Map()) {
    // If the object is a primitive type, return it
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    // if the object is already exists
    if (map.has(obj)) {
        return map.get(obj);
    }

    // if the obj is Array
    if (obj instanceof Array) {
        const copy = [];
        obj.forEach((item, index) => {
            copy[index] = deepCopy(item, map);
        });
        map.set(obj, copy);
        return copy;
    }

    // if the obj is object
    if (obj instanceof Object) {
        const copy = {};
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                copy[key] = deepCopy(obj[key], map);
            }
        }
        map.set(obj, copy);
        return copy;
    }

    // if the obj is Date
    if (obj instanceof Date) {
        return new Date(obj);
    }

    // if the obj is Function
    if (typeof obj == 'function') {
        const funcCopy = function (...args) {
            return obj.apply(this, args);
        }
        map.set(obj, funcCopy);
        return funcCopy;
    }

    // if the obj is RegExp
    if (obj instanceof RegExp) {
        map.set(obj, new RegExp(obj));
        return new RegExp(obj);
    }

    // error if object is not support
    throw new Error('Object type is not supported');
}



const original = {
    name: 'Epam',
    age: 30,
    address: {
        city: 'Minsk',
        street: 'Kuprevicha'
    },
    employees: ['Alex', 'John', 'Jane'],
    date: new Date(),
    greet: function () {
        console.log(`Company name: ${this.name}`);
    }
}

const copy = deepCopy(original);
console.log(copy);
copy.greet();

//

function findDuplicates(arr) {
    const set = new Set();
    let dupSet = new Set();
    for (let num of arr) {
        if (!set.has(num)) {
            set.add(num)
        } else {
            dupSet.add(num)
        }
    }
    return [...dupSet];
}

console.log(findDuplicates([1, 2, 3, 2, 4, 5, 6, 3]));

//

const flatten = (arr) => {
    return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

const arr = [1, [2, [3, 4, [6, [7, [8, [9, [10]]]]]]], 5];
const flt = flatten(arr).sort((a, b) => a - b);
console.log(flt)

///
class QueryBuilder {
    constructor() {
        this.query = {};
    }

    select(fields) {
        this.query.select = fields;
        return this;
    }

    from(table) {
        this.query.from = table;
        return this;
    }

    where(condition) {
        this.query.where = condition;
        return this;
    }

    orderBy(field, direction) {
        this.query.orderBy = { field, direction };
        return this;
    }

    build() {
        return this.query;
    }
}

// Usage
const query = new QueryBuilder()
    .select(['name', 'age'])
    .from('users')
    .where({ age: { $gt: 18 } })
    .orderBy('name', 'asc')
    .build();

console.log(query);
// Output: { select: ['name', 'age'], from: 'users', where: { age: { $gt: 18 } }, orderBy: { field: 'name', direction: 'asc' } }

// using functional programming

function QueryBuilder() {
    this.query = {};
}

QueryBuilder.prototype.select = function (fields) {
    this.query.select = fields;
    return this;
};

QueryBuilder.prototype.from = function (table) {
    this.query.from = table;
    return this;
};

QueryBuilder.prototype.where = function (condition) {
    this.query.where = condition;
    return this;
};

QueryBuilder.prototype.orderBy = function (field, direction) {
    this.query.orderBy = { field: field, direction: direction };
    return this;
};

QueryBuilder.prototype.build = function () {
    return this.query;
};

// Usage
var query = new QueryBuilder()
    .select(['name', 'age'])
    .from('users')
    .where({ age: { $gt: 18 } })
    .orderBy('name', 'asc')
    .build();

console.log(query);
// Output: { select: ['name', 'age'], from: 'users', where: { age: { $gt: 18 } }, orderBy: { field: 'name', direction: 'asc' } }


////

function digitSum(num) {
    return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
}

// Example usage:
let number = 999; // You can change this to any number
console.log(`The digit sum of ${number} is ${digitSum(number)}`);

function largestNumberWithMaxDigitSum(digits) {
    let number = '9'.repeat(digits);
    return parseInt(number);
}

// Example usage:
let digits = 3; // Number of digits
let largestNumber = largestNumberWithMaxDigitSum(digits);
console.log(`The largest number with ${digits} digits is ${largestNumber}`);
console.log(`The digit sum of ${largestNumber} is ${digitSum(largestNumber)}`);

//

// Creating a dedicated web worker
const worker = new Worker('./worker.js');

// Sending a message to the worker
worker.postMessage('Hello, Worker!');

// Receiving a message from the worker
worker.onmessage = function (event) {
    console.log('Message from Worker:', event.data);
};

//
// function memoise(fn) {
//     const cache = new Map();

//     return function(...args){
//      const key = JSON.stringify(args);
//         if(cache.has(key)){
//             console.log("cache...")
//             return cache.get(key);
//         }else{
//         const result = fn(...args);
//             cache.set(key, result)
//             console.log('recalculating...')
//             return result
//         }
//     }
// }

// const add = (x, y) => x+y;
// const memoizeFn = memoise(add)
// console.log(memoizeFn(5,5))
// console.log(memoizeFn(5,5))


function memoizeFn(fn) {
    const cache = new Map();
    return function (...args) {
        const key = JSON.stringify(args);

        if (cache.has(key)) {
            console.log('from cache...');
            return cache.get(key);
        } else {
            const result = fn(...args);
            cache.set(key, result);
            console.log('computing result...');
            return result;
        }
    }
}


const add = (x, y) => x + y;
const memoize = memoizeFn(add);
console.log(memoize(1, 2)); // computed value
console.log(memoize(1, 2)); // cache value
console.log(memoize(5, 10)); // computed valu
console.log(memoize(5, 10));// cache value

//

const pipe = (...fns) => (initialValue) => fns.reduce((acc, fn) => fn(acc), initialValue);
const add = (x) => x + 2; // 10 +2 =12
const sub = (x) => x - 3; // 12 -3 = 9
const mul = (x) => x * 2; // 9 * 2 = 18

const pipeFn = pipe(add, sub, mul)(10);

console.log(pipeFn);

///
class PubSub {
    // constructor for subscriber\
    constructor() {
        this.subscribers = {};
    }

    // subscriber, event and callback
    subscriber(event, callback) {
        if (!this.subscribers[event]) {
            this.subscribers[event] = [];
        }
        this.subscribers[event].push(callback);
    }

    // unsubscriber
    unsubscriber(event, callback) {
        if (!this.subscribers[event]) return;
        this.subscribers[event] = this.subscribers[event].filter(cb => cb !== callback);
    }

    publish(event, data) {
        if (!this.subscribers[event]) return;
        this.subscribers[event].forEach(cb => cb(data))

    }
}

const pubSub = new PubSub();
const onMessage = (data) => console.log(`Recieved message ${data}`);
const event = 'message';
pubSub.subscriber(event, onMessage)
pubSub.publish(event, 'Hello PubSub');

pubSub.unsubscriber(event, onMessage);
pubSub.publish(event, 'Hello again');

///
const express = require("express");

const app = express();
const port = 4200;

const rateLimiter = (req, res, next) => {
    const userIP = req.ip;
    const currentTime = Date.now();
    const windowTime = 60000 // 1 min
    const maxRequest = 5;


    if (!global.rateRequestCache) global.rateRequestCache = {};

    if (!global.rateRequestCache[userIP]) global.rateRequestCache[userIP] = [];

    global.rateRequestCache[userIP] = global.rateLimiter[userIP]
        .filter(timeStamp => currentTime - timeStamp < windowTime)

    if (global.rateRequestCache[userIP].length >= maxRequest) {
        return res.status(429).send("Too many request");
    }
    global.rateLimiter[userIP].push(currentTime);

    next();
}

///
// using recursion

async function retry(fn, retries = 3, delay = 1000) {
    try {
        return await fn();
    } catch (error) {
        console.log(`Attempt failed: ${error.message}`);
        if (retries === 1) return;
        await new Promise(res => setTimeout(res, delay));
        return retry(fn, retries - 1, delay * 2);
    }
}

// Example usage
retry(() => {
    console.log('Trying...');
    throw new Error('Failed attempt');
})
    .then(() => console.log('Success'))
    .catch(error => console.error('Failed after 3 retries:', error));

///
const routes = {
    '/': () => console.log('Home'),
    '/about': () => console.log('About'),
    '/contact': () => console.log('Contact'),
}

function router() {
    const path = window.location.hash.replace('#', '') || '/';
    if (routes[path]) routes[path]();
    else console.log('404 Page');
}


window.addEventListener('hashchange', router);
window.addEventListener('load', router);

// Usage: Change the URL hash to #/about or #/contact

//
function toBinary(number) {
    return (number >>> 0).toString(2).padStart(32, '0');
}

let integer = 1;
let binary = toBinary(integer);
console.log(integer, binary)
integer = integer << 1;
binary = toBinary(integer);
console.log(integer, binary)

// removeAdjacentDuplicates
function removeAdjacentDuplicates(str) {
    const stack = [];
    for (const char of str) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();
        } else {
            stack.push(char);
        }
    }
    return stack.join('');
}
console.log(removeAdjacentDuplicates("abbaca")); // Output: "ca"