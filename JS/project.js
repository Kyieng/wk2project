const MALE_NAMES=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const FEMALE_NAMES=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const DAY_OF_THE_WEEK=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

// get user input
   // get user birythday 22.12.1992
   // get user gender male, female

//calculate day of birth
var dd = prompt("Enter your day:");
var mm = prompt("Enter your month:");
var yy = promt("Enter your year:");
var gender = promt("Enter your gender: [Male/Female]:");
var cc = yy.slice(0,2);

// convert string to integer
var day = parseInt(dd);
var month = parseInt(mm);
var year = parseInt(yy);
var century = parseInt (cc);


var dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*((month+1)/10)) + day ) % 7
// Sunday

var indexOfDay = DAY_OF_THE_WEEK.indexOf(dayOfTheWeek);