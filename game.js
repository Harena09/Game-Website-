

import { enemyCarRandomPos } from '../javascriptfiles/enemyCars.js';


document.addEventListener("DOMContentLoaded",play);

let botm = 45
let lft = 700
let score = 0


function play() {


    let start = document.getElementById("btn")
    let road = document.getElementById("road")



   start.addEventListener ("click", function () {

       start.style.display= 'none';
       road.style.animation= 'road  3s  linear  infinite';

       const timer= setInterval (()=> {

       drawScore();
       

       },100);


       enemyCarRandomPos();

//Road and enemy cars moving
       document.getElementById("car1").style.animation='voiture1  4s  linear  infinite';
       document.getElementById("car2").style.animation='voiture2  5s  linear  infinite';
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
