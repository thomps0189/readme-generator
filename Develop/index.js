// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./readmeoutline");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "confirm",
        name: "description",
        message: "Do you want to include a description at the top of your README.md?"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFile(fileName, data, (err) => {
        if (err) {
            throw Error(err)
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const generate = generateReadme(answers)
            writeToFile("README.md", generate)
        })
}

// Function call to initialize app
init();
