// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown').default.default;

// TODO: Create an array of questions for user input
const questions = [
        {
          type: 'input',
          message: 'Please enter the title of your project: ',
          name: 'title',
        },
        {
          type: 'input',
          message: 'Please provide a brief description of your project: ',
          name: 'description',
        },
        {
          type: 'input',
          message: 'Please provide the steps required to install your project: ',
          name: 'installation',
        },
        {
          type: 'input',
          message: 'Please provide your project usage: ',
          name: 'usage',
        },
        {
          type: 'input',
          message: 'Please list anyone you like to give credit to for helping to influnence this project: ',
          name: 'credits',
        },
        {
          type: 'choices',
          message: 'Select the  license used for your project: ',
          name: 'license',
          selection: ['GNU GPL v3', 'MIT', 'None'],
        },
        {
          type: 'input',
          message: 'Please enter your GitHub username: ',
          name: 'github',
        },
        {
          type: 'input',
          message: 'Please provide your email address: ',
          name: 'email',
        },

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('Your README.md was created successfully.')
    });
  };

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        writeToFile("README.md", generateMarkdown(userInput));
    });
  }

// Function call to initialize app
init();
