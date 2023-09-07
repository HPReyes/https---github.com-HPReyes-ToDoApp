const task = document.querySelectorAll('li')
const inputBox = document.getElementById('input-box')
const listContainer = document.getElementById('list-container')
const saveBtn = document.getElementById('save')
const addBtn = document.getElementById('add')
const deleteBtn = document.getElementById('delete')
let autoSaveMode=document.getElementById('autosavemode')
let msg = document.getElementById('msg')

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

}

listContainer.addEventListener('click', function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked")

    }
    else if (e.target.tagName === 'SPAN'){
        deleteTask(e.target.parentElement) 
    }
}, false)

inputBox.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
      e.preventDefault();
      addTask();
    }
  });

  function deleteData(){
    // localStorage.setItem("data","");
    msg.classList.add('deleteMsg')
    msg.textContent="Tasks deleted successfully"
    setTimeout(() => {
        msg.classList.remove('deleteMsg')
        msg.textContent=""
      }, 3000);
    listContainer.textContent="";
}

function saveData(){
        localStorage.setItem("data",listContainer.innerHTML)
        msg.textContent="Memory saved successfully"
        msg.classList.add('successMsg')
        setTimeout(() => {
            msg.classList.remove('successMsg')
            msg.textContent=""
          }, 3000);

}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
    msg.textContent="Memory loaded successfully"
    msg.classList.add('loadMsg')
    setTimeout(() => {
        msg.classList.remove('loadMsg')
        msg.textContent=""
      }, 3000);
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




