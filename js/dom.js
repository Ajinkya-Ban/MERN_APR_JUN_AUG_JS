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

// var element;
// document.querySelector("#header").classList.add("demo","demo2");
// element = document.querySelector("#header").classList;
// console.info("Before remove the class the list is");
// console.log([...element]);

// // i want to remove class from document then,

// console.info("After remove the class the list is");
// document.querySelector("#header").classList.remove("demo2");
// console.log([...element]);

// document.querySelector("#header").classList.add("demo");
// document.querySelector("#header").addEventListener("click",functToggle);

// function functToggle(){
// document.querySelector("#header").classList.toggle("demo2");
// }


// document.querySelector("#header").addEventListener("click",functToggle);

// function functToggle(){
// var ele = document.querySelector("#header").classList.contains("demo2");
// console.log(ele);
// if(ele)
// {
//     document.querySelector("#header").classList.remove("demo2");
// }
// }
// var ele = document.querySelector("#header").classList.item(1);
// console.log(ele);


//DOM Traversal Methods
//--------------------------
//document.querySelector("#main-list").children[0].style.color = "red";
// var ele = document.querySelector("#main-list").nextSibling;
// console.log(ele);

// createElement method

// setTimeout(()=>{
//     var newDiv = document.createElement('div');
//     newDiv.id = "newdiv";
//     // document.body.appendChild(newDiv);
//     document.querySelector(".text").appendChild(newDiv);
//     var newPara = document.createElement("p");
    
//     newPara.style.padding = "10px";
//     var addText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aperiam ea, quibusdam, error saepe architecto, doloremque tempore animi ut tempora placeat fuga. Ea ipsa adipisci fugiat nemo totam perferendis sed et, eius distinctio aliquid nesciunt facere eligendi! Eos sint tenetur, sit facere soluta, exercitationem maiores aut, adipisci sequi suscipit praesentium.");
    
//     newPara.appendChild(addText);
//     document.getElementById("newdiv").appendChild(newPara);
// }, 5000);

    var newDiv = document.createElement('div');
    newDiv.id = "newdiv";
    // document.body.appendChild(newDiv);
    document.querySelector(".text").appendChild(newDiv);
    var newPara = document.createElement("p");
    // newPara.id="myid";
    newPara.style.padding = "10px";
    var addText = document.createTextNode("Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus aperiam ea, quibusdam, error saepe architecto, doloremque tempore animi ut tempora placeat fuga. Ea ipsa adipisci fugiat nemo totam perferendis sed et, eius distinctio aliquid nesciunt facere eligendi! Eos sint tenetur, sit facere soluta, exercitationem maiores aut, adipisci sequi suscipit praesentium.");
    
    newPara.appendChild(addText);
    document.getElementById("newdiv").appendChild(newPara);

    var headingTag = document.createElement("h2");
    headingTag.style.padding = "10px";
    var headingText = document.createTextNode("Our Aim");
    headingTag.appendChild(headingText);
    
    var target = document.getElementById("newdiv");
    target.insertBefore(headingTag,target.childNodes[0]);
    //target.prepend(headingTag);
    // document.getElementById("newdiv").appendChild(headingTag);
  
    // var comnt = document.createComment(newDiv.childNodes[0]);
    // // document.getElementById("newdiv").appendChild(comnt);
    // console.log(comnt);





