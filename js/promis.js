let checkEvn = new Promise((resolve,reject)=>{

    let number = 7;
    if(number % 2 == 0)
    {
        resolve("The number is evene");
    }
    else
    {
        reject("The number is odd");
    }

});

checkEvn
    .then((reslut)=>{
        console.log(reslut);

    })
    .catch((error)=>{
        console.log(error);
    })
