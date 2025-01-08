// function getdata()
// {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => res.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
// }
// getdata()


// function getdata()
// {
//     fetch("https://jsonplaceholder.typicode.com/posts")
//     .then(res => {
//         if(!res.ok)
//         {
//             throw new Error(`Http Error !${res.status}`);
//         }
//         else
//         {
//             return res.json();
//         }
//     })
//     .then(data =>console.log(data))
//     .catch(error=>console.log(error))
    
// }
// getdata();


async function getdata()
{
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        if(!response.ok)
        {
            throw new Error(`Http Server error ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        console.log("Hi i am waiting for await.");
        
    } catch (error) {
        console.log(error);
    }
    
}
getdata();


