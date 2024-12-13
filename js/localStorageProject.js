const btnSubmit = document.getElementById("btn-submit");
const btnClear = document.getElementById("btn-clear");


function saveData()
{
    const name = document.getElementById("name").value;
    const mob = document.getElementById("mob").value;
    const gender = document.querySelector('input[name=gender]:checked')?.value || "";
    const email = document.getElementById("email").value;
    const city = document.getElementById('city').value;
    const addr = document.getElementById("add").value;
    
   const mydata ={
    name,
    mob,
    gender,
    email,
    city,
    addr
   };


//getdatafromLocal.push(mydata);
const existingData =  JSON.parse(localStorage.getItem("formData")) || [];
existingData.push(mydata);

localStorage.setItem("formData", JSON.stringify(existingData));
alert("Data Save successfully");
clearFields();
displayData();

}


function clearFields(){
    document.getElementById("name").value = "";
    document.getElementById("mob").value = "";
    document.getElementById("male").checked = false;
    document.getElementById("female").checked = false;
    document.getElementById("email").value = "";
    document.getElementById("add").value = "";
    document.getElementById("city").value = "default";
    document.getElementById("name").focus();

}

function onLoadCursor()
{
    document.getElementById("name").focus();
}


function displayData()
{
    const data = JSON.parse(localStorage.getItem("formData")) || [];
    const tableBody = document.getElementById("datatable").querySelector("tbody");

    tableBody.innerHTML = "";
    data.forEach((item,index) => {

        const row = document.createElement("tr");

        row.innerHTML = `

                <td>${item.name}</td>
                <td>${item.mob}</td>
                <td>${item.gender}</td>
                <td>${item.email}</td>
                <td>${item.city}</td>
                <td>${item.addr}</td>
                <td>
                <button onclick="editData(${index})" class="btn btn-primary">Edit</button>
                 <button onclick="deleteData(${index})" class="btn btn-danger mt-3 mt-md-0">Delete</button>
                </td>
        
        `

        tableBody.appendChild(row);

    });


}
window.onload = displayData();

function editData(index)
{
    const data = JSON.parse(localStorage.getItem("formData"));
    const itemToEdit = data[index];
    // console.log(itemToEdit);
    if(itemToEdit)
    {
        document.getElementById("name").value = itemToEdit.name;
        document.getElementById("mob").value = itemToEdit.mob;
        document.querySelector(`input[name="gender"][value="${itemToEdit.gender}"]`).checked=true;
        document.getElementById("email").value = itemToEdit.email;
        document.getElementById("city").value = itemToEdit.city;
        document.getElementById("add").value = itemToEdit.addr;
       
        data.splice(index,1);
        localStorage.setItem("formData", JSON.stringify(data));
        alert("One record updated");
        // displayData();
        // clearFields();

    }


}
btnSubmit.addEventListener('click', saveData);
btnClear.addEventListener('click', clearFields);