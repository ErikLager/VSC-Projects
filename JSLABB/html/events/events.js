let myButton = document.getElementById("knapp");
let i = 1;
let meddelande = document.getElementById("message");
let startTime = "";

function click_DOM(ev){
    let nr = Math.floor(Math.random()*500);
    let nr2 = Math.floor(Math.random()*500);
    let myElement = document.getElementById("knapp");
    myElement.style.marginTop = nr + "px";
    myElement.style.marginLeft = nr2 + "px";
    
    
           
    

    console.log(i);
    i++;

    if(i == 2){
        startTime = new Date().getTime();
    } 

    if (i == 11){
        // console.log("KLAR!!!")
        let sluttime = new Date().getTime();
        let final = sluttime-startTime;
        window.alert("GRATTIS!!! Du klarade det. Din tid var: " + final + " Millisekunder");

        
    }
    
}

myButton.onclick = click_DOM;

