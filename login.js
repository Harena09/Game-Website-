
document.addEventListener('DOMContentLoaded',function(){

let logForm = document.getElementById("Login");


logForm.addEventListener ('submit', ValidateForm);


function ValidateForm(event) {

      event.preventDefault();


      let Email= document.getElementById("email").value;
      let Password = document.getElementById("password").value;
      let errormsg= document.getElementById("checkemail");
      let errorpsw = document.getElementById("checkpsw");


 // Debugging: log input values
 console.log("Email:", Email);
 console.log("Password:", Password);


 let userprs = JSON.parse(localStorage.getItem(Email));

if (!userprs) {


    //alert('No user found with that email address.');

    errormsg.innerHTML= "No user found with that email address.";
    errormsg.style.color="red";
    return false;


}

else if (userprs.password === Password){

    localStorage.setItem('currentUser', Email);
    
     alert('Login successful!');
     errormsg.innerHTML = "";
     errormsg.innerHTML = "";
     window.location.href = 'Game.html';
}


 else {

    errorpsw.innerHTML= "incorrect password.";
    errorpsw.style.color="red";
     //alert('Incorrect password.');
    
  }

 }

});

