 export function enemyCarRandomPos() {

document.getElementById('car1');
document.getElementById('car2');
document.getElementById('car3');
document.getElementById('car4');

const enemyCars=[

   
 { id: 'car1', min: 150, max: 197, interval: 4000},
 { id: 'car2', min:40, max: 88, interval: 5000},
 { id: 'car3', min: -90, max: -22, interval: 4000}, 
 { id: 'car4', min: -197, max: -152, interval: 6000} 

];

enemyCars.forEach(enemyCar =>{

setInterval(()=>{

   const rand= Math.floor(Math.random() * (enemyCar.max- enemyCar.min+1)+ enemyCar.min)
    document.getElementById(enemyCar.id).style.left= `${rand}px`;

},enemyCar.interval);

});

  
 }