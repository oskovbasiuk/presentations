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

asd;
