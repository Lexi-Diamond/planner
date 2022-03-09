//grabbing the save button as an element
var saveBtn = $('#saveBtn');
// var plannerItem = $('#plannerItem')

//When you click the save button plannerItem needs to be saved in local storage, 
//when you open the page past hours will be grey, present hour will be red and future hours will be green
var plannerTime = $('#plannerItem')
var currentTime = moment().format("hh:mm:ss");

//If the current time is equal to (id9) 
//make plannerItem class present
//else if the current time is less than (id9)
//make plannerItem class past
//else if current time is greater than (id9)
//make plannerItem class future

if (currentTime === $('9')) {
    $('#row time-block').format('#present')
}

//When you open the page the current day is displayed at the top of the page
var time = moment().format("MMM Do, YYYY");
$('#currentDay').text(time)



