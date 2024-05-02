function sayHello()
{
    console.log("Hello there");
    
}
function sayGoodBye(name,lastName){
    console.log("Adios! "+name+" "+lastName);
    var color = "blue";
}

function init()
{
    console.log("hello world");
    // if the user pays they can visit
    // {
    sayHello();
    let x = "adrian";
    sayGoodBye(x,"Aguinaga");
    // }
}

window.onload = init;//avoid the init()