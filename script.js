var selectedRow = null
var errMs = document.querySelector("div.errorMs")
var sucMs = document.querySelector("div.successMs")
var buttons = document.querySelector("input#btn")
var inp1 = document.querySelector("input#name").value.trim()
var inp2 = document.querySelector("input#profession").value.trim()
var inp3 = document.querySelector("input#age").value.trim()

buttons.addEventListener('click', () => {
    if(inp1.length==0 || inp2.length==0 || inp3.length==0){
        errMs.classList.remove('hide')
        sucMs.classList.add('hide')
    }
})

function onFormSubmit(e){
   event.preventDefault();
    let formDataAdd = readData();

    if (selectedRow === null) {
        insertData(formDataAdd);
        sucMs.classList.remove('hide')
        errMs.classList.add('hide')

    } else {
       
    }
    refreshPage();
}

function readData(){
    var formData = {};
    
    formData["name"] = document.getElementById("name").value;
    formData["profession"] = document.getElementById("profession").value;
    formData["age"] = document.getElementById("age").value;
    return formData;
        
}

var ct = document.getElementById('tableData').getElementsByTagName('tbody').length;
function insertData(data){
    var table = document.getElementById("tableData").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    var cell0 = newRow.insertCell(0);
        cell0.innerHTML.innerText = data.ct;
    var cell1 = newRow.insertCell(1);
        cell1.innerHTML = data.name;
    var cell2 = newRow.insertCell(2);
        cell2.innerHTML = data.profession;
    var cell3 = newRow.insertCell(3);
        cell3.innerHTML = data.age;
    var cell4 = newRow.insertCell(4);
        cell4.innerHTML = `<button onclick='deleteData(this)'>Delete</button>`;
}

function deleteData(td){
    if(confirm("Are you sure want to delete this data?")){
        row = td.parentElement.parentElement;
        document.getElementById("tableData").deleteRow(row.rowIndex);
        refreshPage();
    }
   else{
    
   }
}

function refreshPage(){
    document.getElementById("name").value = '';
    document.getElementById("profession").value = '';
    document.getElementById("age").value = '';
}
