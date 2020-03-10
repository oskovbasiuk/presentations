//

let PI = 3.14;

const calculateArea = radius => radius * radius * PI;

calculateArea(10);

let PI = 3.14;

const calculateArea = (radius, pi) => radius * radius * pi;

calculateArea(10, PI); // returns 314.0

//

let myVar = 1;

function deleteIfBad() {
  if (myVar > 1) {
    deleteProductionDatabase();
  }
}

//

function doSomething() {
  myVar = 3;
  if (someCondition) {
    myVar = 4;
  }
}

//

const fruits = ['orange', 'apple', 'lemon'];
const newFruits = ['grapes', ...fruits, 'banana']; // = ['grapes','orange', 'apple', 'lemon', 'banana']

const fruits = ['orange', 'apple', 'lemon'];
fruits.push('banana'); // = ['orange', 'apple', 'lemon', 'banana']
fruits.unshift('grapes'); // = ['grapes','orange', 'apple', 'lemon', 'banana']

//

const fruits = ['orange', 'apple', 'lemon', 'banana'];
const lastFruit = fruits.pop(); // = 'banana', fruits = ['orange', 'apple', 'lemon']

//

const fruits = ['orange', 'apple', 'lemon', 'banana'];
const lastFruit = fruits[fruits.length - 1]; // = 'banana'
const newFruits = fruits.slice(0, fruits.length - 1); // = ['orange', 'apple', 'lemon']

//

const fruits = ['orange', 'apple', 'lemon', 'banana'];
const firstFruit = fruits.shift(); // = 'orange', fruits = ['apple', 'lemon', 'banana']

//

const fruits = ['orange', 'apple', 'lemon', 'banana'];
const firstFruit = fruits[0]; // = 'orange'
const newFruits = fruits.slice(1); // = ['apple', 'lemon', 'banana']

//

const sumBelowRecursive = (number, sum = 0) =>
  number === 0
    ? sum
    : sumBelowRecursive(number - 1, sum + number);

//

sumBelowRecursive(100000);
// Uncaught RangeError: Maximum call stack size exceeded

//

const trampoline = fn => (...args) => {
  let result = fn(...args);
  while (typeof result === 'function') {
    result = result();
  }
  return result;
};

//

const sumBelowRecursive = (number, sum = 0) =>
  number === 0
    ? sum
    : () => sumBelowRecursive(number - 1, sum + number);

//

trampoline(sumBelowRecursive)(100000);
// returns 5000050000

//
