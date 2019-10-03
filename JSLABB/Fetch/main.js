import Datum from "./date.js";
let me = new Datum("Femta");
me.dag();
async function getMenu(){
    try
    {
    const response = await window.fetch("http://94.46.140.3:8080/teknikumMenu/api/menu")
    const data = await response.json()

    
        console.log(data);
        console.log(data.meals);
        for (let matIndex = 0; matIndex < data.meals.length; ++matIndex){
            const mat = data.meals [matIndex]            
            let myNewMatElement = document.createElement("li");
            myNewMatElement.innerHTML = `<b>${mat.day}</b>` + " " + mat.alt_dish;
            document.getElementById("food").appendChild(myNewMatElement);
        
        }
        for (let matIndex2 = 0; matIndex2 < data.meals.length; ++matIndex2){
            const mat = data.meals [matIndex2]
            let myNewMatElement = document.createElement("li");
            myNewMatElement.innerHTML = `<b>${mat.day}</b>` + " " + mat.dish;
            document.getElementById("alternativ").appendChild(myNewMatElement);
            
            
        }
    

        
    }
    catch(err){
        console.log("Error in main.js: ",err);
    }
    return "Menu Downloaded Successfully"
}

getMenu().then(status => {
    console.log(status);
});

console.log("Efter anrop till getMenu.")