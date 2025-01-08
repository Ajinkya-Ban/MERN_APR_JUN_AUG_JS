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

// function fakeFetchData(){
//     return new Promise((resolve, reject)=>{
//         console.log("Please wait data is in process")
//         setTimeout(() => {

//             fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//             .then((response)=>{
//                 if(!response)
//                 {
//                     throw new Error("Server is busy. Please try again sometime");
//                 }
//                 return response.json();
//             }).then((data)=>resolve(data)).catch((error)=>reject(error));
            
//         }, 3000);

//     });
// }
// fakeFetchData().then((data)=>{
//     console.log(data);
// }).catch((error)=>{
//     console.log(error);
// })

// promise.all() and promise.race()

// check if number is even or odd

// let checkEven = (number)=>{
//    return new Promise((resolve, reject)=>{
//         console.log("Please wait while result display")
//         setTimeout(() => {

//             if(number % 2 == 0){
//                 resolve("The number is even");
//             }
//             else
//             {
//                 reject("The number is odd");
//             }
            
//         }, 2000);

//     });
// }
// let takeInput = prompt()
// checkEven(parseInt(takeInput))
// .then((message)=>{
//     console.log(message);

// }).catch((error)=>{
//     console.log(error);
// })


// Write promise to check if the string contains specific word. 
// let checkString = (string, word) =>{
//     return new Promise((resolve, reject)=>{
//         console.log("Please make a patience result will soon display...😊")
//         setTimeout(() => {
//             if(string.includes(word)){
//                 resolve(`The string contains the word ${word}`);
//             }
//             else
//             {
//                 reject(`The string not contains the word ${word}`);
//             }
//         }, 2000);

//     });
// }

// checkString("My promise is rejected by javascript","one")
//     .then((value) => {
//         console.log(value);
//     }).catch((error) => {
//         console.log(error);
        
//     })

// Write a promise to create small calculator with switch case

// let calculator = (num1, num2, operation)=>{

//     return new Promise((resolve, reject)=>{
//         console.log("Please wait checking the result, It will take some time");
//         setTimeout(() => {

//             switch(operation)
//             {   
//                 case "add":
//                     resolve(`Result :${num1 + num2}`);
//                     break;
//                 case "sub":
//                     resolve(`Result:${num1-num2}`);
//                     break;
//                 default:
//                     reject("Invalid operation");
//             }
            
//         }, 3000);

//     })
// }

// let n1 = parseInt (prompt("Enter number1"));
// let n2 =parseInt(prompt("Enter number2"));
// let command = prompt("Enter command like add, sub");
// calculator(n1,n2,command)
//     .then((value) => {
//         console.log(value)
//     }).catch((error) => {
//         console.log(error);
        
//     })


// Write promise to check file is download
// let download = (fileName) =>{

//     return new Promise((resolve , reject)=>{
//         console.log("Please wait file is downloading....")

//         setTimeout(() => {
//             resolve(`${fileName} download successfully`);
//         },4000);
//     })
// }
// download("text1.txt").then((message)=>{console.log(message)}).catch((error)=>{console.log(error)});

// promise chaining

// const p1 = new Promise((resolve, reject)=>{
//     console.log("Your order is in process")
//    setTimeout(() => {
//     resolve("Dough is prepared");
//    }, 1000);
// });

// const p2 =  new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("onion and garlic is added ...🧄🧅");
//        }, 3000);
// });

// const p3 =  new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("pizza is in oven");
//        }, 5000);
// });

// const p4 =  new Promise((resolve,reject)=>{
//     setTimeout(() => {
//         resolve("Pizza is ready...🍕");
//        }, 8000);
// });

// p1.then((result)=>{
//     console.log(result);
//     return p2;
// })
// p2.then((result) => {
//     console.log(result);
//     return p3;
// })

// p3.then((result) => {
//     console.log(result);
//     return p4;
// })

// p4.then((result) => {
//     console.log(result);
    
// })
// .catch((error)=>
// {
//     console.log("Oven is not working",error);
// })

//promise.all Example-01
// ----------------------------------------------------------

// const promise1 = Promise.resolve("Ramesh We will meet at 10am");
// const promise2 = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("Rahul we will go for dinner at 8pm");
//     }, 1000);
// });

// const promise3 = new Promise((_, reject)=>{
//     setTimeout(() => {
//         reject("Shreyash we will go for club at 10pm");
//     }, 3000);
// });

// Promise.all([promise1,promise2,promise3])
//     .then((result)=>{
//         console.log(result);

//     }).catch((error)=>{
//         console.log(error);
//     }).finally(()=>{
//         console.log("Don't  give promises to anyone.")
//     })

/* promise.all Example-02 
---------------------------------------------
*/

// const fetchData = (url)=>{
//     return new Promise((resolve,reject)=>{

//         setTimeout(() => {
//             if(Math.random() > 0.1){
//                 resolve(`Data From : ${url}`);
//             } // it will generate 90% success rate. 
//             else{
//                 reject(`Error in fetching data : ${url}`);
//             }
            
//         }, Math.floor(Math.random()*2000));

//     });

// }
// //URLS for fetching the data
// const post = "https://jsonplaceholder.typicode.com/posts";
// const comments = "https://jsonplaceholder.typicode.com/comments";
// const album = "https://jsonplaceholder.typicode.com/albums";

// Promise.all([
//     fetchData(post),
//     fetchData(comments),
//     fetchData(album)
// ])
// .then((result)=>{
//     console.log("All api's data fetched successfully");
//     console.log("Post data :",result[0]);
//     console.log("comments data :", result[1]);
//     console.log("album data :",result[2]);
// }).catch((error)=>{
//     console.log("error in fetching data :",error);
// });


/*
    promise.allSettled example
*/
// const promise1 = Promise.resolve(10);
// const promise2 = new Promise((_,reject) => setTimeout(() => reject(20), 1000));
// const promise3 = new Promise((resolve) => setTimeout(() => resolve(30), 2000));

// Promise.allSettled([promise1, promise2, promise3])
//     .then(results => {
//         console.log(results); // Output: [10, 20, 30]
//     })
//     .catch(error => {
//         console.error(error); // Will not run here since all promises resolve.
//     });


// const fetchdata = new Promise((resolve)=>{
//     setTimeout(() => {
//         resolve("data fatched");
//     }, 2000);

// });

// const timeout = new Promise((_,reject)=>{
//     setTimeout(() => {
//         reject("Request timeout");
//     }, 1000);
// });

// Promise.race([fetchdata, timeout])
// .then((result)=>{
//     console.log(result);
// }).catch((error)=>{
//     console.log(error);
// })

// const fetchdata = (url)=>{
//     return fetch(url).then((response)=>{
//         if(!response.ok){
//             throw new Error(`HTTP Error ! ${response.status}`);
//         }
//         else{
//             return response.json();
//         }
//     });
// }

// const timeout = (duration)=>{

//     return new Promise((_,reject)=>{

//         setTimeout(() => {
//             reject(new Error("Request timeout"));
//         }, duration);

//     });

// }

// const checkFetchTimeout = (url, tout)=>{
//     return Promise.race([fetchdata(url),timeout(tout)]);
// }
// checkFetchTimeout("https://jsonplaceholder.typicode.com/posts",200).then((result)=>{
//     console.log(result);

// }).catch((error)=>{
//     console.log(error);
// })


