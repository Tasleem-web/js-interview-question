// // this keywords----------------------------------------------------------------
// 'use strict';
// // when we use 'use strict' keyword then inside function this keyword will be undefined
// console.log(this);

// function x() {
//   console.log(this)
// }

// x();

// window.x();
// // when anywhere in the program this keyword is null or undefined, this keyword will be replaced with globalObject only in non-strict mode and this is called subsitution in javascript

// const obj = {
//   a: 10,
//   x: function () {
//     console.log(this);
//   }
// }

// obj.x(); // this keyword will refer to obj why becuase obj is calling the function x that is why this keyword will refer to obj

// call in javascript
// call method in javascript is used to call a function with a specific this value

// const student = {
//   name: "Tasleem",
//   printName: function () {
//     console.log(`${this.name}`)
//   }
// }

// student.printName();

// const student2 = {
//   name: "Arshi"
// }

// student.printName.call(student2);


// arrow function
// const obj1 = {
//   a: 10,
//   x: function () {
//     const y = () => {
//       console.log(this)
//     }
//     y();
//   }
// }

// obj1.x();

// arrow function
const obj = {
  a: 10,
  x: function () {
    const y = () => {
      console.log("y", this)
    }
    y();
  },
  z: () => {
    console.log("z", this)
  }
}


obj.x(); 
obj.z()

// inside DOM this keyword will be where it called like if I alert on html button element then this will be htmlelement only

// -----------------------------
// function greet(greeting, puntuation) {
//   console.log(`${greeting}${this.name}${puntuation}`)
// }

// const person = {
//   name: "Tasleem"
// }

// const person2 = {
//   name: 'M'
// }

// greet.call(person, 'Hello,', '!');
// greet.apply(person2, ['hello, is this ', '?'])

// function greet(greeting, puntuation) {
//   console.log(greeting + ' ' + this.name + ' ' + puntuation)
// }

// const person = {
//   name: "Epam"
// }

// const bindFn = greet.bind(person, 'Hello');
// person.name = 'Tasleem'
// bindFn('!!!'); // Hello, Epam!

// var obj = {
//   value: 100
// }

// function originalFunction(a, b) {
//   console.log(`Original function: ${this.value} ${a} ${b}`);
// }

// const boundFn = originalFunction.bind(obj, 30);

// originalFunction = function (a, b, c) {
//   console.log(`Modified function: ${a} ${b} ${c}`);
// }

// const boundFn1 = originalFunction.bind(obj, 40)
// boundFn1(50, 60)
// boundFn(20)


