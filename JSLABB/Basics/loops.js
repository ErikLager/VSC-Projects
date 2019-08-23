/*for (let i = 2; i <= 100; i++)
{
    console.log(i);   
    i++;
}*/
/*
let cnt =1;
let success = true;
while(success) 
{
    console.log(cnt);
    ++cnt
    if (cnt > 10)
    {
        success = false;
    }
}*/

//let cnt = 10;
//while (cnt) 
//{
//    --cnt;    
//    console.log(cnt);
//}

//Falsey = falskt-ish: false, 0, "",null, undefined

let cnt = 10;
let test = true;
while (test)
{
    --cnt;
    console.log(cnt);
    if(cnt == 0)
        test = "false";
}