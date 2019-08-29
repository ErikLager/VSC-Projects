
function sumFunktion (min, max){


let sum = 0;

for (let i=min;i <= max; i++){
    sum += i;
    }

return sum; 
}

let summan = sumFunktion(1,2147483647);
console.log(summan);