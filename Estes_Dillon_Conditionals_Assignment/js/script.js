// Dillon Estes 05-21-2015 Conditionals Assignment

// Let's make a love calculator!
var firstName = prompt("What's your first name?");// Get first name
var lastName = prompt("What's your last name?"); // Get last name
var soFirstName = prompt("What's your significant other's first name?"); // Get other person's first name
var soLastName = prompt("What's your significant other's last name?"); // Get other person's last name

var isMatch = 10;

var first = firstName.length; // Get string length
var second = lastName.length; // Get string length
var soFirst = soFirstName.length; // Get string length
var soSecond = soLastName.length; // Get string length

if(first && second == first && second) { // Check to see if the length of first and last names are the same
	var firstValue = (first * second) + isMatch; // Multiply the str length of first and second, then add isMatch
} else {
	firstValue =	 (first * second) - 5; // If not true, multiply length of first the subtract 5
}
if (soFirst && soSecond == soFirst && soSecond) { // Check to see if the length of other's first and last names are the same
	var secondValue = (soFirst * soSecond) + isMatch; // Add the str length of first and second, then subtract isMatch
} else {
	secondValue = (soFirst * soSecond) - 5;
}

var output = firstValue - secondValue;

if(output >= isMatch) { // check the values after subtracting them to see if they're greater than or equal to 10
	//alert("yes");
	var matched = "Both you (" + firstName + ") and " + soFirstName + " are a perfect match!";
} else if (output < isMatch){ // check the values after subtracting to see if they're less than 10
	//alert("no");
	var matched = "Both you (" + firstName + ") and " + soFirstName + " are a terrible match!";
} else if(output <= 0){ // check the values after subtracting to see if they're less than or equal to 0
	//alert("There's no hope for the two of you!");
	var matched = "There's no hope for the two of you!";
}

console.log(matched); // log to the console

alert(matched);