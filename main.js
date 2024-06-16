import inquirer from "inquirer";
let mybalance = 10000; // Dollar
let mypin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "q1",
    message: "enter your pin",
    type: "number"
});
console.log(pinAnswer.q1);
