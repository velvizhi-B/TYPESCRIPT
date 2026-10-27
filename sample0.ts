function greet(word:string):string{
    return`Good,${word}!`;
}
const mess:string=greet("World");
console.log(mess);

let num:number=10.43334;
let num1=0xf00d;
let char:string="hello buddy";
let boole:boolean=true;
let  char1:string=`this is a para for ${num},${char} to chech place holder`
const bignum=BigInt('9007199254740991');
let arr1:number[]=[1,2,3,4,5];
console.log(num,num1,char,boole,char1,bignum);
console.log(arr1);
// for creating unique property key constant
const uniqKey:symbol=Symbol('discription');
const object1={[uniqKey]:"this is a unique key"};
console.log(object1[uniqKey]);
// explicit Types and Inference
// TypeScript offers two ways to work with types:

// Explicit Typing: You explicitly declare the type of a variable
// Type Inference: TypeScript automatically determines the type based on the assigned value
// epxlicit typing
let arr2:string[]=["hello","world"];
let uName:string="this is the string";
console.log(arr2);
console.log(uName);

// function with explicit typing;
function greet1(root:number=43):any{
    console.log(`good${root}`);
}
greet1(34);
// type inference
let arr3 = ["hello", "world"];
let uName1 = "this is the string";
console.log(arr3);
console.log(uName1);
// function with type inference
function add(x:any,y:any){
    return x+y;
}
console.log(add(10,"adding num with string"));
const user={
    name:"jack",
    age:23,
    password:"1234"
}
console.log(user.name,user.age);
// console.log(user.email) // this will give error as email is not defined in user object;

// let username: string = "alice";
// username = 42; // Error: Type 'number' is not assignable to type 'string'

// let score = 100;  // TypeScript infers 'number'
// score = "high";  // Error: Type 'string' is not assignable to type 'number'

// 1. JSON.parse returns 'any' because the structure isn't known at compile time
const data = JSON.parse('{ "name": "Alice", "age": 30 }');
console.log(data);


let a=10;
// let a="new value"; // Error: Cannot redeclare block-scoped variable 'a'.
console.log(a.toExponential()); // This will work because 'a' is of type number
// a.runANonExistentMethod(); // Error: Property 'runANonExistentMethod' does not exist on type 'number'.
console.log(Math.round(a));


let v: any = true;
v = "string"; // no error as it can be "any" type
// v.runANonExistentMethod(); 
// no type error in the editor, but will still throw an error if commented in
console.log(Math.round(v)); // no error as it can be "any" type

// unknown type
let b:unknown=true;
b=10;
b="new value";

b = {
  rANEMethod: () =>{
    console.log("I think therefore I am");
  }
} as { rANEMethod: () => void}
if (typeof b==='object'&& b!==null){
    (b as { rANEMethod:Function}).rANEMethod();
}


// let c:never=true? (()=>{throw Error("this is never type type")})(): (()=>{throw Error("this is never type type")})();

//types will be continued

// array
var c:string[];
c=["hi","hello"]
console.log(c)
var d:any[];
d=[4,"fdfd",true]
console.log(d);

//readOnly keyword prevent the parameter from being changed.
var e:string[]=[];

e.push("hello")
console.log(e)
let f:readonly number[]=[7];
// f.push(4,5); will throw an error
console.log(f)
// inference
const g:string[]=["design","thinking"]
g.push("digital","design");
const h:string|undefined=g[2]
console.log(h)
console.log(g);

// typed array  a tuple is a typed array with predefined length and types of each index
let i:[number,string,boolean];
i=[54,"hello",true];


const k:any[]=i
function j(k:any){
console.log(k)
}
j(k);
// let ourTuple: [number, boolean, string];

// // initialized incorrectly which throws an error
// ourTuple = [false, 'Coding God was mistaken', 5];

// read only tuple good to practice to use tuple with readonly
let l:[string,number, boolean];
l=["janak",54,true];
l.push("pushed string")
console.log(l)

// we an push any variable inside the array in declared type so radonly will help you only acces the value and cant be changed 

// named tuple
let m:[a:string,b:number,c:string,d:boolean]
m=["string",43,"ds",false]
console.log(m)
m.push("hello")
console.log(m)
// distructuring tuples
let n:[number,number]=[445.5,54];
let[o,p]=n;
console.log(p,o);
console.log(n);

// typescript object types
const car:{type:string,model:string,year:number, colour:boolean}={
    type:"benz",
    model:"bharath",
    colour:true,
    year:2020
};

