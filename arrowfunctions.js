//skriv om med arrow syntax, 
//använd kortformer där det är möjligt

// const add = function(a,b) {
//   return a+b;
// }

// const add = (a, b) => a + b;

// function double(value) {
//   return value*2;
// }

// const double = (value) => value * 2;

// let greet = function(name, isDoctor) {
//   if(isDoctor)
//     return `Hello Dr ${name}`;
//   else
//     return `Hello name`;
// } DO

// let greet = (name, isDoctor) => {
//     if(isDoctor)
//     return `Hello Dr ${name}`;
//   else
//     return `Hello name`;
// }

// const shout = function(message) {
//   return message.toUpper();
// }

// const shout = message => message.toUpperCase();

// function curse() {
//   const randomNumber = Math.random()*4;
//   if(randomNumber < 1)
//     return "Järnspikar";
//   if(randomNumber < 2)
//     return "Helvete!";
//   else if(randomNumber < 3)
//     return "Satans jävlar!"
//   else
//     return "#!?@¡#@?!!!!"
// }

// let curse = () => {
//   const randomNumber = Math.random() * 4;
//   if (randomNumber < 1)
//     return "Järnspikar";
//   if (randomNumber < 2)
//     return "Helvete!";
//   else if (randomNumber < 3)
//     return "Satans jävlar!"
//   else
//     return "#!?@¡#@?!!!!"
// }

// function rollDice(sides) {
//   return 1+Math.floor(Math.random()*sides);
// }

// let rollDice = (sides) => 1+Math.floor(Math.random()*sides);

// function d20() {
//   return rollDice(20);
// }

// let d20 = () => rollDice(20);


let z = true;
let zelda = () => {
  console.log(`The Zelda functions has triggered`);
  if (z == true){
    console.log(`Z: ${z}`);
    console.log("Welcome my Princess");
  } 
  else {console.log(`Z: ${z}`)}
}


let Impa = ["Zora", "Goron", "Gerudo", 5];
let Link = () => {
  console.log(`Link has activated!`);
  for (const element of Impa) {
    console.log("a");
  }
  Impa.push("Rito");
  console.log(Impa);
}


zelda();
Link();

let i = Math.random()*5;
if (i < 3){
  console.log(`Grattis, du fick ${i}`);
}