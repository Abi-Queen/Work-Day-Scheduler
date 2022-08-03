// display current date in jumbotron
var currentDate = document.querySelector("#current-date");
var currentTime = moment();

currentDate.textContent = currentTime.format("dddd, MMMM Do YYYY");


// dynamically generate html "description" inputs
// get discription DOM element
// add click event listener to element
// add text content to html 