document.getElementById("timestamp").innerHTML = dayjs().format('ddd, MMM D, YYYY h:mm A ');
console.log(dayjs().format('ddd, MMM D, YYYY h:mm A '))
console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
console.log(dayjs().format('H'));
var hour = dayjs().format('H');

var saveBtn8 = document.querySelector('#savebtn8');
var saveBtn9 = document.querySelector('#savebtn9');
var saveBtn10 = document.querySelector('#savebtn10');
var saveBtn11 = document.querySelector('#savebtn11');
var saveBtn12 = document.querySelector('#savebtn12');
var saveBtn1 = document.querySelector('#savebtn1');
var saveBtn2 = document.querySelector('#savebtn2');
var saveBtn3 = document.querySelector('#savebtn3');
var saveBtn4 = document.querySelector('#savebtn4');
var saveBtn5 = document.querySelector('#savebtn5');

var textEight = $('#eight');
var textNine = $('#nine');
var textTen = $('#ten');
var textEleven = $('#eleven');
var textTwelve = $('#twelve');
var textOne = $('#one');
var textTwo = $('#two');
var textThree = $('#three');
var textFour = $('#four');
var textFive = $('#five');

var h8Details = localStorage.getItem("8am Details"); 
var h9Details = localStorage.getItem("9am Details"); 
var h10Details = localStorage.getItem("10am Details"); 
var h11Details = localStorage.getItem("11am Details"); 
var h12Details = localStorage.getItem("12pm Details"); 
var h1Details = localStorage.getItem("1pm Details"); 
var h2Details = localStorage.getItem("2pm Details"); 
var h3Details = localStorage.getItem("3pm Details"); 
var h4Details = localStorage.getItem("4pm Details"); 
var h5Details = localStorage.getItem("5pm Details"); 

textFieldColor8();
/* #region main additional textFieldColor functions */
textFieldColor9();
textFieldColor10();
textFieldColor11();
textFieldColor12();
textFieldColor1();
textFieldColor2();
textFieldColor3();
textFieldColor4();
textFieldColor5();
/* #endregion */ 

init();
/* #region main additional init functions  */
init1();
init2();
init3();
init4();
init5();
init6();
init7();
init8();
init9();
/* #endregion */ 


renderSavedDetails();
/* #region main additional renderSavedDetails functions  */
renderSavedDetails1();
renderSavedDetails2();
renderSavedDetails3();
renderSavedDetails4();
renderSavedDetails5();
renderSavedDetails6();
renderSavedDetails7();
renderSavedDetails8();
renderSavedDetails9();
/* #endregion */ 


function init(){ 
if (localStorage.getItem('8am Details') !== null ) {
  textEight = localStorage.getItem('8am Details');
  document.getElementById('eight').textContent = textEight;
} }
/* #region Main Additional init functions*/
function init1(){ 
if (localStorage.getItem('9am Details') !== null ) {
  textNine = localStorage.getItem('9am Details');
  document.getElementById('nine').textContent = textNine;
}}

function init2(){
if (localStorage.getItem('10am Details') !== null ) {
  textTen = localStorage.getItem('10am Details');
  document.getElementById('ten').textContent = textTen;
} }

function init3(){
if (localStorage.getItem('11am Details') !== null ) {
  textEleven = localStorage.getItem('11am Details');
  document.getElementById('eleven').textContent = textEleven;
}}

function init4(){
if (localStorage.getItem('12pm Details') !== null ) {
  textTwelve = localStorage.getItem('12pm Details');
  document.getElementById('twelve').textContent = textTwelve;
}}

function init5(){
if (localStorage.getItem('1pm Details') !== null ) {
  textOne = localStorage.getItem('1pm Details');
  document.getElementById('one').textContent = textOne;
}}

function init6(){
if (localStorage.getItem('2pm Details') !== null ) {
  textTwo = localStorage.getItem('2pm Details');
  document.getElementById('two').textContent = textTwo;
}}

