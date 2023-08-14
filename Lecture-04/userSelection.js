import inquirer from "inquirer";
export default async function UserSelection() {
    const menu = await inquirer.prompt([
        {
            name: "userMenu",
            type: "list",
            message: "Select your menu please....",
            choices: [
                "Pizza",
                "Burger",
                "Ice cream",
            ]
        }
    ]);
    return menu;
}
