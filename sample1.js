"use strict";
const stdata = {
    name: "subathra",
    regno: 2203109036,
    attend: true
};
console.log(stdata);
console.log(stdata.name);
console.log(stdata.regno);
console.log(stdata.attend);
// Partial
// Partial changes all the properties in an object to be optional.
// here we don't need to give value to all property
const stdatapart = {};
stdatapart.name = "vishalini";
console.log(stdatapart);
// by using required we should include value for alla the parameter
let Edata = {
    Name: "Magesh V",
    epno: 2025001,
    email: "magesh@employee.com"
};
console.log(Edata);
// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
// it only requre 2 element not more than that like key value pairs
const bag = {
    "roshan": true,
    "skybags": true
};
console.log(bag);
// omit Omit removes keys from an object type.
const Emplog = {
    Name: "rithiga",
    // when i add this error found
    // email:"rithiga@employee.com"
};
console.log(Emplog);
// PICK
// Pick removes all but the specified keys from an object type.
const empdetail = {
    email: "leela@employee.com"
};
console.log(empdetail);
const value = true;
console.log(typeof value);
//ReturnType extracts the return type of a function type.
function test() {
    return "return string";
}
// we can't pass number or boolean here
const Test = "Hi good morning";
console.log(Test);
const point = {
    x: 10,
    y: 20
};
console.log(point);
const point1 = {
    d: 54,
    e: "hello"
};
console.log(point1);
// another example
function student(name, age) {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}
const details = ["Subathra", 21];
console.log(details);
;
const readbook = {
    bookname: "The sky in Dark ",
    booktype: "thriller",
    nopage: 320
};
console.log(readbook);
let key1 = "Offname";
let key2 = "Offmail";
console.log(key1);
console.log(key2);
let key01 = 43;
let key02 = 4;
console.log(key01);
console.log(key02);
// Types
// null and undefined are primitive types and can be used like other types, such as string
let g = undefined;
console.log(g);
g = "helo";
console.log(g);
// not executed because not declared
// g=true;
// console.log(g)
g = undefined;
console.log(g);
g = null;
console.log(g);
// Nullish Coalescing
// Nullish coalescing is another JavaScript feature that also works well with TypeScript's null handling.
// It allows writing expressions that have a fallback specifically when dealing with null or undefined.
// This is useful when other falsy values can occur in the expression but are still valid.
// It can be used with the ?? operator in an expression, similar to using the && operator.
function printMileage(mileage) {
    console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
printMileage(null); // Prints 'Mileage: Not Available'
printMileage(undefined); // Prints 'Mileage: 0'
printMileage(true);
printMileage("string1");
function nullassertion() {
    return ("hello typecript");
}
let NullAssertion = nullassertion();
console.log("value of nullassertion =" + NullAssertion.length);
//Just like casting, this can be unsafe and should be used with care.
// Array Bounds Handling
// Even with strictNullChecks enabled, by default TypeScript assumes array access will never return undefined (unless undefined is part of the array type).
// The config noUncheckedIndexedAccess can be used to change this behavior.
let array = [1, 2, 3];
let arrvalue = array[0];
console.log(arrvalue);
