
//Summan av alla tal
function sumFunktion (min, max){

let sum = 0;

for (let i=min;i <= max; i++){

    sum += square(i);
    
    }

return sum; 
}

let summan = sumFunktion(1,5);
console.log(summan);

//Kvadrering 

function square (tal){
    let sqr = tal*tal;
    return sqr;
}

let kvadrat = square(7);
//console.log(kvadrat);

