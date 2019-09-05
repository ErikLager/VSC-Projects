// const MyName = "Trump"

// let me = {
//     Name: MyName,
//     "5Length": 1.70,
//     Occupation: "Student",
//     greet: function(){
//         // console.log("Hello World");
//         return "Hello World";
//     },
//     books: [
//       "Wolves Brothers",
//       "Rise of Kyoshi",
//       "The Hobbit"  
//     ],
//     cat: {
//         name: "Eboot",
//         age: 6
//     }
// }


// me.city = "Växjö";
// me.Length = 7683049582;

// let jsonData = JSON.stringify(me);

// let me2 = JSON.parse(jsonData);
// console.log(me2);
// console.log(me.cat);
// console.log(me);
// console.log(me["5Length"]);
// console.log(me.Name);
// console.log(me.greet());
// console.log(hero);
// let hero = {
//     name: "Link",
//     length : 1.55,
//     occupation: "Student"
// }
// console.log ();

//Sidenote function
// let sayHello = function(){
//     console.log("Chello");
// }

class Person {
    constructor(name, length){
        this.name = name;
        this.Length = length;
    }

    greet(){
        console.log("Hello World! " + this.name);
    }
}
let me3 = new Person("Eruj", 1.666);
let u = new Person("Steve", 1.98);
console.log(me3);
console.log(u);
me3.greet();