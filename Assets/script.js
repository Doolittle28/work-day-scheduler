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

//var time = $('.row').children('section'); //loop through this

// Event listender for saving activities in timeslots to local storage
$('.saveBtn').on('click', function () {

    var activities = $('.acts').val();


    localStorage.setItem(activities, time9);
    localStorage.setItem(activities, time10);
    localStorage.setItem(activities, time11);
    localStorage.setItem(activities, time12);
    localStorage.setItem(activities, time13);
    localStorage.setItem(activities, time14);
    localStorage.setItem(activities, time15);
    localStorage.setItem(activities, time16);
    localStorage.setItem(activities, time17);
});

// Changes color of timeslot container depending on time
function color() {
    var currentTime = moment().hour(); // variable to pull current time from

    // 9am timeslot
    if (time9 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time9 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };

    // 10am timeslot
    if (time10 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time10 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };

    // 11am timeslot
    if (time11 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time11 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };

    // 12pm timeslot
    if (time12 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time12 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };

    // 1pm timeslot
    if (time13 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time13 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };

    // 2pm timeslot
    if (time14 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time14 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };

    // 3pm timeslot
    if (time15 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time15 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };

    // 4pm timeslot
    if (time16 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time16 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };

    // 5pm timeslot
    if (time17 > currentTime) {
        $('.acts').addClass('future')
    }
    else if (time17 === currentTime) {
        $('.acts').addClass('present')
    }
    else {
        $('.acts').addClass('past')
    };



};

color(); // Runs color function to color code schedule

// Pulls time and activity from local storage for each timeslot
$('9 .acts').text((localStorage.getItem('9')));
$('10 .acts').text((localStorage.getItem('10')));
$('12 .acts').text((localStorage.getItem('12')));
$('13 .acts').text((localStorage.getItem('13')));
$('11 .acts').text((localStorage.getItem('11')));
$('14 .acts').text((localStorage.getItem('14')));
$('15 .acts').text((localStorage.getItem('15')));
$('16 .acts').text((localStorage.getItem('16')));
$('17 .acts').text((localStorage.getItem('17')));