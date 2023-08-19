
//Inquire node package manager
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// An array of questions for user input
inquirer.prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",

    },
    {
        type: "input",
        message: "Please enter a brief description of your project.",
        name: "description",

    },
    {
        type: "input",
        message: "What are the installation instructions of your project?",
        name: "installation",

    },
    {
        type: "input",
        message: "Provide instructions and examples for use of your project.",
        name: "usage",

    },
    {
        type: "input",
        message: "List your contributors, third-party assets, and tutorials; if any and includes links to their GitHub and any additional links.",
        name: "contribution",

    },
    {
        type: "checkbox",
        message: "Please select the license you would like to use for your project.",
        name: "license",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "BSD 2-Clause 'Simplified' License",
            "BSD 3-Clause 'New' or 'Revised'",
            "Boost Software License 1.0",
            "No license"
        ],

    },
    {
        type: "input",
        message: "Please include any special features.",
        name: "features",

    }
    
]).then((response) => {
    var markdownData = generateMarkdown(response);
    fs.writeFile('./demo/README.md', markdownData, err => {
        if(err) {
            console.log(err)
        } else {
            console.log("README created");
        }
    })
    
});


