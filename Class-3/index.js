// import { log } from "console";
var promptSync = require('prompt-sync')();
// let userName = promptSync('Enter your username: ');
// // Types of Functions
// // 1. take input, no return
// // 2. no input, but return values
// // 3. take input also return values
// console.log('\nExample of \n1. take input, no return');
// function greetings(userName: string) {
//     console.log(`Hi ${userName} this is greetings function`);
// }
// greetings(userName);
// console.log('\nExample of \n2. no input, but return values');
// function add(): number {
//     let num1: number = 5;
//     let num2: number = 10;
//     return num1 + num2;
// }
// let sum = add();
// console.log(sum);
// console.log('\nExample of \n3. take input also return values');
// function add2() {
//     let num1: number = 5;
//     let num2: number = 10;
//     console.log(num1 + num2);
// }
// add2();
// // Arrow functions
// let add3 = () => (console.log('\nExample of arrow function', 5+15));
// let add4 = () => {console.log('\nExample of arrow function', 5+15)};
// let add5 = () => (5+15);
// add3();
// add4();
// console.log(add5());
// // Arrow functions with parameters
// let add6 = (num1: number, num2: number) => (num1 + num2);
// console.log(add6(5, 20));
// [21, 22, 25, 27, 29, 32]
// [21, 22, 23, 24, 25, 26, 27, 28 29, 30, 31 32]
console.log("\n\n\nTasks of Find Missing Values Index");
var missingValuesIndex = function (list) {
    list = list.sort();
    var missingValueIndex = [];
    var missingIndex = -1;
    if (list.length > 0) {
        var _loop_1 = function (index) {
            missingIndex++;
            var isAvailable = list.find(function (value) { return value == index; });
            if (isAvailable == undefined) {
                missingValueIndex.push(missingIndex);
            }
        };
        for (var index = list[0]; index < list[list.length - 1]; index++) {
            _loop_1(index);
        }
    }
    return missingValueIndex;
};
// [21, 22, 25, 27, 29, 32]
// [32, 22, 25, 27, 29, 21]
var missingValues = missingValuesIndex([41, 45, 57, 69, 72]);
// console.log(missingValues);
// Task
// How to transpile code automatically with running tsc index command
// Take STudent marks from console & perform grading system
var CalculateCreditScores = function (totalBalance) {
    if (totalBalance >= 250 && totalBalance < 300) {
        console.log("A+");
    }
    else if (totalBalance >= 220 && totalBalance < 250) {
        console.log("B");
    }
    else if (totalBalance >= 180 && totalBalance < 220) {
        console.log("C");
    }
    else if (totalBalance >= 150 && totalBalance < 180) {
        console.log("D");
    }
    else if (totalBalance >= 0 && totalBalance < 150) {
        console.log("Low");
    }
    else {
        console.log("Invalid");
    }
};
var balance = +promptSync('Enter balance value: ');
var minBalance = +promptSync('Enter minimum balance value: ');
var maxBalance = +promptSync('Enter maximum balance value: ');
var totalBalance = balance + minBalance + maxBalance;
CalculateCreditScores(totalBalance);
