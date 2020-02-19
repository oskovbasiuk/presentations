function name(parameters) {
  statements;
}

let name = function(parameters) {
  statements;
};

let name = function longNameWithGoodDescription(parameters) {
  statements;
};

var foo = new Function('alert(anonymous);');

// code here can NOT use anyVar

function myFunction() {
  var anyVar = 'Hello varld';

  // code here CAN use anyVar
}

let test = "I'm global";

function testScope() {
  let test = "I'm local"; // declaration in local scope
  console.log(this.test);
}

console.log(test); // output: I'm global
testScope(); // output: I'm local
console.log(test); // output: I'm global

var a = 3,
  b = 5;

function twoParams(param1, param2) {
  console.log(param1, param2);
}
twoParams(a, b); // a&b are arguments

var a = (a, b) => {
  console.log(a, b);
};
a(1, 2, 3);

var functionName = (argument1, argument2, ...argumentN) => {
  // function body
};

const add = (a, b) => a + b;

const createNewFunction = (a, b) => () => console.log(a, b);
const resFunction = createNewFunction('a', 'b');
resFunction(); // output a b

const getFirst = array => array[0];

const createObject = (name, description) => ({ name: name, description: description });

function message() {
  console.log('Hello, world');
}
console.log(typeof message); //  function
console.log(message instanceof Object); //  true

var body = 'return Math.PI * radius * radius';
var circle = new Function('radius', body);
console.log(circle(5));

catName('Tiger');

function catName(name) {
  console.log("My cat's name is " + name); // My cat's name is Tiger
}

console.log(num); // undefined
var num;
num = 6;

function exampleFunction(a, b, c) {
  console.log(arguments[0]);
  console.log(arguments[1]);
  console.log(arguments[2]);
}
exampleFunction(1, 2, 3); // 1 2 3

let args = Array.from(arguments);

let args = [...arguments];

var obj = { name: 'Niladri' };

var greeting = function(a, b, c) {
  return 'Welcome ' + this.name + ' to ' + a + ' ' + b + ' in ' + c;
};

console.log(greeting.apply(obj, ['Newtown', 'KOLKATA', 'WB']));
// Welcome Niladri to Newtown KOLKATA in WB

var obj = { name: 'Niladri' };

var greeting = function(a, b, c) {
  return 'Welcome ' + this.name + ' to ' + a + ' ' + b + ' in ' + c;
};

//creates a bound function that has same body and parameters
var bound = greeting.bind(obj);

console.log(bound('Newtown', 'KOLKATA', 'WB')); //call the bound function

// Welcome Niladri to Newtown KOLKATA in WB

(function nameCanBeHereButNoReason() {
  console.log('HelloWorld');
})(); // HelloWorld

(function() {
  var aName = 'Barry';
})();
// Variable aName is not accessible from the outside scope
console.log(aName); // throws "Uncaught ReferenceError: aName is not defined"

var result = (() => {
  var name = 'Barry';
  return name;
})();

console.log(result); // "Barry"

var name = 'Jerry';
console.log(name); // "Jerry"
(() => {
  this.name = 'Barry';
})();

console.log(name); // "Barry"

function makeFunc() {
  var name = 'Chrome';
  function displayName() {
    console.log(name);
  }
  return displayName;
}

var myFunc = makeFunc();
myFunc(); // Chrome

function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

var add5 = makeAdder(5);
var add10 = makeAdder(10);

console.log(add5(2)); // 7
console.log(add10(2)); // 12

function makeSizer(size) {
  return function() {
    document.body.style.fontSize = size + 'px';
  };
}

var size12 = makeSizer(12);
var size14 = makeSizer(14);
var size16 = makeSizer(16);

asd;
