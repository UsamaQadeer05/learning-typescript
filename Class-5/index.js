// import DivisionOfTwoNumber from "./division.js";
// import ProductOfTwoNumber from "./multiply.js";
// import DiffernceOfTwoNumber from "./subtract.js";
// import SumOfTwoNumber from "./sum.js";
// console.log(DiffernceOfTwoNumber(2, 4));
// console.log(DivisionOfTwoNumber(2, 4));
// console.log(ProductOfTwoNumber(2, 4));
// console.log(SumOfTwoNumber(2, 4));
import inquirer from "inquirer";
// let answers = await inquirer.prompt([
//     {
//         name: "UserName",
//         type: "string",
//         message: "What is your name?"
//     },
//     {
//         name: "UserEmail",
//         type: "string",
//         message: "What is your email?"
//     },
//     {
//         name: "contact",
//         type: "number",
//         message: "What is your contact number?"
//     }
// ]);
// console.log(answers.UserName);
// console.log(chalk.bgMagenta(answers.UserName));
// import nodebanner from "node-banner";
// (async () => {
//     await nodebanner("Hello", "This is node banner")
// })();
let todayDate = await inquirer.prompt([{
        name: "todayDate",
        type: "list",
        message: "Select today date",
        choices: [
            "14-08-2023",
            "15-08-2023",
            "16-08-2023"
        ]
    }]);
console.log(todayDate);
