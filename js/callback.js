// function sayHello(name,callback)
// {
//     console.log("Hello, " + name);
//     callback(); // invoking the callback function after the message is printed.

// }

// //callback function

// function showMessage(){

//     console.log("This is a callback function.");
// }


// sayHello("John",showMessage);

function placeOrder(order, callback)
{
    console.log("Customer: I would like to order " + order);
    console.log("Chef is preparing the order");

    setTimeout(()=>{
        console.log(order + " is ready");
        callback(order); // invoking the callback function after the order is ready 

    },8000);
}

function serveFood(order){

    console.log("Waiter : here is your " + order +" enjoy your food");
}

placeOrder("pizaa", serveFood);