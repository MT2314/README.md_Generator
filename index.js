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

// Util promisify converts callback based functions into promise based 
// fs writeFile is file system file which writes data to a file
const appendFileAsync = util.promisify(fs.appendFile);


const init = function () {

    const userInput = () =>
        inquirer
            .prompt([

                // Project Name
                {
                    type: "input",
                    name: "projectName",
                    message: "What is the name of your project?",
                },
                // Github Repo Link
                {
                    type: "input",
                    name: "github",
                    message: "What is the github repository address?",
                },
                // Project Description
                {
                    type: "input",
                    name: "description",
                    message: "How would you describe the project",
                },
                // Installation Instructions
                {
                    type: "input",
                    name: "installation",
                    message: "How would the user instal dependencies?",
                },
                // Usage Instructions
                {
                    type: "input",
                    name: "usage",
                    message: "How does the user make use of the application",
                },
                // License
                {
                    type: "list",
                    name: "license",
                    message: "Which license are you using?",
                    choices:["MIT", "Apache 2.0", "GPL 3.0"]
                },
                // Contributions
                {
                    type: "input",
                    name: "contributing",
                    message: "Has anyone contributed to this project?",
                },
                // Test
                {
                    type: "input",
                    name: "testing",
                    message: "How would the user test the application?",
                },

            ]);

    const readMeGen = (user) =>

    
        `
:part_alternation_mark:

    
# ${user.projectName}
---
</br>
    
>Link to github repository ${user.github}
    
<img src="assets/Images/websiteScreenshot.png" alt="alt text" width="600"/>
    
## Description
---
> ${user.description}
    
</br>
</br>

##Table of Contents
---
[Installation](#installation)
[Usage](#usage-guide)
[License](#license)
[Contributing](#contributing)
[Tests](#testing-instructions)

### Installation
---
> ${user.installation}

### Usage Guide
---
> ${user.usage}

### Contributing
---
> ${user.contributing}

### Testing Instructions
---
> ${user.testing}

### License
---
> ${user.license}

</br>
:lock::lock::lock::lock:
_____
____
___;

`;

    userInput()

        .then(function (user) {
           
            if(user.license === "MIT"){
                user.license = `[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)` 
            }
            else if(user.license === "Apache 2.0"){
                user.license = `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)` 
            }
            else if(user.license === "Apache 2.0"){
                user.license = `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)` 
            }
            writeFileAsync("README.md", readMeGen(user))
        })
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.log(err));

};

init();

//     const userInputTable = () =>
//         inquirer
//             .prompt([
//                 // Do you want a Data Table?
//                 {
//                     type: "confirm",
//                     name: "table",
//                     message: "Do you want to include User Story (2 column table objectives//solutions)?",
//                 },
//                 // Do you want a Data Table?
//                 {
//                     type: "input",
//                     name: "rows",
//                     message: "How many rows in your table?",
//                     when: (user) => user.table === true,
//                 },
//             ]);

//     const readMeTableGen = (user) =>
//         `




//     userInputTable()
//         .then(function (user) {
//             appendFileAsync("README.md", readMeTableGen(user))
//         })
//         .then(() => console.log('Successfully wrote to README.md'))
//         .catch((err) => console.log(err));
//     // // table()
//     //     .then((choice) => {
//         //         const tableBuild = (choice) => {
//             //             if (choice === true) {
//                 //                 inquirer.prompt([
//                     //                     // How many Columns?
//                     //                     {
//                         //                         type: "input",
//                         //                         name: "columns",
//                         //                         message: "How many Columns",
//                         //                     },

//                         //                     // How many Rows?
//                                         //                     {
//                                             //                         type: "input",
//                                             //                         name: "rows",
//                                             //                         message: "How many rows",
//                                             //                     },
//                                             //                 ])
//                                             //             }
//                                             //         };
//                                             //         tableBuild();






//                                             // const userInputTable = () => {
//                                                 //     return prompt([{
//                                                     //         ...question,
//                                                     //         name: 'question'
//                                                     //     }]).then(({ question }) => question)
//                                                     // }



//         // .then((user) => tableBuild(user));
//         // const tableBuild()
//         //     .
//         //     if(user.table == true){

//             //  * /
//             //     // Project Name
//             //     {
//                 //         type: "input",
//                 //             name: "projectName",
//                 //                 message: "What is the name of your project?",
//                 //     },
//                 //     // Github Repo Link
//                 //     {
//                     //         type: "input",
//                     //             name: "github",
//                     //                 message: "What is the github repository address?",
//                     //     },
//                     //     // Project Description
//                     //     {
//                         //         type: "input",
//                         //             name: "description",
//                         //                 message: "How would you describe the project",
//                         //     },


//                         //     // {
//                             //     //     type: "input",
//                             //     //     name: "location",
//                             //     //     message: "What is your location?",
//                             //     // },
//                             //     // {
//                                 //     //     type: "input",
//                                 //     //     name: "linkedin",
//                                 //     //     message: "What is your linkedin?",
//                                 //     // },
//                                 // ]);

//                                 //     const readMeGen = (user) =>

//                                 //         `

                                // </br>
                                // | Desires                              | Solutions                                                                                       |
                                // | ---------------------------------------------- | ----------------------------------------------------------------------------------------------- |
                                // `

                                //             `
                                // | WHEN I click the start button                   | THEN a timer starts and I am presented with a question   :heavy_check_mark:                                                          |
                                // | WHEN I answer a question | THEN I am presented with another question:heavy_check_mark: |
                                // | WHEN I answer a question incorrectly                 | THEN time is subtracted from the clock:heavy_check_mark:                                                           |
                                // | WHEN all questions are answered or the timer reaches 0             | THEN the game is over:heavy_check_mark:                                                              |
                                // | WHEN the game is over                  | THEN I can save my initials and score:heavy_check_mark:                                                        |
                                // | Extra:heavy_check_mark:               | Extra:heavy_check_mark:                                                              |
                                // | When I submit Intials                 | Then I can view my score and previous quiz scores :heavy_check_mark:                                                        |
                                // | When I click clear highscores               | Then the higscores are cleared:heavy_check_mark: 

                                // </br>
                                // </br>


                                // ## Credits
                                // ---
                                // :school: 
                                // **University of Toronto Continuing Educationg
                                // Full Stack Flex Program** - *Initial HTML and CSS*
                                // :school:

                                // :heart: 
                                // *Students and Instructors At the UFT-FSF-2020-2021*
                                // :heart:

                                // </br>

                                // ## License
                                // ---

                                // All rights reserved.

                                // Licensed under the MIT license.
                                // <br>
                                // [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
                                // </br>

                                // :lock::lock::lock::lock:

                                // _____
                                // ____
                                // ___`;
