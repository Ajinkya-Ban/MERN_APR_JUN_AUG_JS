// var x = 5;
// try
// {
//     x = y + 1;
//     console.log(x);
// }
// catch (err)
// {
//     console.log(err);
// }


// let n1 = 50;
// let n2 = 40;
// let addresult = n1 + n2;
// console.log(addresult); // Outputs: 90

// let num = 1;

// try{
//     num.toPrecision(500);
// }
// catch(err){
//     //document.getElementById("res").innerHTML = err.name;
//     console.log(err.name);
//     console.error(err.message);
// }

// console.log("welcome");


// let x = 5;
// try
// {
//     x = y + 1;
// }
// catch (e) 
// {
//     console.log(e.name);
//     console.log(e.message);
// }


// console.log(x); // Outputs: ReferenceError: y is not defined


// let x = 5;
// try
// {
//     if (x == 6)
//     {
//         console.log("x is 6");
//     }
// }   
// catch (err) {
//     console.log(err.name);
// }
// console.log(x);

// let num = 1;
// try {
// num.toUpperCase();
// } catch(err){
//     console.log("Error: Cannot convert a number to a string");
//     console.log(err.name);
// }

// try{
//     decodeURI('https://www.google.co%m/');
// }
// catch(err){

//         console.log(err.name);
//         console.error(err.message);

// }


function add(a,b)
{

    let sum = a + b;
    return sum;
}

console.log(add(1,2));

