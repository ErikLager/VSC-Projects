let i = 0;
let resept1 = {
    titel: "Rotfruk i ugn",
    rating: 4.5,
    
    ingredience: [
        "potatis",
        "morot",
        "palstenacka",
        "kolrot",
        "rödbetor",
        "brokoli",
        "blomkol",
        "matolja",
        "timjärn",
        "salt",
        "peppar",
        
    ],
    steps: [
        "skär upp ingredienserna till medelstora bitar (alla behövs inte, ta vad som finns)",
        "lägg dem i en ugn",
        "häll på en skvätt ojla",
        "krydda till personliga mått",
        "Släng in i ugn på medel värde i 30 min",
    ]
}
console.log(resept1.titel);
console.log("Betyg: " + resept1.rating + "/5");
console.log("Ingrediences: ");
console.log("");
for (i = 0; i< resept1.ingredience.length; i++){
    console.log(resept1.ingredience[i]);
}
console.log("Steg: ");
console.log("");
for (j = 0; j < resept1.steps.length; j++){
    console.log(resept1.steps[j]);
}