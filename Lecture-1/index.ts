// console.log("Hello World");

// //datatype variable = value
// let firstname = "Kamran";
// let _firstname = "Kamran";

// console.log(firstname);



// let _name: string = "hhh";
// //let number: number = 66.888; //single line comment

// /*
// jhgjjjg
// bnbn
// hkjkh
// */


// var a = 8;

// //let c = 0;
// {
// let c = 0;
// c
// }
// let b;
// console.log(b);

// let c: null = null;
// const g = 88;


// let fname = "Yousuf";
// let fullname = `${fname} Khan`;

// let Name: string = "Kamran";
// let value: number = 2;
// let isAbsent: boolean = true;


// console.log(typeof Name);
// console.log(typeof value);
// console.log(typeof isAbsent);


// //DMAS
// let divide = 4 / 2;
// let multiply = 4 * 2;
// let addition = 4 + 2;
// let substract = 4 - 2;
// let remainder = 5 % 2; // 1

// console.log(4**4);//4*4*4*4


// a == a
// a === a

// let num1:number = 5;
// let num2 = "gh";

// console.log(num1 == Number(num2));
// // console.log(num1 === Number(num2));

// a > num1 //Greater than
// a < num1 //less than
// a >= num1 //greater than & equal to
// a <= num1 //less than & equal to
// a != num1 //not equal
// a !== num1 //not equal & check datatype





// // Logical Operators
// //1.AND -> All Condition is true then answer will be true
// //2. OR -> ANy condition is true then answer will be true
// //3.NOT -> 


// let n = 5;
// console.log(n >= 5 && n < 10); //
// console.log(n > 5 && n < 10); //
// console.log(n >= 5 || n < 10); //
// console.log(n > 5 || n < 10); //
// console.log(!(n < 10)); //
// console.log(!(n > 10)); //


// // function greet(msg: string): string {
// //     console.log(msg);

// //     return "msg"; 
// // }


// // let k = greet("Hi");

// // console.log(k);

// //Arrow function
// // const greet = (msg: string): string => {
// //     console.log(msg);

// //     return msg;
// // }



// // function Calculator(number1: number, number2: number, operator: string) {
// //     //DMASR
// //     if (operator == "/") {
// //         console.log(number1 / number2);
// //     }
// //     if (operator == "*") {
// //         console.log(number1 * number2);
// //     }
// //     if (operator == "+") {
// //         console.log(number1 + number2);
// //     }
// //     if (operator == "-") {
// //         console.log(number1 - number2);
// //     }
// //     if (operator == "%") {
// //         console.log(number1 % number2);
// //     }
// // }

// // const Calculator = (number1: number, number2: number, operator: string) => {
// //     //DMASR
// //     if (operator == "/") {
// //         console.log(number1 / number2);
// //     }
// //     if (operator == "*") {
// //         console.log(number1 * number2);
// //     }
// //     if (operator == "+") {
// //         console.log(number1 + number2);
// //     }
// //     if (operator == "-") {
// //         console.log(number1 - number2);
// //     }
// //     if (operator == "%") {
// //         console.log(number1 % number2);
// //     }
// // }



// const Calculator = (number1: number, number2: number, operator: string) => {
//     //DMASR
//     if (operator == "/") {
//         console.log(number1 / number2);
//     }
//     else if (operator == "*") {
//         console.log(number1 * number2);
//     }
//     else if (operator == "+") {
//         console.log(number1 + number2);
//     }
//     else if (operator == "-") {
//         console.log(number1 - number2);
//     }
//     else if (operator == "%") {
//         console.log(number1 % number2);
//     }
//     else {
//         console.log("Invalid Operator");
        
//     }
// }


// Calculator(8, 4, "/"); // 
// Calculator(8, 4, "*"); // 
// Calculator(8, 4, "+"); // 
// Calculator(8, 4, "-"); // 

// //if,if-else, if-else-if


// let correctAnswer = "Pakistan";

// if ("China" == correctAnswer) {
//     console.log("Correct!");
// }
// else {
//     console.log("Wrong!");
// }



// Take 2 input from a user one is user's country name & user's age
// If country is Pakistan then check age if age greater than 18 then give
// a ticket to user if country is not Pakistan then print Invalid country
// & if age is less than 18 then print age restriction.

const promptSync = require('prompt-sync')();


// let country: string = promptSync("Enter your country name: ");
// let age: number = promptSync("Enter your age: ");

// if (country == "Pakistan") {
//     if (age >= 18) {
//         console.log("Here is your ticket!");
//     } else {
//         console.log("Age Restriction");
//     }
// } else {
//     console.log("Invalid Country");
// }

// prompt sync
// npm i prompt-sync
// npm i --save-dev @types/node







// Check if number is even then check number is divisible by 4 or not
// If number is odd then check number is divisible by 3 or not

let number: number = 5;

// % remainder operator

// if (number % 2 == 0) {
//     if (number % 4 == 0) {
//         console.log(`${number} is divisible by 4`);
//     } else {
//         console.log(`${number} is not divisible by 4`);
//     }
// } else {
//     if (number % 3 == 0) {
//         console.log(`${number} is divisible by 3`);
//     } else {
//         console.log(`${number} is not divisible by 3`);
//     }
// }


                        // 0        1         2         3           4
let fruits: string[] = ["apple", "banana", "orange", "grapes", "strawberry"];

fruits.push('Mango'); // insert at end

console.log(fruits);

fruits.pop(); // remove from end

console.log(fruits);

// fruits.("2")

fruits = [
    ...fruits.slice(0, 2), // "apple", "banana"
    "Mango", // "mango"
    ...fruits.slice(2) // "orange", "grapes", "strawberry"
];

console.log(fruits);

console.log("############################");

//                                      0           1       2           3       4           5
let fruits_name: string[] = new Array("apple", "banana", "orange", "grapes", "strawberry"); "Kiwi"

fruits_name[2] = "Mango";

console.log(fruits_name);


console.log("############################");

fruits_name.reverse();
console.log(fruits_name);


console.log('Length' + fruits_name.length);


fruits_name[fruits_name.length - 1] = "";


console.log(fruits_name);


fruits_name.shift(); // remove from start of an array

console.log(fruits_name);

// fruits_name.unshift("Kiwi"); // insert at front of an array

console.log(fruits_name);



fruits_name.splice(2, 2, "Lemon", "Kiwi");

console.log(fruits_name);



[ 2, 3, 4, 5, 6, 7, 8]


// function ways 2
// Normal function
// Arrow function


function function_name() {
 //do something   
}

function function_name1(fruit_name1: string, fruit_name2: string): number {
    //do something

    return 0;
}

function function_name2(fruit_name1: string, fruit_name2: string): string {
    //do something

    return fruit_name1 + " " + fruit_name2;
}


const _fruits = (fruit_name1: string, fruit_name2: string): string => {
    //do something

    return fruit_name1 + " " + fruit_name2;
}


function FullName(firstname: string, lastname: string): string {
    return firstname.concat(lastname)
}


let fullname: string = FullName("Kamran", "Ali");
console.log(fullname);
console.log(FullName("Kamran", "Ali"));


// function may have parameter or not
// function may or may not return value







// fruits_name.


