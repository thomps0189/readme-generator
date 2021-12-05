// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateReadme = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the name of your project? (Required)",
            validate: nameInput => {
                if (nameInput) {
                    return true
                } else {
                    console.log("Please enter your project's name!")
                    return false
                }
            }
        },
        {
            type: "confirm",
            name: "confirmDescription",
            message: "Do you want to include a description at the top of your README.md?",
            default: true
        },
        {
            type: "input",
            name: "description",
            message: "Provide description.",
            when: ({ confirmDescription }) => confirmDescription
        },
        {
            type: "checkbox",
            name: "license",
            message: "What license did you use?",
            choices: ["MIT", "BSD", "ISC"]
            
        }
    ]
    ).then();
};

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
