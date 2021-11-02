"use strict";

console.log("Hello World");
const {balance} = require("./atm");
const{pin}=require("./account");
const prompt =require("prompt-sync")();
const {PinEntry}=require("./atm");
const {password}=require("./atm");
const {Deposit} = require("./atm");
const {withdraw} = require("./atm");
// const {continue} = require("./atm");
const account = require("./account");
let pins =PinEntry();
// let pass=password();
accessATM();
let sum= balance();
mainMenu();
// let userInput = prompt("How old are you?");
// console.log(userInput);


// console.log(`Your account balance is: ${sum}`); 


//TODO: Add debugger (see demo video)
//! Don't forget to add "console": "integratedTerminal" to .vscode/launch.json after creating launch configuration
//TODO: Import necessary functions from atm.js
//TODO: Utilize prompt-sync so we can get user input for various functions
//* Refer to Intro to Node.js PowerPoint for prompt-sync installation instructions

function accessATM(userEntry) {
  //TODO: Prompt users for their pin
  //Use ATM.js validatePin function to verify pin matches
  //Proceed to main menu ONLY if they match
  pins;
}

//TODO: Call accessATM function

function mainMenu() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
  var accountType = parseInt(prompt("What are we doing today?"+"\n1. View balance?"+"\n2. Make a deposit?"+"\n3. Make a withdrawal?"+"\n4. Quit"+"\nPlease enter the numerical value for entry"));
	if(accountType===1){
		console.log(sum);
  mainMenu2();} 
   else if(accountType===2){
		console.log(Deposit());
    mainMenu2();
	}
  else if(accountType===3){
    console.log(withdraw());
    mainMenu2();
  }
  else if(accountType===4){
    console.log("Goodbye!")
  }
}
function mainMenu2() {
  //TODO: Set up a main menu.  Prompt users for ATM selection to do the following:
  //! Remember - we should keep prompting the user for options until they quit!
  //Get current balance
  //Make a deposit
  //Make a withdrawal
  //Restart
  //Quit
  var accountType = parseInt(prompt("What else are we doing today?"+"\n1. View balance?"+"\n2. Make a deposit?"+"\n3. Make a withdrawal?"+"\n4. All done"+"\nPlease enter the numerical value for entry"));
	if(accountType===1){
		console.log(sum);
  mainMenu2();} 
   else if(accountType===2){
		console.log(Deposit());
    mainMenu2();
	}
  else if(accountType===3){
    console.log(withdraw());
    mainMenu2();
  }
  else if(accountType===4){
    console.log("Goodbye!")
  }
}




//TODO: Call mainMenu function to start our app!
