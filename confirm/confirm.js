let name = prompt("What is your name?");

if(name != null && name !== "")
{
    let isCorrect = confirm("Is your name " + name + "?");
    if(isCorrect)//In the if block the value of the variable is true means 1
    {

        alert("Hello " + name + "!");
    }
    else{
        alert("name is not correct");
    }
}
else{
    alert("No name entered");
}