function init7(){
if (localStorage.getItem('3pm Details') !== null ) {
  textThree = localStorage.getItem('3pm Details');
  document.getElementById('three').textContent = textThree;
}}

function init8(){
if (localStorage.getItem('4pm Details') !== null ) {
  textFour = localStorage.getItem('4pm Details');
  document.getElementById('four').textContent = textFour;
}}
function init9(){
if (localStorage.getItem('5pm Details') !== null ) {
  textFive = localStorage.getItem('5pm Details');
  document.getElementById('five').textContent = textFive;
} }

/* #endregion */

 
function textFieldColor8() {
  if (hour > 8){
  textEight.addClass('past');
  } if (hour == 8) {
  textEight.addClass('present');
  } if (hour < 8) { 
  textEight.addClass('future');
  } else {null} 
};
/* #region Main -- Additional meeting block color functions */
function textFieldColor9(){
  if (hour > 9){
  textNine.addClass('past');
  } else if (hour == 9) {
  textNine.addClass('present');
  } else if (hour < 9) { 
  textNine.addClass('future');
  }
};

function textFieldColor10() {
  if (hour > 10){
  textTen.addClass('past');
  } if (hour == 10) {
  textTen.addClass('present');
  } if (hour < 10) { 
  textTen.addClass('future');
  } else {null} 
};
function textFieldColor11() {
  if (hour > 11){
  textEleven.addClass('past');
  } if (hour == 11) {
  textEleven.addClass('present');
  } if (hour < 11) { 
  textEleven.addClass('future');
  } else {null} 
};
function textFieldColor12() {
  if (hour > 12){
  textTwelve.addClass('past');
  } if (hour == 12) {
  textTwelve.addClass('present');
  } if (hour < 12) { 
  textTwelve.addClass('future');
  } else {null} 
};
function textFieldColor1() {
  if (hour > 13){
  textOne.addClass('past');
  } if (hour == 13) {
  textOne.addClass('present');
  } if (hour < 13) { 
  textOne.addClass('future');
  } else {null} 
};
function textFieldColor2() {
  if (hour > 14){
  textTwo.addClass('past');
  } if (hour == 14) {
  textTwo.addClass('present');
  } if (hour < 14) { 
  textTwo.addClass('future');
  } else {null} 
};
function textFieldColor3() {
  if (hour > 15){
  textThree.addClass('past');
  } if (hour == 15) {
  textThree.addClass('present');
  } if (hour < 15) { 
  textThree.addClass('future');
  } else {null} 
};
function textFieldColor4() {
  if (hour > 16){
  textFour.addClass('past');
  } if (hour == 16) {
  textFour.addClass('present');
  } if (hour < 16) { 
  textFour.addClass('future');
  } else {null} 
};
function textFieldColor5() {
  if (hour > 17){
  textFive.addClass('past');
  } if (hour == 17) {
  textFive.addClass('present');
  } if (hour < 17) { 
  textFive.addClass('future');
  } else {null} 
};
/* #endregion */

 
function renderSavedDetails() {
  if(h8Details != '') {
  return;
   } 
  };
  /* #region Main -- Additional render saved details functions */
    function renderSavedDetails1() {
      if(h9Details != '') {
      return;}
  };
  function renderSavedDetails2() {
    if(h10Details != '') {
      return;}
  };
  function renderSavedDetails3() {
    if(h11Details != '') {
      return;}
  };
  function renderSavedDetails4() {
    if(h12Details != '') {
      return;}
  };
  function renderSavedDetails5() {
    if(h1Details != '') {
      return;}
  };
  function renderSavedDetails6() {
    if(h2Details != '') {
      return;}
  };
  function renderSavedDetails7() {
    if(h3Details != '') {
      return;}
  };
  function renderSavedDetails8() {
   if(h4Details != '') {
      return;}
  };
  function renderSavedDetails9() {
    if(h5Details != '') {
      return;}
  };
