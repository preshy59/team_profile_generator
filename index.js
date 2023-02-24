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

    // function that ask the user the memeber of the team they wished to add next or exist the build team
    const nextStep = () => {
        inquirer.prompt([
            {
                type: 'list',
                name: 'options',
                message: "Which option do you what to perform",
                choices: ['Add an engineer', 'Add a manager','Add an intern', 'Finish building the team'],
            },
    
        ]).then((answers) => {
            if (answers.options === 'Add an engineer') {
                console.log("You which to add an Engineer");
                addEngineer();
            }
            else if (answers.options === 'Add a manager') {
                console.log("You which to add a Manager");
                addManager();
            }
            else if (answers.options === 'Add an intern') {
                console.log("You which to add an Intern");
                addIntern();
            }
            else if (answers.options === 'Finish building the team') {
                console.log("You are done");
                exitApp();
    
            }
            else {
                console.log("Nothing selected")
                nextStep();
            }
        });
    }

    // function that add the details of the engineer
    function addEngineer() {
    
        inquirer.prompt([
            {
                type: 'input',
                name: 'name',
                message: "Enter your Engineer's Name?",
            },
    
            {
                type: 'input',
                name: 'id',
                message: "Enter your Engineer's ID?",
            },
            {
                type: 'input',
                name: 'email',
                message: "Enter your Engineer's Email?",
            },
            {
                type: 'input',
                name: 'userName',
                message: "Enter your Engineer's GitHub username?",
            },
    
        ]) .then((answers) => {
                console.log("You have successful add an Engineer");
                team.push(new Engineer(answers.name, answers.id, answers.email, answers.userName))
                nextStep();
            })
    }
    
}
buildTeam()






