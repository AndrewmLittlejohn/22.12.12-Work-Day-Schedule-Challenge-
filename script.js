// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
// $(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });

// var calendarInput = $('#hour-8'.textarea);

var saveBtn = document.querySelector('.saveBtn');
var textEight = document.querySelector('#eight');
var hour8 = document.querySelector('#hour-8');
var contents8A = document.querySelector('#saved8Details');

var content = [];

load();
function load(){ 
if (localStorage.getItem('8am Details') !== null ) {
return contents8A = localStorage.getItem('8am Details');
}}



console.log(textEight);



renderSavedDetails();

function renderSavedDetails() {

  var h8Details = localStorage.getItem("8am Details"); 
  if(h8Details != '') {
  return;
  }
  
 textEight.innerHTML = h8Details;

};

saveBtn.addEventListener('click', function(event) {
  event.preventDefault();

  var h8Details = document.querySelector("#eight").value;
  // textEight.textContent = h8Details; 
  if(h8Details === ''){ 
  alert('No event details provided')
  } else { 
    console.log('Event Saved');

  localStorage.setItem('8am Details', h8Details);
  console.log(h8Details);
}});

   







document.getElementById("timestamp").innerHTML = dayjs().format('ddd, MMM D, YYYY h:mm A ');
document.getElementById("workingtimestamp").innerHTML = dayjs().format('H');


console.log(dayjs().format('ddd, MMM D, YYYY h:mm A '))
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
console.log(dayjs().format('H'));


