const emp = {
    name:"Yogesh Patil",
    dept : "Dev",
    salary:5000,
    hobbies: ["reading book","making food","sleeping"]
}

// convert this object into string format.
//localStorage.setItem("emp",JSON.stringify(emp));



//Retriving the value
const retriveData = localStorage.getItem("emp");

if(retriveData)
{
    let users = JSON.parse(retriveData);
    console.log(users); // it will return json data,

    // print separate data
    console.log(users.name);
    console.log(users.dept);
}
else
{
    alert("This key is not present please check");
}

//remove the data from localstorage
const takeKey = prompt("Enter the key name");
console.log("-------->"+takeKey);
const checkKey = localStorage.key(takeKey);
console.log("check key --->"+checkKey);

if(checkKey === takeKey)
{
    localStorage.removeItem(checkKey);
    //localStorage.clear();
}
else
{
    alert("key is not present please check agian");
}