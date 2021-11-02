"use strict";
//TODO: Import necessary values from account.js
const {Balance} = require("./account");
const {Pin} = require("./account");
const {username}=require("./account");
const prompt =require("prompt-sync")();
const main= require("./index");
let bal =Balance;

function getBalance(accountBalance) {
  //TODO: Return the customer's acct. balance
  return Balance;
}

function withdraw() {
  //TODO: withdraw amount from current acct. balance
  // Log the current balance after withdrawal is made
  var withdrawalAmount = parseInt(prompt("How much do you want to withdraw? \n" + "The minimum amount you can withdraw is $1000"));
	if (withdrawalAmount !== "" && withdrawalAmount !== null && !isNaN(withdrawalAmount)) {
		if (withdrawalAmount >= 1000) {
			if (withdrawalAmount <= bal) {
				bal -= withdrawalAmount;
				console.log("Transaction successful!");
				console.log("Your remaining balance is $" + bal);
				toContinue();
			} else {
				console.log("You do not have sufficient funds!");
				withdraw();
			}
		} else {
			console.log("You must withdraw at least $1000");
			withdraw();
		}
	} else {
		console.log("Error: please enter a number!");
		withdraw();
	};
}

function deposit(depositAmount) {
  //TODO: deposit amount to current acct. balance
  // Log the current balance after deposit is made
  var depositAmount = parseInt(prompt("How much do you want to deposit?"));
	if (depositAmount !== "" && depositAmount !== null && !isNaN(depositAmount)) {
		bal += depositAmount;
		console.log("You have successfully deposited $" + depositAmount + "\n" + "You now have $" + bal);
		toContinue();
	} else {
		console.log("Error: please enter a number!");
		deposit();
	}
}

// function atmMachinePassword() {
// 	var pswEntry = parseInt(prompt("Dear " + username + ", enter your 4 digit PIN"));
// 	checkPassword(pswEntry);}

function validatePin(userInput) {
  //TODO: Check if entered pin matches account.js pin
  //Allow access to ATM if matching
  //Return value should be a Boolean (true or false)
  //In English: if the PIN entered is correct, return True. Otherwise, return False.
  var pswEntry = parseInt(prompt(" Please enter your 4 digit PIN to enter your account. "));
  if (pswEntry===Pin){
    return true;} 
    else {console.log("Incorrect pin. Please try again.")
          validatePin();
}}

function toContinue(){
  var yesOrNo = parseInt(prompt("Would you like to perform another transaction? \n 1. Yes \n 2. No"));
if (yesOrNo===1){
  main();
}
else if(yesOrNo===2){
  console.log("Goodbye!")
}
else {
  console.log("Please make a valid selection");
  toContinue();
}}

//TODO: Export these functions

module.exports={
  balance: getBalance,
  withdraw: withdraw,
  PinEntry: validatePin,
  Deposit: deposit,
  continue: toContinue,
};
