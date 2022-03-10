//grabbing the save button as an element
var saveBtn = $('#saveBtn');
// var plannerItem = $('#plannerItem')

//When you click the save button plannerItem needs to be saved in local storage, 
//when you open the page past hours will be grey, present hour will be red and future hours will be green
var plannerTime = $('#plannerItem')
var currentTime = moment().format("hh:mm:ss");
var storeSave = $('#saveBtn');
var currentHour = moment().format("HH")
console.log(currentHour)
console.log($(".time-block").data())

// made an array for all of the time block elements and for loop to cycyle through them
var timeBlockElementArray = $(".time-block")
for (var i = 0; i < timeBlockElementArray.length; i++) {
    console.log($(timeBlockElementArray[i]).data())
}
if (currentHour === $('.time-block')) {
    $('.time-block').attr('data-time')
}
// console.log($('.time-block').attr('data-time')
// )
$('.time-block').each(function(i, div) {
    console.log(currentHour)
    console.log($(div).attr('data-time'))
    if (currentHour === $(div).attr('data-time')) {
        $(div).attr('class','present')
    }
    else if (currentHour > $(div).attr('data-time')) {
        $(div).attr('class', 'past')
    }
    else if (currentHour < $(div).attr('data-time')) {
        $(div).attr('class', 'future')
    }
})




var text
localStorage.setItem

//When you open the page the current day is displayed at the top of the page
var time = moment().format("MMM Do, YYYY");
$('#currentDay').text(time)

// document.setAttribute($(timeBlockElementArray[i].data()))
//document.getAttribute('time-block);
