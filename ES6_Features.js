//1.let and constant ,block scope keywords
var Things = [1,2,3,4,5];

function display() {
  for (var i = 0; i < Things.length; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
display();
//o/p - 5 5 5 5 5

function display() {
  for (let i = 0; i < Things.length; i++) {
    setTimeout(function () {
      console.log(i);
    }, i * 1000);
  }
}
display();
//o/p - 1 2 3 4 5

//why let prins 12345
//declaring i as let makes it block-scoped of for block and not of function,
//so every time let gets intialized in stack and one by one set timeout is called and run in callstack for each 

//why var prints 55555
//but for var as it is function scoped it is only reassigned so as becomes  it 5,
//set timeout is not called in callstack 

//2.Arrow functions
//use return for multiple lines of code not single
//no use of new keyboard
//this assigns to parent parameter
const isPrime = (num) => {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
};
console.log(isPrime(9));

//3.multilne strings
let hello = "hello world, hello Js, hello ReactJs";

//Clone objects
let person = { height: '176' };
let cPerson = Object.assign({}, person);
console.log(cPerson);

let person = {height:'176'};
let employee = {id:'#1237', name:'John'};
let myEmp = Object.assign({}, person, employee);
console.log(myEmp);
//o/p -{height:'176',id:'#1237', name:'John'}


//object.is()             //checks a and b equal
let a=10, b=10;
Object.is(a,b);

//4.Default Parameters
function isPrime(num = 10) {
  for (let i = 2; i < num; i++) if (num % i === 0) return false;
  return num > 1;
}
console.log(isPrime());

//5.Template Literal
let name = "deepak";
console.log("my name is ${name}");

//6. Destructuring Assignment
//Array destructuring
let fruits = ["Apple", "Banana"];
let [a, b] = fruits;
console.log(a, b);
//Object Destructuring
let person = { name: "Peter", age: 28 };
let { name, age } = person;
console.log(name, age);

//8.Promises

//7.Enhanced object Literals
function getMobile(manufacturer, model, year) {
  return {
    manufacturer,
    model,
    year,
  };
}
console.log(getMobile("Samsung", "Galaxy", "2020"));

//9.Class
class MernStack {
  constructor(firstName, stack) {
    this.firstName = firstName;
    this.stack = stack;
  }
  getName() {
    console.log("the fullName is ${this.firstName}${this.stack}");
  }
}

let developer = new MernStack("deepak", "ReactJs");
developer.getName();

//10.Modules

//11.for/of
const cars = ["BMW", "Volvo", "Mini"]; //array
for (let x of cars) {
  console.log(x);
}

let s = "react";                      //string
for (let x of s) {
  console.log(x);
}

//12.Rest Parameter
function sum(...args) {
  let sum = 0;
  for (let arg of args) sum += arg;
  return sum;
}

let x = sum(4, 9, 16, 25, 29, 100, 66, 77);

//13.sets
const stack = new Set();
stack.add('mongodb')
stack.add('mongodb')

//set
const x=new Set([...arr])
console.log(x)

//14.Maps
let map = new Map();

map.set('1', 'str1');   // a string key
map.set(1, 'num1');     // a numeric key
map.set(true, 'bool1'); // a boolean key

alert( map.get(1)   ); // 'num1'
alert( map.get('1') ); // 'str1'

alert( map.size ); // 3


//string methods
String.includes() //returns true if string contains given valur
String.startsWith()//returns true if a string begins with a specified value,
String.endsWith() //returns true if a string ends with a specified value

//Array methods
Array.from() //returns an Array object from any object with a length property or any iterable object
Array.keys()//returns an Array Iterator object with the keys of an array.
Array.find()//returns the value of the first array element that passes a test function.
Array.findIndex()//returns the index of the first array element that passes a test function.

//Math Methods
Math.trunc() //returs integer part 4 for 4.6
Math.sign() //returns -1,0,1 for -4,0,4
Math.cbrt() //returns cuberoot
Math.log2() //returns base 2 of log x
Math.log10() //returns base 10 of log x

//Number Properties
EPSILON
MIN_SAFE_INTEGER
MAX_SAFE_INTEGER

//New Number Methods
Number.isInteger()//returns true for interger
Number.isSafeInteger()//returns true for double precision number.

//Global Methods
isNaN()//returns true if the argument is NaN.
isFinite() //returns false if the argument is Infinity or NaN.

