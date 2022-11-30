
// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./util/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        message: "What is the name of your project?",
        type: "input",
    },
    {
        name: "description",
        message: "Enter a description of your project.",
        type: "input",
    },
    {
        name: "installation",
        message: "What are the steps required to install your application?",
        type: "input",
    },
    {
        name: "usage",
        message: "Provide instructions and/or examples for use of this application.",
        type: "input",
    },
    {
        name: "credits",
        message: "List all collaborators and/or third-party assets.",
        type: "input",
    },
    {
        name: "license",
        message: "List license used for this project.",
        type: "list",
        choices: ["MIT"," "],
    },

];

// TODO: Create a function to write README file

function writeToFile(data) {
    fs.writeFile('./util/ExampleREADME.md', data, err => {
        if(err) {
            return console.error(err);
        }
        else {
            console.log("Your readme file has been created.")
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(questions);
}

// Function call to initialize app
init()
.then(userInput => {
    return generateMarkdown(userInput);
})
.then(readmeInfo => {
    return writeToFile(readmeInfo);
})
.catch(error => {
    console.log(error);
});