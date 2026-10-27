type Color = "red" | "green" | "blue"; 
type HexColor<T extends Color> = `#${string}`;

// Usage
let myColor: HexColor<"blue"> = "#0000FF";

console.log(myColor)
type Color1 = "red" | "green" | "blue";

type ColorMessage<T extends Color1> = `The color is ${T}`;

let message1: ColorMessage<"red"> = "The color is red";
let message2: ColorMessage<"blue"> = "The color is blue";

console.log(message1);
console.log(message2);