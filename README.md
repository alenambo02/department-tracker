# Department-tracker
  [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

  #Table of Content
  -[description](#Description)
  -[installation](#Installation)
  -[usage](#Usage)
  -[credits](#Credits)
  -[license](#License)
  -[contact](#Contact)

  ## Description:
  The purpose behind this project was to create a employee-tracker generator that will allow you to view the departments data through a table. This generator allows you to choose from a manager, engineer, and intern. Each profile includes the team members name, id, email, and role. Now developing a team page can be done with ease. 

  You can see the profile generator layout below:

   ![alt text](./assets/ )

  ## Installation:
  In order to be able to utilize this generator within your command line, you would have to install npm inquirer package and mysql2. Npm inquirer package allows for prompts to be displayed to you within the command line.

  Below, I have displayed how I utilized inquirer to prompt questions within the command line:

   ![alt text](./assets/ )


  ## Usage:
  You will be prompted with questions inside the command line to help you generate your team. You can either answer the question or leave it blank to move on to the next question. Your answers to the questions will then be generated below the correct section of employee type you choose to create. Once you are done adding team members to your template a html file will be generated for you. Once this is opened on the browser you will be displayed with cards of each team member you added. This design was done utilizing bootstrap. 
  
   Below, you can view a code snippet of how I utilized mysql to generate tables of data requested:

  ![alt text](./assets/ )
  ```
    code snippet
  ```

  ## Credits:
  Helpful video: 
  I utilized https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba to generate markdown license badges.


 
  ## License:
  MIT 

  ## Contact:
  allleizq@gmail.com