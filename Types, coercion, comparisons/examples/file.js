var a = 25; // integer
var b = 80.5; // floating-point number
var c = 4.25e6; // exponential notation, same as 4.25e6 or 4250000
var d = 4.25e-6; // exponential notation, same as 0.00000425

alert(16 / 0); // Output: Infinity
alert(-16 / 0); // Output: -Infinity
alert(16 / -0); // Output: -Infinity

alert('Some text' / 2); // Output: NaN
alert('Some text' / 2 + 10); // Output: NaN
alert(Math.sqrt(-1)); // Output: NaN

var isReading = true; // yes, I'm reading
var isSleeping = false; // no, I'm not sleeping

var a = 2,
  b = 5,
  c = 10;

alert(b > a); // Output: true
alert(b > c); // Output: false

var a;
var b = 'Hello World!';

alert(a); // Output: undefined
alert(b); // Output: Hello World!

var a = 'Hello World!';
alert(a); // Output: Hello World!

a = null;
alert(a); // Output: null

var ObiWan = 'Hello there!'; // using single quotes
var Grievous = 'General Kenobi!'; // using double quotes

var a = `string text ${expression} string text`;

let a = 5;
let b = 10;
console.log(`Fifteen is ${a + b} and
not ${2 * a + b}.`);
// "Fifteen is 15 and
// not 20."

// Here are two symbols with the same description:
let Sym1 = Symbol('Sym');
let Sym2 = Symbol('Sym');

console.log(Sym1 === Sym2); // "false"

let obj = {
  [Sym1]: 'value'
};
console.log(obj[Sym1]); // "value"

'b' + 'a' + +'a' + 'a'; //  baNaNa
true + false; //  1
12 / '6'; //  2
'number' + 15 + 3; //  number153
15 + 3 + 'number'; //  18number
[1] > null; //  true
'foo' + +'bar'; //  fooNaN
'true' == true; //  false
false == 'false'; //  false
null == ''; //  false
!!'false' == !!'true'; //  true
['x'] == 'x'; //  true
[] + null + 1; //  null1
[1, 2, 3] == [1, 2, 3]; //  false
{
}
+[] + {} + [1]; //  0[object Object]1"
!+[] + [] + ![]; //  truefalse
new Date(0) - 0; //  0
new Date(0) + 0; //  Thu Jan 01 1970 03:00:00 GMT+0300 (Eastern European Standard Time)0
