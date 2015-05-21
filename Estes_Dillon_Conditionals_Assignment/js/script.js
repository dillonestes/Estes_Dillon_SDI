// Dillon Estes 05-21-2015 Conditionals Assignment

// Let's make a love calculator!
var firstName = prompt("What's your first name?");// Get first name
var lastName = prompt("What's your last name?"); // Get last name
var soFirstName = prompt("What's your significant other's first name?"); // Get other person's first name
var soLastName = prompt("What's your significant other's last name?"); // Get other person's last name

var isMatch = 20;

var first = firstName.length; // Get string length
var second = lastName.length; // Get string length
var soFirst = soFirstName.length; // Get string length
var soSecond = soLastName.length; // Get string length

if(first && second == first && second) { // Check to see if the length of first and last names are the same
	var firstValue = (first * second) + isMatch; // Add the str length of first and second, then subtract isMatch
} else {
	firstValue =	 (first * second) - 5;
}
