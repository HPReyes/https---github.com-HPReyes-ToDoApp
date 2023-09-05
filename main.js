const task = document.querySelectorAll('li')
const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const loadBtn = document.getElementById('load')
const autoSave = document.getElementById('autosave')
let autoSaveMode=document.getElementById('autosavemode')


function addTask(){

    if(inputBox.value===''){
        alert("Debes escribir algo")
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
        e.target.parentElement.remove();
        saveData()
    }
}, false)

function saveData(){
    if(autoSave.checked){
        localStorage.setItem("data",listContainer.innerHTML);
   
    }
    else {

        return;
    }
    
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}




