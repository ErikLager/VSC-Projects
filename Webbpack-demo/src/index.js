import tone from "tone";
var synth = new tone.Synth().toMaster();
let myButton = document.getElementById("knapp");
let minKnapp = document.getElementById("knapp2");

myButton.onclick = click_DOM;
function click_DOM(ev){
    synth.triggerAttackRelease("D4", "4n");
}
minKnapp.onclick = click_DOME;
function click_DOME(ev){
    synth.triggerAttackRelease("Db4 ", "4n");
}

myButton.onclick = click_DOM;
minKnapp.onclick = click_DOME;