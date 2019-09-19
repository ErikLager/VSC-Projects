// document.getElementById("head");
//     let toDag = new Date();
//     toDag.getDay();


import veckodag from "./dagconverter.js";
export default class Datum{
    constructor (date){
        this.date = date;
    }

    dag(){
        // console.log(`Hello ${this.date}`);
        var currentTime = new Date();
        document.getElementById("head").innerHTML = veckodag(currentTime.getDay());
    }
}