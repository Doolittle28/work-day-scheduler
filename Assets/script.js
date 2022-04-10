// variables for value on time to 
var time9 = (parseInt($('#9').attr('data-value')));
var time10 = (parseInt($('#10').attr('data-value')));
var time11 = (parseInt($('#11').attr('data-value')));
var time12 = (parseInt($('#12').attr('data-value')));
var time13 = (parseInt($('#13').attr('data-value')));
var time14 = (parseInt($('#14').attr('data-value')));
var time15 = (parseInt($('#15').attr('data-value')));
var time16 = (parseInt($('#16').attr('data-value')));
var time17 = (parseInt($('#17').attr('data-value')));

// Keeps date on the page
var date = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").html(date);

// Event listender for saving activities in timeslots to local storage
$('.saveBtn').on('click', function () {

    localStorage.setItem("time9", $("#input9").val());
    localStorage.setItem("time10", $("#input10").val());
    localStorage.setItem("time11", $("#input11").val());
    localStorage.setItem("time12", $("#input12").val());
    localStorage.setItem("time13", $("#input13").val());
    localStorage.setItem("time14", $("#input14").val());
    localStorage.setItem("time15", $("#input15").val());
    localStorage.setItem("time16", $("#input16").val());
    localStorage.setItem("time17", $("#input17").val());
});

// Changes color of timeslot container depending on current time vs timeslot
function color() {
    var currentTime = moment().hour(); // variable to pull current time from

    // 9am timeslot
    if (time9 > currentTime) {
        $('.acts9').addClass('future')
    }
    else if (time9 === currentTime) {
        $('.acts9').addClass('present')
    }
    else {
        $('.acts9').addClass('past')
    };

    // 10am timeslot
    if (time10 > currentTime) {
        $('.acts10').addClass('future')
    }
    else if (time10 === currentTime) {
        $('.acts10').addClass('present')
    }
    else {
        $('.acts10').addClass('past')
    };

    // 11am timeslot
    if (time11 > currentTime) {
        $('.acts11').addClass('future')
    }
    else if (time11 === currentTime) {
        $('.acts11').addClass('present')
    }
    else {
        $('.acts11').addClass('past')
    };

    // 12pm timeslot
    if (time12 > currentTime) {
        $('.acts12').addClass('future')
    }
    else if (time12 === currentTime) {
        $('.acts12').addClass('present')
    }
    else {
        $('.acts12').addClass('past')
    };

    // 1pm timeslot
    if (time13 > currentTime) {
        $('.acts13').addClass('future')
    }
    else if (time13 === currentTime) {
        $('.acts13').addClass('present')
    }
    else {
        $('.acts13').addClass('past')
    };

    // 2pm timeslot
    if (time14 > currentTime) {
        $('.acts14').addClass('future')
    }
    else if (time14 === currentTime) {
        $('.acts14').addClass('present')
    }
    else {
        $('.acts14').addClass('past')
    };

    // 3pm timeslot
    if (time15 > currentTime) {
        $('.acts15').addClass('future')
    }
    else if (time15 === currentTime) {
        $('.acts15').addClass('present')
    }
    else {
        $('.acts15').addClass('past')
    };

    // 4pm timeslot
    if (time16 > currentTime) {
        $('.acts16').addClass('future')
    }
    else if (time16 === currentTime) {
        $('.acts16').addClass('present')
    }
    else {
        $('.acts16').addClass('past')
    };

    // 5pm timeslot
    if (time17 > currentTime) {
        $('.acts17').addClass('future')
    }
    else if (time17 === currentTime) {
        $('.acts17').addClass('present')
    }
    else {
        $('.acts17').addClass('past')
    };



};

color(); // Runs color function to color code schedule

// Pulls time and input from local storage for each timeslot
$("#input9").val(localStorage.getItem("time9"));
$("#input10").val(localStorage.getItem("time10"));
$("#input11").val(localStorage.getItem("time11"));
$("#input12").val(localStorage.getItem("time12"));
$("#input13").val(localStorage.getItem("time13"));
$("#input14").val(localStorage.getItem("time14"));
$("#input15").val(localStorage.getItem("time15"));
$("#input16").val(localStorage.getItem("time16"));
$("#input17").val(localStorage.getItem("time17"));