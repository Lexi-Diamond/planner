

// var plannerItem = $('#plannerItem')

//When you click the save button plannerItem needs to be saved in local storage, 
//when you open the page past hours will be grey, present hour will be red and future hours will be green
var plannerTime = $('#plannerItem')
var currentTime = moment().format("hh:mm:ss");
var currentHour = moment().format("HH")
var itemImput = $('.itemImput').val()

if (currentHour === $('.time-block')) {
    $('.time-block').attr('data-time')
}

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

renderLastRegistered();

function renderLastRegistered() {
    localStorage.getItem(i,$(`#plannerItem${i}`).val());
}

//When you open the page the current day is displayed at the top of the page
var time = moment().format("MMM Do, YYYY");
$('#currentDay').text(time)
// save button allows user to save a task to local storage


$('.saveBtn').each(function(i, saveBtn){
$(saveBtn).click(function(event) {
    event.preventDefault();
    localStorage.setItem(i,$(`#plannerItem${i}`).val())
    // localStorage.setItem(timeBtn.length);
    console.log(localStorage);
    console.log($(`#plannerItem${i}`).val())
    console.log(i, event.target)
    //save users input from the text area into local storage 
})


})
renderLastRegistered();




// userFormEl.addEventListener('saveBtn', formSubmitHandler);

})
