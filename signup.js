
//start
document.addEventListener('DOMContentLoaded',function (){

var form = document.getElementById('Form');

form.addEventListener("submit", SubmitForm);

function SubmitForm(event) {
event.preventDefault();


let FirstName = document.getElementById("FirstName").value;
let LastName =document.getElementById("LastName").value;
let Email = document.getElementById("email").value;
let PhoneNumber = document.getElementById("PhoneNumber").value;
let Password = document.getElementById("Password").value;


let errormsg = document.getElementById("checkemail");
let errorphn = document.getElementById("checkphn");
let errorpsw = document.getElementById("checkpsw");


if(checkEmail(Email) && checkPhoneNumber(PhoneNumber) && checkPassword(Password)) {

    //make error message disappear
      errormsg.innerHTML="";
      errorphn.innerHTML="";
      errorpsw.innerHTML="";


console.log("First Name:" + FirstName+ ';Last Name: ' + LastName + 
  ';Email: ' + Email + 
    ';Phone Number: ' + PhoneNumber
    



    );

    alert("You've signed up successfully");

   //store info in an array


//const usersList= [];


    const user = {

         firstName: FirstName,
         lastName: LastName,
         email: Email,
         phone: PhoneNumber,
         password: Password,
         scores: []
  };


 
  const userstr = JSON.stringify(user);
  localStorage.setItem(Email,userstr);



if (userstr!== null) {
   console.log(`Data found in local storage: ${userstr}`);
} 

else {
   console.log('No data found in local storage for this key.');
}



window.location.href = 'Login.html';



  }
}


//check email
function checkEmail(Email) {


let errormsg = document.getElementById("checkemail");
const emailregx =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

if(!Email.match(emailregx)) {

    errormsg.innerHTML = "Email invalid. Please enter a valid email";
    errormsg.style.color= "red";  
    return false;

}

errormsg.innerHTML = "";
return true;

}



 //Phone number check
function checkPhoneNumber(PhoneNumber){

   
    let errorphn = document.getElementById("checkphn");
    const phoneregx =/^\d{8}$/;
    

    if(!phoneregx.test(PhoneNumber)) {
    
        errorphn.innerHTML = "Please enter a valid 8-digit phone number.";
        errorphn.style.color= "red";  
        return false;
    
    }
    
    errorphn.innerHTML = "";
    return true;
    
    }
    



//Password check
function checkPassword(Password){

let errorpsw = document.getElementById("checkpsw");
const passwordregx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;


if(!passwordregx.test(Password)) {

    errorpsw.innerHTML = "Password must be at least 8 characters long, include uppercase, lowercase letters, and one number.";
    errorpsw.style.color= "red";  
    return false;

}


errorpsw.innerHTML = "";
return true; 

}

});
