fetch("https://jsonplaceholder.typicode.com/users")
    .then(Response => Response.json())
    
    .then(data => {
        let users = "";
        for (let userIndex = 0; userIndex < data.length; ++userIndex){
            const user = data[userIndex]
            
            let myNewUserElement = document.createElement("li");
            myNewUserElement.innerHTML = user.name;
            document.getElementById("users").appendChild(myNewUserElement);

            users +=user.name + " ";
            console.log(users);
        }
        // document.body.innerHTML = users;
        
    })
