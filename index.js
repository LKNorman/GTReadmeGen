// setting up constants
const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");

// prompts to start the readme
function promptUser() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "What is the title?",
        name: "title"
      },
      {
        type: "input",
        message: "What is a short description for your project?",
        name: "description"
      },
      {
        type: "input",
        message: "Any licenses?",
        name: "license"
      }
    ])
    // function to write the actual readme file as well as pulling in a default looking badge and the table of contents
    .then(function(answer) {
      fs.writeFile(
        "READMEGeneratorTest.md",
        `# Title: ${answer.title}\n\n![Simple Badge](https://img.shields.io/badge/License-${answer.license}-<COLOR>.svg\n\n## Description: ${answer.description}\n\n## Table of Constents
          1. How to Install

          2. How to use this program

          3. Other contributors on the project

          4. Tests

          5. Github Information: \n\n`,
        function(err) {
          if (err) {
            console.log(err);
          }
        }
      );
    })
}
