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

const userInput1 = () =>
    inquirer.prompt([

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
    ]);

const readMeGen = (user) =>
    `
    :part_alternation_mark:
    
    # ${user.projectName}
    ---
    <br />
    
    >Link to github repository ${user.github}
    
    <img src="assets/Images/websiteScreenshot.png" alt="alt text" width="600"/>
    
    ## Job Requirements
    ---
    
    </br>
    
    > ${user.description}`;

userInput1()
    .then((user) => writeFileAsync("README.md", readMeGen(user)))
    .then(() => {
        // App's abilities breakdown
        const table = () => {

            inquirer.prompt([
                // Do you want a Data Table?
                // //
                {
                    type: "confirm",
                    name: "table",
                    message: "Do you want to build a table?",
                },
            ]);
            table()
                .then((choice) => {
                    const tableBuild = (choice) => {
                        if (choice === true) {
                            inquirer.prompt([
                                // How many Columns?
                                {
                                    type: "input",
                                    name: "columns",
                                    message: "How many Columns",
                                },

                                // How many Rows?
                                {
                                    type: "input",
                                    name: "rows",
                                    message: "How many rows",
                                },
                            ])
                        }
                    };
                });
        };
    });
table()
    .then(console.log("hi"))



    .then(() => console.log('Successfully wrote to README.md'))
    .catch((err) => console.log(err));



// const userInputTable = () => {
    //     return prompt([{
        //         ...question,
        //         name: 'question'
        //     }]).then(({ question }) => question)
        // }



        // .then((user) => tableBuild(user));
        // const tableBuild()
        //     .
        //     if(user.table == true){

            //  * /
            //     // Project Name
            //     {
                //         type: "input",
                //             name: "projectName",
                //                 message: "What is the name of your project?",
                //     },
                //     // Github Repo Link
                //     {
                    //         type: "input",
                    //             name: "github",
                    //                 message: "What is the github repository address?",
                    //     },
                    //     // Project Description
                    //     {
                        //         type: "input",
                        //             name: "description",
                        //                 message: "How would you describe the project",
                        //     },


                        //     // {
                            //     //     type: "input",
                            //     //     name: "location",
                            //     //     message: "What is your location?",
                            //     // },
                            //     // {
                                //     //     type: "input",
                                //     //     name: "linkedin",
                                //     //     message: "What is your linkedin?",
                                //     // },
                                // ]);

                                //     const readMeGen = (user) =>

                                //         `   

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






