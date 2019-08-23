//console.log("Hello World");
//let el = document.getElementById("content");
//el.innerHTML = "May the Force be with you, Master";
//console.log(el.innerHTML);


for (let i=1; i<=5; i++)
{
    let id = "list" + i;
    Text="";
    for (pos=0; pos<i;pos++){
        Text+="📯";
        document.getElementById(id).innerHTML= Text;
        console.log(i);
    }
    
    //i++

    
    
    
}