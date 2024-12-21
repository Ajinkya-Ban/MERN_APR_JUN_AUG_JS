// //basic syntax 

// function prom(checkTask){
//     return new Promise((resolve, reject)=>{
//         console.log("Please wait data is fetching...");
//         setTimeout(() => {
//             if(checkTask == true)
//                 {
//                     resolve("My task is completed");
//                 }
//                 else
//                 {
//                     reject("My task is uncomplete due to server issue.");
//                 }
//                 },5000);
//         });   
// }

// prom(false)
// .then((success)=>{
//     console.log(success);
// }).catch((error)=>{
//     console.log(error);

// }).finally(()=>{
//     console.log("I am always execute");
// })

//Realtime example of fecting the data
//url : https://jsonplaceholder.typicode.com/posts

function fakeFetchData(){
    return new Promise((resolve, reject)=>{
        console.log("Please wait data is in process")
        setTimeout(() => {

            fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
            .then((response)=>{
                if(!response)
                {
                    throw new Error("Server is busy. Please try again sometime");
                }
                return response.json();
            }).then((data)=>resolve(data)).catch((error)=>reject(error));
            
        }, 3000);

    });
}
fakeFetchData().then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

// promise.all() and promise.race()