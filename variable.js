// var, let, and const -- line by line comparison
// var (ES5)
// var a = "temp";
var _123 = "Hello";
var $123 = "Hello";

// console.log(a)

var d; //declare
var temp_d = 12; //declare and initialize
// var add value into window
// var is function scoped
// var can be redeclared and reassigned
var name = "user name";
let name1 = "user name";

// Reassignment , redeclaration
var temp = 12;
temp = "number"; //Reassignment
// let temp = "text"; // redeclaration
// let temp_a = 24;
// var temp_a = 34; // you can't redeclare let variable
const temp_b = "name"
// temp_b = "username" // you can't reassign const variable


// scope (global, Block, functional)
var e = 23; // global scope
console.log("Global Scope " + e);
{
    var e = 25; // block scope
    console.log("block Scope " + e);
}
function abc() {
    var e = 30; // functional scope
    console.log("functional scope " + e);
}
abc();
console.log("Outside " + e);


let f = 23; //global scope
console.log("Global Scope Let Variable " + f);
{
    let f = 25; // block scope
    console.log("block Scope Let Variable " + f);
}
function abc() {
    let f = 30; // functional scope
    console.log("functional scope Let variable " + f);
}
abc();
console.log("Outside Let Variable" + f);

// Temporal Dead Zone (TDZ)
// console.log(h);
// let h = 24;

//console.log(g);
// console.log(j);
// let j = 12;

//Hoisting Impact
// Hoisting --> when your create a variable into js that break into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d = 12; --> undefined; --> that go to up
// temp_d = 12; --> that go to down (means stuck into line 66)
// if you use console.log before initilization that give you undefined;
let temp_d_let = 24;
//let variable not use before initialization
// if you use console.log before initilization that give you error;
// Hoisting Impact on var, let, const
/*
var --> hoist --> underfined
let --> hoist --> error
const --> hoist --> error
*/ 

//ex-1
let nm = "name"
console.log(nm);
//ex-2
var b = "username";
console.log(b);
//ex-3
var x = 1;
{
  var x= 2;
  }
console.log(x);
//ex-4
let a = 10; 
{
    let a = 20;
    console.log("Inside:", a);
 }
console.log("Outside:", a);
//ex-5
const person = {name: "demo"}; 
// person.name= "user"; ✅
// person = {} ; ❌ 
console.log(person);