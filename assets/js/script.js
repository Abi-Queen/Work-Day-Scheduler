
// display current date in jumbotron
var currentDate = document.querySelector("#current-date");
var currentTime = moment();
var descriptionInput = document.querySelector.id.value; 

currentDate.textContent = currentTime.format("dddd, MMMM Do, YYYY");

// change col color if past, present, future
// if the "hour" in currentTime == id of col class, change background to red
// if the "hour" in currentTime < id of col class, change background to grey
// if the "hour" in currentTime > id of col class, change background to green 
// change saveBtn icon to unlocked if editing

// dynamically generate html "description" inputs
// capture click event in description columns


var descriptions = [];

var descriptionHandler = function (event) {
    event.preventDefault();
}


// get discription DOM element
// add click event listener to element
// add text content to html 