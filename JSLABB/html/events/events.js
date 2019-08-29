let myButton = document.getElementById("knapp");
/*function click_Console(){
    console.log("You pressed me");
}
function click_Alert() {
    alert("Nån klicka på knappen");
}*/

let nr = Math.floor(Math.random()*150);
let count = 0;
function click_DOM(){
    let myElement = document.getElementById("knapp");
    myElement.innerHTML = "Nummert blir: " + nr;
    count++;
    myElement.style.borderWidth = nr + "px";
    
}

myButton.onclick = click_DOM;