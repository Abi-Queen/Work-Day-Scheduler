
//create global variables

// display current date in jumbotron
var currentDate = document.querySelector("#current-date");
var currentTime = moment();

console.log(currentTime)

currentDate.textContent = currentTime.format("dddd, MMMM Do, YYYY");


// change col color if past, present, future
var background = function() {
    if ((moment().hour()) == ($(".col-8 desc").id.value)) {
        $(".col-8 desc").addClass("bg-danger");
    }
    else if ((moment().hour()) < ($("col-8 desc").id.value)) {
        $(".col-8 desc").addClass("bg-success");
    }
    else if ((moment().hour()) > ($("col-8 desc").id.value)) {
        $(".col-8 desc").addClass("bg-secondary");
    } 
};
console.log(moment().hour());


// change saveBtn icon to unlocked if editing 
// need separate js for for each row?
$(".form-control text").change(function() {
    $(".saveBtn-").addClass("iconic-lock-unlocked");
});


