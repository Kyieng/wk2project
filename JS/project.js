function myFunction() {
    document.getElementById("").innerHTML = "Paragraph changed.";
  }

const MALE_NAMES=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const FEMALE_NAMES=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const DAY_OF_THE_WEEK=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var dd = null;
var mm = null;
var yy = null;
var gender = null;
var cc = null;

// get user input
   // get user birythday 22.12.1992
   // get user gender m,f

// calculate day of birth
// get user Akan name

function getUserInput(){
     dd = prompt("Enter your day of brith:");
     mm = prompt("Enter your month of birth:");
     yy = prompt("Enter your year of birth:");
     gender = prompt("Enter your gender: [m/f]:");
     cc = yy.slice(0,2); 

    }

// convert string to integer
var dateOfBirth = document.getElementById("dateofbirth").value
var day = parseInt(dd);
var month = parseInt(mm);
var year = parseInt(yy);
var century = parseInt (cc);



// formular for getting day of birth
function getAkanNames(day,month,year,gender){
    var indexOfDay = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*((month+1)/10)) + day )) % 7
    // Sunday
    

    var name = null;
    
    if (gender === "m"){
        document.getElementById("display").innerHTML = "your Akan name is" + MALE_NAMES[indexOfDay];
    } 
    else if (gender === "f"){
        document.getElementById("display").innerHTML = "your Akan Name is" + FEMALE_NAMES[indexOfDay]; 
    }
    else {
        alert("invalid gender");
        document.getElementById("display").innerHTML="";
    }

}

    var getAkanNames = document.getElementById("display").innerHTML;
    var userAkanName = getAkanNames(day,month,year,gender);
    console.log("Your name is" + userAkanName); 