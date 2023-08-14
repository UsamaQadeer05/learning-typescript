"use strict";
// Lecture
// Today's Topic
// 1. For Loop
// 2. While Loop
// 3. do While Loop
// for (initialization; condition; update) {
//     // statements
//  }
// 1. How to Display a Sequence of Numbers with a For Loop
// for (let i = 1; i <= 10; i++) {
//     console.log(i);
// }
// Print numbers from 10 to 1
// for (let i = 10; i >= 1; i--) {
//     console.log(i);
// }
// 2. How to Display a Sequence of Even Numbers
//                       0  1   2  3  4  5
// let numbers: number[] = [1, 2, 4, 7, 9, 11, 14, 16, 18, 21, 24, 28, 31];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index]; // numbers[5]
//     if (element % 2 == 0) {
//         console.log(element);
//     }
// }
// 3. How to Break a For Loop Operation
// let numbers: number[] = [1, 2, 4, 7, 9, 11, 14, 16, 18, 21, 24, 28, 31];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index]; // numbers[5]
//     console.log(index);
//     if (element % 2 == 0) {
//         console.log(element);
//         break;
//     }
// }
// 4. How to Display the Sum of Natural Numbers
// let numbers: number[] = [1, 2, 4, 7, 9, 11, 14, 16, 18, 21, 24, 28, 31];
// let sum: number = 0;
// for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i]; // sum = sum + numbers[i];
// }
// console.log(sum);
// 5. How to Loop Through an Array to Check for Odd and Even Numbers
// let numbers: number[] = [1, 2, 4, 7, 9, 11, 14, 16, 18, 21, 24, 28, 31];
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if (element % 2 == 0) {
//         console.log(`Even: ${element}`);
//     } else {
//         console.log(`Odd: ${element}`);
//     }
// }
// Print the names of fruit from an array
// let fruits: string[] = ["Apple", "Mango", "Orange", "Grapes", "Kiwi"];
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     console.log(element);
// }
// let fruits: string[] = ["Apple", "Mango", "Orange", "Mango", "Kiwi", "Mango", "Banana"];
// let mangoCount: number = 0;
// for (let index = 0; index < fruits.length; index++) {
//     const element = fruits[index];
//     if (element == "Mango" && mangoCount == 2) {
//         console.log(`You have already purchases mango ${mangoCount} times.`);
//         break;
//     }
//     console.log(`You have purchased ${element}`);
//     if (element == "Mango") {
//         mangoCount++;
//     }
// }
// 6. How to Loop Through an Array of Numbers to Get the Maximum and Minimum Number
// Maximum number from an array
// let numbers: number[] = [1, 2, 4, 0, 9, 11, 31, 16, 18, 21, 24, 28, 3];
// let maxNumber: number = 0;
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if (element > maxNumber) {
//         maxNumber = element;
//     }
// }
// console.log(`Maximum number is ${maxNumber}`);
// 7. While a variable is less than 10, log it to the console and increment it by 1: // While Loop
//Syntax
// initialization
// while (condition) {
//     //statements
//      i++
// }
// let i = 1;
// while (i <= 10) {
//     console.log(i);
//     i++;
// }
// let fruits: string[] = ["Apple", "Mango", "Orange", "Mango", "Kiwi", "Mango", "Banana"];
// let index = 0;
// let mangoCount = 0;
// while (mangoCount < 2) {
//     console.log(`You have purchased ${fruits[index]}`);
//     if (fruits[index] == "Mango") {
//         mangoCount++;
//     }
//     index++;
// }
// 8. Push to an array, even if condition evaluates to true: // do While loop
let numbers = [1, 2, 4, 0, 9, 11, 31, 16, 18, 42, 24, 28, 3];
let maxNumber = 0;
for (let index = 0; index < numbers.length; index++) {
    console.log(`Index ${index}`);
    const element = numbers[index];
    if (element > maxNumber) {
        maxNumber = element;
    }
}
console.log(`Maximum number is ${maxNumber}`);