// type inference
console.log(car);
// inference
const bike={
    type:"FZ",
    year:2019
}
bike.type="jupiter(TVS)";
console.log(bike)

// optional property;
// without  "?" error found
const q:{type:string,example?:string,count:number}={
    type:"ball point",
    count:10
    

}
console.log(q)
q.example="rorito"
console.log(q)

// index signature

// we an add or concatinate the array of value while assiging
const r:{[index:string]:number}={reno:2203109038};
console.log(r)
r.pname=89;
r.reno=2004;
console.log(r)

// ENUM comes ni two flavors 1 is string, numeric
//numerinc ENUM default
// By default, enums will initialize the first value to 0 and add 1 to each additional value:
enum season{
    summer,
    winter,
    rainy,
    spring
};
let currentSeason=season.rainy;
console.log(currentSeason);

// numeric ENUMS -Initialized
// You can set the value of the first numeric enum and have it auto increment from that:
enum soil{
    red=2,
    black,
    saline,
    alkaline,
    mud,
    slagy
}
console.log(soil.black);
console.log(soil.red);

// numeric ENUM Fully initialised
enum errorStatus{
    notFound=404,
    success=200,
    accepted=202,
    created=201,
    badRequest=400
};
console.log(errorStatus.created);
console.log(errorStatus.notFound);

// string ENUM
enum direction{
    east="EAST",
    west="WEST",
    north="NORTH",
    south="SOUTH"
}
console.log(direction.east);
console.log(direction.south);

// type alliases
type compname= string;
type specification=string;
type quantity=number;
type component={
    name:compname,
    spec:specification,
    quant:quantity
    } 
const Compname:compname="arduino UNO";
const Specification:specification= "R3"
const Quantity:quantity=20;
const Comp:component={
    name:Compname,
    spec:Specification,
    quant:Quantity

}
console.log(Comp)

type animal={name:string};
type bear=animal&{honey:boolean};
const Bear:bear={name:"winnie", honey:false};
type status="success"|"error";
let response:status="success";
console.log(response)

// interfaces
interface formula{
    length:number,
    breath:number
}
const calculation:formula={
    length:43,
    breath: 22
    
}
console.log(calculation);

// interface merging

interface pet{petname:string;} 
interface pet{age:number;}
const dog:pet={petname:"tom",age:3};
console.log(dog);

//types VS Interface:
// * EXTENDING- both can be expended but interfaces support declation merging
// * UNIONS/ INTERSECTION - only aliases supports union and itersection
// * RECOMENDATION - use 'interface ' for objects , type for everything else.

// extending interfaces
interface device{
    mouse:string;
    keyboard:string;
    monitor:string;
    quantity:number;
}
interface iodevice extends device{
    printer:string;
    speaker:number;
}
const extendedInterface:iodevice={
    mouse:"ABK mouse",
    keyboard:"ABK Keys",
    monitor:"acer",
    quantity:10,
    printer:"cannon",
    speaker:500
}
console.log(extendedInterface);

//typescript Union Types
// union can be used when a value can be more than a single type
function printregno(regno:string|number){
    console.log(`reg no is ${regno}`)
}
printregno("22TD48");
printregno(2203109038)

// union type errors
function names(personName:string|number){
    // throw an error
    // console.log(`this is the name of te person${personName.toUpperCase}`)
    console.log("my frd name is",personName);
}
names("subathra")

// typescript function 
// return type
// type of value returned by t he function csn be explicitly defined
function getTime():number{
    return new Date().getTime();
}
console.log(getTime())

// void return type
// it indicate that the function didn;t return any value
function msg(msg1:string):void{
    console.log(msg1)
    console.log("return nothing")
}
msg("hello void function")
// return nothing because it was a void finction
console.log(msg)
// parameters
function addtion(a:number=90,b:number=2):number{
    return(a+b+a)
}
addtion(8,43); //this will only give vale while calling, 
console.log(addtion())
console.log(addtion(2,4))

// optional parameter required parameter cannot follow an optional parameter
//we can pass the parameter as a optional using "?"operator";
function summ(a:number,b:number,c?:number){
    return a+b+(c||9);
}
console.log(summ(2,4));

// default parameter
function pow(x:number,y:number=43,z?:number){
    return(x**y)
}
console.log(pow(2))
// named parameters  follows the same pattern as normal parameter
// should be pass inside the {}
function div({divisor,divident}:{divident:number,divisor:number}){
    return divident/divisor;
}
console.log(div({divident:3,divisor:4}));
// reset parameter
function sub(a:number,b:number,...rest1:number[]){
    return a+b+rest1.reduce((num1,num2)=>num1-num2,0);
}
console.log(sub(1,2,3,4,5))

