// TYPESCRIPT UTILITY TYPES
// Utility types are built-in TypeScript tools that help you modify an existing type without writing a completely new type.
// Imagine you already have a Student type. You want to make all its properties optional, or make them read-only. Instead of creating a new type manually, you can use utility types.
type student={
    name:string;
    regno:number;
    attend:boolean;
    };
const stdata:student={
    name:"subathra",
    regno:2203109036,
    attend:true
};
console.log(stdata);
console.log(stdata.name);
console.log(stdata.regno);
console.log(stdata.attend);
// Partial
// Partial changes all the properties in an object to be optional.
// here we don't need to give value to all property
const stdatapart:Partial<student>={}
stdatapart.name="vishalini"
console.log(stdatapart);
// we can also  implement this utitlity by interface 
interface employee{
    Name:string,
    epno:number,
    email:string  
}

// by using required we should include value for alla the parameter
let Edata: Required<employee>={
    Name:"Magesh V",
    epno:2025001,
    email:"magesh@employee.com"
}
console.log(Edata)

// Record
// Record is a shortcut to defining an object type with a specific key type and value type.
// it only requre 2 element not more than that like key value pairs
const bag:Record<string,boolean>={
    "roshan":true,
    "skybags":true
}
console.log(bag)

// omit Omit removes keys from an object type.
const Emplog:Omit<employee,'epno'|'email'>={
    Name:"rithiga",
    // when i add this error found
    // email:"rithiga@employee.com"
}
console.log(Emplog);
// PICK
// Pick removes all but the specified keys from an object type.
const empdetail:Pick<employee,'email'>={
    email:"leela@employee.com"
}
console.log(empdetail)
// Exclude
// Exclude removes types from a union.
// removes types from a union type. It does not remove properties from an object type.
                // type penguin={
                //     a:number,
                //     b:string,
                //     c:boolean
                // }
                // const Penguin:Exclude<penguin,'c'>=789;
                // console.log(Penguin)
// so this code is not exicutable

type Primitive = string | number | boolean;
const value: Exclude <Primitive, string> = true;
console.log(typeof value);
//ReturnType extracts the return type of a function type.
function test():string{
    return"return string"
}
// we can't pass number or boolean here
const Test: ReturnType<typeof test>="Hi good morning"

console.log(Test)
// another examle
type PointGenerator = () => { x: number; y: number; };

const point: ReturnType<PointGenerator> = {
  x: 10,
  y: 20
};
console.log(point)
// parameters
// Parameters extracts the parameter types of a function type as an array.
// Parameters utility type extracts the parameter types of a function and stores them as a tuple (an array-like type).
type pointPrint=(p:{d:number,e:string})=>void;
const point1:Parameters<pointPrint>[0]={
    d:54,
    e:"hello"

};
console.log(point1);

// another example
function student(name: string, age: number): void {
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
}
type StudentParams = Parameters<typeof student>;
const details: StudentParams = ["Subathra", 21];
console.log(details);
//Readonly is used to create a new type where all properties are readonly, meaning they cannot be modified once assigned a value.
// Keep in mind TypeScript will prevent this at compile time, but in theory since it is compiled down to JavaScript you can still override a readonly property.
interface book{
    bookname:string,
    booktype:string,
    nopage:Number
};
const readbook:Readonly<book>={
    bookname:"The sky in Dark ",
    booktype:"thriller",
    nopage:320
}
console.log(readbook);
// this will execute when someother uitility property use other than Readonly
        // readbook.bookname="sun in the shine";
        // console.log(readbook)

// typescript Keyof= will get union property

// keyof is a keyword in TypeScript which is used to extract the key type from an object type.
type officer={
    Offname:number,
    Offmail:string,
    Offno:number
}
type keyofficer=keyof officer;
let key1:keyofficer="Offname"
let key2:keyofficer="Offmail"
console.log(key1);
console.log(key2);
//   this wil not exicute because it was not a key parameter of officer
// let key3:keyofficer="Offnum"
// console.log(key3)
type officer2={
    [ofname:number]:string,
} 
type keyofficer2=keyof officer2;
let key01:keyofficer2=43;
let key02:keyofficer2=4;
console.log(key01);
console.log(key02)
// Types
// null and undefined are primitive types and can be used like other types, such as string
let g:string|undefined|null=undefined;
console.log(g)
g="helo";
console.log(g)
// not executed because not declared
// g=true;
// console.log(g)
g=undefined;
console.log(g)
g=null;
console.log(g)
// Nullish Coalescing
// Nullish coalescing is another JavaScript feature that also works well with TypeScript's null handling.
// It allows writing expressions that have a fallback specifically when dealing with null or undefined.
// This is useful when other falsy values can occur in the expression but are still valid.
// It can be used with the ?? operator in an expression, similar to using the && operator.

function printMileage(mileage: string|boolean | null | undefined) {
  console.log(`Mileage: ${mileage ?? 'Not Available'}`);
}
            
printMileage(null); // Prints 'Mileage: Not Available'

printMileage(undefined); // Prints 'Mileage: 0'
printMileage(true)
printMileage("string1")

function nullassertion():string | undefined{
return("hello typecript");
}
let NullAssertion=nullassertion();
console.log("value of nullassertion ="+ NullAssertion!.length)
//Just like casting, this can be unsafe and should be used with care.

// Array Bounds Handling
// Even with strictNullChecks enabled, by default TypeScript assumes array access will never return undefined (unless undefined is part of the array type).

// The config noUncheckedIndexedAccess can be used to change this behavior.

let array:number[]=[1,2,3];
let arrvalue=array[0];
 console.log(arrvalue);
 // with `noUncheckedIndexedAccess` this has the type `number | undefined`

// TypeScript Definitely Typed
// npm install --save-dev @types/jquery

// leter this will be in next page