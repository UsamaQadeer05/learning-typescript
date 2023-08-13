// For Loop examples

//Example 1
//Print all cities
let cities = ["Islamabad", "Karachi", "Quetta", "Peshawer"];

console.log("Start of Example 1");
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    console.log(element);
}
console.log("End of Example 1\n\n\n");

//Example 2
//Print if city is exist in cities list
console.log("Start of Example 2");
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    if (element === "Islamabad") {
        console.log(`${element} exists in City List`);
    }
}
console.log("End of Example 2\n\n\n");

//Example 3
//Print Even indexes city names
console.log("Start of Example 3");
for (let index = 0; index < cities.length; index += 2) {
    const element = cities[index];
    console.log(element);
}
console.log("End of Example 3\n\n\n");

//Example 4
//Print if city is exist in cities list & break the iteraions
console.log("Start of Example 4");
for (let index = 0; index < cities.length; index++) {
    const element = cities[index];
    if (element === "Islamabad") {
        console.log(`${element} exists in City List`);
        break;
    }
}
console.log("End of Example 4\n\n\n");

export {
    cities
}