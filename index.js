#! /user/bin/env/ node
//This line is called a shabang, it tells the os to run it with Node.js
//import the `inquirer` module, which is a command line interface for Node.js 
import inquirer from "inquirer";
import chalk from "chalk";
//Display a colorfull welcome message
console.log(chalk.bold.cyanBright("\n\t\t code with sadia-words counter"));
console.log("=".repeat(60));
//Prompt the user to enter a sentence
let answers = await inquirer.prompt([
    {
        name: "sentence",
        type: "input",
        message: chalk.green("Enter your sentence to count the word"),
    }
]);
//Triming the sentence and splitting it into words based on "spaces"
let words = answers.sentence.trim().split(" ");
//Analysis of user input sentence
console.log("=".repeat(60));
console.log(chalk.bold("- sentence words:"));
console.log(words);
console.log(chalk.bold.magenta(`\n - word count: ${chalk.redBright(words.lenght)}`));
console.log("=".repeat(60));
