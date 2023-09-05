const task = document.querySelectorAll('li')
const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const saveBtn = document.getElementById('save')
const addBtn = document.getElementById('add')
const deleteBtn = document.getElementById('delete')
let autoSaveMode=document.getElementById('autosavemode')


function addTask(){

    if(inputBox.value===''){
        errorInput()

    }
    else {
        let li = document.createElement("li")
        li.textContent = inputBox.value;
        listContainer.appendChild(li)
        let span=document.createElement("span")
        span.textContent="\u00d7";
        li.appendChild(span)
    }
    inputBox.value="";
    saveData()
}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")
        saveData()
    }
    else if (e.target.tagName === 'SPAN'){
        deleteTask(e.target.parentElement) 
    }
}, false)

function saveData(){
        localStorage.setItem("data",listContainer.innerHTML)

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}

function deleteTask(target){
       target.remove();
    
}

function errorInput(){
    addBtn.classList.toggle('error');
    setTimeout(() => {
        addBtn.classList.remove('error');

    }, 500);
}

function deleteData(){
    localStorage.setItem("data","");
}




