export function hello(){
    console.log("Hello from User.js!");
}

// hello();

export default class User{
    constructor(name){
        this.name = name;
    }

    greeet(){
        console.log(`Hello ${this.name}`);
    }
}