// setting up constants
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util")
const axios = require("axios")

const writeFileAsync = util.promisify(fs.writeFile);
// prompts for the readme
function promptUser() {
  return inquirer.prompt([
  {
    type: "input",
    message: "What is your GitHub?",
    name: "user",
  },
  {
    type: "input",
    message: "What is the title?",
    name: "title",
  },
  {
    type: "input",
    message: "What is a short description for your project?",
    name: "description",
  },
  {
    type: "input",
    message: "Add a table of contents.",
    name: "content",
  },
  {
    type: "input",
    message: "How to install?",
    name: "install",
  },
  {
    type: "input",
    message: "How to use?",
    name: "usage",
  },
  {
    type: "input",
    message: "Any licenses?",
    name: "license",
  },
  {
    type: "input",
    message: "Other contributors?",
    name: "contributors",
  },
  {
    type: "input",
    message: "Any tests?",
    name: "tests",
  },
  ])
}