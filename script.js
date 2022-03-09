const todoIcon = document.querySelector(".fa-plus");
const todoList = document.querySelector(".todoList");
const todoInput = document.querySelector(".todo-input");
const editBtn = document.querySelector(".new-btn1");

todoIcon.addEventListener("click", clickOnPlus);
todoList.addEventListener("click", deleteElement);
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

//* Remove and Edit an item from the list
function deleteElement(e) {
  if (e.target.classList.contains("new-btn2")) {
    e.target.parentElement.remove();
    let value = e.target.parentElement.textContent;
    deleteFromLocalStorage(value);

    //*Edit an element in the list
  } else if (e.target.classList.contains("new-btn1")) {
    const input = document.createElement("input");
    let tdDiv = e.target.parentElement; 
    // console.log(tdDiv);
    tdDiv.appendChild(input)
    // console.log(input); 
    //*************/
    input.type = "text";
    input.setAttribute("class", "input")
    let getTxt = e.target.parentElement.firstElementChild.textContent;
    input.value = getTxt;
    // console.log(getTxt);
    /*************/
    tdDiv.insertBefore(input, tdDiv.children[0]);
    tdDiv.removeChild(tdDiv.children[1]);

    // Change edit to save
    tdDiv.children[1].textContent = "Save";

    // Back to edit btn
  } else if (e.target.parentElement.children[1].textContent === "Save") {
    const input = e.target.parentElement.children[0];
    const addLi = document.createElement("li");
    let createDiv = e.target.parentElement;
    console.log(createDiv); 
    createDiv.appendChild(addLi)
    addLi.textContent = input.value;
    createDiv.insertBefore(addLi, input);
    createDiv.removeChild(input);
    createDiv.children[1].textContent = "Edit";

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
