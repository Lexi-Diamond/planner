
var plannerTime = $("#plannerItem");
var currentTime = moment().format("hh:mm:ss");
var currentHour = moment().format("HH");
var itemImput = $(".itemImput").val();

//gets item from local storage
$(".saveBtn").each(function (i) {
    renderLastRegistered(i);
  });
  function renderLastRegistered(i) {
    var savedItem = localStorage.getItem(i);
    if(savedItem) {
        $(`#plannerItem${i}`).val(savedItem) 
    }
  }
//sets the colors of each time block, grey if it is past, red if it is present and green if it is in the future
$(".time-block").each(function (i, div) {
  console.log($(div).attr("data-time"));
  if (currentHour === $(div).attr("data-time")) {
    $(div).attr("class", "present");
  } else if (currentHour > $(div).attr("data-time")) {
    $(div).attr("class", "past");
  } else if (currentHour < $(div).attr("data-time")) {
    $(div).attr("class", "future");
  }
 
  //When you open the page the current day is displayed at the top of the page
  var time = moment().format("MMM Do, YYYY");
  $("#currentDay").text(time);
  
  
  // save button allows user to save a task to local storage
  $(".saveBtn").each(function (i, saveBtn) {
    $(saveBtn).click(function (event) {
      event.preventDefault();
      localStorage.setItem(i, $(`#plannerItem${i}`).val());
      // localStorage.setItem(timeBtn.length);
      console.log(localStorage);
      console.log($(`#plannerItem${i}`).val());
      console.log(i, event.target);
      
    });
  });
  renderLastRegistered();

  

  // userFormEl.addEventListener('saveBtn', formSubmitHandler);
  // if (currentHour === $(".time-block")) {
//   $(".time-block").attr("data-time");
// }
});
