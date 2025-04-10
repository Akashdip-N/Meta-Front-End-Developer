// This is the initial code using `var` with some issues to fix.

var x = 5; // Variable declaration and initialization
var x = 10; // Redeclaration, works with var but not allowed with let

// Refactored:
let a = 20;
console.log(a); // Declare before use

// Refactored:
if (true) {
    let z = 30; // Use let to make z block-scoped
    console.log(z); // Error: z is not accessible outside the block
}


let b = 40; // Variable that changes value
b = 50; // Should be let, as it changes value
console.log(b); // Output: 50

const PI = 3.14; // Declared as a variable but should ideally be a constant
console.log(PI); // Output: 3.14
