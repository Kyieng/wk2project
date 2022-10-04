function formRefresh(){
    document.getElementById("getAkanName").reset();
}

var dd =document.getElementById("day").value;
var mm =document.getElementById("month").value;
var yy =document.getElementById("year").value;
var gender=document.getElementById("gender").value;
var cc =document.getElementById("century").value;

// get user input
// get user birythday 22.12.1992
// get user gender m,f

// calculate day of birth
// get user Akan name

function getUserInput(){
    dd = prompt("Enter your day of brith:");
    mm = prompt("Enter your month of birth:");
    yy = prompt("Enter your year of birth:");
    //gender = prompt("Enter your gender: [m/f]:");
    gender = prompt("Enter your gender: [m/f]:");
    
    
}
// formular for getting day of birth

const MALE_NAMES=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
const FEMALE_NAMES=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
const DAY_OF_THE_WEEK=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

 // convert string to integer
 var dateOfBirth = document.getElementById("dateofbirth").value
    
 var day = parseInt(dd, 10);
 var month = parseInt(mm, 10);
 var year = parseInt(yy, 10);
 

document.getElementById("display").innerHTML = getAkanNames
var userAkanName = getAkanNames(day,month,year,gender);
console.log("Your name is" + userAkanName); 


// day calulations
function getAkanNames(day,month,year,gender){
    
    
    var century=(year-1)/100+1; 
    var indexOfDay = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*((month+1)/10)) + day )) % 7
    alert(indexOfDay);
    
    
    var dayName = Math.round(indexOfDay)
    
    
    // validation and result
    //  if(dayName){
    if(gender=='m'){
        document.getElementById("display").innerHTML= "Your akan names is"+ MALE_NAMES(dayName)+" and you were born on "+ DAY_OF_THE_WEEK[dayName];
    }
    else if(gender=='f'){
        document.getElementById("display").innerHTML="You were born on "+ DAY_OF_THE_WEEK[dayName]+ " and Your akan name is " + FEMALE_NAMES[Math.round(dayName)];
    }
    else{
        alert("Enter valid Date of Birth and choose your gender  " + gender);
        document.getElementById("display").innerHTML="";
        console.log("Your name is" + dayName); 
        
    }
    
    
}
