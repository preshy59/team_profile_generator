const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = []
const buildTeam = () =>{
    //function that propmt the user to enter the managers details
    const addManager = () => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter your Team Managers Name?",
            },
    
            {
                type: 'input',
                name: 'id',
                message: "Enter your Team Managers ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter your Team Managers Email?",
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: "Enter your Team Managers Office Number?",
            },
    
        ]).then((answers) => {
            console.log("You have successful add a Manager");
            
        team.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber))
    
            nextStep();
        })
    }
    
}
buildTeam()






