const animal = {
  eats: true
};
const rabbit = {
  jumps: true
};
rabbit.__proto__ = animal;
console.log(rabbit.eats); // true
console.log(rabbit.jumps); // true

//

let animal = {
  eats: true
};
function Rabbit(name) {
  this.name = name;
}
Rabbit.prototype = animal;
let rabbit = new Rabbit('White Rabbit'); //  rabbit.__proto__ == animal

console.log(rabbit.eats); // true

//

function doSomething() {}
doSomething.prototype.foo = 'bar';
var doSomeInstancing = new doSomething();
doSomeInstancing.prop = 'some value';
console.log('doSomeInstancing.prop:      ' + doSomeInstancing.prop); // "some value"
console.log('doSomeInstancing.foo:       ' + doSomeInstancing.foo); // "bar"
console.log('doSomething.prop:           ' + doSomething.prop); // undefined
console.log('doSomething.foo:            ' + doSomething.foo); // undefined
console.log('doSomething.prototype.prop: ' + doSomething.prototype.prop); // undefined
console.log('doSomething.prototype.foo:  ' + doSomething.prototype.foo); // "bar"

//

const prototype1 = {};
const object1 = {};
Object.setPrototypeOf(object1, prototype1);
console.log(Object.getPrototypeOf(object1) === prototype1); // true

//

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
}
Person.prototype.greeting = function() {
  console.log("Hi! I'm " + this.name.first + '.');
};

//

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);
  this.subject = subject;
}

//

Teacher.prototype = Object.create(Person.prototype);
Object.defineProperty(Teacher.prototype, 'constructor', {
  // To set the proper constructor name
  value: Teacher,
  enumerable: false,
  writable: true
});

const teacher1 = new Teacher('John', 'Williams', 24, 'm', '', 'Math');
teacher1.greeting(); // "Hi! I'm John."

//
