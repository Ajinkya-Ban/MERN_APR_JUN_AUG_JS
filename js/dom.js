// var contents;
// contents = document.baseURI;
// console.log(contents);

// var contents;
// document.getElementById("header").innerHTML = "<h1>Company Name</h1>";
// var ele = document.getElementById("header").innerHTML;
// console.log(ele);

// var contents
// contents = document.getElementById("header").getAttribute("class");
// console.log(contents);

// var contents
// contents = document.getElementById("header").attributes[1].name;
// console.log(contents);

// var contents;
// document.getElementById("header").setAttribute("style","border:2px solid yellow");
// document.getElementById("header").setAttribute("class","demo");
// contents = document.getElementById("header").attributes[2].value;
// console.log(contents);

// const messages = ["TCS","Wipro","Microsoft","Facebook"];
// const textElement = document.getElementById("changeText");
// let index = 0;
// setInterval(()=>{
//     textElement.textContent = messages[index];
//     index = (index + 1) % messages.length;

// },2000);


// const colors = ["red","blue","orange","black","green","yellow"];
// const divs = ["box1","box2","box3"];
// let indexs = [0,0,0];

// function changeColor(divId, divIndex){

//     const element = document.getElementById(divId);
//     element.style.backgroundColor = colors[indexs[divIndex]];
//     indexs[divIndex] = (indexs[divIndex]+1) % colors.length;
// }

// setInterval(()=>changeColor("box1",0),1000);
// setInterval(()=>changeColor("box2",1),1500);
// setInterval(()=>changeColor("box3",2),2000);

// DOM CSS Styling Methods



//var ele = document.querySelectorAll('.list')[1].innerHTML;
// var ele = document.querySelector('abc');
// console.log(ele);

//1. style method
// var element;
// element = document.querySelector("#header").style.backgroundColor="green";
// console.log(element);

//2. className:

// var element;
// //document.querySelector("#header").className="demo";
// element = document.querySelector("#header").className="demo demo2";
// console.log(element);

//3. classList:

var element;
document.querySelector("#header").classList.add("demo","demo2");
element = document.querySelector("#header").classList;
console.info("Before remove the class the list is");
console.log(element.length);

// i want to remove class from document then,

//
console.info("After remove the class the list is");
document.querySelector("#header").classList.remove("demo2");
console.log(element.length);



