// first i need to add user data then i create the array
const userData =[
    {username:"user1",password:"pass1"},
    {username:"user2",password:"pass2"},
    {username:"user3",password:"pass3"},
]

let loggedIn = false;
let attempts = 3;


while(attempts > 0) 
{
    const username =prompt("Enter username");
    const password = prompt("Enter password");

    const user = userData.find((uData) =>uData.username===username && uData.password===password);

    if(user)
    {
        loggedIn = true;
        alert("Login successful");
        break;
    }
    else{
        attempts--;
        alert(`Invalid credentials. You have ${attempts} attempts left.`);
    }


}
if(!loggedIn){
    alert("Maximum number of attempts reached. Please try again later.");

}


