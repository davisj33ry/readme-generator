// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./generateMarkdown");
const 

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
        name: "TOC",
        message: "Enter your table of contents.",
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
        message: "List all collaborators and/or third-party assets.",
        type: "input",
    },

];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, error => {
        if(error) {
            return console.log(error);
        }
        else {
            console.log("Your readme file has been created.")
        };
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer.prompt(quesitons);
}

// Function call to initialize app
init();
