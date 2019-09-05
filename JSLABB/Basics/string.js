let greet="Ciao";
let person = {
    name: "Erik",
    occupation: "officer"
};

function myFakeAge(){
    return Math.random()*10+25;
}
console.log(greet + " " + person.name + " The " + person.occupation);
console.log(`${greet} ${person.name} ${person.occupation} age of ${myFakeAge()}`);//Template string

console.log(`<div><h2>${person.name}</h2><div>`);