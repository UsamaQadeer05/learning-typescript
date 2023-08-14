import inquirer from "inquirer";

export default async function UserInfo() {
const user = await inquirer.prompt(
    [
        {
            name: "userName",
            type: "string",
            message: "Enter your name please...."
        },
        {
            name: "userAge",
            type: "number",
            message: "Enter your age please...."
        }
    ]);

    return user;
}