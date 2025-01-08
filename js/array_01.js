// let arr = ["html","css","js","java"]
// //console.log(arr);

// for(let i = 0; i <= arr.length-1; i++){
//     console.log(arr[i]);
// }

// console.log(typeof arr);


// console.log(arr[0]);

// for(let i = 0; i <= arr.length-1; i++){
//        console.log(arr[i]);
// }

// let lastElement = arr[arr.length-1];
// console.log("The last element is = ",lastElement);
// arr[3] = "Bootstrap";
// console.log(arr);

//let arr = new Array("html","css","js","java");

// let poppedElement = arr.pop();
// let shiftedElement = arr.shift();

// // for(let i = 0 ; i<= arr.length-1; i++)
// // {
// //     console.log(arr[i]);
// // }

// console.log(arr);
// console.log("The popped element is = ",poppedElement);
// console.log("The shifted element is = ",shiftedElement);

// let arr = new Array("html","css","js","java");
// arr.splice(1,0,"pune","mumbai");
// console.log(arr);

// const arr1 = [1,2,3,4];
// const arr2 = [5,6,7,8];

// let newArray = arr1.concat(arr2);

// console.log(newArray);


// const personAge = [23,34,55,44,43,12]

// function checkAdult(age)
// {
//     return age >= 18;
// }

// const checResult = personAge.every(checkAdult)
// console.log(checResult);


// function checkEvenNumber(num){

//     return num % 2 == 0;
// }

// let checkResult = number.every(checkEvenNumber);
// console.log(checkResult);
// const number = [7,4,8,11]
// function isEven(number)
// {
//     return number % 2 == 0;
// }

// let checkEven = number.find(isEven);
// console.log(checkEven);

// const number = [100,2,4,6,7];
// function isEven(number)
// {
//     return number % 2 == 0;
// }

// let checkEven = number.find(isEven)
// console.log(checkEven);


// let firstOdd = number.find((element)=> element % 2 == 1);
// console.log(firstOdd);

// const personData = [

//     {name:"Ajay", city:"Pune", age:19},
//     {name:"Sunil", city:"Nashik", age:15},
//     {name:"Sanjay", city:"Mumbai", age:16}

// ];

// let checkAdultData = personData.find((ele)=> ele.age >= 18)
// console.log(checkAdultData);

// const personAge = [23,34,55,44,43,12];
// function checkEven(num){

//     if( num % 2 == 0)
//         return true
//     else
//     return false
// }

// let checkResult = personAge.filter(checkEven)
// console.log(checkResult);

// const personAge = [23,34,55,44,43,12];
// let checkResult = personAge.filter(

//     (ele)=> ele % 2 == 0
// )

// console.log(checkResult);

// const myarray = [1800, 1500, null,2200, "java",3500];

// let checkPrice = myarray.filter((price)=> price >=2000 && !Number.isNaN(price));
// console.log(checkPrice);

// const lanuages = ["Javascript","python","java","Ruby","html","css"];

// let language = ["Javascript","python","java","Ruby","html","css"];
// let check = language.includes("jav");
// console.log(check);

// function isEven(num)
// {
//     return num % 2 == 0;
// }

// let myArry = [21,5,7,9,6];
// console.log(myArry.some(isEven));

// let myarray = ["javascript","is","easy"];

// function combineWords(accumlator, currentValue)
// {
//     // console.log(accumlator);
//     return accumlator +" "+currentValue;
    
// }

// let finalResult = myarray.reduce(combineWords);
// console.log(finalResult);

// let numbers = [1,2,3,4,5,6,7,8]
// let result = numbers.reduce(
//     (accumlator,currentValue) => accumlator + currentValue
// );

// console.log(result);

// let number = [1,2,3,4,5,6]
// console.log(number.reverse());
// // let number1 = "javascript";
// // function doSquare(num)
// // {
// //     return num * num;
// // }

// // let finalResult = number.map(doSquare);
// // console.log(finalResult);

let city = [1,4,5,2,14,13];
let sortedArray =  city.sort((a,b)=>a-b);
console.log(sortedArray);

function sortNum(a,b)
{
    return b - a
}

city.sort(sortNum);
console.log(city);
