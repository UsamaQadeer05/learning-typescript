function FirstModule1() {
    console.log("This is our first module");
}

function FirstModule2() {
    console.log("This is our first module function 2");
}

function FirstModule3(): number {
    const number = 5;
    console.log("This is our first module function 3");
    return number;
}

export {
    FirstModule1,
    FirstModule2,
    FirstModule3
}