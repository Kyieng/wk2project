function formRefresh(){
    document.getElementById("getAkanName").reset();
  }

    var dd = null;
    var mm = null;
    var yy = null;
    var gender=document.getElementById("gender").value;
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
    

    }
// formular for getting day of birth

    const MALE_NAMES=['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw','Kofi','Kwame'];
    const FEMALE_NAMES=['Akosua','Adwoa','Abenaa','Akua','Yaa','Afua','Ama'];
    const DAY_OF_THE_WEEK=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
// convert string to integer
var dateOfBirth = document.getElementById("dateofbirth").value
var day = parseInt(dd[2]);
var month = parseInt(mm[1]);
var year = parseInt(yy[0]);

// day calulations
function getAkanNames(day,month,year,gender){
    var century=(year-1)/100+1; 
    var indexOfDay = ( ( (century/4) -2*century-1) + ((5*year/4) ) + ((26*((month+1)/10)) + day )) % 7
    alert(indexOfDay);
    

    var dayName = Math.round(indexOfDay)

    // validation and result
    if(!isNaN(dayName)){
        if(gender=="m"){
            document.getElementById("display").innerHTML= "Your akan names is"+ MALE_NAMES[Math.round(dayName)]+" and you were born on "+ DAY_OF_THE_WEEK[dayName];
        }
        else if(gender==="f"){
            document.getElementById("display").innerHTML="You were born on "+ DAY_OF_THE_WEEK[dayName]+ " and Your akan name is " + FEMALE_NAMES[Math.round(dayName)];
        }else{
            alert("Enter valid dates and choose your gender");
            document.getElementById("display").innerHTML="";
        }
    }
            else{
                alert("Enter valid Date of Birth and choose your gender");
                document.getElementById("display").innerHTML="";
            }
}

    document.getElementById("display").innerHTML = getAkanNames
    var userAkanName = getAkanNames(day,month,year,gender);
    console.log("Your name is" + userAkanName); 