// Union literals
// Union Types i.e | (|| or operatore)

// let id: number | string | boolean;
// id = 6111;
// id = "abc";

// id = true; // Error
// id = ["sd", "sd"] // Error
// id = { id: 2, name: "abc" } // Error




// let myname: string | null;

// myname = null;
// console.log(myname);

// myname = "zia";
// console.log(myname);

// myname = undefined; //Error
// myname = 12; //Error


// Narrowing
// function padLeft(padding: number, input: string) {
//     return " ".repeat(padding) + input;
// }

// console.log(padLeft(15, "Left"));






// let myAge: string | number;

// myAge = 16;//narrowing
// console.log(myAge);

// // console.log(myAge.toLowerCase());//Error

// myAge = "Dont Know";//narrowing
// console.log(myAge);

// console.log(myAge.toString()); // common to both types 
//                                //can be called even without narrowing

// console.log(myAge.toLowerCase());//Can be called on string 
//                                 //because of narrowing

let newAge = Math.random() > 0.6 ? "Khan" : 60;

// // if (Math.random() > 0.6) {
// //     newAge = "Khan"
// // } else {
// //     newAge = 60;
// // }

// console.log(newAge);

// // newAge.toLowerCase();//Error: Transpiler cannot narrow

// newAge = "Ali";

// if (newAge === "Khan") {
//     // Type of newAge: string
//     newAge.toLowerCase(); // Can be called
// }

// console.log(newAge);

// console.log(typeof newAge);


// if(typeof newAge === "string" ){
//     // Type of newAge: string
//     newAge.toUpperCase(); // Can be called
// }

// console.log(newAge);


typeof newAge === "string"
? newAge.toUpperCase() // Ok: string
: newAge.toFixed(); // Ok: number // 0.6 => 0


let age: number | "died" | "unknown";

age = 90;//OK
age = "died";//OK
age = "unknown";//OK
// age = "living";//Error


// let zia: "zia";

// zia = "zia";
// zia = "khan";//Error


function Rotate(direction: "Upward" | "Downward" | "Left" | "Right"): string {
    return direction;
}

console.log(Rotate("Left"));


// let yourName = Math.random() > 0.6 ? "Hira Khan": undefined;

// if (yourName != undefined) {
//     yourName.toUpperCase(); // Ok: string
// }

// // //yourName.toUpperCase();//Error: Object is possibly 'undefined'.

// yourName?.toUpperCase();//OK



// Type

// // You can also define a type alias
// type RawData = boolean | number | string | null | undefined;

// let data: RawData;

// // // You can even combine them

// type Id = number | string;

// type IdMaybe = Id | undefined | null;


// // Objects
// let teacher = {
//     name: "Zeeshan",
//     experience: "10"
// }

// console.log(typeof teacher);


// console.log(teacher.name);
// console.log(teacher.experience);
// console.log(teacher["experience"]);


// // Type Declaration
// let student : {
//     name: string,
//     age: number
// }

// student = {
//     name: "Zia",
//     age: 60
// }

// console.log(student["name"]);
// console.log(student.age);


// // Object Aliased
// // anonymous

// let teacher : {name: string, exp: number} = {
//     name: "Zeeshan",
//     exp: 10
// }

// console.log(teacher);
// console.log(teacher.name);
// console.log(teacher.exp);


// // Aliased Object Type
// type Student = {
//     name: string,
//     age?: number
// }

// let student: Student = {
//     name: "Hira",
//     age: 30
// }

// console.log(student["name"]);
// console.log(student.age);

// // Interfaces

// interface Manager {
//     name: string,
//     subordinates?: number
// }

// let storeManager: Manager = {
//     name: "Bilal"
// }

// console.log(storeManager.name);
// console.log(storeManager.subordinates);