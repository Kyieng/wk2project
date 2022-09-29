const MALE_NAMES=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const FEMALE_NAMES=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const DAY_OF_THE_WEEK=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var dd = null;
var mm = null;
var yy = null;
var gender = null;

// get user input
   // get user birythday 22.12.1992
   // get user gender m,f

// calculate day of birth
// get user Akan name

function getUserInput (){
    var dd = prompt("Enter your day:");
    var mm = prompt("Enter your month:");
    var yy = prompt("Enter your year:");
    var gender = prompt("Enter your gender: [m/f]:");
    var cc = yy.slice(0,2); 
}

// convert string to integer
var day = parseInt(dd);
var month = parseInt(mm);
var year = parseInt(yy);
var century = parseInt (cc);


function getAkanNames(day,month,year,gender){
    var dayOfTheWeek = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*((month+1)/10)) + day ) % 7
    // Sunday
    
    var indexOfDay = DAY_OF_THE_WEEK.indexOf(dayOfTheWeek);
    var name = null;
    
    if (gender === "m")); {
        name = MALE_NAMES (indexOfDay);
    } else if (gender.toLowerCase ("f")); {
        name = FEMALE_NAMES(indexOfDay); }
    else {
        console.log("invalid gender");
    }

    return name;
}


    getUserInput();
    var userAkanName = getAkanNames(day,month,year,gender);
    console.log("Your name is" + userAkanName);

