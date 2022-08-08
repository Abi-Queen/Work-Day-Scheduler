
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
    else if ((moment().hour()) < ($(".col-8 desc").id.value)) {
        $(".col-8 desc").addClass("bg-success");
    }
    else if ((moment().hour()) > ($(".col-8 desc").id.value)) {
        $(".col-8 desc").addClass("bg-secondary");
    } 
};
console.log(moment().hour());


// change saveBtn icon to unlocked if editing 
// need separate js for for each row?
$(".col-8 desc").change(function() {
    $(".saveBtn-").addClass("iconic-lock-unlocked");
});


// add description input
// start with eventListener "click"
$(".col-8 desc").on ("click", "p", function() {
    var text = $(this).text().trim();
    var textInput = $("<textarea>")
    .addClass("desc-item").val(text);
    $(this).replaceWith(textInput);
    textInput.trigger("focus");
});

// save by clicking off input area
$(".col-8 desc").on("blur", "textarea", function() {

// get the textarea's current value
var text = $(this).val().trim();

//get parent's id attribute
var status = $(this).closest(".col-8 desc").attr("id").replace("col-", "");

// get description's position in the list
var index = $(this).closest(".desc-item").index();

desc[status][index].text = text;
saveDesc();

//recreate p element
var descP = $("<p>").addClass("m-1").text(text);

//replace textarea with p element
$(this).replaceWith(descP);
});

// Save to local storage on each eventListener, using stringify
var saveDesc = function() {
localStorage.setItem("desc-item", JSON.stringify(desc));
};

// edit saved descriptions
//description box was clicked
$(".desc-item").on("click", "span", function() {
    // get current text
    var item = $(this).text().trim();

    //create new input element
    var itemInput = $("<input>")
    .attr("type", "text")
    .addClass("desc-item").val(item);

    //swap out elements
    $(this).replaceWith(itemInput);

    //automatically focus on new element
    itemInput.trigger("focus");
});

//description text was changed
$(".desc-item").on("blur", "input[type='text']", function() {
    //get current text
    var item = $(this).val().trim();

    //get parent's id attribute
    var status = $(this).closest(".desc-item").attr("id").replace("desc-", "");

    //get item's position in list
    var index = $(this).closest(".desc-item").index();

    //update item in array and re-save to localStorage
    item[status][index].item = item;
    saveDesc();

    //recreate span element with bootstrap classes
    var descSpan = $("<span>")
    .addClass("desc-item").text(item);

    //replace input with span element
    $(this).replaceWith(descSpan);
});

//ended on mod 5.1.8
