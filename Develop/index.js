// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import { generateMarkdown } from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt([
            {
              type: "input",
              name: "title",
              message: "What is the title?",
            },
            {
              type: "input",
              name: "description",
              message: "What is the description?",
            },
            {
              type: "input",
              name: "imageALT",
              message: "What is the imageAlt?",
            },
            {
              type: "input",
              name: "imageURL",
              message: "What is the image URL?",
            },
            {
              type: "list",
              name: "license",
              message: "What is the license?",
              choices: [
                { name: "MIT" },
                { name: "Apache" },
                { name: "GPL" },
                { name: "BSD" },
                { name: "None" },
              ],
            },
        ])};
          
          function init() {
            inquirer
              .prompt(questions)
              .then((response) => {
                // The user's responses are available in the "response" object
                // Call your writeToFile function here and pass "response" as the data
                writeToFile('generatedREADME.md', response);
              })
              .catch((error) => {
                console.error("Error occurred:", error);
              });
          }
        ]).then((response) => {
        fs.writeFile("generatedREADME.md", generateMarkdown(response), (err) => {
            if (err) {
              console.log(err);
            } else {
              console.log("README.md created");
            }
          });
          

// Function call to initialize app
init();
