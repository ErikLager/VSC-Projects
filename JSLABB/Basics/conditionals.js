//IF

console.log("START!");
if (undefined == false)
{
    console.log("undefined är falsey");
}
else 
{
    console.log("undefined är truey");
}

if ("" == false)
{
    console.log(" \"\" är falsey");
}
else 
{
    console.log(" \"\" är truey");
}

if (false == false)
{
    console.log("false är falsey");
}
else 
{
    console.log("false är truey");
}

if (0 == false)
{
    console.log("0 är falsey");
}
else 
{
    console.log("0 är truey");
}

if (!null)
{
    console.log("null är falsey");
}
else 
{
    console.log("null är truey");
}


let cnt = 4;
if (cnt < 5){
    console.log("Mindre än 5");
    console.log(cnt);
}

else if (cnt < 10){
    console.log("Mellan 5 och 10");
    console.log(cnt);
}

else {
    console.log("Större än 5");
    console.log(cnt);
}

let value = "bb-8";

switch(value){
    case "R2D2":
        console.log("Beep bop");
        break;
    case "bb-8":
        console.log("VROOOOM");
        break;
    case "C3PO":
        console.log("We're Doomed");
        break;
    default:
        console.log("No Robot :(")
        break;
    
}

let person = "yoda"
let result = (person == "yoda")? "JediGrandMaster" : "annan";
console.log(result);

//ternery operator
let valuee = 15;
console.log (valuee < 10? "litet" : "stort")

//Boolean operators
    // And &&
    let name = "Erik";
    let height = "10";

    if (name == "Erik" && height == "120"){
        console.log("It's me");
    }
    else {
        console.log ("inte jag");
    }


// or  ||
    let isVip = true;
    let hasTicket = false;

    if(isVip|| hasTicket){
        console.log("Välkommen");
    }
// 