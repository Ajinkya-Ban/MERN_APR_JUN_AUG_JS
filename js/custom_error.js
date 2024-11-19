function checkNumber()
{
    const message = document.getElementById('res');
    message.innerHTML = "";

    let x = document.getElementById('num').value;
   
    try
    {
        if(x.trim() === "") throw "Empty string"
        if(isNaN(x)) throw "Not a number, it is string"
       
        if(x < 5) throw "number is out of range"
        if(x > 10) throw "number is too large"


    }
    catch(err){

        message.innerHTML ="Input is "+ err;
        return false;

    }
}

function clear_data()
{
    document.getElementById("num").value = "";
    document.getElementById("res").innerHTML = "";
    document.getElementById("num").focus();
}