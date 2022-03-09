//grabbing the save button as an element
var saveBtn = $('#saveBtn');
// var plannerItem = $('#plannerItem')

//When you click the save button plannerItem needs to be saved in local storage, 
//when you open the page past hours will be grey, present hour will be red and future hours will be green
var plannerTime = $('#plannerItem')
var currentTime = moment().format("hh:mm:ss");

var currentHour = moment().format("hh")
console.log(currentHour)
console.log($(".time-block").data())

var timeBlockElementArray = $(".time-block")
for (var i = 0; i < timeBlockElementArray.length; i++) {
    console.log($(timeBlockElementArray[i]).data())
    document.setAttribute($(timeBlockElementArray[i].data()))
}
if (currentHour === $('.hr9') {
    $('#row time-block').attr("class", 'present')
}

//When you open the page the current day is displayed at the top of the page
var time = moment().format("MMM Do, YYYY");
$('#currentDay').text(time)

// document.setAttribute($(timeBlockElementArray[i].data()))

