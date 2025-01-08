const btnGetData = document.getElementById('btngetData');

btnGetData.addEventListener("click", makeRequest);
const n = document.getElementById("name");
const city = document.getElementById("city");


// function makeRequest()
// {
//     const xhr = new XMLHttpRequest();
//     console.log("Before open method state is", xhr.readyState);
//     xhr.open("Get","data.txt",true);
//     console.log("After open method state is", xhr.readyState);
//     xhr.onreadystatechange = function(){
//         console.log("Before Response get state is", xhr.readyState);
//         if(xhr.readyState === XMLHttpRequest.DONE){
//             console.log("When Response get state is", xhr.readyState);
//             if(xhr.status === 200)
//             {
//                 console.log(xhr);
//                 console.log(xhr.responseText);
//                 console.log(xhr.statusText);
//                 console.log(typeof xhr.responseType);

//             }
//             else
//             {
//                 console.log(`problem occured :${xhr.status}`);
//             }
//         }
//     };
//     xhr.send();
// }

function makeRequest()
{
    const xhr = new XMLHttpRequest();
    
    xhr.open("Get","https://jsonplaceholder.typicode.com/posts",true);
    xhr.responseType="json";
    xhr.onload = function(){
        
        if(xhr.readyState === XMLHttpRequest.DONE){
        
            if(xhr.status === 200)
            {
                // console.log(xhr.response[0]);
                // console.log(xhr.response.id);
                // console.log(xhr.response.title);
                // n.innerText = xhr.response[0].id;
                // city.innerText = xhr.response[1].title;
                for(i = 0; i<=xhr.response.length;i++)
                {
                    const p = document.createElement("p");
                    p.textContent = xhr.response[i].id

                    const p1 = document.createElement("p");
                    p1.textContent = xhr.response[i].title;

                    const p2 = document.createElement("p");
                    p2.textContent = xhr.response[i].body;
                    document.querySelector("#data").append(p,p1,p2);
                }
            }
            else
            {
                console.log(`problem occured :${xhr.status}`);
            }
        }
    };
    xhr.send();
}