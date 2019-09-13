fetch("http://94.46.140.3:8080/teknikumMenu/api/menu")
    .then(Response => Response.json())
    
    .then(data => {
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
        

        // let users = "";
        // for (let userIndex = 0; userIndex < data.length; ++userIndex){
        //     const user = data[userIndex]
            
        //     let myNewUserElement = document.createElement("li");
        //     myNewUserElement.innerHTML = user.name;
        //     document.getElementById("users").appendChild(myNewUserElement);

        //     users +=user.name + " ";
        //     console.log(users);
        // }
        // document.body.innerHTML = users;
        
    })
    document.getElementById("head");
    let toDag = new Date();
    toDag.getDay();