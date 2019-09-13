//skriv om med arrow syntax, 
//använd kortformer där det är möjligt

// const add = function(a,b) {
//   return a+b;
// }

const add = (a, b) => a + b;

// function double(value) {
//   return value*2;
// }

const double = (value) => value * 2;

// let greet = function(name, isDoctor) {
//   if(isDoctor)
//     return `Hello Dr ${name}`;
//   else
//     return `Hello name`;
// } DO

let greet = (name, isDoctor) => {
    if(isDoctor)
    return `Hello Dr ${name}`;
  else
    return `Hello name`;
}

// const shout = function(message) {
//   return message.toUpper();
// }

const shout = message => message.toUpperCase();

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

let curse = () => {
  const randomNumber = Math.random() * 4;
  if (randomNumber < 1)
    return "Järnspikar";
  if (randomNumber < 2)
    return "Helvete!";
  else if (randomNumber < 3)
    return "Satans jävlar!"
  else
    return "#!?@¡#@?!!!!"
}

// function rollDice(sides) {
//   return 1+Math.floor(Math.random()*sides);
// }

let rollDice = (sides) => 1+Math.floor(Math.random()*sides);

// function d20() {
//   return rollDice(20);
// }

let d20 = () => rollDice(20);