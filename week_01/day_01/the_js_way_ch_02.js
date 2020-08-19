// Week_01 - Day_01
// The JS Way Chapter 02

// Coding time!

//Improved hello
//Write a program that asks the user for his first name and his last name.
//The program then displays them in one sentence.

const firstName = prompt("What is your first name?");
const lastName = prompt("What is your last name?");
alert(`Your name is ${firstName} + ' ' + ${lastName}`);

//Final values
//Observe the following program and try to predict the final values of its variables.

let a = 2; // 2
a -= 1; // a = a - 1 = 2 - 1 = 1
a++; // a = 1 + 1 = 2 // a = 2
let b = 8; // 8
b += 2; // b = b + 2 = 8 + 2 = 10 // b = 10
const c = a + b * b; // c = 2 + 10 * 10 = 102
const d = a * b + b; // d = 2 * 10 + 10 = 30
const e = a * (b + b); // e = 2 * (10 + 10) = 40
const f = a * b / a; // f = 2 * 10 / 2 = 10
const g = b / a * a; // g = 10 / 2 * 2 = 10
console.log(a, b, c, d, e, f, g); // 2, 10, 102, 30, 40, 10, 10

//VAT calculation
//Write a program that asks the user for a raw price. After that, it calculates
//the corresponding final price using a VAT rate of 20.6%.

let rawPrice = Number(prompt("What is the raw price?"));
let finalPrice = rawPrice * (0.206);

//From Celsius to Fahrenheit degrees
//Write a program that asks for a temperature in Celsius degrees,
//then displays it in Fahrenheit degrees.

let celsius = Number(prompt("What is the temperature in Celsius degress?"));
let fahrenheit = celsius * (9/5) + 32;
alert(`The temperature in Fahrenheit is ${fahrenheit} degrees`);

//Variable swapping
//Add the necessary code to swap the values of variables number1 and number2.

let number1 = 5;
let number2 = 3;

// Response:
// Solution 1
let number1 = 5;
number1 = 3;
let number2 = 3;
number2 = 5;

//Solution 2
let number1 = 5;
number1-= 2;
let number2 = 3;
number2+= 2;

console.log(number1); // Should show 3
console.log(number2); // Should show 5

//***************************************************************************//

// Reading Notes Summary

// JavaScript - a dynamically typed language. Meaning the variable's type can
//              change as the program runs. While other languages such as C or
//              Java require variables to always define types, static typing.
// Variable - stores information, contains a name, value, and type.
//            A variable is declared with let.
// Constant - stores a value that never changes, declared with const.

// = assignment operator - gives value to variables.
// += operator - increases number variable.
// ++ operator - increment variable value.

// scope of variable - part of program where the variable is visible.
// block-scoped - variables declared with let or const.
// code block - portion of program delimited by {...} curly braces.

// expression - code combining variables, values, and operators. Evaluation
//              of an expression outputs a value, with a type.
// template literal - expressions included into strings using back ticks (``).

// type conversions - 1) during evaluation of expression, implicitly.
//                    2) using Number() or String() commands, explicitly.

// prompt() and alert() - commands display dialog boxes with info input.
// naming conventions - such as camelCase or snake_case, for program visibility.

// Reading Notes
// Declaring (a variable) - computer reserves memory to store the variable. The
//                          program can read or write data to this variable now.
// for example: let a; console.log(a); output: undefined.

// Assigning (a variable) - gives value to variable using an assignment operator =
// for example: let a; a = 3.14; console.log(a) // output: 3.14
// also in one liner: let a = 3.14 (declaring variable name and assigning value)

// Increment a number variable
// Using += or ++
// ++ increments a value by 1 (increment operator ++)
// += increases a value by a number after the operator
// for example: let b = 0;      // b contains 0
//              b += 1:         // b contains 1
//              b++;            // b contains 2
//              console.log(b); // Shows 2

// Variable scope
// variables declared with let or const are block-scoped and visible to the
// block where declared, and every sub-block, if any.

// Expressions
// An expression is a piece of code that produces a value.
//
// Calculating an expression's value is called evaluation. By knowing the value
// you'll know it's type. During evaluation, variables are replaced by their value.
// Order of operations applies, such as parenthesis ()
//
// *** Include expressions in a string by using backticks(`) to delimit the string.
//     this is called, template literal and uses the syntax ${expression}
//     For example:
//     const country = "France";
//     console.log(`I live in ${country}`);
//        shows: "I live in France"
//     const x = 3;
//     const y = 7;
//     console.log(`${x} + ${y} = ${x + y}`)
//        shows: "3 + 7 = 10"
//
// Type conversions
// implicit - happen automatically as a program is ran
//    for example: using the + operator between a string and a number causes the
//                 the result to be concatenated the two values into a string.
// explicit - happens using programer's intervention, through methods such as
//            Number() or String() to change the type of the value inside ().
//
// User Interactions
// prompt() - during execution, a dialog box pops up
// alert() - a second dialog box that is triggered after clicking OK from initial
//           alert() also stops program execution
