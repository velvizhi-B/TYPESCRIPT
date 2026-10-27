"use strict";
function greet(word) {
    return `Good,${word}!`;
}
const mess = greet("World");
console.log(mess);
let num = 10.43334;
let num1 = 0xf00d;
let char = "hello buddy";
let boole = true;
let char1 = `this is a para for ${num},${char} to chech place holder`;
const bignum = BigInt('9007199254740991');
let arr1 = [1, 2, 3, 4, 5];
console.log(num, num1, char, boole, char1, bignum);
console.log(arr1);
// for creating unique property key constant
const uniqKey = Symbol('discription');
const object1 = { [uniqKey]: "this is a unique key" };
console.log(object1[uniqKey]);
// explicit Types and Inference
// TypeScript offers two ways to work with types:
// Explicit Typing: You explicitly declare the type of a variable
// Type Inference: TypeScript automatically determines the type based on the assigned value
// epxlicit typing
let arr2 = ["hello", "world"];
let uName = "this is the string";
console.log(arr2);
console.log(uName);
// function with explicit typing;
function greet1(root = 43) {
    console.log(`good${root}`);
}
greet1(34);
// type inference
let arr3 = ["hello", "world"];
let uName1 = "this is the string";
console.log(arr3);
console.log(uName1);
// function with type inference
function add(x, y) {
    return x + y;
}
console.log(add(10, "adding num with string"));
const user = {
    name: "jack",
    age: 23,
    password: "1234"
};
console.log(user.name, user.age);
// console.log(user.email) // this will give error as email is not defined in user object;
// let username: string = "alice";
// username = 42; // Error: Type 'number' is not assignable to type 'string'
// let score = 100;  // TypeScript infers 'number'
// score = "high";  // Error: Type 'string' is not assignable to type 'number'
// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{ "name": "Alice", "age": 30 }');
console.log(data);
let a = 10;
// let a="new value"; // Error: Cannot redeclare block-scoped variable 'a'.
console.log(a.toExponential()); // This will work because 'a' is of type number
// a.runANonExistentMethod(); // Error: Property 'runANonExistentMethod' does not exist on type 'number'.
console.log(Math.round(a));
let v = true;
v = "string"; // no error as it can be "any" type
// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in
console.log(Math.round(v)); // no error as it can be "any" type
// unknown type
let b = true;
b = 10;
b = "new value";
b = {
    rANEMethod: () => {
        console.log("I think therefore I am");
    }
};
if (typeof b === 'object' && b !== null) {
    b.rANEMethod();
}
// let c:never=true? (()=>{throw Error("this is never type type")})(): (()=>{throw Error("this is never type type")})();
//types will be continued
// array
var c;
c = ["hi", "hello"];
console.log(c);
var d;
d = [4, "fdfd", true];
console.log(d);
//readOnly keyword prevent the parameter from being changed.
var e = [];
e.push("hello");
console.log(e);
let f = [7];
// f.push(4,5); will throw an error
console.log(f);
// inference
const g = ["design", "thinking"];
g.push("digital", "design");
const h = g[2];
console.log(h);
console.log(g);
// typed array  a tuple is a typed array with predefined length and types of each index
let i;
i = [54, "hello", true];
const k = i;
function j(k) {
    console.log(k);
}
j(k);
// let ourTuple: [number, boolean, string];
// // initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];
// read only tuple good to practice to use tuple with readonly
let l;
l = ["janak", 54, true];
l.push("pushed string");
console.log(l);
// we an push any variable inside the array in declared type so radonly will help you only acces the value and cant be changed 
// named tuple
let m;
m = ["string", 43, "ds", false];
console.log(m);
m.push("hello");
console.log(m);
// distructuring tuples
let n = [445.5, 54];
let [o, p] = n;
console.log(p, o);
console.log(n);
// typescript object types
const car = {
    type: "benz",
    model: "bharath",
    colour: true,
    year: 2020
};
// type inference
console.log(car);
// inference
const bike = {
    type: "FZ",
    year: 2019
};
bike.type = "jupiter(TVS)";
console.log(bike);
// optional property;
// without  "?" error found
const q = {
    type: "ball point",
    count: 10
};
console.log(q);
q.example = "rorito";
console.log(q);
// index signature
// we an add or concatinate the array of value while assiging
const r = { reno: 2203109038 };
console.log(r);
r.pname = 89;
r.reno = 2004;
console.log(r);
// ENUM comes ni two flavors 1 is string, numeric
//numerinc ENUM default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
var season;
(function (season) {
    season[season["summer"] = 0] = "summer";
    season[season["winter"] = 1] = "winter";
    season[season["rainy"] = 2] = "rainy";
    season[season["spring"] = 3] = "spring";
})(season || (season = {}));
;
let currentSeason = season.rainy;
console.log(currentSeason);
// numeric ENUMS -Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
var soil;
(function (soil) {
    soil[soil["red"] = 2] = "red";
    soil[soil["black"] = 3] = "black";
    soil[soil["saline"] = 4] = "saline";
    soil[soil["alkaline"] = 5] = "alkaline";
    soil[soil["mud"] = 6] = "mud";
    soil[soil["slagy"] = 7] = "slagy";
})(soil || (soil = {}));
console.log(soil.black);
console.log(soil.red);
// numeric ENUM Fully initialised
var errorStatus;
(function (errorStatus) {
    errorStatus[errorStatus["notFound"] = 404] = "notFound";
    errorStatus[errorStatus["success"] = 200] = "success";
    errorStatus[errorStatus["accepted"] = 202] = "accepted";
    errorStatus[errorStatus["created"] = 201] = "created";
    errorStatus[errorStatus["badRequest"] = 400] = "badRequest";
})(errorStatus || (errorStatus = {}));
;
console.log(errorStatus.created);
console.log(errorStatus.notFound);
// string ENUM
var direction;
(function (direction) {
    direction["east"] = "EAST";
    direction["west"] = "WEST";
    direction["north"] = "NORTH";
    direction["south"] = "SOUTH";
})(direction || (direction = {}));
console.log(direction.east);
console.log(direction.south);
const Compname = "arduino UNO";
const Specification = "R3";
const Quantity = 20;
const Comp = {
    name: Compname,
    spec: Specification,
    quant: Quantity
};
console.log(Comp);
const Bear = { name: "winnie", honey: false };
let response = "success";
console.log(response);
const calculation = {
    length: 43,
    breath: 22
};
console.log(calculation);
const dog = { petname: "tom", age: 3 };
console.log(dog);
const extendedInterface = {
    mouse: "ABK mouse",
    keyboard: "ABK Keys",
    monitor: "acer",
    quantity: 10,
    printer: "cannon",
    speaker: 500
};
console.log(extendedInterface);
//typescript Union Types
// union can be used when a value can be more than a single type
function printregno(regno) {
    console.log(`reg no is ${regno}`);
}
printregno("22TD48");
printregno(2203109038);
// union type errors
function names(personName) {
    // throw an error
    // console.log(`this is the name of te person${personName.toUpperCase}`)
    console.log("my frd name is", personName);
}
names("subathra");
// typescript function 
// return type
// type of value returned by t he function csn be explicitly defined
function getTime() {
    return new Date().getTime();
}
console.log(getTime());
// void return type
// it indicate that the function didn;t return any value
function msg(msg1) {
    console.log(msg1);
    console.log("return nothing");
}
msg("hello void function");
// return nothing because it was a void finction
console.log(msg);
// parameters
function addtion(a = 90, b = 2) {
    return (a + b + a);
}
addtion(8, 43); //this will only give vale while calling, 
console.log(addtion());
console.log(addtion(2, 4));
// optional parameter required parameter cannot follow an optional parameter
//we can pass the parameter as a optional using "?"operator";
function summ(a, b, c) {
    return a + b + (c || 9);
}
console.log(summ(2, 4));
// default parameter
function pow(x, y = 43, z) {
    return (x ** y);
}
console.log(pow(2));
// named parameters  follows the same pattern as normal parameter
// should be pass inside the {}
function div({ divisor, divident }) {
    return divident / divisor;
}
console.log(div({ divident: 3, divisor: 4 }));
// reset parameter
function sub(a, b, ...rest1) {
    return a + b + rest1.reduce((num1, num2) => num1 - num2, 0);
}
console.log(sub(1, 2, 3, 4, 5));
const aliasfun = (value1) => value1 * 10;
console.log(aliasfun(100));
// typescript casting
// stright way to cast the variable is using the as keyword which will directly chanhe the type og the given variable
let cast2 = "hello";
console.log(cast2.length);
let cast = 65;
let cast1 = cast;
cast1 = "greet World";
console.log(cast1);
// casting with < > works same as "as"
let x = "hello World";
console.log(x.length);
// typescript allows types and visibility modifier to the js class
class Person {
    name = "";
}
const person = new Person();
person.name = "Jane";
console.log(person);
// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
// public
class subject {
    NAME = "maths";
}
;
const Subject = new subject();
console.log(Subject.NAME);
Subject.NAME = "biology";
console.log(Subject.NAME);
// private
class subject1 {
    Name1 = "hello, good morning";
    Name2 = "good afternoon";
    greeting() {
        console.log(this.Name1);
        console.log(this.Name2);
    }
    ;
}
const Subject1 = new subject1();
console.log(Subject1.Name2);
Subject1.greeting();
// console.log(Subject1.Name1) error due to private 
//projected
class Welcome {
    welcome1 = "you are welcome";
    welcome2 = "hello how'r you";
    welcome3 = "no worries";
    welcome4 = "this is without visibilities";
}
;
class Welcome2 extends Welcome {
    welcomefn() {
        console.log(this.welcome1);
    }
}
const welcomvar = new Welcome();
// console.log(welcomvar.welcome1);// error due to protected
// console.log(welcomvar.welcome2); //error due to private
console.log(welcomvar.welcome3);
console.log(welcomvar.welcome4);
// Instead of declaring the property separately and assigning it manually, you can add a visibility modifier such as private or public directly to a constructor parameter.
class BOOK1 {
    book1;
    book2;
    constructor(book1 = "public book", book2 = "private book") {
        this.book1 = book1;
        this.book2 = book2;
    }
    getbook() {
        return (this.book2);
    }
}
const BooK = new BOOK1("none");
console.log(BooK.getbook());
// console.log(BooK.book2) //cant acces this because it was a priavte parameter
console.log(BooK.book1);
// readonly
class readonlycls {
    variable1 = "hello";
    variable2 = "hello";
    constructor(var1, var2) {
        this.variable1 = var1;
        this.variable2 = var2;
    }
    property1() {
        console.log(this.variable2);
        return this.variable1;
    }
}
const readonlyCLs = new readonlycls("hello readonly cls", "changable code");
console.log(readonlyCLs.property1());
readonlyCLs.variable2 = "this is changed from anywhere not read only";
readonlyCLs.property1();
class flowerclass {
    flowername = "lotus";
    smell = true;
    constructor(fname, fsmell) {
        this.flowername = fname;
        this.smell = fsmell;
    }
    flowerchar(name) {
        this.flowername = name;
        console.log("it will give nector this will be the charecteristics of", name);
    }
    flowercolor() {
        console.log("flower clolour is pink");
        return ("success");
    }
    flowersize() {
        return (43);
    }
}
const flr = new flowerclass("rose", true);
console.log(flr.flowercolor(), flr.flowersize(), flr.flowerchar("jasmine"), "this is name of flower : ", flr.flowername);
class rectangle {
    length1;
    width;
    constructor(length1, width) {
        this.length1 = length1;
        this.width = width;
    }
    area() {
        return (this.length1 * this.width);
    }
    perimeter() {
        return (2 * (this.length1 + this.width));
    }
}
class square extends rectangle {
    constructor(length1) {
        super(length1, length1 + 2);
    }
}
const mysqr = new square(2);
console.log(mysqr.area(), mysqr.perimeter());
class lpf {
    fname;
    uses;
    freq;
    constructor(fname, uses, freq) {
        this.fname = fname;
        this.uses = uses;
        this.freq = freq;
    }
    fildef() {
        return `passes low frequency signal and pause high frquency${this.fname}`;
    }
    bwidth() {
        return (500);
    }
    fildefinition() {
        return (`this is the definition of LPF${this.uses} `);
    }
}
class HPF extends lpf {
    constructor(fname1, uses1, freq1) {
        super(fname1, uses1, freq1);
    }
    bwidth() {
        console.log("frequency of HPF");
        return (400);
    }
}
const Filter = new HPF("high pass filter", "passes high freq", 899);
console.log(Filter.fildef());
console.log(Filter.bwidth());
console.log(Filter.fildefinition());
// An abstract class is a class designed to be a parent for other classes. You cannot create an object directly from it, and it can define methods that child classes must implement.
// Think of it like a blueprint for building something.
class mobile {
    // the derived class should impliment the mobile function
    unwant() {
        return (`child class dont need to implement this function$`);
    }
}
class Laptop extends mobile {
    storage;
    model;
    constructor(storage, model) {
        super();
        this.storage = storage;
        this.model = model;
    }
    MOBCHG() {
        console.log(`this is storage${this.storage},& model${this.model}`);
        return ("this should return a string");
    }
    MOBILE() {
        return "this function should implement ";
    }
}
const speci = new Laptop(512, "V2622");
console.log(speci.MOBCHG());
console.log(speci.MOBILE());
console.log(speci.unwant());
// typecript basic Generics
// Generics allow you to write one reusable function or class that can work with different data types while keeping TypeScript's type checking.
// Functions
// Generics with functions help create more general functions that accurately represent the input and return types.
function test(Z1, Z2) {
    return [Z1, Z2];
}
console.log(test(54, "434"));
// Classes
// Generics can be used to create generalized classes, like Map.
class test1 {
    cont;
    TestVal;
    constructor(cont) {
        this.cont = cont;
    }
    getval(val) {
        this.TestVal = val;
    }
    setval() {
        return this.TestVal;
    }
    showval() {
        return `${this.cont}${this.TestVal}`;
    }
}
const values = new test1(2);
console.log(values.setval());
console.log(values.showval());
const wrapedVal = { value: 100 };
const wrapedVal1 = { value: "hello" };
console.log(wrapedVal);
console.log(wrapedVal1);
// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.
// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred
class defval {
    title;
    valuedef;
    constructor(title) {
        this.title = title;
    }
    defgetval(ipvalue) {
        this.valuedef = ipvalue;
    }
    defsetval() {
        return (this.valuedef);
    }
    defshowval() {
        return (`this is the value we push ${this.title} ,${this.valuedef}`);
    }
}
const constnm = new defval("nm of constructor");
constnm.defgetval("4");
console.log(constnm.defsetval());
console.log(constnm.defshowval());
// 6. Generics with extends (constraints)
// extends is used to apply a constraint.
// A constraint means you restrict which types are allowed.
// Without the constraint, you could pass all type  too:
function extendfn(z1, z2) {
    console.log(`value of Z1 is:${z1} and the value of Z2: ${z2}`);
    return [z1, z2];
}
const fun = extendfn("hello", true);
console.log(fun);
// exapmle with class
class Laptop1 {
    model;
    constructor(model) {
        this.model = model;
    }
}
class Mobile2 {
    brand;
    constructor(brand) {
        this.brand = brand;
    }
}
class DeviceStorage {
    device;
    constructor(device) {
        this.device = device;
    }
    showDevice() {
        return this.device;
    }
}
const laptop11 = new DeviceStorage(new Laptop1("Dell"));
const mobile22 = new DeviceStorage(new Mobile2(4345));
console.log(laptop11.showDevice().model); // Dell
console.log(mobile22.showDevice().brand); // Samsung
console.log(mobile22.showDevice());
// UTILITY TYPES IN THE NEXT FILE
