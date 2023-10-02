"use strict";
// ========== terminal code
// initial = tsc --init
// compile ts to js = tsc index.ts
// compile all files = tsc
// always compile = tsc -w index.ts
// always compile all files = tsc -w
// ========== type annotation
const lol = 13;
console.log('test', lol);
let gameOver = false;
gameOver = true; // ✔️
// gameOver = 'true'; // ❌
// ========== type inference (auto decide the :type)
let movieTitle = 'tron';
// ========== any type
let thing = 'hello';
thing = false; // ✔️
thing = 1; // ✔️
thing(); // ✔️
thing.toUpperCase(); // ✔️
const movies = ['oppenheimer', 'barbie', 'john wick'];
// let foundMovie: string;
let foundMovie; //(auto decide as any type)
movies.map((item) => {
    if (item === 'oppenheimer') {
        foundMovie = 'oppenheimer';
    }
});
// foundMovie(); // ✔️
// foundMovie = false; // ✔️
// ========== function param types
// by default, type of param is any
const greetParan = (name) => {
    return `Hi, ${name}!`;
};
greetParan('danis'); // ✔️
// greetParan(3); // ❌
const saveUser = (name, age, isAdmin) => { };
saveUser('Danis', 99, true); // ✔️
// saveUser('Danis', 99, true, 'vsd'); // ❌
// saveUser('vs'); // ❌
// saveUser(231, false, 'vs'); // ❌
// ========== default param
const greetDefault = (name = 'stranger') => {
    return `Hi, ${name}!`;
};
greetDefault(); // ✔️
greetDefault('danis'); // ✔️
// greet(23); // ❌
// ========== function return types
const greet = (name = 'stranger') => {
    return `Hi, ${name}!`; // ✔️
};
const square1 = (num) => {
    // return 'not a number'; // ❌
    return num * num; // ✔️
};
// TS can infer the return type in this case as number.
// const square2 = (num) => {
//   return num * num;
// };
// ========== anonymous function contextual typing
const color = ['black', 'white', 'blue'];
// color.map((item) => {  // ✔️
color.map((item) => {
    // ✔️
    return item.toUpperCase(); // ✔️
    // return item.toFixed(2); // ❌
});
// ========== the void type
// void type used when a function doesn't return anything
const printTwice = (message) => {
    console.log(message); // ✔️
    console.log(message); // ✔️
    // return 'something'; // ❌
};
// ========== the never type
// type never used when we don't want to return anything
const makeError = (message) => {
    throw new Error(message);
    // return message; // ❌
};
const gameLoop = () => {
    while (true) {
        console.log('game loop running');
    }
    // return true; // ❌
};
// ========== object type
const printName1 = (person) => {
    console.log(`Hello ${person.first} ${person.last}`);
};
printName1({
    first: 'Danis',
    last: 'Zaidan',
    parent: { mom: 'lorem', dad: 'ipsum' },
});
let coordinate = {
    x: 312,
    y: 865,
};
const randomCoordinate = () => {
    return {
        x: Math.random(),
        y: Math.random(),
    };
};
// ========== excess properties
const printName2 = (person) => {
    console.log(`Hello ${person.first} ${person.last}`);
};
printName2({ first: 'Danis', last: 'Zaidan' }); // ✔️
const personPrintName2 = { first: 'Danis', last: 'Zaidan', age: 423 };
printName2(personPrintName2); // ✔️ ???
const age = 34423;
const printName = (person) => {
    console.log(`Hello ${person.name} ${person.age}`);
};
printName({
    name: 'Danis',
    age: 86889,
    parent: { mom: 'lorem', dad: 'ipsum' },
});
let coordinate1 = { x: 312, y: 865 };
const randomCoordinate2 = () => {
    return { x: Math.random(), y: Math.random() };
};
const doublePoint = (point) => {
    return { x: point.x * 2, y: point.y * 2 };
};
let coordinate2 = { x: 312, y: 865, z: 342 }; // ✔️
let coordinate3 = { x: 312, y: 865 }; // ✔️
const user = {
    id: 231231,
    username: 'lorem',
};
const happyFace = {
    radius: 432,
    color: 'blue',
};
const happyFaceBig = {
    radius: 432,
    color: 'blue',
    isBig: true,
};
// ========== array types
let names = ['lorem', 'ipsum'];
let ages = [312, 412];
// alternate syntax
let names2 = ['lorem', 'ipsum'];
let ages2 = [312, 412];
names.push('vsvd'); // ✔️
const coords1 = [];
const coords2 = [];
coords2.push({ x: 8, y: 9 });
// ========== multidimensional array types
const board = [
    ['x', 'y', 'z'],
    ['x', 'y', 'z'],
    ['x', 'y', 'z'],
];
// ========== union type
const guessAge = (age) => {
    return `your age is ${age}`;
};
guessAge(321); // ✔️
guessAge('523452'); // ✔️
let coordinate4 = { x: 423, y: 8756 }; // ✔️
coordinate4 = { lat: 3423, long: 3424 }; // ✔️
// ========== type narrowing
const calculateTax = (price, tax) => {
    if (typeof price === 'string') {
        price = parseFloat(price.replace('$', ''));
    }
    else {
        return price * tax;
    }
};
calculateTax(45, 0.7); // ✔️
calculateTax('$45', 0.7); // ✔️
// ========== union type and array
const stuff = [1, 2, 3, '4'];
// ========== literal types
let zero = 0;
// zero = 2; // ❌
const giveAnswer = (answer) => {
    return `the answer is ${answer}`;
};
giveAnswer('yes'); // ✔️
let moodToday = 'happy'; // ✔️
// moodToday = 'angry'; // ❌
// ========== tuples
// fixed length, order, type
let myTuple;
myTuple = [23414, 'lorem']; // ✔️
// myTuple = ['lorem', 23414]; // ❌
// myTuple = [23414, 'lorem', 423]; // ❌
// ========== enum
var OrderStatus;
(function (OrderStatus) {
    OrderStatus[OrderStatus["PENDING"] = 0] = "PENDING";
    OrderStatus[OrderStatus["SHIPED"] = 1] = "SHIPED";
    OrderStatus[OrderStatus["DELIVERED"] = 2] = "DELIVERED";
    OrderStatus[OrderStatus["RETURNED"] = 3] = "RETURNED";
})(OrderStatus || (OrderStatus = {}));
const myStatus = OrderStatus.DELIVERED;
const isDelivered = (status) => {
    return status === OrderStatus.DELIVERED;
};
isDelivered(OrderStatus.RETURNED);
const person = {
    id: 342342,
    name: 'Danis',
    age: 13523,
    sayHi: () => '',
};
const pakun = {
    name: 'pakun',
    age: 99,
    breed: 'lab',
    job: 'guide dog',
};
// ========== non null assertion operator
// add ! to set guaranteed not to be null
// typescript infer as HTMLElement | null
const button = document.getElementById('btn');
// typescript infer as HTMLElement
const button2 = document.getElementById('btn');
// ========== type assertion
// typescript infer as Element
const myPic = document.querySelector('profile-image');
// typescript infer as HTMLImageElement
const myPic2 = document.querySelector('profile-image');
let mystery = 'hello';
let numChar = mystery.length; // trust me, this is a string
const input = document.getElementById('input');
input.value = 'lorem';
// ========== event
const handleSubmit = (event) => {
    event.preventDefault();
};
// ========== generics
const colors = ['blue', 'red'];
const nums = [];
const imputEl = document.querySelector('#username');
// function identity<T>(item: T): T {
function identity(item) {
    return item;
}
identity(12341);
identity('lorem');
// ========== generics on jsx
// const identity2 = <Type,>(item: Type): Type => {
//   return item;
// };
// ========== generics with multiple type
function identity3(item, item2) {
    return Object.assign(Object.assign({}, item), item2);
}
// ========== importing types
// import type { Person } from './types.js';
// import { type Person, User } from './types.js';
