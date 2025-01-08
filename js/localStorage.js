// const emp = {
//     name:"Amit Patil",
//     dept : "Dev",
//     salary:5000,
//     hobbies: ["reading book","making food","sleeping"]
// }

// // convert this object into string format.
// localStorage.setItem("emp",JSON.stringify(emp));

// //Retriving the value
// const retriveData = localStorage.getItem("emp");

// if(retriveData)
// {
//     let users = JSON.parse(retriveData);
//     console.log(users); // it will return json data,

//     // print separate data
//     console.log(users.name);
//     console.log(users.dept);
// }
// else
// {
//     alert("This key is not present please check");
// }

//remove the data from localstorage
// const takeKey = prompt("Enter the key name");
// console.log("-------->"+takeKey);
// const checkKey = localStorage.key(takeKey);
// console.log("check key --->"+checkKey);

// if(checkKey === takeKey)
// {
//     localStorage.removeItem(checkKey);
//     //localStorage.clear();
// }
// else
// {
//     alert("key is not present please check agian");
// }

//how to upload mltiple values in localStorage.

const employee = [
  { id: 1, name: "Suresh", age: 18, city: "Pune" },
  { id: 2, name: "Ramesh", age: 19, city: "Mumbai" },
  { id: 3, name: "Jayesh", age: 20, city: "Nashik" },
  { id: 4, name: "Ganesh", age: 21, city: "Nagpur" },
];

localStorage.setItem("employees", JSON.stringify(employee));

//Retrive the data
function getData() {
    console.clear();
  const retriveData = JSON.parse(localStorage.getItem("employees"));

  if (retriveData) {
    retriveData.forEach((emp) => {
      console.log(
        `Id : ${emp.id} --> Name :${emp.name} --> Age : ${emp.age} --> City : ${emp.city}`
      );
    });
  }
}

getData();

//Adding the new data into existing key

let empNewData = JSON.parse(localStorage.getItem("employees"));
const newEmployee = { id: 5, name: "Rohan", age: 21, city: "Pune" };
empNewData.push(newEmployee);

localStorage.setItem("employees", JSON.stringify(empNewData));
getData();


// updating the data
let empUpdateData = JSON.parse(localStorage.getItem("employees"));

const employeeIndex = empUpdateData.findIndex((emp) => emp.id === 3);
console.log("=======>"+employeeIndex);
if(employeeIndex !== -1)
{
    empUpdateData[employeeIndex].age = 100;
    localStorage.setItem("employees", JSON.stringify(empUpdateData));
}
getData();