// type alias
// function type can be specified seperately from the functionwith type aliases.
// similar to arrow function
// A type alias is a name we give to a type so that we can reuse that type whenever we need it.
// that is naming an value to the data type 
type nicknm=(value:number)=>number;
const aliasfun:nicknm=(value1)=>value1*10;
console.log(aliasfun(100))
// typescript casting
// stright way to cast the variable is using the as keyword which will directly chanhe the type og the given variable
let cast2:unknown="hello";
console.log((cast2 as string).length)
let cast:number=65;
let cast1=(cast as unknown)as string ;
cast1="greet World";
console.log(cast1);

// casting with < > works same as "as"
let x:unknown="hello World";
console.log((<string>x).length);
// typescript allows types and visibility modifier to the js class
class Person {
  name: string="";
}
      
const person = new Person();
person.name = "Jane";

console.log(person);

// public - (default) allows access to the class member from anywhere
// private - only allows access to the class member from within the class
// protected - allows access to the class member from itself and any classes that inherit it, which is covered in the inheritance section below
// public
class subject{
    public NAME:string="maths";

};
const Subject=new subject()
console.log(Subject.NAME);
Subject.NAME="biology";
console.log(Subject.NAME)
// private
class subject1 {
    private Name1:string="hello, good morning"
   Name2:string="good afternoon"
    greeting(){
    console.log(this.Name1);
    
    console.log(this.Name2);
    };

}


const Subject1=new subject1();
console.log(Subject1.Name2)
Subject1.greeting()
// console.log(Subject1.Name1) error due to private 

//projected

class Welcome{
    protected welcome1:string="you are welcome"
    private welcome2:string="hello how'r you"
    public welcome3:string ="no worries";
    welcome4:string="this is without visibilities"
};
class Welcome2 extends Welcome{
    welcomefn(){
        console.log(this.welcome1);

    }

}
const welcomvar= new Welcome()
// console.log(welcomvar.welcome1);// error due to protected
// console.log(welcomvar.welcome2); //error due to private
console.log(welcomvar.welcome3);
console.log(welcomvar.welcome4);

// Instead of declaring the property separately and assigning it manually, you can add a visibility modifier such as private or public directly to a constructor parameter.
class BOOK1{
    public constructor (public book1:string="public book",private book2:string="private book"){
        

    }
    public getbook():string{
        return (this.book2);


    }

}

const BooK=new BOOK1("none",);
console.log(BooK.getbook())
// console.log(BooK.book2) //cant acces this because it was a priavte parameter
console.log(BooK.book1)


// readonly
class readonlycls{
    private readonly variable1:string="hello";
    public  variable2:string="hello";
    constructor(var1:string,var2:string){
        this .variable1=var1;

        this.variable2=var2
    }
    property1():string{
        console.log(this.variable2)
        return this.variable1;
        
    }

}
const readonlyCLs=new readonlycls("hello readonly cls","changable code");
console.log(readonlyCLs.property1())
readonlyCLs.variable2="this is changed from anywhere not read only"
readonlyCLs.property1();
// inheritance: implements
interface flower{
    flowername:string;
    smell:boolean;
    flowercolor:()=> string;
    flowersize:()=> number;
}
class flowerclass implements flower{
    flowername:string="lotus";
    smell:boolean=true;
    constructor(fname:string,fsmell:boolean){
        this.flowername=fname;
        this.smell=fsmell;
    }
    flowerchar(name:string){
        this.flowername=name
        console.log("it will give nector this will be the charecteristics of",name)
    }
    flowercolor():string{
        console.log("flower clolour is pink")
        return("success")
    }
    flowersize():number{
        return(43)

    }

}
const flr=new flowerclass("rose",true)
console.log(flr.flowercolor(),flr.flowersize(),flr.flowerchar("jasmine"),"this is name of flower : ",flr.flowername)

//inheritance: extends
// Classes can extend each other through the extends keyword.
// A class can only extend one other class.\
interface angle{
    area:()=>number;
    perimeter:()=>number
}
class rectangle implements angle{
    constructor(public length1:number,public width:number){
    }
    area():number{
        return(this.length1*this.width)
    }
    perimeter():number{
        return(2*(this.length1+this.width))
    }
}
class square extends rectangle{
    constructor(length1:number){
        super(length1,length1+2)      
    }
}
const mysqr=new square(2);
console.log(mysqr.area(),mysqr.perimeter())
// override
// When a class extends another class, it can replace the members of the parent class with the same name.
// Newer versions of TypeScript allow explicitly marking this with the override keyword.
interface filter{
    fildef:()=>string;
    bwidth:()=>number;
}
class lpf{

