function removeDup(str) {
    let newArr = [];
    newArr.push(str[0]);
    for (let i = 1; i < str.length; i++) {
        if (!((str[i - 1] === str[i]) || (str[i] === str[i + 1]))) {
            newArr.push(str[i])
        }
    }
    return newArr.join("")
}

// console.log(removeDup('j')); //acb
// console.log(removeDup('azxxxzy')); //acb
console.log(removeDup('aaaacddddcappp')); //acb


// a == b

// function P(n = 0) {
//     if (n === 1) {
//         return Promise.resolve(1);
//     }
//     return Promise.reject(0);
// }

// P(1)
//     .then((x) => {
//         console.log(x);  // 1
//         return P(0);
//     })
//     .then(() => {
//         console.log('hello');
//     })
//     .catch((e) => {
//         console.log(e); // 0
//     })
//     .then(() => {
//         console.log('world!');
//     });


