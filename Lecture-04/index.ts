// Today's Topic
// Modules
// What is module?
// Why we use module?
// Different types of modules?
// CommonJs, ES Module
// Synchronize/ Asynchronize
// Inquirer, Chalk install & use

// import { FirstModule1, FirstModule2, FirstModule3 } from "./firstModule.js";

// FirstModule1();
// FirstModule2();

// console.log(FirstModule3());

//Inquirer - console input
//Chalk - console text styling


import chalk from "chalk";
import UserInfo from "./userInfo.js";
import UserSelection from "./userSelection.js";


// let user = await UserInfo();

// console.log(chalk.bgGray(user.userName));
// console.log(chalk.bgGreenBright(user.userAge));


let menu = await UserSelection();

console.log(chalk.bgGray(menu.userMenu));



//Calculator
// 2 input values
// 1 operator
// 2, 2
// +
// Input Number Module -> take input -> return
// Input Operator Module -> take operator input -> return
// Operation Plus, Product, Difference & Division 
// If else-if


//MCQS
//Questions Module -> Display different questions -> return user selection
//Answers Module -> Pass user selection -> display correct/wrong






