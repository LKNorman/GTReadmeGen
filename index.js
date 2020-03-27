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
  }