/* #endregion */


function check8(){
  var h8Details = document.querySelector("#eight").value;
  if(h8Details === ''){ 
  alert('No event details provided')
  } else { 
    console.log('Event Saved');
  localStorage.setItem('8am Details', h8Details);
  console.log(h8Details);
  }
};
/* #region Main -- Additional check for details to save to local storage */
function check9(){
var h9Details = document.querySelector("#nine").value;
if (h9Details==='') {
  alert('No event details provided')
} else {     
  console.log('Event Saved');
localStorage.setItem('9am Details', h9Details);
console.log(h9Details);
  }
};

function check10(){
  var h10Details = document.querySelector("#ten").value;
  if (h10Details==='') {
    alert('No event details provided')
  } else {     
    console.log('Event Saved');
  localStorage.setItem('10am Details', h10Details);
  console.log(h10Details);
    }
};

function check11(){
  var h11Details = document.querySelector("#eleven").value;
  if (h11Details==='') {
    alert('No event details provided')
  } else {     
    console.log('Event Saved');
  localStorage.setItem('11am Details', h11Details);
  console.log(h11Details);
    }
};

function check12(){
  var h12Details = document.querySelector("#twelve").value;
  if (h12Details==='') {
    alert('No event details provided')
  } else {     
    console.log('Event Saved');
  localStorage.setItem('12pm Details', h12Details);
  console.log(h12Details);
    }
};

function check1(){
  var h1Details = document.querySelector("#one").value;
  if (h1Details==='') {
    alert('No event details provided')
  } else {     
    console.log('Event Saved');
  localStorage.setItem('1pm Details', h1Details);
  console.log(h1Details);
    }
};

function check2(){
  var h2Details = document.querySelector("#two").value;
  if (h2Details==='') {
    alert('No event details provided')
  } else {     
    console.log('Event Saved');
  localStorage.setItem('2pm Details', h2Details);
  console.log(h2Details);
    }
};

function check3(){
  var h3Details = document.querySelector("#three").value;
  if (h3Details==='') {
    alert('No event details provided')
  } else {     
    console.log('Event Saved');
  localStorage.setItem('3pm Details', h3Details);
  console.log(h3Details);
    }
};

function check4(){
  var h4Details = document.querySelector("#four").value;
  if (h4Details==='') {
    alert('No event details provided')
  } else {     
    console.log('Event Saved');
  localStorage.setItem('4pm Details', h4Details);
  console.log(h4Details);
    }
};

function check5(){
  var h5Details = document.querySelector("#five").value;
  if (h5Details==='') {
    alert('No event details provided')
  } else {     
    console.log('Event Saved');
  localStorage.setItem('5pm Details', h5Details);
  console.log(h5Details);
    }
};
/* #endregion */


saveBtn8.addEventListener('click', function(event) {
  event.preventDefault();
  check8();
 });
/*#region Main - Save Buttons functions */
saveBtn9.addEventListener('click', function(event) {
  event.preventDefault();
  check9();
  }
);
saveBtn10.addEventListener('click', function(event) {
  event.preventDefault();
  check10();
  }
);
saveBtn11.addEventListener('click', function(event) {
  event.preventDefault();
  check11();
  }
);
saveBtn12.addEventListener('click', function(event) {
  event.preventDefault();
  check12();
  }
);
saveBtn1.addEventListener('click', function(event) {
  event.preventDefault();
  check1();
  }
);
saveBtn2.addEventListener('click', function(event) {
  event.preventDefault();
  check2();
  }
);
saveBtn3.addEventListener('click', function(event) {
  event.preventDefault();
  check3();
  }
);
saveBtn4.addEventListener('click', function(event) {
  event.preventDefault();
  check4();
  }
);
saveBtn5.addEventListener('click', function(event) {
  event.preventDefault();
  check5();
  }
);
/* #endregion */









  

  


  
  