    public constructor(protected readonly fname:string,
        protected readonly uses:string,protected freq:number){}
    public fildef():string{
        return`passes low frequency signal and pause high frquency${this.fname}`
    }
    public bwidth():number{
        return(500);
    }
    public fildefinition():string{
        return(`this is the definition of LPF${this.uses} `)

    }

}
class HPF extends lpf{
    public constructor(fname1:string,uses1:string,freq1:number){
        super(fname1,uses1,freq1)
    }
    public  bwidth():number{
        console.log("frequency of HPF");
        return(400);
    }
}
const Filter=new HPF("high pass filter","passes high freq",899)
console.log(Filter.fildef());
console.log(Filter.bwidth());
console.log(Filter.fildefinition());

// An abstract class is a class designed to be a parent for other classes. You cannot create an object directly from it, and it can define methods that child classes must implement.

// Think of it like a blueprint for building something.
abstract class mobile{
    public abstract MOBILE():string
    // the derived class should impliment the mobile function
    public unwant():string{
        return (`child class dont need to implement this function$`)
    }
}
class Laptop extends mobile{

    constructor (private storage:number,protected model:string){
        super()
    }

    public MOBCHG():string{
        console.log(`this is storage${this.storage},& model${this.model}`)
        return("this should return a string")
    }
    public MOBILE():string{
        return "this function should implement "
    }
}
const speci=new Laptop(512,"V2622")
console.log(speci.MOBCHG())
console.log(speci.MOBILE())
console.log(speci.unwant())

// typecript basic Generics
// Generics allow you to write one reusable function or class that can work with different data types while keeping TypeScript's type checking.
// Functions
// Generics with functions help create more general functions that accurately represent the input and return types.

function test<a,b>(Z1:a,Z2:b):[a,b]{
    return[Z1,Z2]
}
console.log(test<number,string>(54,"434"))
// Classes
// Generics can be used to create generalized classes, like Map.

class test1<C>{
    public TestVal:C|undefined;
    constructor(protected cont:number){}
    public getval(val:C){
        this.TestVal=val;
    }
    public setval():C|undefined{
        return this.TestVal;
    }
    public showval():string{
        return `${this.cont}${this.TestVal}`
    }


}
const values= new test1<string>(2);
console.log(values.setval());
console.log(values.showval());
//Type Aliases
// Generics in type aliases allow creating types that are more reusable.
type wrap<y>={value:y};
const wrapedVal:wrap<number>={value:100};
const wrapedVal1:wrap<string>={value:"hello"};
console.log(wrapedVal);
console.log(wrapedVal1);
// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred.
// Default Value
// Generics can be assigned default values which apply if no other value is specified or inferred
class defval<T=string>{
    private valuedef:T|undefined;
    public constructor(private title:string){    }

    public defgetval(ipvalue:T){
        this.valuedef=ipvalue;

    }
    public defsetval():T|undefined{
        return(this.valuedef);
    }
    public defshowval():string{
        return(`this is the value we push ${this.title} ,${this.valuedef}`)
    }

}
const constnm=new defval("nm of constructor");
constnm.defgetval("4");
console.log(constnm.defsetval());
console.log(constnm.defshowval());

// 6. Generics with extends (constraints)
// extends is used to apply a constraint.

// A constraint means you restrict which types are allowed.
// Without the constraint, you could pass all type  too:
function extendfn<
U extends string|number,
V extends number|boolean>(z1:U,z2:V):[U,V]{
    console.log(`value of Z1 is:${z1} and the value of Z2: ${z2}`);
    return[z1,z2];
}
const fun=extendfn("hello",true);
console.log(fun);

// exapmle with class
class Laptop1 {
    constructor(public model: string) {}
}

class Mobile2 {
    constructor(public brand: number) {}
}

class DeviceStorage<T extends Laptop1 | Mobile2> {
    constructor(public device: T) {}

    showDevice(): T {
        return this.device;
    }
}

const laptop11 = new DeviceStorage(
    new Laptop1("Dell")
);

const mobile22 = new DeviceStorage(
    new Mobile2(4345)
);

console.log(laptop11.showDevice().model); // Dell
console.log(mobile22.showDevice().brand); // Samsung
console.log(mobile22.showDevice());

// UTILITY TYPES IN THE NEXT FILE