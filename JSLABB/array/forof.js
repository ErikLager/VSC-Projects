// console.log("Start");
// const list = [2,1,3,4,7,11,18,29,47];
// const lista =["Korra","Aang","Roku", "Kyoshi", "Kuruk","Yangchen","Salai?"];
// const bigNumber = [13, 21, 34];
// const totalList = [...list,...lista,...bigNumber];


// for (let i = 0; i < list.length; i++){
//     console.log(list[i])
// } //En sämre loop
// for (let value of list) {
//     console.log(value);
// }

// for (let i of lista) {
//     console.log (i);
// }

//SPREAD "..." det skrivs så


// const min = Math.min(list); //Return "Nan"
// const mim = Math.min(...list); //Return "1" De 3 punkterna gör så att den får alla tal i listan och inte en lista
// console.log("Minsta tal: "+min);
// const longerList = [...list, 76, 123]
// console.log(longerList);
// console.log(totalList);


// function toUpper(str){
//     return str.toUpperCase();
// }

// console.log(lista);
// const newList = lista.map(toUpper);
// console.log(newList);


// let number =[512,128,2048,4,256];
// console.log(number.map(x => 2*x))

// songs = [
//     {title: "Number of the Beast", artist: "Iron maiden"},
//     {title: "Funky Town", artist: "Lucky Chops"}
    
// ]
// console.log(songs.map(songs => songs.artist));


// FILTER

// let chars = [
//     {name : "Obi-Wan", meme: true},
//     {name : "R2D2", meme: false},
//     {name : "Han Solo", meme: true},
//     {name : "Jabba the Hut", meme: false},
// ]

// let memes = chars.filter(chars => chars.meme == true)
// let nomeme = chars.filter(chars => chars.meme == false)
// let memename = chars.filter(chars => chars.meme == true).map(meme => meme.name)
// console.log(memes);
// console.log(nomeme);
// console.log (memename);

//Uppgift 1

// function doubleNumbers(arr){
//     return arr.map(value => value *2);
//   }
  
//   console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]

  //Uoppgift 2

//   function stringItUp(arr){
//     return arr.map(value => value.toString());
//   }
  
//   console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]


//Uppgift 3

// function capitalizeNames(arr){
//     return arr.map(value => {
//         let newName = value.toLowerCase();
//         newName = newName[0].toUpperCase()+newName.slice(1);
//         return newName;
//     })
//   }
  
//   console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); // ["John", "Jacob", "Jingleheimer", "Schmidt"]
  

//Uppgift 4

function namesOnly(arr){
    let namn = namesOnly.map(namesOnly => namesOnly.name);
    return namn;
  }
  
  console.log(namesOnly([
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ])); 
  // ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
  