
//create global variables
var desc = {};
var descCol = document.getElementsByClassName('col-8 description');

// display current date in jumbotron
var currentDate = document.querySelector("#current-date");
var currentTime = moment();

currentDate.textContent = currentTime.format("dddd, MMMM Do, YYYY");

// change col color if past, present, future
var background = function (descCol) {
    if ((moment().hour()) == (document.getElementsByClassName('row').id.value)) {
        $(this.document.getElementsByClassName('row col-8')).addClass("bg-danger");
    }
    else if ((moment().hour()) < (document.getElementsByClassName('row').id.value)) {
        $(this.document.getElementsByClassName('row col-8')).addClass("bg-success");
    }
    else if ((moment().hour()) > (document.getElementsByClassName('row').id.value)) {
        $(this.document.getElementsByClassName('row col-8')).addClass("bg-secondary");
    } 
};

// change saveBtn icon to unlocked if editing
$('#description-9').click(function() {
    $('#saveBtn9').addClass("iconic iconic-lock-unlocked");
});
$('#description-9').click(function() {
    $('#saveBtn9').off('click').on('click', function(){
        $('#saveBtn9').addClass("iconic iconic-lock-unlocked");
    })
});
$('#description-10').click(function() {
    $('#saveBtn10').addClass("iconic iconic-lock-unlocked");
});
$('#description-10').click(function() {
    $('#saveBtn10').off('click').on('click', function(){
        $('#saveBtn10').addClass("iconic iconic-lock-unlocked");
    })
});
$('#description-11').click(function() {
    $('#saveBtn11').addClass("iconic iconic-lock-unlocked");
});
$('#description-11').click(function() {
    $('#saveBtn11').off('click').on('click', function(){
        $('#saveBtn11').addClass("iconic iconic-lock-unlocked");
    })
});
$('#description-12').click(function() {
    $('#saveBtn12').addClass("iconic iconic-lock-unlocked");
});
$('#description-12').click(function() {
    $('#saveBtn12').off('click').on('click', function(){
        $('#saveBtn12').addClass("iconic iconic-lock-unlocked");
    })
});
$('#description-1').click(function() {
    $('#saveBtn1').addClass("iconic iconic-lock-unlocked");
});
$('#description-1').click(function() {
    $('#saveBtn1').off('click').on('click', function(){
        $('#saveBtn1').addClass("iconic iconic-lock-unlocked");
    })
});
$('#description-2').click(function() {
    $('#saveBtn9').addClass("iconic iconic-lock-unlocked");
});
$('#description-2').click(function() {
    $('#saveBtn2').off('click').on('click', function(){
        $('#saveBtn2').addClass("iconic iconic-lock-unlocked");
    })
});
$('#description-3').click(function() {
    $('#saveBtn3').addClass("iconic iconic-lock-unlocked");
});
$('#description-3').click(function() {
    $('#saveBtn3').off('click').on('click', function(){
        $('#saveBtn3').addClass("iconic iconic-lock-unlocked");
    })
});
$('#description-4').click(function() {
    $('#saveBtn4').addClass("iconic iconic-lock-unlocked");
});
$('#description-4').click(function() {
    $('#saveBtn4').off('click').on('click', function(){
        $('#saveBtn4').addClass("iconic iconic-lock-unlocked");
    })
});
$('#description-5').click(function() {
    $('#saveBtn5').addClass("iconic iconic-lock-unlocked");
});
$('#description-5').click(function() {
    $('#saveBtn5').off('click').on('click', function(){
        $('#saveBtn5').addClass("iconic iconic-lock-unlocked");
    })
});


// create elements that make up a description input item
var createDesc = function(descText, descList) {
    var descLi = $("<li>").addClass("description");
    var descP = $("<p>")
    .text(descText);

    //append p element to parent li
    descLi.append(descP);

    //append to ul list in description column
    $("#list-") + descList.append(descLi);
};

var loadDesc = function() {
    desc = JSON.parse(localStorage.getItem("desc"));

    // if localStorage empty, create new object for description arrays
    if (!desc) {
        desc = {
        list9: [],
        list10: [],
        list11: [],
        list12: [],
        list1: [],
        list2: [],
        list3: [],
        list4: [],
        list5: []
        };
    }

    //loop over object properties
    $.each(desc, function(list, arr) {
        //then loop over sub-array
        arr.forEach(function(desc) {
            createDesc(desc.text, list);
        });
    });
};

var saveDesc = function () {
    localStorage.setItem("desc", JSON.stringify(desc));
};


//desc text clicked
$(".desc").on("click", "p", function() {
    //get current text of p element
    var text = $(this)
    .text()
    .trim();

    // replace p element with new textarea
    var descInput = $("<textarea>").val(text);
    $(this).replaceWith(descInput); 

    // auto focus new element
    descInput.trigger("focus");
});

//editable field was un-focused
$(".desc").on("blur", "textarea", function() {
    //get curent value of textarea
    var text = $(this).val();

    //get status type and position in the list
    var status = $(this)
    .closest(".desc")
    .attr("id")
    .replace("desc-", "");
    var index = $(this)
    .closest(".desc")
    .index();

    //update description in array and re-save to localStorage
    desc[status][index].text = text;
    saveDesc();

    // recreate p element
    var descP = $("<p>")
    .text("text");

    //replace textarea with new content
    $(this).replaceWith(descP);
});



