// Inquire is a promise based prompt package. 
// It's great for asking the user questions, validating user inputs, and doing stuff with the responses given.
const inquirer = require('inquirer');

// The Node.js file system module allows you to work with the file system on your computer.
const fs = require('fs');

// The node.js "util" module provides 
// some functions to print formatted strings as well as some 'utility' functions that are helpful for debugging purposes. 
const util = require('util');

// Util promisify converts callback based functions into promise based 
// fs writeFile is file system file which writes data to a file
const writeFileAsync = util.promisify(fs.writeFile);

const userInput = () =>
    inquirer.prompt([
        {
            type: "input",
            name: "projectName",
            message: "What is the name of your project?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "phonenumber",
            message: "What is your phonenumber?",
        },
        {
            type: "input",
            name: "location",
            message: "What is your location?",
        },
        {
            type: "input",
            name: "linkedin",
            message: "What is your linkedin?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your github?",
        },
    ]);

const readMeGen = (user) =>

    `# ${user.projectName}

    :part_alternation_mark:
    
    # **Personal Portfolio**
    
    ---
    <br />
    <br />
    
    ## Site Description
    ---
    
    
    > Personal Portfolio
    > A list of all my best projects, a bit about me and a way to contact me
    > Enjoy
      
    </br>
    
    * Functional, deployed application :heavy_check_mark:
    
    * GitHub repository with README describing the project :heavy_check_mark:
    
    * Navbar must be consistent on each page. :heavy_check_mark:
    
    * Navbar on each page must contain links to Home/About, Contact, and Portfolio pages. :heavy_check_mark:
    
    * All links must work. :heavy_check_mark:
    
    * Must use semantic html. :heavy_check_mark:
    
    * Each page must have valid and correct HTML. (use a validation service) :heavy_check_mark:
    
    * Must contain your personalized information. (bio, name, images, links to social media, etc.) :heavy_check_mark:
    
    * Must properly utilize Bootstrap components and grid system. :heavy_check_mark:
    
    
    
    </br>
    </br>
    
    
    ## Credits
    ---
    :school: 
    **University of Toronto Continuing Educationg
    Full Stack Flex Program** - *Initial HTML and CSS*
    :school:
    
    :heart: 
    **Students and Instructors At the UFT-FSF-2020-2021*
    :heart:
    </br>
    
    ## License
    ---
    
    All rights reserved.
    
    Licensed under the MIT license.
    <br>
    [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
    </br>
    
    :lock::lock::lock::lock:
    
    _____
    ____
    ___`;



userInput()
    .then((user) => writeFileAsync("README.md", readMeGen(user)))
    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.log(err));