// Dillon Estes

var docWidth = prompt("Let's center our content in our webpage. Let's start with the width of the document:"); // get the width of the document
var docHeight = prompt("Next let's calculate the height of the document:"); // get the height of the document
var containerWidth = prompt("Great, so what'ss the width of the content we want to center?"); // get the width of the container
var containerHeight = prompt("Alright, now whats the height of the content we want to center?");  // get the height of the container

var newWidth = docWidth - containerWidth; // find the difference in width
var newHeight = docHeight - containerHeight; // find the difference in height

newWidth /= 2; // calculate the offset width needed to center

// alert(newWidth); test new offset

newHeight /=2; // calculate the offset height needed to center

// alert(newWidth + " " + newHeight); // alert the results;

var offsets = "The container(" + containerWidth + "x" + containerHeight + ") is offset by " + newWidth + "px at the top and offset by " + newHeight + "px at the left."; // print the results to the log, describing offset.

console.log(offsets);
document.write(offsets);