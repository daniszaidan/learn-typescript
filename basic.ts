// ========== terminal code
// initial = tsc --init
// compile ts to js = tsc index.ts
// compile all files = tsc
// always compile = tsc -w index.ts
// always compile all files = tsc -w

// ========== type annotation
const lol: number = 13;
console.log('test', lol);

let gameOver: boolean = false;
gameOver = true; // ✔️
// gameOver = 'true'; // ❌

// ========== type inference (auto decide the :type)
let movieTitle = 'tron';

// ========== any type
let thing: any = 'hello';
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
const greetParan = (name: string) => {
  return `Hi, ${name}!`;
};
greetParan('danis'); // ✔️
// greetParan(3); // ❌

const saveUser = (name: string, age: number, isAdmin: boolean) => {};
saveUser('Danis', 99, true); // ✔️
// saveUser('Danis', 99, true, 'vsd'); // ❌
// saveUser('vs'); // ❌
// saveUser(231, false, 'vs'); // ❌

// ========== default param
const greetDefault = (name: string = 'stranger') => {
  return `Hi, ${name}!`;
};
greetDefault(); // ✔️
greetDefault('danis'); // ✔️
// greet(23); // ❌

// ========== function return types
const greet = (name: string = 'stranger'): string => {
  return `Hi, ${name}!`; // ✔️
};
const square1 = (num: number): number => {
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
color.map((item: string) => {
  // ✔️
  return item.toUpperCase(); // ✔️
  // return item.toFixed(2); // ❌
});

// ========== the void type
// void type used when a function doesn't return anything
const printTwice = (message: string): void => {
  console.log(message); // ✔️
  console.log(message); // ✔️
  // return 'something'; // ❌
};

// ========== the never type
// type never used when we don't want to return anything
const makeError = (message: string): never => {
  throw new Error(message);
  // return message; // ❌
};

const gameLoop = (): never => {
  while (true) {
    console.log('game loop running');
  }
  // return true; // ❌
};

// ========== object type
const printName1 = (person: {
  first: string;
  last: string;
  parent: {
    mom: string;
    dad: string;
  };
}): void => {
  console.log(`Hello ${person.first} ${person.last}`);
};
printName1({
  first: 'Danis',
  last: 'Zaidan',
  parent: { mom: 'lorem', dad: 'ipsum' },
});

let coordinate: { x: number; y: number } = {
  x: 312,
  y: 865,
};

const randomCoordinate = (): { x: number; y: number } => {
  return {
    x: Math.random(),
    y: Math.random(),
  };
};

// ========== excess properties
const printName2 = (person: { first: string; last: string }): void => {
  console.log(`Hello ${person.first} ${person.last}`);
};
printName2({ first: 'Danis', last: 'Zaidan' }); // ✔️
const personPrintName2 = { first: 'Danis', last: 'Zaidan', age: 423 };
printName2(personPrintName2); // ✔️ ???
// printName2({ first: 'Danis', last: 'Zaidan', age: 423 }); // ❌

// ========== type alias
type NumNum = number;
const age: NumNum = 34423;

type Person2 = {
  name: string;
  age: number;
  parent: {
    mom: string;
    dad: string;
  };
};
const printName = (person: Person2): void => {
  console.log(`Hello ${person.name} ${person.age}`);
};
printName({
  name: 'Danis',
  age: 86889,
  parent: { mom: 'lorem', dad: 'ipsum' },
});

type Point2 = {
  x: number;
  y: number;
};
let coordinate1: Point2 = { x: 312, y: 865 };
const randomCoordinate2 = (): Point2 => {
  return { x: Math.random(), y: Math.random() };
};
const doublePoint = (point: Point2): Point2 => {
  return { x: point.x * 2, y: point.y * 2 };
};

// ========== optional properties
type Point3 = {
  x: number;
  y: number;
  z?: number;
};
let coordinate2: Point3 = { x: 312, y: 865, z: 342 }; // ✔️
let coordinate3: Point3 = { x: 312, y: 865 }; // ✔️

// ========== readonly modifier
type User = {
  readonly id: number;
  username: string;
};
const user: User = {
  id: 231231,
  username: 'lorem',
};
// user.id = 895687; // ❌

// ========== intersection types
type Circle = {
  radius: number;
};
type Colorful = {
  color: string;
};
type ColorfulCircle = Circle & Colorful;
type ColorfulCircleBig = Circle &
  Colorful & {
    isBig: boolean;
  };
const happyFace: ColorfulCircle = {
  radius: 432,
  color: 'blue',
};
const happyFaceBig: ColorfulCircleBig = {
  radius: 432,
  color: 'blue',
  isBig: true,
};

// ========== array types
let names: string[] = ['lorem', 'ipsum'];
let ages: number[] = [312, 412];
// alternate syntax
let names2: Array<string> = ['lorem', 'ipsum'];
let ages2: Array<number> = [312, 412];

names.push('vsvd'); // ✔️
// names.push(432); // ❌

type Point4 = {
  x: number;
  y: number;
};
const coords1: Point4[] = [];
const coords2: Array<Point4> = [];
coords2.push({ x: 8, y: 9 });

// ========== multidimensional array types
const board: string[][] = [
  ['x', 'y', 'z'],
  ['x', 'y', 'z'],
  ['x', 'y', 'z'],
];

// ========== union type
const guessAge = (age: number | string) => {
  return `your age is ${age}`;
};
guessAge(321); // ✔️
guessAge('523452'); // ✔️
// guessAge({age: '654'}); // ❌

type Point = {
  x: number;
  y: number;
};
type Loc = {
  lat: number;
  long: number;
};
let coordinate4: Point | Loc = { x: 423, y: 8756 }; // ✔️
coordinate4 = { lat: 3423, long: 3424 }; // ✔️

// ========== type narrowing
const calculateTax = (price: number | string, tax: number) => {
  if (typeof price === 'string') {
    price = parseFloat(price.replace('$', ''));
  } else {
    return price * tax;
  }
};
calculateTax(45, 0.7); // ✔️
calculateTax('$45', 0.7); // ✔️

// ========== union type and array
const stuff: (number | string)[] = [1, 2, 3, '4'];

// ========== literal types
let zero: 0 = 0;
// zero = 2; // ❌

const giveAnswer = (answer: 'yes' | 'no' | 'maybe'): string => {
  return `the answer is ${answer}`;
};
giveAnswer('yes'); // ✔️
// giveAnswer('well'); // ❌

type Mood = 'happy' | 'sad';
let moodToday: Mood = 'happy'; // ✔️
// moodToday = 'angry'; // ❌

// ========== tuples
// fixed length, order, type
let myTuple: [number, string];
myTuple = [23414, 'lorem']; // ✔️
// myTuple = ['lorem', 23414]; // ❌
// myTuple = [23414, 'lorem', 423]; // ❌

// ========== enum
enum OrderStatus {
  PENDING,
  SHIPED,
  DELIVERED,
  RETURNED,
}
const myStatus = OrderStatus.DELIVERED;
const isDelivered = (status: OrderStatus) => {
  return status === OrderStatus.DELIVERED;
};
isDelivered(OrderStatus.RETURNED);

// ========== interface
interface Personinterface {
  readonly id: number;
  name: string;
  nickname?: string;
  age: number;
  // sayHi: () => string;
  sayHi(): string;
}
const person: Personinterface = {
  id: 342342,
  name: 'Danis',
  age: 13523,
  sayHi: () => '',
};

// ========== type vs interface
// we can't redeclare type, but can do this with interface
type Person3 = { name: string };
// type Person3 = { age: number }; // ❌

interface Human {
  name: string;
}
interface Human {
  age: number;
} // ✔️
// now interface Human have name & age

// ========== extends interfaces
interface Dog {
  name: string;
  age: number;
}
interface DogJob {
  job?: string;
}
interface ServiceDog extends Dog, DogJob {
  breed: string;
}
const pakun: ServiceDog = {
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
const button2 = document.getElementById('btn')!;

// ========== type assertion
// typescript infer as Element
const myPic = document.querySelector('profile-image');
// typescript infer as HTMLImageElement
const myPic2 = document.querySelector('profile-image') as HTMLImageElement;

let mystery: unknown = 'hello';
let numChar = (mystery as string).length; // trust me, this is a string

const input = document.getElementById('input')! as HTMLInputElement;
input.value = 'lorem';

// ========== event
const handleSubmit = (event: SubmitEvent) => {
  event.preventDefault();
};

// ========== generics
const colors: Array<string> = ['blue', 'red'];
const nums: Array<number> = [];

const imputEl = document.querySelector<HTMLInputElement>('#username')!;

// function identity<T>(item: T): T {
function identity<Type>(item: Type): Type {
  return item;
}
identity<number>(12341);
identity<string>('lorem');

// ========== generics on jsx
// const identity2 = <Type,>(item: Type): Type => {
//   return item;
// };

// ========== generics with multiple type
function identity3<T, U>(item: T, item2: U) {
  return {
    ...item,
    ...item2,
  };
}

// ========== importing types
// import type { Person } from './types.js';
// import { type Person, User } from './types.js';
