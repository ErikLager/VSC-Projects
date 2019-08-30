/*console.log("C-3PO, R2D2, Skriv in en 3:e")
const trean = require('readline')
var robots = ["C-3PO", "R2D2"];
//robots.length;
robots.push(trean);
robots.length;
console.log(robots);*/


//Funktion för slumpa tal.
/*function rand (max, min){
return Math.round(Math.random()*(max-min) + min);
}

for (i=0; i<15; i++){
let slumpad = rand(10, -10);
console.log(slumpad);
}*/

//en liten rålig lïsta som knappt fungerar
function lista (count){
var nummer = [];
for (i=1; i<=count;i++){
    
    nummer.push(Math.round(Math.random()*(100-1)+1));
    //nummer.push(i);
    if (i>10){
        console.log("Hurra");
    }
    
}
return nummer;
}
 
let list = lista(20);
console.log(list);