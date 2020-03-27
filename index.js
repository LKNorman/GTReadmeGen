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
    // function for pulling users github username
    .then(function() {
      inquirer.prompt({
        type: "input",
        message: "What is your GitHub?",
        name: "username"
      })
      .then(function({user}){
        const userURL = `https://api.github.com/users/${username}`;
        const userEmail = `https://api.github.com/users/${username}/events/public`;
        axios.get(userURL).then(function(res){
          fs.appendFile(
            "READMEGeneratorTest.md",
            `\n![avatar](${res.data.avatar_url})\n\n`,
            function(err){
              if (err) {
                throw err;
              }
            }
          )
        })
      })
    });
    // function using push information to find a users github email from just their username input
    axios.get(userEmail).then(function(pushinfo){
      fs.appendFile(
        "READMEGeneratorTest.md"
        `## Email me here: ${pushinfo.data[0].payload.commits[0].author.email}\n\n`,
        function(err){
          if (err) {
            throw err;
          }
        }
      )
    })
}

promptUser();
