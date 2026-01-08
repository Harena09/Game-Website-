/*
document.addEventListener("DOMContentLoaded",play);

let botm = 45
let lft = 700
let score = 0


function play() {


    let start = document.getElementById("btn")
    let road = document.getElementById("road")



   start.addEventListener("click", function () {

       start.style.display= 'none';
       road.style.animation= 'road  3s  linear  infinite';

       const timer= setInterval (()=> {

       drawScore();
       

       },100);




//Road and enemy cars moving
       document.getElementById("car1").style.animation='voiture1  4s  linear  infinite';
       document.getElementById("car2").style.animation='voiture2  7s  linear  infinite';
       document.getElementById("car3").style.animation='voiture3  4s  linear  infinite';
       document.getElementById("car4").style.animation='voiture4  6s  linear  infinite';
   


//make enemy cars move randomly









});

}



MoveCar();

//call other functions




//global variables


function MoveCar() {
    
    
    window.addEventListener("keydown",function(event){
    
    console.log(event.key);

    if(event.key =="ArrowRight") {
    

    lft = lft + 10
      //alert("right arrow has been pressed")
    
    }
    
    
    if(event.key =="ArrowLeft") {
    
        //alert("left arrow has been pressed")
      
        lft = lft - 10
    
      }
      
      
      if(event.key =="ArrowUp") {
    
        //alert("up arrow has been pressed")
        botm = botm + 10
    
      }
    
    
      if(event.key =="ArrowDown") {
    
        //alert("up arrow has been pressed")
        botm = botm - 10
    
      }
    
    
    document.getElementById("mainCar").style.bottom =`${botm}px`
    document.getElementById("mainCar").style.left =`${lft}px`
    

carCollision();
   

});
    


}






function drawScore(){

let scoreBox= document.getElementById("score");
scoreBox.innerHTML = `Score: ${score}`

score = score + 1;

}



function carCollision() {

 let mainCar = document.getElementById("mainCar").getBoundingClientRect();

  var voiture1=document.getElementById('car1').getBoundingClientRect();
  var voiture2 = document.getElementById('car2').getBoundingClientRect();
  var voiture3 = document.getElementById('car3').getBoundingClientRect();
  var voiture4 =  document.getElementById('car4').getBoundingClientRect();


if (((mainCar.left>voiture1.left && mainCar.left<voiture1.right) || 
     (mainCar.right>voiture1.left && mainCar.right<voiture1.right))  &&
     ((mainCar.top<voiture1.bottom && mainCar.top>voiture1.top) ||
      (mainCar.bottom>voiture1.bottom && mainCar.bottom<voiture1.top))) 
      
      {
     
console.log("")

 
  endGame();

}


if (((mainCar.left>voiture2.left && mainCar.left<voiture2.right) || 
     (mainCar.right>voiture2.left && mainCar.right<voiture2.right))  &&
     ((mainCar.top<voiture2.bottom && mainCar.top>voiture2.top) ||
      (mainCar.bottom>voiture2.bottom && mainCar.bottom<voiture2.top))) 
      
      {
     




  endGame();

}




if (((mainCar.left>voiture3.left && mainCar.left<voiture3.right) || 
     (mainCar.right>voiture3.left && mainCar.right<voiture3.right))  &&
     ((mainCar.top<voiture3.bottom && mainCar.top>voiture3.top) ||
      (mainCar.bottom>voiture3.bottom && mainCar.bottom<voiture3.top))) 
         
      {
     


  endGame();
}



if (((mainCar.left>voiture4.left && mainCar.left<voiture4.right) || 
     (mainCar.right>voiture4.left && mainCar.right<voiture4.right))  &&
     ((mainCar.top<voiture4.bottom && mainCar.top>voiture4.top) ||
      (mainCar.bottom>voiture4.bottom && mainCar.bottom<voiture4.top))) 
      
      
      {
     
 
  endGame();

}





}


function endGame(){


  alert("Game Over");
  road.style.animation='none';

  clearInterval(drawScore); 
  window.location.href = 'Ranking.html';

}

*/



//CSS PART


/*

*
{

  margin: 0px;  
  padding: 0px;

}


/* Parent height*/

