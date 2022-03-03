const todoIcon = document.querySelector(".fa-plus");
const todoList = document.querySelector(".todoList");
const todoInput = document.querySelector(".todo-input");

todoIcon.addEventListener("click", clickOnPlus);
todoList.addEventListener("click", removal);

document.addEventListener("DOMContentLoaded", getTodoListOnLoad);

//* Click on plus button
function clickOnPlus(e) {
  e.preventDefault();
  if (todoInput.value === "") {
    alert("Please enter something..");
  } else {
    let todoDiv = document.createElement("div");
    todoList.appendChild(todoDiv);

    let addList = document.createElement("li");
    addList.innerText = todoInput.value;
    todoDiv.appendChild(addList);


    //* Add edit button
    let addEdit = document.createElement("button");
    addEdit.textContent = "Edit";
    addEdit.classList.add("new-btn1");
    todoDiv.appendChild(addEdit);

  
    //* Add remove button
    let addBtn = document.createElement("button");
    addBtn.textContent = "Remove";
    addBtn.classList.add("new-btn2");
    todoDiv.appendChild(addBtn);

    saveToLS(todoInput.value);
    todoInput.value = "";



    //* Remove an item from the list
    function removal(e) {
      if (e.target.classList.contains('new-btn2')){
        div.remove();
        deleteFromLocalStorage(tasks);
            }
    }

    //* Delete from local storage
    function deleteFromLocalStorage(tasks){
      let todos = JSON.parse(localStorage.getItem("todos"));
      let index = todos.indexOf(tasks);
      tasks.splice(index, 1)
      localStorage.setItem('todos', JSON.stringify(tasks))
    }


    //* Edit an item in the list
    const editBtn = document.querySelector(".new-btn1");
    editBtn.addEventListener("click", editText)
  }
}
//* Save to local storage
function saveToLS(value) {
  let todoTasks = JSON.parse(localStorage.getItem('todos'));
  if (todoTasks) {
    todoTasks.push(value);
    localStorage.setItem('todos', JSON.stringify(todoTasks));
  } else {
    let todoTasks = [];
    todoTasks.push(value);
    localStorage.setItem('todos', JSON.stringify(todoTasks));
  }
}

//* Reload the page
function getTodoListOnLoad() {
  if (localStorage.getItem("todos")) {
    let todos = JSON.parse(localStorage.getItem("todos"));
  

  todos.forEach((todo) => {
    let todoDiv = document.createElement("div");
    todoList.appendChild(todoDiv);

    let addList = document.createElement("li")
    addList.innerText = todo
    todoDiv.appendChild(addList)

  });
}
}
