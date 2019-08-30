let myButton = document.getElementById("knapp");
let i = 1;
let meddelande = document.getElementById("message");
let startTime = "";
let lowScore = 10000000;

function click_DOM(ev){
    let nr = Math.floor(Math.random()*500);
    let nr2 = Math.floor(Math.random()*500);
    let myElement = document.getElementById("knapp");
    myElement.style.marginTop = nr + "px";
    myElement.style.marginLeft = nr2 + "px";
    console.log(startTime);
    console.log(i);
    i++;

    if(i == 2){
        startTime = new Date().getTime();
    } 
    if (i == 11){
        let sluttime = new Date().getTime();
        let final = sluttime-startTime;
        console.log(final/1000);
        document.getElementById("message").innerHTML = ("Din tid: " + final/1000 + " sekunder.");
        
        if (final<lowScore){
            lowScore = final;
            console.log("Nytt rekord: "+lowScore/1000 + " Sekunder")
        }
        else {console.log("Din tid var inte lägre än rekordet")};
        
    }
    
}

myButton.onclick = click_DOM;