/*
html{

height: 100%;

}



body{

margin: 0;
border: 0;
padding: 0;

}


.gameinterface{

  background-image:url(../img/topviewimg.jpeg);
  background-repeat: no-repeat;
  background-position: center; 
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
  overflow: hidden;


}


/* Define Road Style */
/*
#road{

  background-image: url(../img/road.jpeg);
  width: 500px;
  height:100%;
  background-position: center;
  background-size: contain;
  position: absolute;
   top: 0px;
  background-repeat:repeat-y;
  z-index: 0;
  /*
  animation-name: road;
  animation-duration: 20s;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
*/
/*
  }
  



.btn

{

position: absolute;
top: 100px;
font-size: 30px;
font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
padding: 14px 50px;
background-color: rgb(47, 171, 40);
border-radius: 6px;
cursor: pointer;
z-index: 1001;

}
.btn:hover{
background-color: rgb(35, 165, 35);
}



#score{

   position: absolute;
   top: 30px;
   right: 200px;  
   font-size: 30px;
   font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
   background-color: azure;
   padding: 10px 10px;
   border-radius: 4px;
   z-index: 1001;
}




.items img {

  width: 70px;
  height: 170px;
  position: relative;
  z-index: 1001;


}




#mainCar {

position: absolute;
bottom: 45px ;
left: 700px;
z-index: 1000;



}



#mainCar img {


  width: 80px;
  height: 200px;
  z-index: 1000;
  /*border: 2px solid red; */
/*
}



#car1 {

  position: relative;
  left: 170px;
  right: 20px;
  top: 20px;
  display: grid;
   place-items: center;
   z-index: 1000;
  /*border: 2px solid red;*/

  /*
  animation-name: voiture1;
  animation-duration: 4s;
  animation-iteration-count: infinite;
  animation-timing-function: linear; */
  


  /*
}



#car2 {
  
  position: relative;
  left: 75px;
  top: 65px;
  display: grid;
  place-items: center;
  z-index: 1000;
  /*border: 2px solid red;*/
/*
  animation-name: voiture2;
  animation-duration: 4s;
  animation-iteration-count: infinite;
   animation-timing-function: linear; */


   /*
}


#car3 {
  
  position: relative;
  left: -40px; 
  top: -300px;
  display: grid;
  place-items: center;
  z-index: 1000;
  /*border: 2px solid red;*/
  /*
  animation-name: voiture3;
  animation-duration: 7s;
  animation-iteration-count: infinite; 
  animation-timing-function: linear;
 */ 


  /*
}


#car4 {
  
  position: relative;
  left:-170px;
  top: -300px;
  display: grid;
  place-items: center;
  z-index: 1000;
 /* border: 2px solid red;*/
/*
  animation-name: voiture4;
  animation-duration: 6s; 
  animation-iteration-count: infinite;
  animation-timing-function: linear; */


/*
}


/* Animations for car movements */


/*
@keyframes voiture1 {

  from { top: 20px;}

  to { top: 100vh; }

}


@keyframes voiture2 {

 from { top: 65px;

  }

  to {
    top:100vh ;
  }

}



@keyframes voiture3 {

  0% { top: -40px;

  }

  100% {
    top:100vh ;
  }
}



@keyframes voiture4 {

  0% { top: -20px;

   }

  100% {
    top:100vh ;
  }

}



@keyframes road {

  from {

      background-position: center top; /* Start position */



      /*
  }

  to {

      background-position: center bottom; /* End position */

/*

  }



} 

ENEMY CARS JS MODULE DRAFT

 export function enemyCarRandomPos(){

    setInterval(()=>{

   rand= Math.floor(Math.random()*(197-150+1)+150)
    document.getElementById("car1").style.left= `${rand}px`
  
},4000)
  

    setInterval(()=>{
 
     rand= Math.floor(Math.random()*(88-40+1)+40)
    document.getElementById("car2").style.left= `${rand}px`
  
},5000)

    setInterval(()=>{
     rand= Math.floor(Math.random()*(-22-(-90)+1)+(-90))
    document.getElementById("car3").style.left= `${rand}px`
  
},4000)

    setInterval(()=>{
     rand= Math.floor(Math.random()*(-152-(-197)+1)+(-197))
    document.getElementById("car4").style.left= `${rand}px`
  
},6000)
   
  
const enemyCars=[

   
 { id: 'car1', min: 150, max: 197, interval: 4000},
 { id: 'car2', min:40, max: 88, interval: 5000},
 { id: 'car3', min: -90, max: -22, interval: 4000}, 
 { id: 'car4', min: -197, max: -152, interval: 6000} 

];

enemyCars.forEach( enemyCars =>{

setInterval(()=>{
    rand= Math.floor(Math.random()*(enemyCars.max-enemyCars.min+1)+enemyCars.min)

},enemyCars.interval);

})

  

  }






  
*/