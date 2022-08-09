
//create global variables

// display current date in jumbotron
var currentDate = document.querySelector("#current-date");
var currentTime = moment();

console.log(currentTime)

currentDate.textContent = currentTime.format("dddd, MMMM Do, YYYY");

// create current hour and time block variables; check time block ids against hour of current time and change backgrounds for past, present, future

$(".time-block").each(function(){
   var currentHour = moment().hours(); 
   var blockHour = parseInt($(this).attr("id"));
   console.log("Block Hour: "+blockHour);

    if(blockHour < currentHour){
        $(this).addClass("past")
    }
    else if(blockHour === currentHour){
        $(this).removeClass("past");
        $(this).addClass("present");
    }else{
        $(this).removeClass("past");
        $(this).removeClass("present");
        $(this).addClass("future");
    }
})

// add event listener to saveBtn; save changes to descriptions in localStorage with id attributes
console.log(moment().hour());
$(".saveBtn").on("click", function(){
    var note = $(this).siblings(".desc").val();
    var hour = $(this).parent().attr("id");

    localStorage.setItem(hour, note);
})

// create for loop of description content using hour block ids
for(var i=9; i<18;i++){
    $("#"+i).children(".desc").val(localStorage.getItem(i));
}

