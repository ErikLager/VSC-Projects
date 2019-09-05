let resept1 = {
    titel: "Rotfruk i ugn",
    rating: 4.5,
    
    servings: 2.5,
    ingredience: [

        {Namn: "potatis",
         Mängd: 1},

        {Namn: "morot",
        Mängd: "1/2"},

        {Namn: "plastenacka",
        Mängd: "1/2"},

        {Namn: "rödbetor",
        Mängd: "1/2"},

        {Namn: "brokoli",
        Mängd: "2-3 bitar"},

        {Namn: "blomkol",
        Mängd: "2-3bitar"},

        {Namn: "matolja",
        Mängd: "skvett lite över"},

        {Namn: "timjärn",
        Mängd: "tillfredsställande xD"},

        {Namn: "salt",
        Mängd: "så det smakar gott"},

        {Namn: "peppar",
        Mängd: "så det blir småprickigt"},
        
    ],
    steps: [
        "skär upp ingredienserna till medelstora bitar (alla behövs inte, ta vad som finns)",
        "lägg dem i en ugn",
        "häll på en skvätt ojla",
        "krydda till personliga mått",
        "Släng in i ugn på medel värde i 30 min",
    ],
}
console.log(resept1.titel);
console.log("Betyg: " + resept1.rating + "/5");
console.log("Portioner: "+resept1.servings);
console.log("(Rekomenderas för "+resept1.servings+" personer)");
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