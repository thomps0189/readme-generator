// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
// const utils = require("utils");
// const generateReadme = require("./utils/generateMarkdown");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
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
        type: "input",
        name: "description",
        message: "Provide description.",
        when: ({ confirmDescription }) => confirmDescription
    },
    {
      type: "input"  ,
      name: "installation",
      message: "What is required to install this?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is its usage?"
    },
    {
        type: "input",
        name: "contributors",
        message: "Please list any contributors"
    },
    {
        type: "input",
        name: "test",
        message: "What are the test instructions?"
    },
    {
        type: "checkbox",
        name: "license",
        message: "What license did you use?",
        choices: ["MIT", "BSD", "ISC", "Apache", "GNU", "N/A"]  
    },
    {
        type: "input",
        name: "github",
        message: "Please provide your GitHub username"
    },
    {
        type: "input",
        name: "email",
        message: "Please provide an email where you can be reached."
    },
];

// inquirer.prompt(questions)
// .then(function(data){
//     const githubUrl = `https://github.com/${github}`
// })
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err)
        } else {
            console.log("Your README.md has been created!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md", generateMarkdown(data));
    })
}

// Function call to initialize app
init();
