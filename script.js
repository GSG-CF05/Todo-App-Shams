const todoIcon = document.querySelector(".fa-plus");
const todoList = document.querySelector(".todoList");
const todoInput = document.querySelector(".todo-input");
const editBtn = document.querySelector(".new-btn1");

todoIcon.addEventListener("click", clickOnPlus);
todoList.addEventListener("click", deleteElement);
// editBtn.addEventListener("click", editText);
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
  }
}

//* Edit an item in the list
//* Save to local storage
function saveToLS(value) {
  let todoTasks = JSON.parse(localStorage.getItem("todos"));
  if (todoTasks) {
    todoTasks.push(value);
    localStorage.setItem("todos", JSON.stringify(todoTasks));
  } else {
    let todoTasks = [];
    todoTasks.push(value);
    localStorage.setItem("todos", JSON.stringify(todoTasks));
  }
}

//* Remove an item from the list
function deleteElement(e) {
  if (e.target.classList.contains("new-btn2")) {
    e.target.parentElement.remove();
    let value = e.target.parentElement.textContent;
    deleteFromLocalStorage(value);
  }
}

//* Delete from local storage
function deleteFromLocalStorage(value) {
  let tasksToDo = JSON.parse(localStorage.getItem("todos"));
  let index = tasksToDo.indexOf(value);
  tasksToDo.splice(index, 1);

  localStorage.setItem("todos", JSON.stringify(tasksToDo));
}

//* Reload the page
function getTodoListOnLoad() {
  if (localStorage.getItem("todos")) {
    let todos = JSON.parse(localStorage.getItem("todos"));

    todos.forEach((todo) => {
      let todoDiv = document.createElement("div");
      todoList.appendChild(todoDiv);

      let addList = document.createElement("li");
      addList.innerText = todo;
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

    });
  }
}
